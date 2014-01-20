/* =================================== RENDERING ========================================================== */ 

// Render one task
function renderTask(task) {
    var taskStr  =  '<div class="task" data-tid="' + task.id + '">';
        taskStr +=  '<h4>' + task.title + '</h4>';
        taskStr +=  '<a href="#" class="deleteTask" data-tid="' + task.id +'">X</a>';
        taskStr +=  '<p>' + task.description + '</p>';
        taskStr +=  '</div>';
        return taskStr;
}

// Render all tasks
function renderAllTasks () {

    // All Varibles
    var tasksDataLength,
        allTasks,
        i;

        // Assignment
        allTasks = ''; // Emptying it
        tasksDataLength = tasksData.length;

    for ( i = 0; i < tasksDataLength; i++ ) {
        allTasks += renderTask(tasksData[i]);
    };
    return allTasks;
}

/* ========================================== CREATING ========================================================== */

function createTask (formData) {

    var taskObj = {
        title: formData.title,
        description: formData.description
    }

    XHRequest ('create_task.json', 'POST', taskObj, function(result) {
        $('#container').append(renderTask(result));
        document.querySelector('#taskForm').reset();
    });
}


/* ========================================== DELETING ========================================================== */

function deleteTask (taskId) {

    var url = '/delete_task?id=' + taskId;

    XHRequest (url, 'DELETE', null, function(result) {
        if ( result.status === 'deleted') {
            _.each( $('.task'), function(node){
                if ( $(node).attr('data-tid') === taskId.toString() ) {
                    $(node).remove();
                }
            });
        }
    });
}
/* =================================== SERVER REQUEST ========================================================== */

function XHRequest (url, method, data, callback) {
    $.ajax({
        url: url,
        type: method,
        data: data
    }).done(function( data ) {
        console.log('Request Successful' + data);
        if ( callback && typeof callback === 'function' ) {
            callback(data);
        }
    }).fail(function( data ) {
        console.log('Request Failed' + data);
    });
}
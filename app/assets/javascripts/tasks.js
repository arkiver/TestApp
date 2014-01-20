/* =================================== RENDERING ========================================================== */ 

// Render one task
function renderTask(task) {
    var taskStr  =  '<div class="task">';
        taskStr +=  '<h4>' + task.title + '</h4>';
        taskStr +=  '<a href="#" class="deleteTask" data-tid="' + task.id +'">Delete Task</a>';
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

/* =================================== EDITING/UPDATING ========================================================== */

function deleteTask (taskId) {
    // accept ID
    // take the values/data of the form
    // create an obj
    // push it in an array
    console.log('id ', taskId);

    var url = '/delete_task?id=' + taskId;
    XHRequest (url, 'DELETE');
}
/* =================================== SERVER REQUEST ========================================================== */

function XHRequest (url, method, data) {
    $.ajax({
        url: url,
        type: method,
        data: data
    }).done(function( data ) {
        console.log('Request Successful' + data);
    }).fail(function( data ) {
        console.log('Request Failed' + data);
    });
}
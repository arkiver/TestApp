/* =================================== RENDERING ========================================================== */ 

// Render one task
function renderTask(task) {
    var taskStr  =  '<div class="task">';
        taskStr +=  '<h4>' + task.title + '</h4>';
        taskStr +=  '<a href="#" class="editTask" data-tid="' + task.id +'">Edit Task</a>';
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

function editTask (taskId) {
    // accept ID
    // take the values of the form
    // create an obj
    // push it in an array

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
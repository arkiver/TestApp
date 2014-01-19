/* =================================== RENDERING ========================================================== */ 

// Render one task
function renderTask(task) {
    var taskStr  =  '<div class="task">';
        taskStr +=  '<h4>' + task.title + '</h4>';
        taskStr +=  '<p>' + task.title + '</p>';
        taskStr +=  '</div>';
        // $('body').prepend($(taskStr));
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
const task = [];
function addTask(tasktext){
    task.push({taskName:tasktext,completed:false});
}
function removeTask(index){
    return task.splice(index,1)
}

function markedtask(index)
{
  task[index].completed =true;
}

function sortTask(){
    return task.sort((a,b)=>a.nameOfTask.localeCompare(b.nameOfTask))
}

function IncompleteTask(){
    const result =  task.filter((item)=>item.completed === false)
    return result.length
}
addTask("javascript")
addTask("php")
addTask("database")
addTask("softwareDevelpment")
addTask("mobileApp")
addTask("c++")
markedtask(1);
console.log(task);
sortTask();
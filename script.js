var mark = document.getElementById("mark");
var deleteButton = document.getElementById("delete")
var add = document.querySelector("button")
var child2 = document.querySelector(".child2")


var tasks = [];

function addTask() {
    var taskText = document.getElementById('new-task').value;
    tasks.push(taskText);
    
   
    var newChild2 = document.querySelector(".child2");
    newChild2.textContent = taskText;
    
    
    
    document.getElementById('new-task').value = '';
}

function renderTasks() {
    var list = document.getElementById('todo-list');
    list.innerHTML = '';
    for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement('li');
        li.textContent = tasks[i];
        list.appendChild(li);
    }
}

document.querySelector('.child1 button').addEventListener('click', function() {
    addTask();
    renderTasks();
});

document.getElementById('delete').addEventListener('click', function() {
   
    tasks.pop();
    
    
    var child2Elements = document.querySelectorAll('.child2');
    if (child2Elements.length > 0) {
        var lastChild2 = child2Elements[child2Elements.length - 1];
        lastChild2.remove();
    }
});

document.getElementById('mark').addEventListener('click', function() {
    var child2 = document.querySelector('.child2');
    child2.style.backgroundColor = "green";
});
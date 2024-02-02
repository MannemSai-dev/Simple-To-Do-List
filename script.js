document.addEventListener('DOMContentLoaded', function() {
  var mark = document.getElementById("mark");
  var add = document.querySelector("#add");
  var child2 = document.querySelector(".child2");
  var main = document.querySelector(".main");

  var task = [];

  function addTask() {
    var tasksInput = document.getElementById("new-task");
    var tasks = tasksInput.value;
    if (tasks.trim() === "") {
      window.alert("List is empty. Add tasks.");
      return;
    }
    task.push(tasks);
    var clonedDiv = child2.cloneNode(true);
    clonedDiv.style.display = "flex"; // Set display to flex
    main.appendChild(clonedDiv);
    var deleteButton = clonedDiv.querySelector("#delete");
    deleteButton.addEventListener('click', function() {
        
        main.removeChild(clonedDiv);
    });
    renderTask();
    tasksInput.value = ""; // Clear the input field
  }

  function renderTask() {
    var list = main.querySelector("#todo-list");
    list.innerHTML = "";
    for (var i = 0; i < task.length; i++) {
      var li = document.createElement('li');
      li.textContent = task[i];
      list.appendChild(li);
    }
  }

  function markColour() {
    clonedDiv.style.backgroundColor = "green";
  }

  add.addEventListener('click', function() {
    addTask();
    task.pop()
  });

  mark.addEventListener('click', function() {
    markColour();
  });
});

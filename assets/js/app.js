var task = document.getElementById("task-input");
var ul = document.getElementById("ul");
var message = document.getElementById("text");

function addItem(){
    if(task.value === "" || task.value === null){
        alert("Please Enter Yourr Task!")
    }
    else{
        var li = document.createElement("li");
        var text = document.createTextNode(task.value);
        li.setAttribute("class" , "task");
        li.appendChild(text);

        var editBtn = document.createElement("button");
        var editText = document.createTextNode("Edit Task");
        editBtn.appendChild(editText);
        editBtn.setAttribute("class" , "btn");
        editBtn.setAttribute("onclick", "editTask(this)");
        li.appendChild(editBtn);

        var delBtn = document.createElement("button");
        var delText = document.createTextNode("Delete Task");
        delBtn .appendChild(delText);
        delBtn.setAttribute("class" , "btn");
        delBtn.setAttribute("onclick" , "delTask(this)");
        li.appendChild(delBtn);

        ul.appendChild(li);
        task.value = "" ;

        message.style.display = "none";
    }
}

function editTask(editBtn) {
    var oldVal = editBtn.parentNode.firstChild.nodeValue;
    var newVal = prompt("Edit Task", oldVal);
    editBtn.parentNode.firstChild.nodeValue = newVal;
}

function delTask (delBtn){
    delBtn.parentNode.remove()
}

function deleteAll() {
    ul.innerHTML = "";

    message.style.display = "block";
}
  
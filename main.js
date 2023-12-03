let theinput = document.querySelector(".add-task input");
let thebutton = document.querySelector(".add-task #plus");
let taskscontainer = document.querySelector(".task-content");
let taskscount = document.querySelector(".task-count span");
let taskcompleted = document.querySelector(".task-completed span");

// focus on input mod
window.onload = function () {
  theinput.focus();
};

//adding the task
thebutton.onclick = function () {
  //if th button was empty
  if (theinput.value == "") {
    console.log("its empty");
  } else {
    let notaskmsg = document.querySelector(".task-content .no-task");
    //check if span with no massge is Exist
    if (document.body.contains(document.querySelector(".no-task"))) {
      // remove no taskmsg
      notaskmsg.remove();
    }

    // the value of the input
    let inputvalue = theinput.value;

    //creat Main span Elemnt
    let mainspan = document.createElement("span");

    //create the text to Main span
    let text = document.createTextNode(inputvalue);

    //Add text to Main span

    mainspan.appendChild(text);

    //add class to the Main span
    mainspan.classList.add("task-box");

    //creat delet button
    let deleteElement = document.createElement("span");

    //creat delete button text
    let delettext = document.createTextNode("delet");

    //Add text to delet button
    deleteElement.appendChild(delettext);

    //add the delete class to the button
    deleteElement.classList.add("delete");

    //add the delet button to the Main Span
    mainspan.appendChild(deleteElement);

    //Add The Task To The Container
    taskscontainer.appendChild(mainspan);

    //clear the input
    theinput.value = "";

    //focus in filed
    theinput.focus();

    // change the taks number
    taskslength();
  }
};
// delet elment
document.addEventListener("click", function controal(e) {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();
    creatnomassge();
    taskslength();
    if (taskscontainer.childElementCount == 0) {
      taskslength();
    }
  }

  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
    taskslength();
  }
});

function creatnomassge() {
  // creat the span msg
  let msgspan = document.createElement("span");

  //creat the span msg
  let notaskmassge = document.createTextNode("no task for now");

  //add he text to the main span

  msgspan.appendChild(notaskmassge);

  //add the class
  msgspan.className = "no-task";

  // add to the container
  taskscontainer.appendChild(msgspan);
}

function taskslength() {
  taskscount.innerHTML = document.querySelectorAll(
    ".task-content .task-box"
  ).length;

  taskcompleted.innerHTML = document.querySelectorAll(
    ".task-content .finished"
  ).length;
}

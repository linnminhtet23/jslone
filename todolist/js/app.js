//UI
const form = document.getElementById("task-form");
const taskinput = document.getElementById("task");
const filter = document.getElementById("filter");
const tasklist = document.querySelector(".collection");
const clearbtn = document.querySelector(".clear-tasks");

function addtask(e) {
  // console.log('hay');

  if (taskinput.value === "") {
    window.alert("Add a task");
    return;
  }

  // create li element
  const li = document.createElement("li");

  //add class
  // li.classList.add('collection-item')
  li.className = "collection-item";

  //create text node append to li
  li.appendChild(document.createTextNode(taskinput.value));

  /// chitsone mee pyat tae nay yr
  //create link
  const link = document.createElement("a");

  //add class
  link.className = "delete-item secondary-content";

  //add icon
  link.innerHTML = `<li class="far fa-trash-alt"></li>`;

  // append link to li
  li.appendChild(link);

  // append li to ul
  tasklist.appendChild(li);

  storetaskinlocalstorage(taskinput.value);
  // console.log(link);
  // console.log(li)
  e.preventDefault();
}

//Remove Task
function removetask(e) {
  // console.log('hay');
  // console.log(e.target)
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure")) {
      e.target.parentElement.parentElement.remove();
    }
  }
  //Remove task from local storage
  removetaskfromlocalstorage(e.target.parentElement.parentElement)
}

// Clear Tasks
function cleartask() {
  // Method1
  // tasklist.innerHTML='';

  // Method2
  // console.log(tasklist.childElementCount);
  let x = 0;
  while (x < tasklist.childElementCount) {
    tasklist.removeChild(tasklist.firstChild); //remove the child one after another with looping
  }

  // Method 3
  while (tasklist.firstChild) {
    tasklist.removeChild(tasklist.firstChild);
  }
  cleartaskfromlocalstorage();
}

function storetaskinlocalstorage(task) {
  // console.log(task);
  function gettask() {
    //console.log('hay');
    let tasks;

    if (localStorage.getItem("tasks") == null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem("tasks"));
    }
  }

  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks")); //change json format and get from local storage
  }

  tasks.push(task);
  console.log(tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks)); // change to string and add into local storage
}

function gettask(){
	//console.log('hay');
	let tasks;

	if(localStorage.getItem('tasks')==null){
		tasks = [];
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach((task)=>{
		const li = document.createElement('li');
		li.className = 'collection-item';
		li.appendChild(document.createTextNode(task));
		//console.log(li);

		const link = document.createElement('a');
		link.className = 'delete-item secondary-content';
		link.innerHTML = `<i class = 'far fa-trash-alt'></i>`;
		li.appendChild(link);

		tasklist.appendChild(li);

	})
}

function removetaskfromlocalstorage(taskitem){
    // console.log('hay')
    // console.log(taskitem);
    // console.log(taskitem.textContent);

    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach((task, index)=>{
        // console.log(task)
        if(taskitem.textContent === task){
                    // where we want to start (index), where we want to end 
            tasks.splice(index,1);
        }

    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function cleartaskfromlocalstorage(){
    localStorage.clear();
}
//Filter Tasks
function filtertasks(e){
    // console.log('hay');
    // console.log(e.target);
    const inputfilter= e.target.value.toLowerCase();
    // console.log(inputfilter);

    const tasks = document.querySelectorAll('.collection-item');
    tasks.forEach((task)=>{
        // console.log()
        const item = task.firstChild.textContent.toLowerCase();

        if(item.indexOf(inputfilter)!==-1){
            task.style.display = 'block';
        }else{
            task.style.display= "none";
        }
    })
}

//Event Listener
//Add Task
form.addEventListener("submit", addtask);

//Remove Task
tasklist.addEventListener("click", removetask);

//Clear Tasks
clearbtn.addEventListener("click", cleartask);

//DOM load Event
document.addEventListener("DOMContentLoaded",gettask);

//Filter task event
filter.addEventListener('keyup', filtertasks);
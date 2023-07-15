const push = document.querySelector('#push'),
newTaskInput = document.querySelector('#newtask input'),
task = document.querySelector('#tasks');

push.onclick = function(){
    if(newTaskInput.value.length == 0){
        alert("Ma'lumot kiritilmagan!!!!")
    }

    else{
        task.innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${newTaskInput.value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;
        newTaskInput.value = "";
        let currentTasks = document.querySelectorAll(".delete");
        for(let i=0; i < currentTasks.length; i++){
            currentTasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
// get the tasks-content  
let myTaskscontainer = document.querySelector('.tasks-content')
// get the inbut box 
let Inbutbox = document.querySelector('.add-task .input-task');
// get the plus button
let plusButton = document.querySelector('.add-task .plus');
// get the box of no task
let noTaskBox = document.querySelector('.no-tasks');

// get the number of tasks
let tasksNumber = document.querySelector('.number span');
// get the number of completed tasks
let tasksCompleted = document.querySelector('.completed span');

// focus on the input box on load 
window.onload = function(){
    Inbutbox.focus()
}


plusButton.onclick = function(){
    if ( Inbutbox.value === '' ) {
        alert('oops! , you shoud enter value ');
    }else{

        // remove no task box 
        noTaskBox.remove();

        //creat task Box
        let taskBox = document.createElement('span')
        // assign a class "task-box" for the task box
        taskBox.classList.add('task-box');

        // [1] creat the check box 
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        // assign class 'checkbox' for the ckeck box 
        checkbox.classList= 'checkbox'

        // [2] creat span for task text 
        let tasktextspan = document.createElement('span')
        // assing class task for the span 
        tasktextspan.classList.add('task')
        // creat textnode for the task  
        let taskText = document.createTextNode( Inbutbox.value);
        // add the textnode for the span 
        tasktextspan.appendChild(taskText)

        // [3] creat delet span
        let deletspan = document.createElement('span');
        // assign class delet for the delet span
        deletspan.classList.add('delet');

        // textnode for delet button 
        let deletText = document.createTextNode('delet');
        // add delet text to the buttonspan
        deletspan.appendChild(deletText)
        
        // add [1],[2],[3] in the taskBox
        taskBox.appendChild(checkbox);
        taskBox.appendChild(tasktextspan);
        taskBox.appendChild(deletspan);
        
        // add taskBox to the container in html
        myTaskscontainer.appendChild(taskBox)
        
        // remove the old task from the input box 
        Inbutbox.value = '';
        // add focus for the next task
        Inbutbox.focus();
        
        // calculate the total number of tasks
        tasksNumber.innerHTML= myTaskscontainer.childElementCount
        
    }
    
}

// delet the task when you hit the delet button 
document.addEventListener('click',function(e){
    
    if(e.target.className == 'delet'){
        e.target.parentNode.remove()
        // calculate the total number of tasks
        tasksNumber.innerHTML= myTaskscontainer.childElementCount
        //calculate the number of the completed taks 
        tasksCompleted.innerHTML= document.querySelectorAll('.finshed').length
        
        // check if the deleted element is the last or not 
        if (myTaskscontainer.childElementCount == 0){
            myTaskscontainer.appendChild(noTaskBox)
        }
        
    }
    // give class finshed to the checked task
    if (e.target.classList.contains('checkbox')){
        e.target.classList.toggle('finshed')
        //calculate the number of the completed taks 
        tasksCompleted.innerHTML= document.querySelectorAll('.finshed').length
    }
    
})






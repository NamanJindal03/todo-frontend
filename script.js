
let taskArr=[];
function addAllTask(){
    var div = document.createDocumentFragment('div');
    for(let task of taskArr){
        var tempDiv = document.createElement('div');
        //console.log(task[i])
        // var i = document.createElement('i');
        // i.classList.add('fa' ,'fa-trash');
        
        tempDiv.innerHTML = task;
        //tempDiv.appendChild(i);
        div.appendChild(tempDiv);
    }
    document.querySelector('.display-task').innerHTML ="";
    document.querySelector('.display-task').appendChild(div);
}
document.getElementById("add-btn").addEventListener("click", function(event){
    event.preventDefault();
    let task = document.getElementById("description").value;
    taskArr.push(task);
    document.getElementById("description").value="";
    addAllTask();
});
// console.log(document.querySelector('.display-task div'));
// document.querySelector('.display-task div').addEventListener("click", function(event){
//     event.preventDefault();
//     alert(e.target);
// })


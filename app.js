// function addtodo(){
//     var todoItem = document.getElementById('todoapp');
//     var li = document.createElement('li');
//     var liText = document.createTextNode(todoItem.value);
//     li.appendChild(liText);

//     var delBtn = document.createElement("button");
//     var delTxt = document.createTextNode("DELETE");
//     delBtn.appendChild(delTxt);
//     li.appendChild(delBtn).className="alert-info"
//     delBtn.setAttribute("onclick" , "delItem(this)")

//     var editBtn = document.createElement("button");
//     var editTxt = document.createTextNode("Edit");
//     editBtn.appendChild(editTxt);
//     editBtn.setAttribute("onclick", "editBtn(this)")

//     list.appendChild(li);
//     li.appendChild(editBtn).className="alert-info";
//     todoItem.value = "";
//     console.log(li);
// }
document.getElementById("todoapp").focus()
function addtodo(){
    var todoItem = document.getElementById('todoapp');
    if( todoItem.value ==""){
    alert('Please fill input field')}
    else{
        var li = document.createElement('li');
        var liText = document.createTextNode(todoItem.value);
        
        var delBtn = document.createElement("button");
        var delTxt = document.createTextNode("DELETE")
        delBtn.appendChild(delTxt);
        li.appendChild(delBtn).className="alert-info"
        delBtn.setAttribute("onclick" , "delItem(this)")
        
        var editBtn = document.createElement("button");
        var editTxt = document.createTextNode("Edit");
        editBtn.appendChild(editTxt);
        editBtn.setAttribute("onclick", "editBtn(this)")
        
        list.appendChild(li);
        li.appendChild(editBtn).className="alert-info";
        todoItem.value = "";
        // console.log(li);
        
        li.appendChild(liText);
        document.getElementById("todoapp").focus()
    }
 
    
}


var list = document.getElementById('list');
function delItem(e){
    e.parentNode.remove();
    
}
function delAll(){
    list.innerHTML=""
}
function editBtn(a){
    var val= prompt("Enter edit value" , a.parentNode.firstChild.nodeValue);
    a.parentNode.firstChild.nodeValue = val;
}
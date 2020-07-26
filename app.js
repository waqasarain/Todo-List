
var list = document.getElementById("list")


function addTodo(){

var todo = document.getElementById('todo-Item');


//create li tag with text Node
if (todo.value !==""){
var li = document.createElement('li')
var liText = document.createTextNode(todo.value)
li.appendChild(liText)


// create delete button text Node 
var buttonTrash = document.createElement("button")
var trashbtn = document.createElement("i")
var textDelete = document.createTextNode("Delete")
buttonTrash.appendChild(textDelete)
buttonTrash.setAttribute("class","trash")
trashbtn.setAttribute("class", "fas fa-trash") 
buttonTrash.setAttribute("onclick","deleteitem(this)")
buttonTrash.appendChild(trashbtn);



 // var buttonEdit = document.createElement("button")
 // var editBtn =document.createElement("i")
 // editBtn.setAttribute("class","far fa-edit")
 // buttonTrash.setAttribute("onclick","edit(this)")
 // buttonEdit.appendChild(editBtn)


var editbtn = document.createElement('button');

var reEdit = document.createElement('i');
var textEdit = document.createTextNode("Edit")
editbtn.appendChild(textEdit)
editbtn.setAttribute("class","edit")
reEdit.setAttribute('class', 'far fa-edit');
reEdit.setAttribute('aria-hidden', 'true');
editbtn.appendChild(reEdit);
editbtn.setAttribute('onclick', 'editItem(this);');


  li.appendChild(editbtn);       
li.appendChild(buttonTrash)


// li.appendChild(buttonEdit)


list.appendChild(li)

todo.value = ""
// console.log(li)
}
}

function deleteitem(e){
	e.parentNode.remove()
}



function editItem(e){
	var val =e.parentNode.firstChild.nodeValue
	var editvalue = prompt("Enter New value",val)
	e.parentNode.firstChild.nodeValue=editvalue
}

function refresh(){
	list.innerHTML = ""
}
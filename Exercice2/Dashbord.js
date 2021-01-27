    
function add() {
    var name=document.getElementById('name')
    var description=document.getElementById('description')
    var storage=JSON.parse(localStorage.getItem('Elements')) || []
    storage.push(
     {
         name:name.value,
         description:description.value
     }
    )
localStorage.setItem('Elements',JSON.stringify(storage))
}

function storageonload(){
 
    var storage=JSON.parse(localStorage.getItem('Elements')) || []
    var rows=''
    storage.forEach((x,i) =>  {   
       rows+= `
       <tr>
       <th scope="row">`+(i+1) + `</th>
       <td> ${x.name} </td>
       <td id ="to-modal">`+ x.description + ` </td>
       <td> 
       
      
<button type="button" onclick="showData(${i})" class="btn btn-warning testing111" data-bs-toggle="modal" data-bs-target="#exampleModal" >
  Update
</button>
<button type="button" class="btn btn-danger" onclick="supprimer(`+i+`)">Delete</button>
</td>
`

});


document.getElementById('elements').innerHTML = rows
}

function supprimer(i){
    var storage=JSON.parse(localStorage.getItem('Elements')) || []
   storage.splice(i,1)
   localStorage.setItem('Elements',JSON.stringify(storage))
   storageonload()
}

// function edit(){
//   var table = document.getElementById("table");
//  if (table) {
//   for (var i = 0; i < table.rows.length; i++) {
//     table.rows[i].onclick = function() {
//       tableText(this);
//    };
//   }
// }

// function tableText(tableRow) {
//   let name = document.getElementById("name")
//   let description = document.getElementById("description")
//   document.getElementById("nodes").id=tableRow.childNodes[1].innerHTML
//   name.value=tableRow.childNodes[3].innerHTML
//   description.value=tableRow.childNodes[5].innerHTML
// }

function showData(i){
  var storage=JSON.parse(localStorage.getItem('Elements')) || []
  document.getElementById("name").value=storage[i].name
  document.getElementById("description").value=storage[i].description
  document.getElementById("index").value= i
}
function SaveChanges(){
  var storage=JSON.parse(localStorage.getItem('Elements')) || []
  var index=document.getElementById('index').value
  var name=document.getElementById("name").value
  var description=document.getElementById("description").value
  var updatedUser={
    name,
    description
  }
  storage.splice(index,1,updatedUser)
  localStorage.setItem('Elements',JSON.stringify(storage))
  storageonload()
}



// SaveChanges =(i) => { 
//   let name = document.getElementById("name").value
//   let description = document.getElementById("description").value
//   let idToModify =document.getElementById("description").nextSibling
  
//   console.log("tatata"+Array.from(document.getElementsByClassName("testing111")))
//   var storage=JSON.parse(localStorage.getItem('Elements')) || []
//   console.log("changes"+name+" the name  " + description +" the description")
//   localStorage.setItem(i,)
// }


// // }
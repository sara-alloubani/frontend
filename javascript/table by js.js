let url="https://jsonplaceholder.typicode.com/users";
let usersArray=[];
function fetchuser(callback)
{
    fetch(url)
    .then((result)=>{
        return result.json();
    })
    .then((json)=>{
        callback(null,json);

    })
    .catch((error)=>{
        callback(error,null);
    });

}

fetchuser((error,users)=>{
    if (error)
    {
        console.log(error);
        return;
    }

    usersArray=users;
    console.log(usersArray);
    addTable(usersArray);
})


function addTable(usersArray) {

let col = ['name','email','street','city','phone'];
const table = document.createElement("table");
table.border = '1';
let tr = table.insertRow(-1);                   

for (let i = 0; i < col.length; i++) {
    let th = document.createElement("th");      
    th.innerHTML = col[i];
    tr.appendChild(th);
  }
// for (let i = 0; i < usersArray.length; i++) {
//   for (let key in usersArray[i]) {
//     if (col.indexOf(key) === -1) {
//       col.push(key);
//     }
//   }
// }




    // for (let i = 0; i < col.length; i++) {
    //   let th = document.createElement("th");      
    //   th.innerHTML = col[i];
    //   tr.appendChild(th);
    // }

    
    for (let i = 0; i < usersArray.length; i++) {

      tr = table.insertRow(-1);
      let tabCell1 = tr.insertCell(-1);
      let tabCell2 = tr.insertCell(-1);
      let tabCell3 = tr.insertCell(-1);
      let tabCell4 = tr.insertCell(-1);
      let tabCell5 = tr.insertCell(-1);
      tabCell1.innerHTML = usersArray[i].name;
      tabCell2.innerHTML = usersArray[i].email;
      tabCell3.innerHTML = usersArray[i].address.street;
      tabCell4.innerHTML = usersArray[i].address.city;
      tabCell5.innerHTML = usersArray[i].phone;

    //   for (let j = 0; j < col.length; j++) {
    //     let tabCell = tr.insertCell(-1);
    //     tabCell.innerHTML = usersArray[i][col[j]];
    //   }
    }

    const divShowData = document.getElementById('myDynamicTable');
    divShowData.innerHTML = "";
    divShowData.appendChild(table);


}

/*function addTable() {
    var myTableDiv = document.getElementById("myDynamicTable");
  
    var table = document.createElement('TABLE');
    table.border = '1';
  
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < usersArray.length; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < 5; j++) {
        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(usersArray[i][col[j]]));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }
  addTable();*/
var arr = [];

function onHandleSubmit() {
  let x = document.getElementById("firstName").value;
  let y = document.getElementById("middleName").value;
  let z = document.getElementById("lastName").value;
  let c = document.getElementById('cities').value;
  if (x == "") {
    document.getElementById('firname').innerHTML="<p style='color:red'>please enter first name</p>"
    return false;
  }else if (y == "") {
    document.getElementById('midname').innerHTML="<p style='color:red'>please enter middle name</p>"
    return false;
  } else if (z == "") {
    document.getElementById('lasname').innerHTML="<p style='color:red'>please enter last name</p>"
    return false; 
  }else if(c == "Cities"){
    document.getElementById('selectcity').innerHTML="<p style='color:red'>please select city</p>"
    return false; 
  }else{
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["middleName"] = document.getElementById("middleName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["gender"]= document.querySelector('input[name="gender"]:checked').value;
    formData['cities']=document.getElementById('cities').value;
    var checks = document.getElementsByClassName('hobby');
    var str='';
    for(i=0; i<4;i++){
      if(checks[i].checked === true){
        str += checks[i].value +  " ";
      }
    }
    formData['hobby']= document.querySelectorAll('hobby').value = str;
    console.log(formData)
    var index = document.getElementById("inde").value;
    if (index == "" || index == undefined) {
      arr.push(formData);
    } else {
      arr.splice(index, 1, formData);
      document.getElementById("btn-user").innerText = "Submit";
    }
    //   console.log(arr)
    insertNewRecord(arr);
    resetForm();
  }
}

function insertNewRecord(arr) {
  var k = "<tbody>";
  arr.map((data, i) => {
    // console.log(data)
    k += "<tr>";
    k += "<td>" + i + "</td>";
    k += "<td>" + data.firstName + "</td>";
    k += "<td>" + data.middleName + "</td>";
    k += "<td>" + data.lastName + "</td>";
    k += "<td>" + data.gender + "</td>";
    k += "<td>" + data.cities + "</td>";
    k += "<td>" + data.hobby + "</td>"
    k += `<td><button class='btn btn-success' onClick=onEdit(${i})>Edit</button>
        <button class='btn btn-danger' onClick=onDelete(${i})>Delete</button></td>`;
    k += "</tr>";
  });
  k += "</tbody>";
  document.getElementById("emloyeedata").innerHTML = k;
}
function resetForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("middleName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("male1").checked = true;
  document.getElementById("female2").checked = false;
  document.getElementById('cities').value = "Cities";
  document.getElementById('firname').innerHTML = "";
  document.getElementById('midname').innerHTML = "";
  document.getElementById('lasname').innerHTML = "";
  document.getElementById('selectcity').innerHTML ="";
  document.getElementById('play').checked = false;
  document.getElementById('movie').checked = false;
  document.getElementById('gym').checked = false;
  document.getElementById('travel').checked = false;
}

function onEdit(i) {
  var val = arr[i];
  document.getElementById("firstName").value = val.firstName;
  document.getElementById("middleName").value = val.middleName;
  document.getElementById("lastName").value = val.lastName;
  document.getElementById("inde").value = i;
  var gvalue = document.querySelectorAll('input[name="gender"]').value = val.gender;
  var cvalue = document.getElementsByName('hobby').value = val.hobby;
  console.log(cvalue)
  var travell = cvalue.includes("travelling");
  var moviee = cvalue.includes("movie");
  var plays = cvalue.includes("playing");
  var gymm = cvalue.includes("gym");
  var playing = document.getElementById('play');
  var movieing = document.getElementById('movie');
  var gyming = document.getElementById('gym');
  var travelling = document.getElementById('travel');
  var m = document.getElementById('male1');
  var f = document.getElementById('female2');
  if(gvalue == 'male'){
    m.checked = true;
  }else{
   f.checked = true;
  }

  if(travell == true){
    travelling.checked = true;
  }

  if(moviee == true){
    movieing.checked = true;
  }

  if(plays == true){
    playing.checked = true;
  }

  if(gymm == true){
    gyming.checked = true;
  }
  document.getElementById('cities').value = val.cities;
  // console.log(val);
  document.getElementById("btn-user").innerText = "Update User";
}

function onDelete(i) {
  arr.splice(i, 1);
  insertNewRecord(arr);
}




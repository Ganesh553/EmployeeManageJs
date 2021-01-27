function addUser(){
    console.log("Calling AddUser")
    var fname=document.getElementById("fname").value;
    var lname=document.getElementById("lname").value;
    var mail=document.getElementById("mail").value;
    var salary=document.getElementById("salary").value;
    var department=document.getElementById("department").value;
    // alert(fname)
    
    var obj = {first_name: fname,
        last_name:lname,
        email:mail,
        salary: salary,
        department:department
        }
    console.log(obj)
    
    $.ajax({  
      type: 'POST',
      url: 'http://localhost:3000/users',
      contentType: "application/json",
      data: JSON.stringify(obj),
      success: function (data) {
            alert("Updated")
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });
}
function readUser(){
 $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/users',
    contentType: "application/json",
    success: function(data) {
      console.log(data);
    },
    error: function (error) {
            console.log(`Error ${error}`);
    }
  });
}
readUser()


















// let $fname = $('#fname');
// let $lname = $('#lname');
// let $mail = $('#mail');
// let $salary = $('#salary');
// let $department = $('#dapartment');
// console.log($department)


// function addUser(user) {
//   $user.append('<li>first_name: '+ user.fname +', last_name: '+ user.lname +', email ' + user.mail +', salary '+user.salary + ', dapartment '+ user.department</li>);
//   console.log(user)
// }
// $(#add-user).click(function(){
//     let user = {
//         first_name: $fname.val();
//         lirst_name: $lname.val();
//         mail: $mail.val();
//         salary: $salary.val();
//         department: $department.val()
//         console.log($department.val())
//     };
// })
// $.ajax({
//     type: 'POST',
//     url: 'db.json',
//     data: { params: user },
//     success: function(resp) {
//       addUser(resp);
//     },
//     error: function(){
//       alert('Error Adding Orders');
//     }
//   });
// });


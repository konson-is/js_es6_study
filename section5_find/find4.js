var users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
  ];
  
  var admin

  admin = users.find(function(user){
    return user.admin;
  });

  console.log(admin);
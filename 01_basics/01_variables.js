const accountId = 144553;
let accountEmail = "devdhaka@gmail.com";
var accountPassword = "123456";
accountCity = "Gurugram";
let accountState; //undefined

// accountId = 433253;  //assignment to constant variable will throw error
// console.log(accoutId);

accountEmail = "devdhaka@gmail.com";
accountPassword = "12345678";
accountCity = "Bengaluru";

console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
});

// var is function scoped and can be redeclared and updated
// let is block scoped and can be updated but not redeclared
// const is block scoped and cannot be updated or redeclared

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Cheeseplease421!",
  database: "company_db",
});

connection.connect(function (err) {
  if (err) throw err;
  promptUser();
});

function promptUser() {
  inquirer
    .prompt({
      name: "options",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all employees by department",
        // "View all employees by manager",
        "Add an employee",
        // "Remove an employee",
        "Update employee role",
        // "Update employee manager",
        "exit",
      ],
    })
    .then(function (answer) {
      switch (answer.action) {
        case "View all employees":
          //function to view all employees
          break;

        case "View all employees by department":
          //function to view by department
          break;

        //bonus*****************************
        // case "View all employees by manager":
        //   //function to view by manager
        //   break;

        case "Add an employee":
          //function to view by department
          break;

        // bonus*****************************
        // case "Remove an employee":
        //   //function to view by department
        //   break;

        case "Update employee Role":
          //function to view by department
          break;

          //bonus*****************************
        // case "Update employee manager":
        //   //function to view by department
        //   break;

        case "exit":
          connection.end();
          break;
      }
    });
}

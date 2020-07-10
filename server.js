const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Cheeseplease421!",
  database: "company_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
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
    .then(function (response) {
      switch (response.options) {
        case "View all employees":
          viewAllEmployees();
          break;

        case "View all employees by department":
          viewEmployeeDepartment();
          break;

        //bonus*****************************
        // case "View all employees by manager":
        //   //function to view by manager
        //   break;

        case "Add an employee":
          addEmployee();
          break;

        // bonus*****************************
        // case "Remove an employee":
        //   //function to view by department
        //   break;

        case "Update employee Role":
          updateEmployee();
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

function viewAllEmployees() {
  connection.query("SELECT * FROM employees", function (err, res) {
    if (err) throw err;
    console.table(res);
    connection.end();
  });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        name: "employeeName",
        type: "input",
        message: "What is the first name of the employee you want to add?",
      },
      {
        name: "employeeLastName",
        type: "input",
        message: "What is the last name of the employee you want to add?",
      },
      {
        name: "employeeRoleId",
        type: "input",
        message: "What is the role ID of the employee you want to add?",
      },
      {
        name: "employeeManagerId",
        type: "input",
        message: "What is the Manager ID of the employee you want to add?",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: answer.employeeName,
          last_name: answer.employeeLastName,
          role_id: answer.employeeRoleId,
          manager_id: answer.employeeManagerId,
        },
        function (err, res) {
          if (err) throw err;
          viewAllEmployees();
        }
      );
    });
}

 function updateEmployee(){
     inquirer.prompt([
         {
            name: "employeeChange",
            type: "input",
            message: "What is the name of the employee you want to update?"
         }
     ]).then(function(answer){
        //select info for the employee SELECT * FROM employees WHERE ?
        // update that info UPDATE empoyees SET WHERE 
     })
 }
 
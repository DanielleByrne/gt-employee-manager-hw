const mysql = require("mysql");
const inquirer = require("inquirer");
const arrayofRoles = [
  {
    name: "Manager",
    value: 1,
  },
  {
    name: "Developer",
    value: 2,
  },
  {
    name: "Intern",
    value: 3,
  },
];
const arrayofManagers = [
  {
    name: "Bob Jones",
    value: 1,
  },
];

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
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
        "Add an employee",
        "Update employee role",
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

        case "Add an employee":
          addEmployee();
          break;

        case "Update employee role":
          updateEmployee();
          break;

        case "exit":
          connection.end();process.exit();
      }
    });
}

function viewAllEmployees() {
  connection.query("SELECT * FROM employees", function (err, res) {
    if (err) throw err;
    console.table(res);
    promptUser();
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
        name: "employeeRole",
        type: "list",
        message: "What is the role of the employee you want to add?",
        choices: arrayofRoles,
      },
      {
        name: "employeeManager",
        type: "list",
        message: "What is the Manager of the employee you want to add?",
        choices: arrayofManagers,
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: answer.employeeName,
          last_name: answer.employeeLastName,
          role_id: answer.employeeRole,
          manager_id: answer.employeeManager,
        },
        function (err, res) {
          if (err) throw err;
          viewAllEmployees();
        }
      );
    });
}
// couldn't get it to work in time 
function updateEmployee() {
    viewAllEmployees();
  inquirer
    .prompt([
      {
        name: "employeeChange",
        type: "input",
        message: "What is the last name of the employee you want to update?",
      },
      {
        name: "roleChange",
        type: "list",
        message: "What is the new role you want to assign this employee?",
        choices: arrayofRoles,
      },
    ])
    .then(function (answer) {
      console.log(answer);
      connection.query(
        "SELECT * FROM employees WHERE ? UPDATE employees SET role_id = ? WHERE first_name = ?"
      ),
        {
          last_name: answer.employeeChange,
          role_id: answer.roleChange,
        },
        function (err, res) {
          if (err) throw err;
          console.table(res);
          viewAllEmployees();
        };
    });
}
function viewEmployeeDepartment() {
  inquirer
    .prompt({
      name: "departmentOptions",
      type: "list",
      message: "Which department would you like to view?",
      choices: ["Management", "Devlopment", "Interns"],
    })
    .then(function (response) {
      switch (response.departmentOptions) {
        case "Management":
          console.log("please");
          connection.query(
            "SELECT * FROM employees WHERE role_id = 1",
            function (err, res) {
              if (err) throw err;
              console.table(res);
              promptUser();
              return;
            }
          );
        case "Devlopment":
          connection.query(
            "SELECT * FROM employees WHERE role_id = 2",
            function (err, res) {
              if (err) throw err;
              console.table(res);
              promptUser();
              return;
            }
          );
        case "Interns":
          connection.query(
            "SELECT * FROM employees WHERE role_id = 3",
            function (err, res) {
              if (err) throw err;
              console.table(res);
              promptUser();
              return;
            }
          );
      }
    });
}


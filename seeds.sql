DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employees (
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);

CREATE TABLE roles (
    title VARCHAR(30),
    salary DECIMAL(10 , 2 ),
    department_id INT
);

CREATE TABLE department (
    name VARCHAR(30)
)


SELECT * FROM employees ;
SELECT * FROM department ;
SELECT * FROM roles;

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Wazouski", 2, 1),("James", "Sullivan", 2, 1),("Randall", "Boggs", 3, 1), ("Alex", "Smith", 3 , 1),("Sarah", "Brown", 3, 1);

INSERT INTO department (name)
VALUES ("Manager"), ("Developer"), ("Intern");

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager", 170000, 1), ("Developer", 150000, 2),("Intern", 43000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Jones", 1, null);

SET SQL_SAFE_UPDATES = 0;

-- UPDATE employees 
-- SET role_id = 2
-- WHERE first_name = "Sarah";

-- SELECT * FROM employees WHERE role_id = 1
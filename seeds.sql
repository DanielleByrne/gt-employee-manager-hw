DROP DATABASE IF EXISTS company_db;

CREATE DATABASE company_db;

USE company_db;

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary decimal (10,2),
    department_id INT

);

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department VARCHAR(30)
)



INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Wazouski", 9, 7), ("Alex", "Smith", 4 , 6),("Sarah", "Brown", 4, 6);


INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Jones", 1, 0),
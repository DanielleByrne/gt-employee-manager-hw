DROP DATABASE IF EXISTS company_db

CREATE DATABASE company_db

USE company_db

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
),

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary decimal (10,2),
    department_id INT

),

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department VARCHAR(30)
)
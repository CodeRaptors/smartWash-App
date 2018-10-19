DROP DATABASE IF EXISTS smartWash;

CREATE DATABASE smartWash;

USE smartWash;

CREATE TABLE orders(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  phone int(100) NOT NULL,
  address varchar(100) NOT NULL,
  email varchar(50) NOT NULL,
  phone varchar(10) NOT NULL,
  pickup varchar(10) NOT NULL,

  size varchar(100) NOT NULL,
  specialInd varchar(100) NOT NULL,
  service varchar(100) NOT NULL,
  userId int(2) NOT NULL,
  PRIMARY KEY (ID)

);

INSERT INTO orders (name, phone, address, size, specialInd, service, userId )
VALUES ("Fatima", 13151345, "calle 2 no 3", "mediano", "suavitel", "lavado y planchado", 2);

CREATE TABLE schedule(
  id int NOT NULL AUTO_INCREMENT,
  times varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE users(
  id int NOT NULL AUTO_INCREMENT,
  email varchar (50) NOT NULL,
  userName varchar (50) NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (email) REFERENCES email(email)

);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/


INSERT INTO orders  (name, lastname, address, email, phone) VALUES("John", "Lopez", "77 toledo", "jolo@gmail.com", "5573589699");

 INSERT INTO users (email, userName) VALUES ("anastasio@lelelele.lo", "Anastasio");

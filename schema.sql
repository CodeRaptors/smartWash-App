DROP DATABASE IF EXISTS smartWash;

CREATE DATABASE smartWash;

USE smartWash;

CREATE TABLE orders(
  id int NOT NULL AUTO_INCREMENT,
  user varchar(100) NOT NULL,
  address varchar(100) NOT NULL,
<<<<<<< HEAD
  email varchar(50) NOT NULL PRIMARY KEY,
  phone varchar(10) NOT NUL

=======
  email varchar(50) NOT NULL,
  phone varchar(10) NOT NULL,
  pickup varchar(10) NOT NULL,
  PRIMARY KEY (ID)
>>>>>>> master
);



CREATE TABLE status(
  id int NOT NULL AUTO_INCREMENT,
<<<<<<< HEAD
  email varchar (50) NOT NULL,
  userName varchar (50) NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (email) REFERENCES email(email)
=======
  email varchar(50) NOT NULL,
  userName varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);
>>>>>>> master

);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

<<<<<<< HEAD
INSERT INTO orders  (name, lastname, address, email, phone) VALUES("John", "Lopez", "77 toledo", "jolo@gmail.com", "5573589699");
=======
 INSERT INTO users (email, userName) VALUES ("jazzcelaya@gmail.com", "Jazz");
>>>>>>> master

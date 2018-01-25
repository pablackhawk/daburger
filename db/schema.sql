  DROP DATABASE IF EXISTS burgers_db;
  CREATE DATABASE burgers_db;
  USE burgers_db;

CREATE TABLE burgers
(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(140),
  devoured BOOLEAN DEFAULT false NOT NULL,
  PRIMARY KEY(id)
);
CREATE DATABASE myFF_db;
USE myFF_db;

CREATE TABLE friends (
    id INT AUTO_INCREMENT,
    name VARCHAR(40),
    q0 INTEGER(1),
    q1 INTEGER(1),
    q2 INTEGER(1),
    q3 INTEGER(1),
    q4 INTEGER(1),
    q5 INTEGER(1),
    q6 INTEGER(1),
    q7 INTEGER(1),
    q8 INTEGER(1),
    q9 INTEGER(1),
    imgLink VARCHAR(120),
    PRIMARY KEY (id)
);

INSERT INTO friends (name, q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, imgLink)
VALUES ("0", "Vale Rideout", "5", "1", "5", "4", "4", "5", "4", "5", "3", "3", "http://muscocenter.org/wp-content/uploads/2017/05/Copy-of-Val-Tenors-Vale-Rideout.jpg");

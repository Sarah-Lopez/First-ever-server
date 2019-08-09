DROP DATABASE IF EXISTS reservation_db;

CREATE DATABASE reservation_db;

USE reservation_db;

CREATE TABLE reservation (
  table_num int(11) auto_increment not null,
  reservation_name varchar(30) not null,
  Email Varchar(30) not null,
  phone_num varchar(100) not null,
  unique_ID varchar(150) not null,
  primary key(table_num),
  is_reserved bit not null
);
INSERT INTO reservation (reservation_name, Email, phone_num, unique_ID, is_reserved)
values ("fred", "fred.fred@gmail.com", "602-555-5555", "freds reservation", 1),("joe", "hoegmail.com", "602-555-5555", "joe reservation", 1), ("what", "WHAT@gmail.com", "602-555-5555", "ok reservation", 1),
("yo", "WHAT@gmail.com", "602-555-5555", "ok ration", 1),
("you", "WHAT@gmail.com", "602-555-5555", "ok fwfqw", 1),
("fry", "WHAT@gmail.com", "602-555-5555", "oeservation", 1);
select * from reservation;

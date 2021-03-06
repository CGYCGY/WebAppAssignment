# create database
CREATE DATABASE waadb;

# select waadb database
USE waadb;

# auto_increment is used to form primary key for CRUD purpose
CREATE TABLE admin (
  admin_id          INT         NOT NULL AUTO_INCREMENT UNIQUE,
  username          VARCHAR(50) NOT NULL,
  password          TEXT NOT NULL,
  first_name        VARCHAR(30) NOT NULL,
  last_name         VARCHAR(30) NOT NULL,
  email_address     VARCHAR(50) NOT NULL,
  telephone_number  VARCHAR(20) NOT NULL

);

CREATE TABLE user (
  user_id           INT         NOT NULL AUTO_INCREMENT UNIQUE,
  username          VARCHAR(50) NOT NULL,
  password          TEXT NOT NULL,
  first_name        VARCHAR(30) NOT NULL,
  last_name         VARCHAR(30) NOT NULL,
  email_address     VARCHAR(50) NOT NULL,
  telephone_number  VARCHAR(20) NOT NULL
);

# now() means current time, avoid using timestamp to prevent populate bugs
CREATE TABLE event (
  event_id          INT NOT NULL AUTO_INCREMENT UNIQUE,
  event_name        VARCHAR(80) NOT NULL,
  event_description VARCHAR(300) NOT NULL,
  event_location    VARCHAR(300) NOT NULL,
  event_org_name    VARCHAR(80) NOT NULL,
  event_contact     VARCHAR(13) NOT NULL,
  event_dt_start    DATETIME DEFAULT NOW() NOT NULL,
  event_dt_end      DATETIME DEFAULT NOW() NOT NULL
);

# table belows use two keys to forms composite key for M-M relationships
# ON DELETE CASCADE = if record in parent table is deleted, child table also deleted.
CREATE TABLE create_event (
  admin_id          INT,
  event_id          INT
);

CREATE TABLE apply_ticket (
  user_id          INT,
  event_id          INT
);
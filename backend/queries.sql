-- SQLite
CREATE TABLE ad 
(
   id INTEGER PRIMARY KEY AUTOINCREMENT, 
   title VARCHAR(100) NOT NULL, 
   description TEXT, 
   owner VARCHAR(100) NOT NULL, 
   price INT, 
   picture VARCHAR(100), 
   location VARCHAR(100), 
   createdAt DATE, 
   categories TEXT, 

); 

 DROP TABLE ad; 
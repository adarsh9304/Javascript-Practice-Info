/*

Creating a Table from an Existing Table

CREATE TABLE NEW_TABLE_NAME AS
SELECT [column1, column2...columnN]
FROM EXISTING_TABLE_NAME
WHERE Condition;


RENAME TABLE table_name TO new_table_name;
ALTER TABLE BUYERS RENAME TO CUSTOMERS;



SIMPLE CLONING
It does not inherit the indices and AUTO_INCREMENT definitions.

CREATE TABLE new_table SELECT * FROM original_table;


SHALLOW CLONING
Shallow cloning operation creates a new replica table from the existing table but does not copy any data records into newly created table, so only new but empty table is created.

CREATE TABLE new_table LIKE original_table;


DEEP CLONING
Deep cloning operation is a combination of simple cloning and shallow cloning
he new table will have all the contents from existing table and all the attributes including indices and the AUTO_INCREMENT definitions.

*/


/*

TEMPORARY TABLE
 If you are connected to the MySQL database server through a MySQL client program, then the temporary table will exist until you close the client connection or manually destroy the table.

CREATE TEMPORARY TABLE table_name(
   column1 datatype,
   column2 datatype,
   column3 datatype,
   .....
   columnN datatype,
   PRIMARY KEY( one or more columns )
);



The following SELECT INTO statement creates a new table called CUSTOMER_BACKUP and copies the data from the CUSTOMERS table into it −

SELECT * INTO CUSTOMER_BACKUP FROM CUSTOMERS;
SELECT INTO statement does not preserve any indexes, constraints, or other properties of the original table,



Following query inserts the top 3 records from the CUSTOMERS table to the BUYERS table −

INSERT INTO BUYERS 
SELECT * FROM CUSTOMERS 
ORDER BY ID ASC LIMIT 3;

*/
/*
 
CREATE TABLE CUSTOMERS(
   ID   INT              NOT NULL,
   NAME VARCHAR (20)     NOT NULL,
   AGE  INT              NOT NULL,
   ADDRESS  CHAR (25) ,
   SALARY   DECIMAL (18, 2),
   PRIMARY KEY (ID)
);

INSERT INTO CUSTOMERS VALUES
(1, 'Ramesh', 32, 'Ahmedabad', 2000.00 ),
(2, 'Khilan', 25, 'Delhi', 1500),
(3, 'kaushik', 23, 'Kota', 2000),
(4, 'Chaitali', 25, 'Mumbai', 6500),
(5, 'Hardik', 27, 'Bhopal', 8500),
(6, 'Komal', 22, 'Hyderabad', 4500),
(7, 'Muffy', 24, 'Indore', 10000);


INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY)
VALUES (1, 'Ramesh', 32, 'Ahmedabad', 2000.00 );


*/




/*

UPDATE table_name
SET column1 = value1, column2 = value2....columnN=valueN
[ WHERE  CONDITION ];

UPDATE CUSTOMERS SET ADDRESS = 'Pune' WHERE ID = 6;


DELETE FROM CUSTOMERS WHERE ID = 6;


TRUNCATE TABLE CUSTOMERS;


ALTER TABLE table_name 
{ADD|DROP|MODIFY} column_name {data_type};

ALTER TABLE CUSTOMERS ADD SEX char(1);


adds an index on the column NAME of CUSTOMERS table −
ALTER TABLE CUSTOMERS ADD INDEX name_index (NAME);

adds primary key constraint on the column ID of EMPLOYEES table −
ALTER TABLE EMPLOYEES 
ADD CONSTRAINT MyPrimaryKey 
PRIMARY KEY(ID);

ALTER TABLE table_name DROP PRIMARY KEY;

Following query adds UNIQUE constraint to the table CUSTOMERS −
ALTER TABLE EMPLOYEES ADD CONSTRAINT CONST UNIQUE(NAME);

query renames NAME column in table CUSTOMERS −
ALTER TABLE CUSTOMERS RENAME COLUMN name to full_name;


ALTER TABLE table_name MODIFY COLUMN column_name datatype;



ALTER TABLE CUSTOMERS RENAME TO NEW_CUSTOMERS;


CREATE INDEX sample_index on CUSTOMERS(NAME);


DROP INDEX sample_index on CUSTOMERS;



 rows with their own preferred order, the SELECT query used would be as follows −

SELECT * FROM CUSTOMERS
ORDER BY ( CASE ADDRESS
   WHEN 'DELHI' 	 THEN 1
   WHEN 'BHOPAL' 	 THEN 2
   WHEN 'KOTA' 	 THEN 3
   WHEN 'AHMEDABAD' THEN 4
   WHEN 'Hyderabad' 	THEN 5
   ELSE 100 END) ASC, ADDRESS DESC;

*/
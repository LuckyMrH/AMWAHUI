DROP TABLE PHONE;
CREATE TABLE PHONE ( 
    ID INTEGER NOT NULL, 
    TYPE INTEGER NOT NULL, 
    RANK INTEGER NOT NULL, 
    AREA CHARACTER (3) , 
    PREFIX CHARACTER (3) , 
    NUMBER CHARACTER (4) , 
    EXTENSION CHARACTER (7));
DROP INDEX PHONE;
CREATE UNIQUE INDEX PHONE ON
    PHONE(ID, TYPE, RANK);
COMMIT;
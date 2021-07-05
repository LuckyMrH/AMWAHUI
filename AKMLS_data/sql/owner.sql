DROP TABLE ITEM_OWNER;
CREATE TABLE ITEM_OWNER ( 
    ID INTEGER NOT NULL,
    ITEM_ID INTEGER NOT NULL, 
    TYPE VARCHAR(100) NOT NULL, 
    RANK INTEGER NOT NULL ); 
CREATE UNIQUE INDEX ITEM_OWNER ON
    ITEM_OWNER(ID, ITEM_ID, TYPE, RANK);
COMMIT;                                       
DROP TABLE FAVORITE;
CREATE TABLE FAVORITE ( 
    ID INTEGER NOT NULL, 
    PROP_ID INTEGER NOT NULL, 
    EFFDT DATE);
CREATE UNIQUE INDEX FAVORITE ON
    FAVORITE(ID, PROP_ID);
COMMIT;
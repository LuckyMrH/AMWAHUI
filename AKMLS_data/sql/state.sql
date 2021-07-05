DROP TABLE STATE;
CREATE TABLE STATE ( 
    ID INTEGER NOT NULL, 
    ABBR VARCHAR(2) NOT NULL, 
    NAME VARCHAR(21) NOT NULL );
DROP INDEX STATE;
CREATE UNIQUE INDEX STATE ON
    STATE(ID, ABBR, NAME);
COMMIT;
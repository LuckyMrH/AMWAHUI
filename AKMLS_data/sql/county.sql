DROP TABLE COUNTY;
CREATE TABLE COUNTY ( 
    STATE_CD INTEGER NOT NULL,
    TYPE_CD INTEGER NOT NULL,
    COUNTY_CD INTEGER NOT NULL,
    UNIT_CD INTEGER NOT NULL,
    NAME VARCHAR(25) NOT NULL,
    POL_DESCR VARCHAR(10),
    TITLE VARCHAR(35),
    STREET1 VARCHAR(35),
    STREET2 VARCHAR(35),
    CITY  VARCHAR(25),   
    STATE VARCHAR(2),
    ZIP VARCHAR(5),
    POPULATION INTEGER,
    POP_YR VARCHAR(4),
    FIPS_STATE VARCHAR(2),
    FIPS_COUNTY VARCHAR(3),
    FIPS_MSA  VARCHAR(4),
    FIPS_CMSA VARCHAR(2),
    MSA_POP_NAME VARCHAR(35) );
DROP INDEX COUNTY;
CREATE UNIQUE INDEX COUNTY ON
    COUNTY(STATE_CD, TYPE_CD,COUNTY_CD);
COMMIT;
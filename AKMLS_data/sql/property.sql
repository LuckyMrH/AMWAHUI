DROP TABLE PROPERTY;
CREATE TABLE PROPERTY ( 
    ID          INT NOT NULL,
    EFFDT       DATE NOT NULL,
    PRICE       DECIMAL(10,2) NOT NULL,
    STORIES     DECIMAL(4,1),
    AGENTID     INT,
    STATE_ID       INT,
    COUNTY_ID      INT,
    CITY_ID     INT,
    TOWNSHIP_ID   INT,
    BEDROOMS    DECIMAL(4,1),
    BATHROOMS   DECIMAL(4,1),
    BROKERID    INT NOT NULL,
    AREA_ABOVE DECIMAL (10, 3),
    AREA_BELOW DECIMAL (10, 3),
    AREA_TOTAL DECIMAL (10, 3),
    LIVING_PRICE DECIMAL (10, 3),
    LOTSIZE     DECIMAL (10,3),
    LOT_PRICE   DECIMAL (10,3),
    LOTWIDTH    DECIMAL (10,3),
    LOTLENGTH   DECIMAL (10,3),
    ACRES       DECIMAL (5,5),
    SIZE        DECIMAL (10,3),
    AREA_PRICE  DECIMAL (10,3),
    WIDTH       DECIMAL (10,3),
    LENGTH      DECIMAL (10,3),
    COMM_SALE   DECIMAL (4,3),
    COMM_LISTER DECIMAL (4,3),
    COMM_SELLER DECIMAL (4,3),
    COMM_MLS    DECIMAL (4,3),
    SALE_STATUS INT,
    SALE_STATUS_DT DATE,
    PROPERTY_STATUS INT,
    PROPERTY_STATUS_DT DATE,
    LIST_START_DT DATE,
    LIST_STOP_DT DATE,
    MLS_START_DATE    DATE,
    MLS_STOP_DATE DATE,
    YEAR_BUILT  DATE,
    MLS_COMPANY INT,
    MLS_BROKER  INT,
    MLS_AGENT   INT,
    MLS_ID      VARCHAR(40),
    TYPE_ID     INT,
    CONSTRUCTION_ID INT,
    LOT_UNITS_ID INT,
    SIZE_UNITS_ID INT,
    STYLE_ID    INT,
    OCCUPANT VARCHAR(40),
    OWNER       INT,
    SCHOOL_DIST_ID INT,
    ZONING_ID INT,
    TERMS       VARCHAR(50),
    LOAN        VARCHAR(200),
    TAX_VALUE   DECIMAL (10,2),
    TAX_YEAR    DATE,
    GROSS_TAX   DECIMAL (10,2),
    NET_TAX     DECIMAL (10,2)
    AVAILABLE_DT DATE
);

CREATE UNIQUE INDEX PROPERTY ON
    PROPERTY(ID,EFFDT);
COMMIT;
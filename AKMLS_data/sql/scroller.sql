DROP TABLE SCROLLER;
CREATE TABLE SCROLLER ( 
    PARAM VARCHAR (30) NOT NULL, 
    NAME  VARCHAR (50) NOT NULL,
    EFFDT DATE NOT NULL,
    VALUE VARCHAR (100),
    DESCR VARCHAR (100));
    
CREATE UNIQUE INDEX EMAIL ON
    EMAIL(ID, TYPE, RANK);
COMMIT;
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('applet','code',SYSDATE,'newsscroll.AdvNewsscroll.class','Class for scroller');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('applet','width',SYSDATE,'190','Scroller witdth');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('applet','height',SYSDATE,'175','Scroller height');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','info',SYSDATE,'Applet','Scroller information');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','input_text',SYSDATE,'from_parameters','Scroller parameter source');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','text_file',SYSDATE,'','Text file name');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','scroll_mode',SYSDATE,'scroll','Scroll mode');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','bgcolor',SYSDATE,'EFEFFF','Background color');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','title_color',SYSDATE,'DD9900','Title color');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','text_color',SYSDATE,'888888','Text color');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','highlight_title_color',SYSDATE,'80A0D0','Hightlight title color');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','highlight_text_color',SYSDATE,'50B5F0','Hightlight text color');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','title_align',SYSDATE,'left','Title alignment');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','text_align',SYSDATE,'left','Text alignment');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','title_font_type',SYSDATE,'Helvetica','Title font type');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','title_font_size',SYSDATE,'12','Title font size (in points)');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','title_font_style',SYSDATE,'1','Title font style');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','text_font_type',SYSDATE,'Helvetica','Text font type');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','text_font_size',SYSDATE,'11','Text font size (in points)');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','text_font_style',SYSDATE,'0','Text font style');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','title_underline',SYSDATE,'no','Title underline');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','text_underline',SYSDATE,'no','Text underline');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','scroll_delay',SYSDATE,'30','Scrolling delay (miliseconds)');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','pause',SYSDATE,'3000','Message pause delay (miliseconds)');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','border_thickness',SYSDATE,'2','Border thickness (in pixels)');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','border_color',SYSDATE,'000099','Border color (in hex)');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','left_margin',SYSDATE,'10','Left margin (in points)');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','top_margin',SYSDATE,'10','Top margin (in points)');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','right_margin',SYSDATE,'5','Right margin (in points)');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','left_margin',SYSDATE,'10','Left margin (in points)');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','bottom_margin',SYSDATE,'10','Bottom margin (in points)');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','vertical_space',SYSDATE,'20','Vertical Space (in points)');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','title_linespace',SYSDATE,'0','Title line spacing (in points)');
INSERT INTO SCROLLER (PARAM, NAME, EFFDT, VALUE, DESCR) VALUES ('param','text_linespace',SYSDATE,'0','Text line spacing (in points)');
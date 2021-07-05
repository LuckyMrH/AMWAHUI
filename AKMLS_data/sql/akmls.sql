-- MySQL Workbench Synchronization
-- Generated: 2017-10-03 15:00
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Steve

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE TABLE IF NOT EXISTS `akmls`.`attribute` (
  `attribute_id` INT(11) NOT NULL AUTO_INCREMENT,
  `class_name` VARCHAR(256) NOT NULL,
  `attribute_name` VARCHAR(100) NOT NULL,
  `rank` TINYINT(4) NOT NULL,
  `display_name` VARCHAR(100) NOT NULL,
  `attribute_value` TEXT NULL DEFAULT NULL,
  `note` VARCHAR(45) NULL DEFAULT NULL,
  `effective_date` DATETIME NOT NULL,
  `active` TINYINT(4) NULL DEFAULT NULL,
  `last_modified` DATETIME NULL DEFAULT NULL,
  `modified_by` INT(11) NULL DEFAULT NULL,
  `attributecol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`attribute_id`),
  UNIQUE INDEX `class_name_UNIQUE` (`class_name` ASC),
  UNIQUE INDEX `attribute_name_UNIQUE` (`attribute_name` ASC),
  UNIQUE INDEX `rank_UNIQUE` (`rank` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `akmls`.`person` (
  `person_id` INT(11) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `middle_name` VARCHAR(45) NULL DEFAULT NULL,
  `preferred_name` VARCHAR(45) NULL DEFAULT NULL,
  `bithdate` DATE NOT NULL,
  `sex` VARCHAR(1) NULL DEFAULT NULL,
  `initials` VARCHAR(5) NULL DEFAULT NULL,
  `gender_gender_id` VARCHAR(3) NOT NULL,
  PRIMARY KEY (`person_id`),
  UNIQUE INDEX `bithdate_UNIQUE` (`bithdate` ASC),
  INDEX `fk_person_gender_idx` (`gender_gender_id` ASC),
  CONSTRAINT `fk_person_gender`
    FOREIGN KEY (`gender_gender_id`)
    REFERENCES `akmls`.`gender` (`gender_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `akmls`.`gender` (
  `gender_id` VARCHAR(3) NOT NULL,
  `gender_short_name` VARCHAR(10) NULL DEFAULT NULL,
  `gender_long_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`gender_id`),
  UNIQUE INDEX `gender_short_name_UNIQUE` (`gender_short_name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `akmls`.`address` (
  `address_id` INT(11) NOT NULL AUTO_INCREMENT,
  `address1` VARCHAR(100) NULL DEFAULT NULL,
  `address2` VARCHAR(100) NULL DEFAULT NULL,
  `address3` VARCHAR(100) NULL DEFAULT NULL,
  `addresscol` VARCHAR(45) NULL DEFAULT NULL,
  `zip_code_zip_code_id` INT(11) NOT NULL,
  PRIMARY KEY (`address_id`),
  INDEX `fk_address_zip_code1_idx` (`zip_code_zip_code_id` ASC),
  CONSTRAINT `fk_address_zip_code1`
    FOREIGN KEY (`zip_code_zip_code_id`)
    REFERENCES `akmls`.`zip_code` (`zip_code_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `akmls`.`census_state` (
  `state_id` INT(11) NOT NULL,
  `abbreviation` VARCHAR(2) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`state_id`),
  UNIQUE INDEX `state_id_UNIQUE` (`state_id` ASC),
  UNIQUE INDEX `abbreviation_UNIQUE` (`abbreviation` ASC),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `akmls`.`census_county` (
  `census_county_id` INT(11) NOT NULL AUTO_INCREMENT,
  `county_code` INT(11) NOT NULL,
  `census_type_census_type_id` INT(11) NOT NULL,
  `census_state_state_id` INT(11) NOT NULL,
  `unit_code` INT(11) NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `political_descr` VARCHAR(45) NULL DEFAULT NULL,
  `title` VARCHAR(45) NULL DEFAULT NULL,
  `census_countycol` VARCHAR(45) NULL DEFAULT NULL,
  `address_address_id` INT(11) NOT NULL,
  `population` INT(11) NULL DEFAULT NULL,
  `population_year` VARCHAR(4) NULL DEFAULT NULL,
  `fips_state_code` INT(11) NULL DEFAULT NULL,
  `fips_county_code` INT(11) NULL DEFAULT NULL,
  `fips_msa_code` INT(11) NULL DEFAULT NULL,
  `fips_cmsa_code` INT(11) NULL DEFAULT NULL,
  `msa_popular_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`census_county_id`),
  INDEX `fk_census_county_census_type1_idx` (`census_type_census_type_id` ASC),
  INDEX `fk_census_county_census_state1_idx` (`census_state_state_id` ASC),
  INDEX `fk_census_county_address1_idx` (`address_address_id` ASC),
  CONSTRAINT `fk_census_county_census_type1`
    FOREIGN KEY (`census_type_census_type_id`)
    REFERENCES `akmls`.`census_type` (`census_type_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_census_county_census_state1`
    FOREIGN KEY (`census_state_state_id`)
    REFERENCES `akmls`.`census_state` (`state_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_census_county_address1`
    FOREIGN KEY (`address_address_id`)
    REFERENCES `akmls`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `akmls`.`census_type` (
  `census_type_id` INT(11) NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`census_type_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `akmls`.`census_township` (
  `census_township_id` INT(11) NOT NULL,
  `census_state_state_id` INT(11) NOT NULL,
  `census_township_type_census_township_type_id` INT(11) NOT NULL,
  `census_county_census_county_id` INT(11) NOT NULL,
  `address_address_id` INT(11) NOT NULL,
  `unit_code` VARCHAR(3) NULL DEFAULT NULL,
  `name` VARCHAR(75) NULL DEFAULT NULL,
  `political_descr` VARCHAR(45) NULL DEFAULT NULL,
  `title` VARCHAR(45) NULL DEFAULT NULL,
  `population` INT(11) NULL DEFAULT NULL,
  `population_year` VARCHAR(4) NULL DEFAULT NULL,
  `fips_state` VARCHAR(2) NULL DEFAULT NULL,
  `fips_county` VARCHAR(3) NULL DEFAULT NULL,
  `fips_place` VARCHAR(5) NULL DEFAULT NULL,
  `county_area_name` VARCHAR(45) NULL DEFAULT NULL,
  `county_area_pol_descr` VARCHAR(45) NULL DEFAULT NULL,
  `fips_msa` VARCHAR(4) NULL DEFAULT NULL,
  `fips_cmsa` VARCHAR(2) NULL DEFAULT NULL,
  `census_townshipcol` VARCHAR(45) NULL DEFAULT NULL,
  `popular_name` VARCHAR(75) NULL DEFAULT NULL,
  PRIMARY KEY (`census_township_id`),
  INDEX `fk_census_township_census_state1_idx` (`census_state_state_id` ASC),
  INDEX `fk_census_township_census_township_type1_idx` (`census_township_type_census_township_type_id` ASC),
  INDEX `fk_census_township_census_county1_idx` (`census_county_census_county_id` ASC),
  INDEX `fk_census_township_address1_idx` (`address_address_id` ASC),
  CONSTRAINT `fk_census_township_census_state1`
    FOREIGN KEY (`census_state_state_id`)
    REFERENCES `akmls`.`census_state` (`state_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_census_township_census_township_type1`
    FOREIGN KEY (`census_township_type_census_township_type_id`)
    REFERENCES `akmls`.`census_township_type` (`census_township_type_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_census_township_census_county1`
    FOREIGN KEY (`census_county_census_county_id`)
    REFERENCES `akmls`.`census_county` (`census_county_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_census_township_address1`
    FOREIGN KEY (`address_address_id`)
    REFERENCES `akmls`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `akmls`.`census_township_type` (
  `census_township_type_id` INT(11) NOT NULL,
  `census_township_type_name` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`census_township_type_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `akmls`.`census_spec_district_gov` (
  `census_spec_district_gov_id` INT(11) NOT NULL AUTO_INCREMENT,
  `census_state_state_id` INT(11) NOT NULL,
  `census_spec_dist_gov_type_census_spec_dist_gov_type_id` INT(11) NOT NULL,
  `census_county_census_county_id` INT(11) NOT NULL,
  `unit_code` VARCHAR(45) NULL DEFAULT NULL,
  `name` VARCHAR(75) NULL DEFAULT NULL,
  `funtion` VARCHAR(75) NULL DEFAULT NULL,
  `county_area_name` VARCHAR(75) NULL DEFAULT NULL,
  `county_area_type` VARCHAR(45) NULL DEFAULT NULL,
  `state_abbr` VARCHAR(2) NULL DEFAULT NULL,
  `fips_state` VARCHAR(2) NULL DEFAULT NULL,
  `fips_county` VARCHAR(5) NULL DEFAULT NULL,
  `fips_msa` VARCHAR(5) NULL DEFAULT NULL,
  `fips_cmsa` VARCHAR(5) NULL DEFAULT NULL,
  `msa_popular_name` VARCHAR(75) NULL DEFAULT NULL,
  `function_code` VARCHAR(5) NULL DEFAULT NULL,
  PRIMARY KEY (`census_spec_district_gov_id`),
  INDEX `fk_census_spec_district_gov_census_state1_idx` (`census_state_state_id` ASC),
  INDEX `fk_census_spec_district_gov_census_county1_idx` (`census_county_census_county_id` ASC),
  INDEX `fk_census_spec_district_gov_census_spec_dist_gov_type1_idx` (`census_spec_dist_gov_type_census_spec_dist_gov_type_id` ASC),
  UNIQUE INDEX `census_spec_district_gov_id_UNIQUE` (`census_spec_district_gov_id` ASC),
  UNIQUE INDEX `census_state_state_id_UNIQUE` (`census_state_state_id` ASC),
  UNIQUE INDEX `census_spec_dist_gov_type_census_spec_dist_gov_type_id_UNIQUE` (`census_spec_dist_gov_type_census_spec_dist_gov_type_id` ASC),
  UNIQUE INDEX `census_county_census_county_id_UNIQUE` (`census_county_census_county_id` ASC),
  CONSTRAINT `fk_census_spec_district_gov_census_state1`
    FOREIGN KEY (`census_state_state_id`)
    REFERENCES `akmls`.`census_state` (`state_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_census_spec_district_gov_census_county1`
    FOREIGN KEY (`census_county_census_county_id`)
    REFERENCES `akmls`.`census_county` (`census_county_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_census_spec_district_gov_census_spec_dist_gov_type1`
    FOREIGN KEY (`census_spec_dist_gov_type_census_spec_dist_gov_type_id`)
    REFERENCES `akmls`.`census_spec_dist_gov_type` (`census_spec_dist_gov_type_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `akmls`.`census_spec_dist_gov_type` (
  `census_spec_dist_gov_type_id` INT(11) NOT NULL,
  `name` VARCHAR(75) NOT NULL,
  PRIMARY KEY (`census_spec_dist_gov_type_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `akmls`.`sensus_school_dist_gov` (
  `sensus_school_dist_gov_id` INT(11) NOT NULL,
  `census_state_state_id` INT(11) NOT NULL,
  `sensus_school_dist_gov_type_sensus_school_dist_gov_type_id` INT(11) NOT NULL,
  `census_county_census_county_id` INT(11) NOT NULL,
  `unit_code` VARCHAR(3) NULL DEFAULT NULL,
  `name` VARCHAR(75) NULL DEFAULT NULL,
  `title` VARCHAR(75) NULL DEFAULT NULL,
  `address_address_id` INT(11) NOT NULL,
  `enrollment` INT(11) NULL DEFAULT NULL,
  `enrollment_year` INT(11) NULL DEFAULT NULL,
  `fips_state` VARCHAR(2) NULL DEFAULT NULL,
  `fips_county` VARCHAR(75) NULL DEFAULT NULL,
  `county_area_name` VARCHAR(75) NULL DEFAULT NULL,
  `county_area_type` VARCHAR(2) NULL DEFAULT NULL,
  `fips_msa` VARCHAR(5) NULL DEFAULT NULL,
  `fips_cmsa` VARCHAR(5) NULL DEFAULT NULL,
  `msa_popular_name` VARCHAR(75) NULL DEFAULT NULL,
  PRIMARY KEY (`sensus_school_dist_gov_id`),
  INDEX `fk_sensus_school_dist_gov_address1_idx` (`address_address_id` ASC),
  INDEX `fk_sensus_school_dist_gov_census_county1_idx` (`census_county_census_county_id` ASC),
  INDEX `fk_sensus_school_dist_gov_census_state1_idx` (`census_state_state_id` ASC),
  INDEX `fk_sensus_school_dist_gov_sensus_school_dist_gov_type1_idx` (`sensus_school_dist_gov_type_sensus_school_dist_gov_type_id` ASC),
  CONSTRAINT `fk_sensus_school_dist_gov_address1`
    FOREIGN KEY (`address_address_id`)
    REFERENCES `akmls`.`address` (`address_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sensus_school_dist_gov_census_county1`
    FOREIGN KEY (`census_county_census_county_id`)
    REFERENCES `akmls`.`census_county` (`census_county_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sensus_school_dist_gov_census_state1`
    FOREIGN KEY (`census_state_state_id`)
    REFERENCES `akmls`.`census_state` (`state_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sensus_school_dist_gov_sensus_school_dist_gov_type1`
    FOREIGN KEY (`sensus_school_dist_gov_type_sensus_school_dist_gov_type_id`)
    REFERENCES `akmls`.`sensus_school_dist_gov_type` (`sensus_school_dist_gov_type_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `akmls`.`sensus_school_dist_gov_type` (
  `sensus_school_dist_gov_type_id` INT(11) NOT NULL AUTO_INCREMENT,
  `type_code` VARCHAR(3) NULL DEFAULT NULL,
  `name` VARCHAR(75) NULL DEFAULT NULL,
  PRIMARY KEY (`sensus_school_dist_gov_type_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


CREATE TABLE IF NOT EXISTS `akmls`.`zip_code` (
  `zip_code_id` INT NOT NULL AUTO_INCREMENT,
  `zip_code` VARCHAR(5) NULL,
  `latitude` DOUBLE NULL,
  `longitude` DOUBLE NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(2) NULL,
  `zcta` TINYINT NULL,
  `parent_zcta` TINYINT NULL,
  `population` INT NULL,
  `county_fips` VARCHAR(5) NULL,
  `county_fips_name` VARCHAR(45) NULL,
  `county_weight` FLOAT NULL,
  `all_county_weight` VARCHAR(150) NULL,
  `imprecise` TINYINT NULL,
  `military` TINYINT NULL,
  `census_state_state_id` INT NOT NULL,
  PRIMARY KEY (`zip_code_id`),
  INDEX `fk_zip_code_census_state1_idx` (`census_state_state_id` ASC),
  CONSTRAINT `fk_zip_code_census_state1`
    FOREIGN KEY (`census_state_state_id`)
    REFERENCES `akmls`.`census_state` (`state_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `akmls`.`reso_lookup_tbl` (
  `reso_lookup_id` INT(11) NOT NULL AUTO_INCREMENT,
  `lookup_field` VARCHAR(45) NOT NULL,
  `lookup_value` VARCHAR(75) NOT NULL,
  `definition` VARCHAR(2500) NULL DEFAULT NULL,
  `synonym` VARCHAR(200) NULL DEFAULT NULL,
  `bedes` VARCHAR(75) NULL DEFAULT NULL,
  `lookup_status` VARCHAR(20) NULL DEFAULT NULL,
  `added_in_version` VARCHAR(10) NULL DEFAULT NULL,
  `wiki_page_title` VARCHAR(100) NULL DEFAULT NULL,
  `wiki_page_url` VARCHAR(150) NULL DEFAULT NULL,
  `lookup_id` INT(11) NULL DEFAULT NULL,
  `lookup_field_id` INT(11) NULL DEFAULT NULL,
  `status_change_date` DATE NULL DEFAULT NULL,
  `revised_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`reso_lookup_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `akmls`.`reso_reference_tbl` (
  `reso_reference_tbl_id` INT(11) NOT NULL AUTO_INCREMENT,
  `short_name` VARCHAR(45) NOT NULL,
  `long_name` VARCHAR(250) NULL DEFAULT NULL,
  PRIMARY KEY (`reso_reference_tbl_id`),
  UNIQUE INDEX `short_name_UNIQUE` (`short_name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `akmls`.`reso_lookup_tbl_has_reso_reference_tbl` (
  `reso_lookup_tbl_reso_lookup_id` INT(11) NOT NULL,
  `reso_reference_tbl_reso_reference_tbl_id` INT(11) NOT NULL,
  PRIMARY KEY (`reso_lookup_tbl_reso_lookup_id`, `reso_reference_tbl_reso_reference_tbl_id`),
  INDEX `fk_reso_lookup_tbl_has_reso_reference_tbl_reso_reference_tb_idx` (`reso_reference_tbl_reso_reference_tbl_id` ASC),
  INDEX `fk_reso_lookup_tbl_has_reso_reference_tbl_reso_lookup_tbl1_idx` (`reso_lookup_tbl_reso_lookup_id` ASC),
  CONSTRAINT `fk_reso_lookup_tbl_has_reso_reference_tbl_reso_lookup_tbl1`
    FOREIGN KEY (`reso_lookup_tbl_reso_lookup_id`)
    REFERENCES `akmls`.`reso_lookup_tbl` (`reso_lookup_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reso_lookup_tbl_has_reso_reference_tbl_reso_reference_tbl1`
    FOREIGN KEY (`reso_reference_tbl_reso_reference_tbl_id`)
    REFERENCES `akmls`.`reso_reference_tbl` (`reso_reference_tbl_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;




-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema hrtracker
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hrtracker
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hrtracker` DEFAULT CHARACTER SET utf8mb3 ;
USE `hrtracker` ;

-- -----------------------------------------------------
-- Table `hrtracker`.`departements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hrtracker`.`departements` (
  `idDep` INT NOT NULL AUTO_INCREMENT,
  `depName` VARCHAR(45) NOT NULL,
  `DepRating` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idDep`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `hrtracker`.`supervisors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hrtracker`.`supervisors` (
  `idSup` INT NOT NULL AUTO_INCREMENT,
  `supImage` VARCHAR(255) NOT NULL,
  `supName` VARCHAR(45) NOT NULL,
  `supJob` VARCHAR(45) NOT NULL,
  `Departements_idDep` INT NOT NULL,
  PRIMARY KEY (`idSup`),
  INDEX `fk_Supervisors_Departements1_idx` (`Departements_idDep` ASC) VISIBLE,
  CONSTRAINT `fk_Supervisors_Departements1`
    FOREIGN KEY (`Departements_idDep`)
    REFERENCES `hrtracker`.`departements` (`idDep`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `hrtracker`.`employees`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hrtracker`.`employees` (
  `idEmp` INT NOT NULL AUTO_INCREMENT,
  `EmpImage` VARCHAR(255) NOT NULL,
  `empName` VARCHAR(45) NOT NULL,
  `empJob` VARCHAR(45) NOT NULL,
  `EmpProgression` VARCHAR(45) NOT NULL,
  `EmpRating` VARCHAR(45) NOT NULL,
  `Departements_idDep` INT NULL DEFAULT NULL,
  `Supervisors_idSup` INT NULL DEFAULT NULL,
  PRIMARY KEY (`idEmp`),
  INDEX `fk_Employees_Departements_idx` (`Departements_idDep` ASC) VISIBLE,
  INDEX `fk_Employees_Supervisors1_idx` (`Supervisors_idSup` ASC) VISIBLE,
  CONSTRAINT `fk_Employees_Departements`
    FOREIGN KEY (`Departements_idDep`)
    REFERENCES `hrtracker`.`departements` (`idDep`),
  CONSTRAINT `fk_Employees_Supervisors1`
    FOREIGN KEY (`Supervisors_idSup`)
    REFERENCES `hrtracker`.`supervisors` (`idSup`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/
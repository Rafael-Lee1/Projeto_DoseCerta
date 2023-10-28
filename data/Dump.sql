CREATE DATABASE  IF NOT EXISTS `dosecerta` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `dosecerta`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: dosecerta
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tbl_administracao`
--

DROP TABLE IF EXISTS `tbl_administracao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_administracao` (
  `IdAdm` int NOT NULL AUTO_INCREMENT,
  `DescriAdm` varchar(50) NOT NULL,
  PRIMARY KEY (`IdAdm`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_administracao`
--

LOCK TABLES `tbl_administracao` WRITE;
/*!40000 ALTER TABLE `tbl_administracao` DISABLE KEYS */;
INSERT INTO `tbl_administracao` VALUES (1,'Antes da Refeicao'),(2,'Depois da Refeicao');
/*!40000 ALTER TABLE `tbl_administracao` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_medicamentos`
--

DROP TABLE IF EXISTS `tbl_medicamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_medicamentos` (
  `IdMedicamento` int NOT NULL AUTO_INCREMENT,
  `NomeMedicamento` varchar(250) NOT NULL,
  PRIMARY KEY (`IdMedicamento`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_medicamentos`
--

LOCK TABLES `tbl_medicamentos` WRITE;
/*!40000 ALTER TABLE `tbl_medicamentos` DISABLE KEYS */;
INSERT INTO `tbl_medicamentos` VALUES (1,'Aspirina'),(2,'Ibuprofeno'),(3,'Paracetamol'),(4,'Amoxicilina'),(5,'Omeprazol'),(6,'Metformina'),(7,'Simvastatina'),(8,'Lisinopril'),(9,'Ciprofloxacino'),(10,'Atorvastatina'),(11,'Rivotril'),(12,'Diazepam'),(13,'Loratadina'),(14,'Sertralina'),(15,'Escitalopram'),(16,'Prednisona'),(17,'Clonazepam'),(18,'Metronidazol'),(19,'Tramadol'),(20,'Cetirizina'),(21,'Losartan'),(22,'Pantoprazol'),(23,'Atenolol'),(24,'Fluoxetina'),(25,'Warfarina'),(26,'Furosemida'),(27,'Tadalafila'),(28,'Levotiroxina'),(29,'Sildenafil'),(30,'Amiodarona'),(31,'Alprazolam'),(32,'Amlodipina'),(33,'Metoprolol'),(35,'Dexametasona'),(36,'Lorazepam'),(37,'Cefalexina'),(38,'Ceftriaxona'),(39,'Insulina'),(40,'Mirtazapina'),(41,'Paroxetina'),(42,'Metilfenidato'),(43,'Ranitidina'),(44,'Venlafaxina'),(45,'Quetiapina'),(46,'Doxiciclina'),(47,'Carbamazepina'),(48,'Gabapentina'),(49,'Enalapril'),(50,'Aripiprazol');
/*!40000 ALTER TABLE `tbl_medicamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_ocorrencias`
--

DROP TABLE IF EXISTS `tbl_ocorrencias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_ocorrencias` (
  `IdOcorrencia` int NOT NULL AUTO_INCREMENT,
  `UsuarioId` int NOT NULL,
  `MedicamentoId` int NOT NULL,
  `PosologiaId` int NOT NULL,
  `AdmId` int NOT NULL,
  `Quantidade` int NOT NULL,
  `SemanaId` int NOT NULL,
  `Hora` time NOT NULL,
  PRIMARY KEY (`IdOcorrencia`),
  KEY `UsuarioId` (`UsuarioId`),
  KEY `MedicamentoId` (`MedicamentoId`),
  KEY `PosologiaId` (`PosologiaId`),
  KEY `AdmId` (`AdmId`),
  KEY `SemanaId` (`SemanaId`),
  CONSTRAINT `tbl_ocorrencias_ibfk_1` FOREIGN KEY (`UsuarioId`) REFERENCES `tbl_usuarios` (`IdUsuario`),
  CONSTRAINT `tbl_ocorrencias_ibfk_2` FOREIGN KEY (`MedicamentoId`) REFERENCES `tbl_medicamentos` (`IdMedicamento`),
  CONSTRAINT `tbl_ocorrencias_ibfk_3` FOREIGN KEY (`PosologiaId`) REFERENCES `tbl_posologia` (`IdPosologia`),
  CONSTRAINT `tbl_ocorrencias_ibfk_4` FOREIGN KEY (`AdmId`) REFERENCES `tbl_administracao` (`IdAdm`),
  CONSTRAINT `tbl_ocorrencias_ibfk_5` FOREIGN KEY (`SemanaId`) REFERENCES `tbl_semana` (`IdSemana`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_ocorrencias`
--

LOCK TABLES `tbl_ocorrencias` WRITE;
/*!40000 ALTER TABLE `tbl_ocorrencias` DISABLE KEYS */;
INSERT INTO `tbl_ocorrencias` VALUES (1,100,14,2,2,2,4,'02:00:00'),(2,85,43,1,2,1,2,'13:00:00'),(3,87,13,4,2,2,8,'05:00:00'),(4,95,29,2,1,2,2,'07:00:00'),(5,26,50,3,1,1,7,'00:00:00'),(6,25,23,3,1,1,1,'22:00:00'),(7,68,32,2,1,1,5,'07:00:00'),(8,8,1,1,1,2,3,'17:00:00'),(9,64,41,1,2,2,5,'06:00:00'),(10,4,7,4,2,2,5,'04:00:00'),(11,27,48,4,2,1,4,'22:00:00'),(12,1,18,1,2,2,5,'00:00:00'),(13,94,6,4,2,1,7,'17:00:00'),(14,22,31,3,1,1,6,'09:00:00'),(15,47,3,2,1,2,6,'11:00:00'),(16,29,39,4,2,1,7,'18:00:00'),(17,91,1,3,1,2,3,'03:00:00'),(18,100,22,4,2,1,2,'10:00:00'),(19,1,6,1,2,1,8,'00:00:00'),(20,96,31,2,1,1,5,'22:00:00'),(21,63,31,3,2,2,6,'16:00:00'),(22,8,48,1,1,1,8,'18:00:00'),(23,52,10,1,2,1,4,'23:00:00'),(24,80,43,4,2,1,5,'13:00:00'),(25,84,7,4,1,2,5,'08:00:00'),(26,79,32,1,1,2,2,'18:00:00'),(27,33,21,3,2,2,7,'21:00:00'),(28,76,25,2,1,1,8,'05:00:00'),(29,36,26,4,1,1,8,'05:00:00'),(30,57,9,1,2,2,8,'08:00:00'),(31,82,49,4,1,1,4,'00:00:00'),(32,17,39,4,2,1,5,'14:00:00'),(33,97,11,2,2,1,2,'00:00:00'),(34,82,15,1,2,2,2,'08:00:00'),(35,29,40,2,1,1,7,'00:00:00'),(36,74,42,1,1,1,6,'10:00:00'),(37,90,38,1,1,1,8,'06:00:00'),(38,90,4,1,2,2,4,'01:00:00'),(39,55,9,4,1,2,8,'12:00:00'),(40,20,45,3,1,1,1,'20:00:00'),(41,92,30,1,1,2,5,'15:00:00'),(42,56,49,1,1,1,5,'23:00:00'),(43,64,32,3,1,1,2,'15:00:00'),(44,47,12,2,1,1,5,'11:00:00'),(45,36,13,2,2,1,8,'12:00:00'),(46,76,32,2,2,2,5,'11:00:00'),(47,97,43,1,2,1,4,'20:00:00'),(48,78,48,1,1,2,3,'19:00:00'),(49,29,28,3,1,1,6,'19:00:00'),(51,29,45,2,1,2,4,'00:00:00'),(52,64,28,1,2,1,7,'21:00:00'),(53,48,8,2,2,2,2,'21:00:00'),(54,19,27,2,2,2,2,'07:00:00'),(55,68,49,3,2,2,1,'02:00:00'),(56,56,31,3,2,2,8,'00:00:00'),(57,21,30,2,1,2,1,'00:00:00'),(58,53,27,4,2,2,6,'08:00:00'),(59,63,20,4,2,1,2,'18:00:00'),(60,59,45,3,2,1,6,'02:00:00'),(61,85,13,4,2,2,3,'12:00:00'),(62,91,18,2,1,2,3,'20:00:00'),(63,14,19,4,1,2,6,'22:00:00'),(64,81,48,2,2,1,4,'04:00:00'),(65,9,39,4,1,2,2,'23:00:00'),(66,92,33,4,2,2,8,'01:00:00'),(67,42,4,3,1,1,3,'23:00:00'),(68,81,1,4,1,1,4,'11:00:00'),(69,74,10,4,1,2,7,'02:00:00'),(70,49,9,1,1,2,5,'18:00:00'),(71,81,46,2,1,1,2,'13:00:00'),(72,100,24,2,2,2,6,'23:00:00'),(73,64,48,3,1,2,1,'06:00:00'),(74,78,9,4,1,1,2,'17:00:00'),(75,76,13,1,1,1,7,'12:00:00'),(76,12,33,2,1,2,2,'13:00:00'),(77,44,37,2,1,2,1,'08:00:00'),(78,83,23,2,1,1,7,'02:00:00'),(79,14,48,1,2,1,7,'03:00:00'),(80,1,36,1,1,1,8,'08:00:00'),(81,82,4,1,1,2,7,'08:00:00'),(82,55,50,3,1,2,5,'09:00:00');
/*!40000 ALTER TABLE `tbl_ocorrencias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_posologia`
--

DROP TABLE IF EXISTS `tbl_posologia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_posologia` (
  `IdPosologia` int NOT NULL AUTO_INCREMENT,
  `DescriPosologia` varchar(50) NOT NULL,
  PRIMARY KEY (`IdPosologia`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_posologia`
--

LOCK TABLES `tbl_posologia` WRITE;
/*!40000 ALTER TABLE `tbl_posologia` DISABLE KEYS */;
INSERT INTO `tbl_posologia` VALUES (1,'Comprimido'),(2,'Capsula'),(3,'Injecao'),(4,'Gotas');
/*!40000 ALTER TABLE `tbl_posologia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_semana`
--

DROP TABLE IF EXISTS `tbl_semana`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_semana` (
  `IdSemana` int NOT NULL AUTO_INCREMENT,
  `DescriSemana` varchar(50) NOT NULL,
  PRIMARY KEY (`IdSemana`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_semana`
--

LOCK TABLES `tbl_semana` WRITE;
/*!40000 ALTER TABLE `tbl_semana` DISABLE KEYS */;
INSERT INTO `tbl_semana` VALUES (1,'Todos os dias'),(2,'Final de Semana'),(3,'Segunda a Sexta'),(4,'Segunda'),(5,'Terca'),(6,'Quarta'),(7,'Quinta'),(8,'Sexta');
/*!40000 ALTER TABLE `tbl_semana` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_usuarios`
--

DROP TABLE IF EXISTS `tbl_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_usuarios` (
  `IdUsuario` int NOT NULL AUTO_INCREMENT,
  `Nome` varchar(100) NOT NULL,
  `Email` varchar(150) NOT NULL,
  `Senha` varchar(20) NOT NULL,
  `Telefone` varchar(20) NOT NULL,
  PRIMARY KEY (`IdUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_usuarios`
--

LOCK TABLES `tbl_usuarios` WRITE;
/*!40000 ALTER TABLE `tbl_usuarios` DISABLE KEYS */;
INSERT INTO `tbl_usuarios` VALUES (1,'Gabriela Gomes','gabriela.gomes@proz.com.br','9LeSHX','96318985805'),(2,'Beatriz Fernandes','beatriz.fernandes@proz.com.br','S8fWOd','96536688945'),(3,'Paulo Almeida','paulo.almeida@proz.com.br','kHoJLd','96186727690'),(4,'Rafael Fernandes','rafael.fernandes@proz.com.br','Ubpu3B','92308264360'),(5,'Bruna Oliveira','bruna.oliveira@proz.com.br','9ffGAd','98822154865'),(6,'Paulo Oliveira','paulo.oliveira@proz.com.br','3yHIzf','96743418553'),(7,'Ana Costa','ana.costa@proz.com.br','Z3zxZ8','93525221309'),(8,'Bruna Fernandes','bruna.fernandes@proz.com.br','eA2O0d','95790354228'),(9,'Joao Fernandes','joao.fernandes@proz.com.br','FQE23r','91294106049'),(10,'Ana Pereira','ana.pereira@proz.com.br','k8Prn1','99402943233'),(11,'Pedro Oliveira','pedro.oliveira@proz.com.br','MBVciq','98048666801'),(12,'Beatriz Oliveira','beatriz.oliveira@proz.com.br','x0NJLx','93751516000'),(13,'Lucas Fernandes','lucas.fernandes@proz.com.br','E86kwC','97770755622'),(14,'Maria Ribeiro','maria.ribeiro@proz.com.br','MR5vnu','91259892137'),(15,'Lucas Costa','lucas.costa@proz.com.br','4DFIrl','92080298464'),(16,'Paulo Gomes','paulo.gomes@proz.com.br','yWQ9KZ','90736191289'),(17,'Lucas Ribeiro','lucas.ribeiro@proz.com.br','hZCRqm','96120558926'),(18,'Paulo Pereira','paulo.pereira@proz.com.br','WSUNAB','99204488752'),(19,'Bruna Almeida','bruna.almeida@proz.com.br','eJjFok','92334133900'),(20,'Pedro Ribeiro','pedro.ribeiro@proz.com.br','1lUBYd','92366276064'),(21,'Gabriela Costa','gabriela.costa@proz.com.br','v9PNpq','98010903243'),(22,'Bruna Pereira','bruna.pereira@proz.com.br','y5lDGj','96958766943'),(23,'Paulo Fernandes','paulo.fernandes@proz.com.br','pS3kme','95713802656'),(24,'Pedro Silva','pedro.silva@proz.com.br','XOmk25','95896874297'),(25,'Joao Costa','joao.costa@proz.com.br','UgaMil','91421494252'),(26,'Ana Gomes','ana.gomes@proz.com.br','2ZV7W5','91739371889'),(27,'Maria Carvalho','maria.carvalho@proz.com.br','pJ0hHn','95418674373'),(28,'Bruna Ribeiro','bruna.ribeiro@proz.com.br','1ANOlu','98061983999'),(29,'Lucas Carvalho','lucas.carvalho@proz.com.br','CxX2rx','95585314395'),(30,'Gabriela Fernandes','gabriela.fernandes@proz.com.br','hBajWz','90999459857'),(31,'Beatriz Silva','beatriz.silva@proz.com.br','Z7pYaJ','90895721785'),(32,'Paulo Carvalho','paulo.carvalho@proz.com.br','Sti8fd','91183097438'),(33,'Lucas Pereira','lucas.pereira@proz.com.br','nDqLwx','92413660856'),(34,'Paulo Ribeiro','paulo.ribeiro@proz.com.br','fShDis','94801987469'),(35,'Ana Almeida','ana.almeida@proz.com.br','3m17gg','93505418592'),(36,'Ana Carvalho','ana.carvalho@proz.com.br','Wb1NEG','96027050098'),(37,'Gabriela Oliveira','gabriela.oliveira@proz.com.br','qEjkpv','94566605527'),(38,'Maria Silva','maria.silva@proz.com.br','xgM8Z7','90211762066'),(39,'Pedro Santos','pedro.santos@proz.com.br','dwR76Y','92031400353'),(40,'Lucas Almeida','lucas.almeida@proz.com.br','oBHstD','93396766601'),(41,'Beatriz Carvalho','beatriz.carvalho@proz.com.br','iafuar','97975146687'),(42,'Rafael Almeida','rafael.almeida@proz.com.br','kduUfl','91831982845'),(43,'Maria Gomes','maria.gomes@proz.com.br','eNScm0','97130217466'),(44,'Paulo Santos','paulo.santos@proz.com.br','TD0SIC','92382984672'),(45,'Gabriela Silva','gabriela.silva@proz.com.br','bixtIt','98343666681'),(46,'Lucas Oliveira','lucas.oliveira@proz.com.br','KPFZZC','91885137656'),(47,'Ana Ribeiro','ana.ribeiro@proz.com.br','lqCUyc','94645732846'),(48,'Bruna Silva','bruna.silva@proz.com.br','YCssml','96554959670'),(49,'Gabriela Ribeiro','gabriela.ribeiro@proz.com.br','N5zq6q','99390956813'),(50,'Maria Pereira','maria.pereira@proz.com.br','jtJkxI','92895758861'),(51,'Pedro Costa','pedro.costa@proz.com.br','XQAqgK','98012450907'),(52,'Joao Gomes','joao.gomes@proz.com.br','bqQYvK','99432325665'),(53,'Ana Santos','ana.santos@proz.com.br','VjUwM6','97271308038'),(54,'Maria Almeida','maria.almeida@proz.com.br','0oaoFE','95433786800'),(55,'Beatriz Almeida','beatriz.almeida@proz.com.br','LjdL0w','90109293542'),(56,'Rafael Santos','rafael.santos@proz.com.br','tBP3NJ','91282689058'),(57,'Maria Santos','maria.santos@proz.com.br','VT9dpP','99115262965'),(58,'Joao Silva','joao.silva@proz.com.br','Rk7F5z','93105183173'),(59,'Gabriela Santos','gabriela.santos@proz.com.br','KKy1PU','94633506383'),(60,'Joao Carvalho','joao.carvalho@proz.com.br','uFu60x','97119097806'),(61,'Maria Oliveira','maria.oliveira@proz.com.br','IIdDPu','98097008749'),(62,'Beatriz Costa','beatriz.costa@proz.com.br','O3xmyb','98716311921'),(63,'Ana Silva','ana.silva@proz.com.br','ag5TQF','93185944907'),(64,'Lucas Silva','lucas.silva@proz.com.br','14hBQN','91093868814'),(65,'Pedro Fernandes','pedro.fernandes@proz.com.br','3YBd9i','93455353038'),(66,'Rafael Silva','rafael.silva@proz.com.br','3sefTv','98516015524'),(67,'Gabriela Almeida','gabriela.almeida@proz.com.br','owgtqq','93025068610'),(68,'Lucas Gomes','lucas.gomes@proz.com.br','cYc2m2','99244776359'),(69,'Ana Oliveira','ana.oliveira@proz.com.br','KV9yWU','92742329212'),(70,'Beatriz Pereira','beatriz.pereira@proz.com.br','KHuenv','98381978523'),(71,'Rafael Pereira','rafael.pereira@proz.com.br','PsieJu','99187195700'),(72,'Beatriz Gomes','beatriz.gomes@proz.com.br','PLUlY6','92271074952'),(73,'Paulo Silva','paulo.silva@proz.com.br','b3KsMn','95503932361'),(74,'Joao Almeida','joao.almeida@proz.com.br','t5QbPO','99773925469'),(75,'Rafael Oliveira','rafael.oliveira@proz.com.br','RxALEb','92682747882'),(76,'Maria Fernandes','maria.fernandes@proz.com.br','wwPAbc','97241438683'),(77,'Bruna Costa','bruna.costa@proz.com.br','2mld9l','90220560798'),(78,'Joao Pereira','joao.pereira@proz.com.br','Qv6Pny','95188440152'),(79,'Bruna Gomes','bruna.gomes@proz.com.br','KSfv5Q','94929503518'),(80,'Pedro Pereira','pedro.pereira@proz.com.br','TgSmpo','92396257472'),(81,'Joao Ribeiro','joao.ribeiro@proz.com.br','fI6gfL','99515765000'),(82,'Bruna Carvalho','bruna.carvalho@proz.com.br','7jJFr7','95769928064'),(83,'Joao Santos','joao.santos@proz.com.br','jwhXFB','92307053764'),(84,'Maria Costa','maria.costa@proz.com.br','aYZe8o','92136705071'),(85,'Pedro Almeida','pedro.almeida@proz.com.br','bYKxjl','95057293979'),(86,'Pedro Carvalho','pedro.carvalho@proz.com.br','XiNwxL','91719553767'),(87,'Beatriz Ribeiro','beatriz.ribeiro@proz.com.br','d7VO5J','96160105050'),(88,'Rafael Gomes','rafael.gomes@proz.com.br','Y0h9xQ','90246890286'),(89,'Pedro Gomes','pedro.gomes@proz.com.br','txf6YJ','94530161248'),(90,'Rafael Ribeiro','rafael.ribeiro@proz.com.br','XW8bJ4','95202429408'),(91,'Gabriela Carvalho','gabriela.carvalho@proz.com.br','W3r23F','92939000861'),(92,'Beatriz Santos','beatriz.santos@proz.com.br','nybW68','97593849418'),(93,'Ana Fernandes','ana.fernandes@proz.com.br','N2HKA7','90489294469'),(94,'Paulo Costa','paulo.costa@proz.com.br','z5VjEI','93808577637'),(95,'Rafael Carvalho','rafael.carvalho@proz.com.br','b8jvQw','92205310092'),(96,'Joao Oliveira','joao.oliveira@proz.com.br','er8KI9','98479946899'),(97,'Bruna Santos','bruna.santos@proz.com.br','TwGb96','91133274818'),(98,'Lucas Santos','lucas.santos@proz.com.br','3tfMHZ','97546660712'),(99,'Gabriela Pereira','gabriela.pereira@proz.com.br','F3OAXS','94631687623'),(100,'Rafael Costa','rafael.costa@proz.com.br','KxbnDL','91870029460');
/*!40000 ALTER TABLE `tbl_usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-18 11:00:01

CREATE DATABASE `db_tienda`;

USE db_tienda;

CREATE TABLE `ta_carrito` (
  `ca_id` int(11) NOT NULL,
  `ca_usuario` varchar(15) NOT NULL,
  `ca_producto` varchar(10) DEFAULT NULL,
  `ca_cantidad` int(11) DEFAULT NULL,
  `ca_precio` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `ta_datos` (
  `da_usuario` varchar(15) NOT NULL,
  `da_telefono` varchar(12) NOT NULL,
  `da_correo` varchar(50) NOT NULL,
  `da_direccion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `ta_productos` (
  `pro_id` varchar(10) NOT NULL,
  `pro_nombre` varchar(50) DEFAULT NULL,
  `pro_precio` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


INSERT INTO `ta_productos` (`pro_id`, `pro_nombre`, `pro_precio`) VALUES
('0001', 'Pintura amarilla 75ml', '1990'),
('0002', 'Pintura azul 75ml', '1990'),
('0003', 'Pintura morada 75ml', '1990'),
('0004', 'Pintura naranja 75ml', '1990'),
('0005', 'Pintura roja 75ml', '1990'),
('0006', 'Pintura verde 75ml', '1990'),
('0007', 'Tempera azul 500ml', '2990'),
('0008', 'Tempera celeste 500ml', '2990'),
('0009', 'Tempera morada 500ml', '2990'),
('0010', 'Tempera negra 500ml', '2990'),
('0011', 'Tempera verde agua 500ml', '2990'),
('0012', 'Tempera verde 500ml', '2990'),
('0013', 'Pack 12 temperas 15ml', '2180'),
('0014', 'Mezclador', '990'),
('0015', 'Pack 12 pinceles', '1500');


CREATE TABLE `ta_usuario` (
  `us_id` varchar(15) NOT NULL,
  `us_nombre` varchar(15) NOT NULL,
  `us_apellido` varchar(15) NOT NULL,
  `us_contrasena` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



ALTER TABLE `ta_carrito`
  ADD PRIMARY KEY (`ca_id`),
  ADD KEY `ca_usuario` (`ca_usuario`),
  ADD KEY `ca_producto` (`ca_producto`);


ALTER TABLE `ta_datos`
  ADD PRIMARY KEY (`da_usuario`);


ALTER TABLE `ta_productos`
  ADD PRIMARY KEY (`pro_id`);


ALTER TABLE `ta_usuario`
  ADD PRIMARY KEY (`us_id`);


ALTER TABLE `ta_carrito`
  MODIFY `ca_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;


ALTER TABLE `ta_carrito`
  ADD CONSTRAINT `ta_carrito_ibfk_1` FOREIGN KEY (`ca_usuario`) REFERENCES `ta_usuario` (`us_id`),
  ADD CONSTRAINT `ta_carrito_ibfk_2` FOREIGN KEY (`ca_producto`) REFERENCES `ta_productos` (`pro_id`);


ALTER TABLE `ta_datos`
  ADD CONSTRAINT `ta_datos_ibfk_1` FOREIGN KEY (`da_usuario`) REFERENCES `ta_usuario` (`us_id`);
COMMIT;










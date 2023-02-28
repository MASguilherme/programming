CREATE TABLE cliente_dois (
  id_cliente_cliente int NOT NULL AUTO_INCREMENT,
  s_nome_cliente varchar(30) NOT NULL,
  s_cpf_cliente varchar(11) NOT NULL,
  d_nasc_cliente datetime DEFAULT NULL,
	i_tipo_cliente int NOT NULL,
  PRIMARY KEY (id_cliente_cliente),
  KEY fk_tipocliente_dois (i_tipo_cliente),
  CONSTRAINT fk_tipocliente_dois FOREIGN KEY (i_tipo_cliente)
  REFERENCES tipocliente (id_tipo_cliente_tipocliente)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
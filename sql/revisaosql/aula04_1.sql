CREATE TABLE tipocliente(
	id_tipo_cliente_tipocliente INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    s_descricao_tipo_cliente VARCHAR(30) NOT NULL
);

ALTER TABLE cliente 
ADD CONSTRAINT fk_tipocliente FOREIGN KEY (i_tipo_cliente) 
REFERENCES tipocliente (id_tipo_cliente_tipocliente);
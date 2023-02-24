CREATE TABLE cliente(
	id_cliente_cliente INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    s_nome_cliente VARCHAR(30) NOT NULL,
    s_cpf_cliente VARCHAR(11) NOT NULL,
    d_nasc_cliente DATETIME
);

ALTER TABLE cliente ADD(i_tipo_cliente INT NOT NULL);
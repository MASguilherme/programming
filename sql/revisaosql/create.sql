/* CREATE TABLE cliente */
CREATE TABLE cliente(
	int_id_cliente INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    s_nome_cliente VARCHAR(30) NOT NULL,
    s_cpf_cliente VARCHAR(15),
    dt_nasc_cliente DATETIME,
    int_tipo_cliente INT
);

CREATE TABLE clienteCopia (
	int_id_cliente INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    s_nome_cliente VARCHAR(30) NOT NULL,
    s_cpf_cliente VARCHAR(15),
    dt_nasc_cliente DATETIME,
    int_tipo_cliente INT
);

/*CREATE TABLE tipoCliente */
CREATE TABLE tipoCliente(
	int_id_tipoCliente INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    s_descricao_tipoCliente VARCHAR(30) NOT NULL
);

/* criando a table venda */
CREATE TABLE venda(
	i_venda_venda INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    i_cliente_cliente INT NOT NULL,
    d_data_venda DATE,
    f_valor_venda FLOAT
);
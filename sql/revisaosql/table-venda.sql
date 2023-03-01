/* criando a table venda */
CREATE TABLE venda(
	i_venda_venda INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    i_cliente_cliente INT NOT NULL,
    d_data_venda DATE,
    f_valor_venda FLOAT
);

/* adicionando a chave estrangeira */
ALTER TABLE venda 
ADD CONSTRAINT fk_i_cliente_cliente FOREIGN KEY (i_cliente_cliente)
REFERENCES cliente(id_cliente_cliente);

/* insert valores na table venda */
INSERT INTO venda VALUES(01, 01, '2001-08-19', 200);
INSERT INTO venda VALUES(02, 02, '2001-07-19', 100.26);
INSERT INTO venda VALUES(03, 03, '2020-05-20', 150.84);
INSERT INTO venda VALUES(04, 04, '2021-09-07', 300.50);
INSERT INTO venda VALUES(05, 05, '2022-07-01', 200.26);
INSERT INTO venda VALUES(06, 06, '2023-03-05', 200.30);
INSERT INTO venda VALUES(07, 02, '2001-07-19', 100.26);
INSERT INTO venda VALUES(08, 02, '2001-07-19', 100.26);
INSERT INTO venda VALUES(09, 02, '2001-07-19', 100.26);
INSERT INTO venda VALUES(10, 02, '2001-07-19', 100.26);
SELECT * FROM venda;
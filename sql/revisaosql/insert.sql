/* DML - INSET */

/* INSERT INTO TABLE tipocliente */
INSERT INTO tipoCliente VALUES(01, 'cliente bronze');
INSERT INTO tipoCliente VALUES(02, 'cliente platinum');
INSERT INTO tipoCliente VALUES(03, 'cliente premium');

/* DQL SELECT */
SELECT * FROM tipocliente;

/* INSERT INTO TABLE cliente */
INSERT INTO cliente (
int_id_cliente,
s_nome_cliente,
s_cpf_cliente,
dt_nasc_cliente,
int_tipo_cliente
) VALUES (
	01,
    'Guilherme',
    '12345678910',
    '2001-03-12',
    02
);
INSERT INTO cliente VALUES (02, 'João', '15948726312', '1547-02-02', 01);
INSERT INTO cliente VALUES (03, 'Augusto', '15948726312', '1547-02-02', 02);
INSERT INTO cliente VALUES (04, 'Weber', '15948726312', '1547-02-02', 03);
INSERT INTO cliente VALUES (05, 'Miguel', '15948726312', '1547-02-02', 01);
INSERT INTO cliente VALUES (06, 'Felipe', '15948726312', '1547-02-02', 02);
INSERT INTO cliente VALUES (07, 'Matis', '15948726312', '1547-02-02', 03);
INSERT INTO cliente VALUES (8, 'Alberto', '15948726312', '1547-02-02', 01);

/*DQL SELECT */
SELECT * FROM cliente;

/* INSERT clienteCopia */
INSERT INTO clientecopia VALUES (01, 'João', '15948726312', '1547-02-02', 01);
INSERT INTO clientecopia VALUES (02, 'Augusto', '15948726312', '1547-02-02', 02);
INSERT INTO clientecopia VALUES (03, 'Weber', '15948726312', '1547-02-02', 03);
INSERT INTO clientecopia VALUES (04, 'Miguel', '15948726312', '1547-02-02', 01);
INSERT INTO clientecopia VALUES (05, 'Felipe', '15948726312', '1547-02-02', 02);
INSERT INTO clientecopia VALUES (06, 'Matis', '15948726312', '1547-02-02', 03);
INSERT INTO clientecopia VALUES (07, 'Alberto', '15948726312', '1547-02-02', 01);

/*DQL SELECT */
SELECT * FROM clientecopia;

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


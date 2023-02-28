/* DML - INSET */

/* INSERT INTO TABLE tipocliente */
INSERT INTO tipocliente (s_descricao_tipo_cliente, id_tipo_cliente_tipocliente) 
VALUE('cliente xarope', 03);
INSERT INTO tipocliente VALUES(04, 'cliente platinum');
INSERT INTO tipocliente (id_tipo_cliente_tipocliente, s_descricao_tipo_cliente) VALUES (05, 'cliente prime');
INSERT INTO tipocliente VALUES(06, 'cliente prime');
INSERT INTO tipocliente VALUES(07, 'cliente platinum');
INSERT INTO tipocliente VALUES(08, 'cliente prime');
INSERT INTO tipocliente VALUES(09, 'cliente platinum');
INSERT INTO tipocliente VALUES(10, 'cliente prime');

/* DQL SELECT */
SELECT * FROM tipocliente;

/* INSERT INTO TABLE cliente */

INSERT INTO cliente (
id_cliente_cliente,
s_nome_cliente,
s_cpf_cliente,
d_nasc_cliente,
i_tipo_cliente
) VALUES (
	01,
    'Guilherme',
    '12345678910',
    '2001-03-12',
    01
);


INSERT INTO cliente VALUES (04, 'João', '15948726312', '1547-02-02', 04);
INSERT INTO cliente VALUES (05, 'Augusto', '15948726312', '1547-02-02', 05);
INSERT INTO cliente VALUES (06, 'Weber', '15948726312', '1547-02-02', 06);
INSERT INTO cliente VALUES (07, 'Miguel', '15948726312', '1547-02-02', 07);
INSERT INTO cliente VALUES (08, 'Felipe', '15948726312', '1547-02-02', 08);
INSERT INTO cliente VALUES (09, 'Matis', '15948726312', '1547-02-02', 09);
INSERT INTO cliente VALUES (10, 'Alberto', '15948726312', '1547-02-02', 10);


/*DQL SELECT */
SELECT * FROM cliente;

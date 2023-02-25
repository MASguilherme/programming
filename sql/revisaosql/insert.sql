/* DML - INSET */

INSERT INTO cliente VALUE(02, 'bruno', '50878925811', '1385-05-31', 02);

INSERT INTO tipocliente VALUE(02, 'cliente feio');

INSERT INTO tipocliente (s_descricao_tipo_cliente, id_tipo_cliente_tipocliente) VALUE('cliente xarope', 03);

INSERT INTO cliente (i_tipo_cliente, d_nasc_cliente, s_cpf_cliente, s_nome_cliente, id_cliente_cliente) 
VALUE(03, '2001-02-12', '20316845687', 'SAULO', 03);

/* DQL SELECT */

SELECT * FROM tipocliente;
SELECT * FROM cliente;
/* VIEW */
/* VIEW que retorna cpf de respectivo cliente */
CREATE VIEW cpf_clientes AS
SELECT s_nome_cliente, s_cpf_cliente FROM cliente;

SELECT * FROM cpf_clientes;

/* VIEW para extrair aniversariantes do mês */
CREATE VIEW aniversariantes_do_mes AS
	SELECT 
		s_nome_cliente AS 'Nome',
		DAY(dt_nasc_cliente) AS 'Aniversariantes do mês'
	FROM cliente 
		WHERE MONTH(dt_nasc_cliente) = MONTH(CURDATE());
        
SELECT * FROM aniversariantes_do_mes;
	
    
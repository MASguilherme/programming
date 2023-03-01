/* HAVING */

SELECT YEAR(d_data_venda), COUNT(d_data_venda)
FROM venda
GROUP BY d_data_venda HAVING YEAR(d_data_venda) > 2001;	
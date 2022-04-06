# salvador_caetano

## Exercise List
```
1 - Criar uma app em VueJS 2, com duas páginas e respectivo routting para navegar entre ambas;
```
```
2 - Na primeira página (entrada) ter duas coluna, cada uma com um card com border e background sendo que:
    - Numa das colunas deve apresentar a lista de marcas e respectivos modelos, sendo que em cada modelo deve apresentar o número de unidades
        Toyota
            Auris (5)
            Corolla (15)
            …
    - Na outra coluna deve apresentar os modelos, ordenados de forma decrescente pela data de release e com a seguinte estrutura
            i. Auris – Toyota (5);
```
```
3 - Na segunda página deve ter dois filtros (data e quantidade mínima) e apresentar uma tabela de modelos com as seguintes regras
    - Colunas: Marca, Modelo, data de release, idade desde a data de release (diferença entre a data do filtro e a data de release) e numero de viaturas;
    - Ao mudar a data do filtro deve atualizar a idade desde a data de release e, se esta for superior à data escolhida o modelo não aparecer
    - Ao mudar a quantidade mínima de viaturas deve mostrar apenas os modelos que tenham uma quantidade igual ou superior
    - Ter um botão de reset do filtro que reponha todos os modelos
```
/* Based on Artificial Intelligence for Games from Ian Millington (Author), John Funge (Author) */
/**
 * Usando como base o _Grafo e seu conteudo.
 * Faz uma procura em todas as conexoes dos nos disponiveis procurando a menor ligacao
 * @param {Grafo} _grafo
 * @param {type} _inicio
 * @param {type} _fim
 * @returns { Array | nulo }
 */
function Dijkstra(_grafo, _inicio, _fim) {

//    console.log('new dijkstra', arguments);
//    console.log('new dijkstra', _inicio,_fim);
    var t = new Date();

    var aberta = new Caminho();
    var fechada = new Caminho();
    var i = 0;
    var m = 0;
    var inicial = new No();

    inicial.dado = _inicio;
    inicial.conexoes = null;
    inicial.total = 0;


    aberta.add(inicial);

    var atual, conexoes, final, custoFinal, noFinal, c = new Conexoes();

    while (aberta.length()) {
        atual = aberta.menorNo();

        if (_fim === atual.dado)
            break;

        conexoes = _grafo.pegarConexoesNo(atual.dado);

//        console.log( atual );
        c = null;i = 0;
        m = conexoes.length;

        for (i; i < m; i++) {
            c = conexoes[i];

            if (c.paraNo.dado !== atual.dado)
                final = c.paraNo;
            else
                final = c.doNo;

            custoFinal = atual.total + c.custo;

//            console.log(i, final);
            if (fechada.contem(final)) {
//                console.log('tem na fechada ');
                continue;
            }
            else if (aberta.contem(final)) {
//                console.log('tem na aberta ');
                final = aberta.procurar(final);

                if (final.total <= custoFinal)
                    continue;
            }
            else {
//                if( final.dado === {x:100,y:150}) console.log('novo\n-', c,'\n-F',final,'\n-A',atual,'|\n');
                noFinal = new No();
                noFinal.dado = final.dado;
                noFinal.conexoes = [new Conexoes( atual, final, c.custo)];
                noFinal.total = custoFinal;


                if (aberta.contem(final) === false)
                    aberta.add(noFinal);
            }
        }
        aberta.sub(atual)
        fechada.add(atual)
//        console.log('atual',atual.dado,atual);
//        console.log('atual aberta caminho ', aberta.caminho());
//        console.log('atual fechada caminho ', fechada.caminho());
//        console.log('add', aberta.sub(atual));
//        console.log('sub', fechada.add(atual));
//        console.log('aberta caminho ', aberta.caminho());
//        console.log('fechada caminho ', fechada.caminho());
    }// fim while

    if (atual.dado !== _fim) {
        return null;
    }//fim if
    else {
        var control = 10;
        var caminho = [];
//        while ( atual !==null ) {
        while ( control-->0 ) {
            caminho.push(atual);
//            console.log( atual );
            if( atual.conexoes )
                atual = atual.conexoes[0].doNo;
            else break;
        }

        console.log('tempo:', new Date()-t);
        return caminho;
    }//fim else

}// fim dijkstra

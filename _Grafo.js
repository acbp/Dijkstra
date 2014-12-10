/**
 * Conjunto de nos( objetos ) conectados entre si,
 * sendo que cada conexao tem um peso
 * @returns {Grafo}
 */
function Grafo() {
    var conexoes = [];
    var nos = [];

    var l = 0;
    this.pegarConexoesNo = function(no) {
        var i = 0
                , con = conexoes
                , m = con.length
                , c = 0
                , a = [];
        for (i; i < m; i++) {
            if(con[i].doNo)
            if (con[i].doNo.dado === no)
                a[c++] = con[i];
            if(con[i].paraNo)
            if (con[i].paraNo.dado === no)
                a[c++] = con[i];
        }
        return (a.length > 0 ? a : (a = null));
    };
    this.criarConexao = function(de, para, custo) {
        if( !de || !para )return;

        conexoes.push(new Conexoes());

        conexoes[l].custo = custo;
        conexoes[l].doNo = (de instanceof No) ? de : existeNo(de);
        conexoes[l].paraNo = (para instanceof No) ? para : existeNo(para);

        conexoes[l].doNo.conexoes.push(conexoes[l]);
        conexoes[l].paraNo.conexoes.push(conexoes[l]);

        l++;
    };
    this.conexoes = function() {
        return conexoes.concat();
    };

    function existeNo(no) {
        var i = 0, m = nos.length;

        for (i; i < m; i++) {
                if (nos[i] === no || nos[i].dado === no) {
                    return nos[i];
                }
        }
        nos.push( new No(no) );
        return nos[nos.length-1];
    }
}
/**
 * Conexao entre dois objetos
 * @returns {Conexoes}
 */
function Conexoes() {
    this.custo = arguments[2] || Infinity;
    this.doNo = arguments[0] || null;
    this.paraNo = arguments[1] || null;
}
/**
 * No representa o objeto, suas conexoes e o peso acumulado
 * @returns {No}
 */
function No() {
    this.dado = arguments[0] || null;
    this.conexoes = arguments[1] || [];
    this.total = arguments[2] || 0;
}
/**
 * Conjuto de conexoes entre 2 pontos
 * @returns {Caminho}
 */
function Caminho() {
    var lista = [];
    var i = 0, m = lista.length, c = Infinity.MAX_VALUE, r = null;
    /**
     * Adiciona um no a lista e retorna o index do elemento
     * @param {No} no
     * @returns {Number}
     */
    this.add = function(no) {
        var n = new No();
        n.dado = no;
        lista.push(no);
        return lista.length - 1;
    };
    /**
     * Remove um no da lista e retorna o mesmo
     * @param {type} no
     * @returns {Array}
     */
    this.sub = function(no) {
        i = 0, m = lista.length;
        for (i; i < m; i++)
            if (lista[i].dado === no.dado)
                return lista.splice(i, 1);
    };
    /**
     * Procurar o no com menor custo acumulado e retorna, se existir.
     * @returns {No | nulo}
     */
    this.menorNo = function() {
        i = 0;
        m = lista.length;
        c = Infinity;
        r = null;
        for (i; i < m; i++) {
            if (lista[i].total < c) {
                c = lista[i].total;
                r = i;
            }
        }
        return  (r !== null) ? lista[r] : null;
    };
    /**
     * Verifica se o no ja existe na lista
     * @param {No} no
     * @returns {Boolean}
     */
    this.contem = function(no) {
        i = 0, m = lista.length;
        for (i; i < m; i++){
            if (lista[i].dado === no.dado)
                return true;
        }
        return false;
    };
    /**
     * Pega o no desejado da lista, o
     * @param {No} no
     * @returns {No | nulo}
     */
    this.procurar = function(no) {
        i = 0, m = lista.length;
        for (i; i < m; i++){
            if (lista[i].dado === no.dado)
                return lista[i];
            else if (lista[i].dado === no.dado)
                return lista[i];
        }
        return null;
    };
    /**
     * Retorna a quantidade de nos do caminhos
     * @returns {Number}
     */
    this.length = function() {
        return lista.length;
    };
    /**
     * Retorna o caminho
     * @returns {Array}
     */
    this.caminho = function() {
        return lista.concat();
    };
}

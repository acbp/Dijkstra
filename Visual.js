var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.miterLimit = 1;

var offset_y = -2;
var offset_x = 0;

function mostrarGrafo(grafo) {
    var conexoes = grafo.conexoes();
    var vertices = [];
    var i = 0, j = 0, m = conexoes.length;

    //leitura
    for (i; i < m; i++) {
        if (indexOf(vertices, conexoes[i].doNo) === true)
            vertices.push(conexoes[i].doNo);
        if (indexOf(vertices, conexoes[i].paraNo) === true)
            vertices.push(conexoes[i].paraNo);
    }

    m = vertices.length;
    for (i = 0; i < m; i++) {
        criarVertice(vertices[i].dado.x, vertices[i].dado.y);
    }
    m = conexoes.length
    //desenho
    for (i = 0; i < m; i++)
        criarArestaTexto(conexoes[i].doNo.dado, conexoes[i].paraNo.dado, conexoes[i].custo);
}

function mostrarCaminho(arr) {
    //    console.log(arr, arr.total);

    var borda = 'blueviolet';
    var fill = 'black';
    var letra = 'white';
    for (var i = 0; i < arr.length; i++)
        if (arr[i - 1])
            criarAresta(arr[i].dado, arr[i - 1].dado, borda, 2);

    for (var i = 0; i < arr.length; i++)
        criarVerticeTexto(arr[i].dado.x, arr[i].dado.y, arr[i].total, fill, letra, borda);

}

function indexOf(arr, elm) {
    var i = 0, m = arr.length;
    for (i; i < m; i++)
        if (arr[i] === elm)
            return false;
    return true;
}

function criarVertice(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 8, 0, 6.3, false);
    ctx.fillStyle = arguments[2] || 'red';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = arguments[3] || 'red';
    ctx.stroke();
    ctx.closePath();

}

function criarAresta(doNo, paraNo) {
    ctx.beginPath();
    ctx.moveTo(doNo.x, doNo.y);
    ctx.lineTo(paraNo.x, paraNo.y);
    ctx.lineWidth = arguments[3] || 1;
    ctx.strokeStyle = arguments[2] || 'red';
    ctx.stroke();
    ctx.closePath();
}

function criarTexto(texto, x, y) {
    ctx.font = '8pt Calibri';
    ctx.fillStyle = arguments[3] || 'lime';
    ctx.fillText("" + texto, x+offset_x, y+offset_y);
}

function criarArestaTexto(doNo, paraNo, texto) {
    //    console.log(paraNo, doNo)
    var coef = ((paraNo.y - doNo.y) / (paraNo.x - doNo.x));
    var X, Y, y, x;

    if (paraNo.x > doNo.x) {
        x = doNo.x;
        X = paraNo.x - x;
    }
    else {
        x = paraNo.x;
        X = doNo.x - x;
    }

    if (paraNo.y > doNo.y) {
        y = doNo.y;
        Y = paraNo.y - y;
    }
    else {
        y = paraNo.y;
        Y = doNo.y - y;
    }

    if (coef >= 1) {
        x += 7;
    } else if (coef < 0) {
        x -= 27;
        y += 8;
    }
    else if (coef <= -1) {
        y += 3;
        x += 3;

    }
    if (coef === Infinity || coef === -Infinity) {
        y += 7;
        if (coef > 0)
            x -= 20;
    }

    criarAresta(doNo, paraNo);
    criarTexto(texto, X * 0.5 + x, Y * 0.5 + y);
}


function criarVerticeTexto(x, y, texto) {
    criarVertice(x, y, arguments[3], arguments[5]);
    let mod = (texto.toString().length-1)*2.5;
    criarTexto(texto, x - ( 3 + mod )-offset_x, y + 3-offset_y, arguments[4]);
}

function criarPonto(x, y) {
    return {x: x-85, y: y-90};
}

function start(){
    var g = new Grafo();
    var arrPontos = [
        criarPonto(100, 100)
        , criarPonto(100, 200)
        , criarPonto(100, 300)
        , criarPonto(100, 400)
        , criarPonto(100, 500)
        , criarPonto(100, 600)

        , criarPonto(200, 100)
        , criarPonto(200, 200)
        , criarPonto(200, 300)
        , criarPonto(200, 400)
        , criarPonto(200, 500)
        , criarPonto(200, 600)

        , criarPonto(300, 100)
        , criarPonto(300, 200)
        , criarPonto(300, 300)
        , criarPonto(300, 400)
        , criarPonto(300, 500)
        , criarPonto(300, 600)

        , criarPonto(400, 100)
        , criarPonto(400, 200)
        , criarPonto(400, 300)
        , criarPonto(400, 400)
        , criarPonto(400, 500)
        , criarPonto(400, 600)
    ];

    g.criarConexao(arrPontos[0], arrPontos[1], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[1], arrPontos[2], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[2], arrPontos[3], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[3], arrPontos[4], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[4], arrPontos[5], parseInt("" + Math.random() * 100));

    g.criarConexao(arrPontos[6], arrPontos[7], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[7], arrPontos[8], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[8], arrPontos[9], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[9], arrPontos[10], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[10], arrPontos[11], parseInt("" + Math.random() * 100));

    g.criarConexao(arrPontos[12], arrPontos[13], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[13], arrPontos[14], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[14], arrPontos[15], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[15], arrPontos[16], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[16], arrPontos[17], parseInt("" + Math.random() * 100));

    g.criarConexao(arrPontos[18], arrPontos[19], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[19], arrPontos[20], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[20], arrPontos[21], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[21], arrPontos[22], parseInt("" + Math.random() * 100));
    g.criarConexao(arrPontos[22], arrPontos[23], parseInt("" + Math.random() * 100));


    g.criarConexao( arrPontos[0],  arrPontos[6] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[6],  arrPontos[12] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[12],  arrPontos[18] , parseInt(""+Math.random()*100)  );

    g.criarConexao( arrPontos[1],  arrPontos[7] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[7],  arrPontos[13] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[13],  arrPontos[19] , parseInt(""+Math.random()*100)  );

    g.criarConexao( arrPontos[2],  arrPontos[8] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[8],  arrPontos[14] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[14],  arrPontos[20] , parseInt(""+Math.random()*100)  );

    g.criarConexao( arrPontos[3],  arrPontos[9] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[9],  arrPontos[15] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[15],  arrPontos[21] , parseInt(""+Math.random()*100)  );

    g.criarConexao( arrPontos[4],  arrPontos[10] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[10],  arrPontos[16] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[16],  arrPontos[22] , parseInt(""+Math.random()*100)  );

    g.criarConexao( arrPontos[5],  arrPontos[11] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[11],  arrPontos[17] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[17],  arrPontos[23] , parseInt(""+Math.random()*100)  );


    g.criarConexao( arrPontos[0],  arrPontos[7] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[7],  arrPontos[14] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[14],  arrPontos[21] , parseInt(""+Math.random()*100)  );

    g.criarConexao( arrPontos[1],  arrPontos[8] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[8],  arrPontos[15] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[15],  arrPontos[22] , parseInt(""+Math.random()*100)  );

    g.criarConexao( arrPontos[2],  arrPontos[9] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[9],  arrPontos[16] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[16],  arrPontos[23] , parseInt(""+Math.random()*100)  );

    g.criarConexao( arrPontos[3],  arrPontos[10] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[10],  arrPontos[17] , parseInt(""+Math.random()*100)  );

    g.criarConexao( arrPontos[4],  arrPontos[11] , parseInt(""+Math.random()*100)  );

    g.criarConexao( arrPontos[5],  arrPontos[10], parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[10],  arrPontos[15] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[15],  arrPontos[20] , parseInt(""+Math.random()*100)  );

    g.criarConexao( arrPontos[4],  arrPontos[9], parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[9],  arrPontos[14] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[14],  arrPontos[19] , parseInt(""+Math.random()*100)  );

    g.criarConexao( arrPontos[3],  arrPontos[8], parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[8],  arrPontos[13] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[13],  arrPontos[18] , parseInt(""+Math.random()*100)  );

    g.criarConexao( arrPontos[2],  arrPontos[7], parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[7],  arrPontos[12] , parseInt(""+Math.random()*100)  );

    g.criarConexao( arrPontos[1],  arrPontos[6] , parseInt(""+Math.random()*100)  );

    g.criarConexao( arrPontos[6],  arrPontos[13] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[12],  arrPontos[19] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[13],  arrPontos[20] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[16],  arrPontos[21] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[17],  arrPontos[22] , parseInt(""+Math.random()*100)  );
    g.criarConexao( arrPontos[11],  arrPontos[16] , parseInt(""+Math.random()*100)  );

    mostrarGrafo(g);
    var qwe=arrPontos[ parseInt( Math.random()*arrPontos.length-1 ) ],ewq=arrPontos[ parseInt( Math.random()*arrPontos.length-1 ) ];

    while( qwe===ewq){
        ewq=arrPontos[ parseInt( Math.random()*arrPontos.length-1 ) ];
    }
    mostrarCaminho(
        new Dijkstra(g, qwe,ewq )
    );
}
function reset(){
    console.clear();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    start()
}
reset()

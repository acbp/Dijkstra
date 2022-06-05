module.exports = class Edge {
    vertex1;
    vertex2;
    weight = Infinity;
    constructor(
        vertex1,
        vertex2,
        weight = Infinity
    ) {
        if(this.vertex1) return 'xablau'
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.weight = weight;
    }

    add(v) {
        if( this.vertex1 && this.vertex2) return;
        if (this.vertex1) this.vertex2 = v;
        else this.vertex1 = v;
    }

    has(v){
        return this.vertex1===v || this.vertex2===v
    }

    reset(
        vertex1,
        vertex2,
        weight
    ) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.weight = weight;
    }
}
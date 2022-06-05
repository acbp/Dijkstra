module.exports = class Vertex {
    data;
    edges;
    constructor(
        data,
        edges = new Set
    ) {
        this.data = data;
        this.edges = edges;
    }

    add(edge) {
        this.edges.add(edge)
    }

    delete(edge) {
        this.edges.delete(edge)
    }

    clear(){
        this.edges.clear()
    }
}
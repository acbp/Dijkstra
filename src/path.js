module.exports = class Path {
    edges
    constructor(edges = new Set) {
        this.edges = edges
    }

    add(edge){
        this.edges.add(edge)
    }

    delete(edge){
        this.edges.delete(edge)
    }
}
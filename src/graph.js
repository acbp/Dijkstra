const Vertex = require('./vertex.js')
const Edge = require('./edge.js')
module.exports = class Graph {
    #vertexes;
    #edges;

    constructor(vertex = new Set) {
        this.#vertexes = vertex
        this.#edges = new Set
    }

    #isInvalid(v) {
        return v === null || v === undefined;
    }
    addVertex(v) {
        if (this.#isInvalid(v) || this.#vertexes.has(v)) {
            return
        }
        this.#vertexes.add(v)
        return v;
    }

    addEdge(v1, v2) {
        if (this.#isInvalid(v1) || this.#isInvalid(v2) || v1 === v2) {
            return
        }

        this.addVertex(v1)
        this.addVertex(v2)
        const edge = new Edge(v1, v2)
        this.#edges.add(edge)
        return edge
    }
    get totalVertex() {
        return this.#vertexes.size
    }

    get totalEdges() {
        return this.#edges.size
    }

    get vertex() {
        return this.#vertexes
    }

    get edges() {
        return this.#edges
    }

    get toArray() {
        let r = [];
        let i = 0;
        this.#vertexes.forEach(v => {
            r.push([]);
            this.#edges.forEach(rv => {
                r[i].push(rv)
            })
            i++;
        })

        return r;
    }

    get clear() {
        this.#vertexes = new Set;
        this.#edges = new Set
    }
}
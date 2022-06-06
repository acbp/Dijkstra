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

    addEdge(v1, v2, w) {
        if (v1 === v2 || this.#isInvalid(v1) || this.#isInvalid(v2)) {
            return
        }

        this.addVertex(v1)
        this.addVertex(v2)
        const edge = new Edge(v1, v2, w)
        this.#edges.add(edge)
        v1.edges.add(v2)
        v2.edges.add(v1)
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
            v.edges.forEach(rv => {
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
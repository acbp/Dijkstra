module.exports = class Grafo {
    #vertex;
    #edges;

    #totalVertex = 0;
    #totalEdges = 0;

    constructor(vertex = new Set) {
        this.#vertex = vertex
        this.#totalVertex = this.#vertex.length
        this.#edges = new Map
    }

    #isInvalid(v) {
        return v === null || v === undefined;
    }
    addVertex(v) {
        if (this.#isInvalid(v) || this.#vertex.has(v)) {
            return
        }
        this.#vertex.add(v)
        this.#edges.set(v, new Set)
        ++this.#totalVertex
    }

    addEdge(v1, v2, unidirectional = true) {
        if (this.#isInvalid(v1) || this.#isInvalid(v2) || v1 === v2) {
            return
        }

        this.addVertex(v1)
        this.addVertex(v2)

        this.#edges.get(v1).add(v2)
        ++this.#totalEdges

        if (unidirectional) {
            this.#edges.get(v2).add(v1)
            ++this.#totalEdges
        }
    }
    get totalVertex() {
        return this.#totalVertex
    }

    get totalEdges() {
        return this.#totalEdges
    }

    get vertex() {
        return this.#vertex
    }

    get edges() {
        return this.#edges
    }

    get toArray(){
        let r=[];
        let i=0;
        this.#vertex.forEach( v => {
            r.push([]);
            this.#edges.get(v).forEach( rv => {
                r[i].push(rv)
            }) 
            i++;
        })

        return r;
    }

    get clear(){
        this.#vertex=new Set;
        this.#edges=new Map
        this.#totalEdges=0
        this.#totalVertex=0
    }
}
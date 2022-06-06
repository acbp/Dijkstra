const assert = require('assert')

const graph = require('../src/graph.js')
const edge = require('../src/edge.js')
const vertex = require('../src/vertex.js')

describe('Graph sample 1', () => {
    const g = new graph
    const v1 = new vertex(1)
    const v2 = new vertex(2)
    const v3 = new vertex(3)
    const v4 = new vertex(4)
    const v5 = new vertex(5)
    g.addEdge(v1, v2, 1)
    g.addEdge(v1, v3, 1)
    g.addEdge(v1, v4, 1)
    g.addEdge(v1, v5, 1)

    g.addEdge(v2, v4, 2)
    g.addEdge(v2, v5, 2)

    g.addEdge(v3, v4, 3)

    it('each edges must be an array of vertex', () => {
        assert.deepStrictEqual(g.toArray, [[v2, v3, v4, v5], [v1, v4, v5], [v1, v4], [v1, v2, v3], [v1, v2]])
    })
    it('total edges must be 7', () => {
        assert.equal(g.totalEdges,7)
    })
    it('total vertexes must be 5', () => {
        assert.equal(g.totalVertex,5)
    })
})

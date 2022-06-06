const assert = require('assert')

const graph = require('../src/graph.js')
const edge = require('../src/edge.js')
const vertex = require('../src/vertex.js')
const path = require('../src/path.js')

describe('Dijkstra', () => {
    const g = new graph
    const p = new path
    const v1 = new vertex(1)
    const v2 = new vertex(2)
    const v3 = new vertex(3)
    const v4 = new vertex(4)
    const v5 = new vertex(5)
    const v6 = new vertex(6)
    const v7 = new vertex(7)
    const v8 = new vertex(8)
    const v9 = new vertex(9)
    const e0 = g.addEdge(v1, v2, 0)
    const e1 = g.addEdge(v1, v2, 10)
    const e2 = g.addEdge(v1, v2, 20)
    const e3 = g.addEdge(v1, v2, 30)
    const e4 = g.addEdge(v1, v2, 40)
    const e5 = g.addEdge(v1, v2, 50)
    const e6 = g.addEdge(v1, v2, 60)
    const e7 = g.addEdge(v1, v2, 70)

    it('must not have worse path', () => {
        assert.fail('to do')
    })
    it('must have the best path', () => {
        assert.fail('to do')
    })
    it('must have value 100', () => {
        assert.fail('to do')
    })
    it('must not have value 30', () => {
        assert.fail('to do')
    })
})

const assert = require('assert')

const graph = require('../src/graph.js')
const edge = require('../src/edge.js')
const vertex = require('../src/vertex.js')
const path = require('../src/path.js')

describe('Path', () => {
    describe('add', () => {
        const g = new path
        const v1 = new vertex(1)
        const v2 = new vertex(2)
        const e = new edge(v1, v2, 0)
        g.add(e)
        it('only one', () => {
            assert.equal(g.edges.size, 1)
        })
    })
    describe('delete', () => {
        const g = new path
        const v1 = new vertex(1)
        const v2 = new vertex(2)
        const e = new edge(v1, v2, 0)
        g.add(e)
        g.delete(e)
        it('be empty', () => {
            assert.equal(g.edges.size, 0)
            assert.notEqual(g.edges, undefined)
            assert.notEqual(g.edges, null)
        })
    })
})

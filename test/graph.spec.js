const assert = require('assert')

const graph = require('../src/graph.js')
const edge = require('../src/edge.js')
const vertex = require('../src/vertex.js')
const Edge = require('../src/edge.js')

describe('Classes', () => {
    describe('Expect not be undefined', () => {
        it('Graph class', () => {
            const g = new graph
            assert.notEqual(g, undefined)
        })
        it('Edge class', () => {
            const g = new edge
            assert.notEqual(g, undefined)
        })
        it('Vertex class', () => {
            const g = new vertex
            assert.notEqual(g, undefined)
        })
    })
    describe('Expect be defined', () => {
        it('Graph class', () => {
            const g = new graph
            assert.deepStrictEqual(g, new graph)
        })
        it('Edge class', () => {
            const g = new edge
            assert.deepStrictEqual(g, new edge)
        })
        it('Vertex class', () => {
            const g = new vertex
            assert.deepStrictEqual(g, new vertex)
        })
    })
})

describe('Graph', () => {
    describe('addVertex', () => {
        const g = new graph
        const v = new vertex
        g.addVertex(v)

        it('only one', () => {
            assert.equal(g.totalVertex, 1)
            assert.equal(g.vertex.size, 1)
        })
        it('no edge', () => {
            assert.equal(g.totalEdges, 0)
            assert.equal(g.edges.size, 0)
        })
        it('must be a Set', () => {
            assert.deepStrictEqual(g.vertex, new Set([v]))
        })
    })
    describe('addEdge', () => {
        const g = new graph
        const v1 = new vertex
        const v2 = new vertex
        const ee = g.addEdge(v1,v2)
        const e = new edge(v1,v2)

        it('must have two Vertexes', () => {
            assert.equal(g.totalVertex, 2)
            assert.equal(g.vertex.size, 2)
        })
        it('only one edge', () => {
            assert.equal(g.totalEdges, 1)
            assert.equal(g.edges.size, 1)
        })
        it('must have v1 and v2', () => {
            assert.deepStrictEqual(ee, e)
        })
    })
    describe('toArray',()=>{
        const g = new graph
        const v1 = new vertex
        const v2 = new vertex
        const ee = g.addEdge(v1,v2)
        

        it('must be an array',()=>{
            console.log(g.toArray)
            assert.fail('failcheck');
        })
    })
})

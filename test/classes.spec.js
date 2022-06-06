const assert = require('assert')

const graph = require('../src/graph.js')
const edge = require('../src/edge.js')
const vertex = require('../src/vertex.js')
const path = require('../src/path.js')

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
        it('Path class', () => {
            const g = new path
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
        it('Path class', () => {
            const g = new path
            assert.deepStrictEqual(g, new path)
        })
    })
})

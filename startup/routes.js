import express from 'express'
// const submitPath = require('../router/submit.route')
import submitPath from '../router/submit.route.js'

export default function setupRoutes(app) {
    app.use(express.json({ limit: '50mb'}));
    app.use(express.urlencoded({ extended: true, limit: '50mb'}));
    app.get('', (req, res) => {
        res.send('Welcome to the base of Manthra application')
    })

    app.use('/submit', submitPath)
}
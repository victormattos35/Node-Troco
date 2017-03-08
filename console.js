'use strict';
const Troco = require('./troco.js')
let troco = new Troco()
let notas = troco.getQtdeNotas(process.argv[2] || 0)
console.log(notas)
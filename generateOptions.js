const path = require('path')
const fs = require('fs')
const { mapAtoll } = require('./utils')
const data = JSON.parse(
    fs.readFileSync(path.join(__dirname, "/salat.json"), { encoding: "utf-8" })
);

/*
const atolls = []
console.log("Atolls")

data.islands.forEach(island => {
    const atoll = island.atoll
    const namedAtoll = mapAtoll(atoll.slice(0, atoll.length - 1))
    if(!atolls.includes(namedAtoll)) atolls.push(namedAtoll)
})

atolls.forEach(a=> {
    console.log(`<option value="${a}_Atoll">${a} Atoll</option>`)
})
console.log(atolls.length)
*/

const atolls = []
const atollIslands = {}
console.log("Islands")

data.islands.forEach(island => {
    const atoll = island.atoll
    if(!atolls.includes(atoll)) atolls.push(atoll)
})

atolls.forEach(a=> {
    console.log(`<option value="${a}_Atoll">${a} Atoll</option>`)
})
console.log(atolls.length)

data.islands.forEach(island => {
    if (!atollIslands[island.atoll]) atollIslands[island.atoll] = []
})

data.islands.forEach(island => {
    if (!atollIslands[island.atoll].includes(island.island)) atollIslands[island.atoll].push(island.island)
})

console.log(atollIslands)

console.log('JS part.')

atolls.forEach(atoll => {
    const namedAtoll = mapAtoll(atoll.slice(0, atoll.length - 1))
    console.log(`${namedAtoll.replace(" ", "_")}_Atoll:`)
    console.log(atollIslands[atoll])
})
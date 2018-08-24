// Objetos


const grenal = {times:['gremio', 'inter'], resultado:""}
var editableGrenal = {times:new Array('gremio', 'inter'), resultado:""}

// Spread

console.log({... grenal})
console.log({... grenal, resultado:"5 X 0"})
console.log({... grenal, resultado:"5 X 0", data: new Date()})
console.log(editableGrenal = {... editableGrenal, resultado:"5 X 0", data: new Date()})

// Arrow Function e Objetos

const oi = () => ('Oi')

const tudoBem = () => ('Tudo bem?')

const log = (texto) => {
    console.log(texto)
    return log
}

log(oi())(tudoBem())

//Interpolação

const placar = `Placar: ${editableGrenal.times[0]+' '+editableGrenal.resultado+' '+editableGrenal.times[1]}`
console.log(placar)

const url = `http://localhost:8090/api/times/${editableGrenal.times[0]}`
console.log(url)

//classes

class Time{
    constructor(id, nome){
        this.id = id
        this.nome = nome
    }

    getId(){
        return this.id
    }

    getNome(){
        return this.nome
    }
    
}

const gremio = new Time(1, 'gremio')

console.log(gremio)
log(gremio.getId())(gremio.getNome())
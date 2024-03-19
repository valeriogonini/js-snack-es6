
//SNACK1


const membersTable = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
]
console.log("Membri invitati", membersTable);

// for (let i = 0; i < membersTable.length; i++) {
//     const membersTableElement = membersTable[i]
//     console.log(membersTableElement)

// }

const membersTableElement = membersTable.map((element, i,array) => {
    return {
        nameTable: "Tavolo VIP",
        name: element,
        posto: i + 1
    }
})

console.log("Segnaposto invitati", membersTableElement);



//SNACK2

const studends = [
    {
        id: 213,
        name: "Marco della Rovere",
        grades: 78,
    },
    {
        id: 110,
        name: "Paola Cortellessa",
        grades: 96,
    },
    {
        id: 250,
        name: "Andrea Mantegna",
        grades: 48,
    },
    {
        id: 145,
        name: "Gaia Mantegna",
        grades: 74,
    },
    {
        id: 196,
        name: "Luigi Grimaldello",
        grades: 68,
    },
    {
        id: 102,
        name: "Piero della Francesca",
        grades: 50,
    },
    {
        id: 120,
        name: "Francesca da Polenta",
        grades: 84,
    }

]

console.log("Nomi studenti", studends);


//Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
let studentsOver70 = studends.filter((element) => element.grades > 70)
console.log("Studenti con voti superiori a 70", studentsOver70);


//Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
let studentsOver70eId120 = studends.filter((element) => element.grades > 70 && element.id > 120)
console.log("Studenti con voti superiori a 70 e id superiore a 120", studentsOver70eId120);


// Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti:
//  creare una lista contenente il loro nome tutto in maiuscolo

// const upperStudends = studends.toUpperCase()
// console.log(upperStudends);

const upperStudends = []
studends.forEach((element, i, array) => {
    const nameUpper = element.name.toUpperCase()
    upperStudends.push(nameUpper)

})

console.log(upperStudends);

//nomi minuscoli

const lowerStudends = []

studends.forEach((element, i, array) => {
    const nameLower = element.name.toLowerCase()
    lowerStudends.push(nameLower)

})
console.log(lowerStudends);
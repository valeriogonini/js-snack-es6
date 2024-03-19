
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

// for (let i = 0; i < membersTable.length; i++) {
//     const membersTableElement = membersTable[i]
//     console.log(membersTableElement)
    
// }

const membersTableElement = membersTable.map((element, i) => {
return{
    nameTable: "Tavolo VIP",
    name: element,
    posto: i+1
}
})

console.log(membersTableElement);



//SNACK2

const studends = [
    {
        id : 213,  
        name : "Marco della Rovere",
        grades : 78,
    },
    {
        id : 110,  
        name : "Paola Cortellessa",
        grades : 96,
    },
    {
        id : 250,  
        name : "Andrea Mantegna",
        grades : 48,
    },
    {
        id : 145,  
        name : "Gaia Mantegna",
        grades : 74,
    },
    {
        id : 196,  
        name : "Luigi Grimaldello",
        grades : 68,
    },
    {
        id : 102,  
        name : "Piero della Francesca",
        grades : 50,
    },
    {
        id : 120,  
        name : "Francesca da Polenta",
        grades : 84,
    },

]

//console.log(studend);


//Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
let studentsOver70 = studends.filter((element) => element.grades > 70)
console.log(studentsOver70);


//Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
let studentsOver70eId120 = studends.filter((element) => element.grades > 70 && element.id > 120)
console.log(studentsOver70eId120);


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
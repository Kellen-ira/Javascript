
// assignment(2)

//const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

var colorjoined = colors.join(", ");
nconsole.log(colorjoined);

//output
//red,green,blue,yellow,orange




const removed = colors.splice(0,2, "purple", "pink"); 
console.log(removed);
console.log(colors);

//output
//[ 'purple', 'pink', 'blue', 'yellow', 'orange' ]


let copy = colors.copyWithin(2,0,2);
console.log(copy);
console.log(colors);

//output//[ 'red', 'green', 'red', 'green', 'orange' ]


//let result = colors.map(Element => {return Element.toUpperCase()});
console.log(result);
  //output
//[ 'RED', 'GREEN', 'BLUE', 'YELLOW', 'ORANGE' ]

//const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
const findchar = colors.find((element) => element.charAt(0) === "b")

console.log(findchar);

   

 const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
 const cit = colors.slice(0, 3);
console.log(cit);

// output
// ['red','green','blue']


//assignment(3)



const items = [
  {name: 'Bike', price:100},
  {name: 'TV', price:200},
  {name: 'Album', price:10},
  {name: 'Book', price:5},
  {name: 'Phone', price:500},
  {name: 'Computer', price:1000},
];
    const cheapestP = items.filter(item => item.price < 10)
    console.log(cheapestP);

   //output
   //[ { name: 'Book', price: 5 } ]


 const largest = items.filter(larges => larges.price > 500)
 console.log(largest);

 //output
 //[ { name: 'Computer', price: 1000 } ]

 

    const result = items.reduce((a,b)=> { return a+b.price},0)
    console.log(result);

   //output
   //1815  
   
   const check = items.filter(checks => checks.price > 10)
   const combine = check.reduce((a,b)=>{return a+b.price},0)
   console.log(combine);

   //output
   //1800

   const letter = items.filter((element) => element.name.charAt(0) === 'B')
   console.log(letter);

   //output
   //[{name: 'Bike', price:100},{name: 'Book', price:5}]





  



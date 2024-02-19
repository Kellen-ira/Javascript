
// assignment(2)

//const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

var colorjoined = colors.join(", ");
nconsole.log(colorjoined);






const removed = colors.splice(2,2, "purple", "pink"); 

console.log(colors);


let copy = colors.copyWithin(0,1,3);

console.log(colors);




const findchar = colors.find((element) => element.charAt(0) === "b")

console.log(findchar);

   

 const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
 const cit = colors.slice(1, 4);
 const slicea= []
 const _sliceb = slicea.push(cit)
console.log(cit);



//assignment(3)



const items = [
  {name: 'Bike', price:100},
  {name: 'TV', price:200},
  {name: 'Album', price:10},
  {name: 'Book', price:5},
  {name: 'Phone', price:500},
  {name: 'Computer', price:1000},
];
    const cheapestP = items.filter((item) => item.price <= 100)
    console.log(cheapestP);

   


 const largest = items.filter((larges) => larges.price > 500)
 console.log(largest);

 
 

    const result = items.reduce((a,b)=> { return a+b.price},0)
    console.log(result);

   
   const check = items.filter(checks => checks.price >= 10)
   const combine = check.reduce((a,b)=>{return a+b.price},0)
   console.log(combine);

  

   const letter = items.filter((element) => element.name.charAt(0) === 'B')
   console.log(letter);

  




  



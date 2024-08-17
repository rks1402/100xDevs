// function sum(a, b){
//     return a + b;
// }

// console.log(sum(3,6));





// const fs = require('fs');

// const data = fs.readFileSync('a.txt', 'utf-8'); //Syncronous 
// console.log(data);

// fs.readFile('a.txt', 'utf-8', (err, data) => {   //Asynchronous callback
//     if(err){
//         console.log('Error reading file:', err);
//         return;
//     }
//     console.log(data);
// });

// function print(err, data){
//     console.log(data);
// }

// fs .readFile('a.txt', 'utf-8', print); // print is function called after reading of file done, calling print function is called callback.
// console.log("Yoo");

// Classes in JS

class Rectangle {
    constructor(width, height, color) {
         this.width = width;
         this.height = height;
         this.color = color; 
    }
    
    area() {
        const area = this.width * this.height;
          return area;
    }
    
    paint() {
             console.log(`Painting with color ${this.color}`);
    }
    
 }
 
 const rect = new Rectangle(2, 4)
 const area = rect.area();
 console.log(area)
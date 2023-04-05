
// *** Functioning code (version 1.0) ***


// *** this function generates the text for and SVG file based off of the shape chosen, shape color, text and text color from the create.js and returns the corresponding template with the input
function generateShape(answers) {
    if (answers.shape == 'circle')
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${answers.shapecolor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text></svg>`

    if (answers.shape == 'triangle')
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><path d="M150 0 L0 200 L300 200 Z" fill="${answers.shapecolor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text></svg>`

    if (answers.shape == 'square')
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="150" height="200" fill="${answers.shapecolor}"></rect><text x="175" y="150" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text></svg>`

}
module.exports = generateShape;




// *** exploring constructor functionizing shapes.js (version 2.0) ***/

// class Shape {
//     constructor(shape, shapecolor, text, textcolor) {
//         this.shape = shape;
//         this.shapecolor = shapecolor;
//         this.text = text
//         this.textcolor = textcolor
//     }
//     printShape() {
//     if (answers.shape == 'circle')
//         return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${answers.shapecolor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text></svg>`

//     if (answers.shape == 'triangle')
//         return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><path d="M150 0 L0 200 L300 200 Z" fill="${answers.shapecolor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text></svg>`

//     if (answers.shape == 'square')
//         return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="150" height="200" fill="${answers.shapecolor}"></rect><text x="175" y="150" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text></svg>`
//     }
// }

// // class triangle extends Shape {
    
// // }

// var triangle = new Shape('triangle','black','SVD','white');

// var square = new Shape('square','black','SVD','white' )

// var circle = new Shape('circle','black','SVD','white')


// console.log(circle)

// console.log(square)

// console.log(triangle)
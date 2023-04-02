function generateShape(answers) {
    
    
    if (answers.shape == 'circle')
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
                <circle cx="150" cy="100" r="80" fill="${answers.shapecolor}" />
    
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text>
    
            </svg>`

    if (answers.shape == 'triangle')
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      
                <path d="M150 0 L0 200 L300 200 Z" fill="${answers.shapecolor}" />
      
                <text x="150" y="150" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text>
    
            </svg>`

    if (answers.shape == 'square')
        return `
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <rect x="100" y="50" width="150" height="200" fill="${answers.shapecolor}"></rect>

                <text x="175" y="150" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text>

            </svg>`

}

module.exports = generateShape;





// function GenerateShape() {};

// GenerateShape.prototype.circle = (answers) => {
//     if (answers.shape == 'circle') 
//     return ` 
//     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
//     <circle cx="150" cy="100" r="80" fill="${answers.shapecolor}" />

//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text>

//     </svg>`
// }


// GenerateShape.prototype.triangle = (answers) => {
//     if (answers.shape == 'triangle') 
//     return `
//     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//         <path d="M150 0 L0 200 L300 200 Z" fill="${answers.shapecolor}" />

//         <text x="150" y="150" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text>

//     </svg>`
// }

// GenerateShape.prototype.square = (answers) => {
//     if (answers.shape == 'square') 
//     return `
//     <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//         <rect x="100" y="50" width="150" height="200" fill="${answers.shapecolor}"></rect>

//         <text x="175" y="150" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text>

//     </svg>`
// }


// module.exports =  GenerateShape;


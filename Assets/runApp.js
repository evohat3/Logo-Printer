const inquire = require('inquirer')
const fs = require('fs')
const generateShape = require('../lib/shapes')

console.log()


const questions = [{
    type: 'list',
    name: 'shape',
    message: 'What shape would you like to use?',
    choices: ['circle', 'square', 'triangle']
},
{
    type: 'input',
    name: 'shapecolor',
    message: 'what color should the shape be?'
},
{
    type: 'input',
    name: 'text',
    message: 'what would you like to have in your logo? (3 characters max)'
},
{
    type: 'input',
    name: 'textcolor',
    message: 'what color should the text be?'
}
]



function run() {

    inquire.prompt(questions).then((answers) => {

            fs.writeFile('../images/logo.svg', generateShape(answers), (err) => {
                if  (err) {
                    console.error(err);
                } else {
                    console.log('logo.svg created!')
                }
            } )

    })

}


run()





// function run() {

//     inquire.prompt(questions).then((answers) => {

//         if (answers == 'circle')
//         return generateShape.circle()

//             // fs.writeFile('./logo.svg', GenerateShape, (err) => {
//             //     if  (err) {
//             //         console.error(err);
//             //     } else {
//             //         console.log('logo.svg created!')
//             //     }
//             // } )

//     })

// }
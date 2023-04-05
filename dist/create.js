const inquire = require('inquirer')
const fs = require('fs')
const generateShape = require('../lib/shapes')

// ** require checker**
// console.log()


const questions = [{
    type: 'list',
    name: 'shape',
    message: 'What shape would you like to use?',
    choices: ['circle', 'square', 'triangle']
},
{
    type: 'input',
    name: 'shapecolor',
    message: 'what color should the shape be? (color name or hexideceimal #)',
    validate: function(input) {
        // *** Color/hex Verifier ***
        if (/^#[0-9A-F]{6}$/i.test(input) || /^[a-z]+$/i.test(input)) {
            return true;
        }
        return 'Please enter a valid CSS color input, e.g. #FF0000';
    }
},
{
    type: 'input',
    name: 'text',
    message: 'what would you like to have in your logo? (3 characters max)',
    validate: function(input) {
    // *** char length Verifier ***
    if (input.length <= 3) {
        return true;
    }
    return 'Please enter no more than 3 characters';
}
},
{
    type: 'input',
    name: 'textcolor',
    message: 'what color should the text be?',
    validate: function(input) {
        //      *** Color/hex Verifier ***
        if (/^#[0-9A-F]{6}$/i.test(input) || /^[a-z]+$/i.test(input)) {
            return true;
        }
        return 'Please enter a valid CSS color input, e.g. #FF0000';
    }
}
]

// *** function that creates an SVG file ***
function run() {
    inquire.prompt(questions).then((answers) => {  
// *** creates logo file with date timestamp ***
      const filename = `logo_${Date.now()}.svg`
        fs.writeFile(`../Assets/logos/${filename}`, generateShape(answers), (err) => {
                if  (err) {
                    console.error(err);
                } else {
                    console.log('logo.svg created!')
                }
            } )

    })

}


// *** invoking function ***

run()
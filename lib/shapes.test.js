const generateShape = require('./shapes')

describe('generateShape', () => {
  
// test control variables
let answers;
let expected;
    //  Test code for circle shape
    it('returns a circle SVG string with the correct attributes', () => {
    answers = {
      shape: 'circle',
      shapecolor: '#FF0000',
      text: 'ABC',
      textcolor: '#FFFFFF'
    }
        expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${answers.shapecolor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text></svg>`
    expect(generateShape(answers)).toEqual(expected)
  })

  it('returns a triangle SVG string with the correct attributes', () => {
    // Test code for triangle shape
    answers = {
        shape: 'triangle',
        shapecolor: '#FF0000',
        text: 'ABC',
        textcolor: '#FFFFFF'
      }
         expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><path d="M150 0 L0 200 L300 200 Z" fill="${answers.shapecolor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text></svg>`
      expect(generateShape(answers)).toEqual(expected)
  })

  it('returns a square SVG string with the correct attributes', () => {
    // Test code for square shape
    answers = {
        shape: 'square',
        shapecolor: '#FF0000',
        text: 'ABC',
        textcolor: '#FFFFFF'
      }
         expected = expected = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="50" width="150" height="200" fill="${answers.shapecolor}"></rect><text x="175" y="150" font-size="60" text-anchor="middle" fill="${answers.textcolor}">${answers.text}</text></svg>`
      expect(generateShape(answers)).toEqual(expected)
  });
});
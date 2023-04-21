const {Shape, Triangle, Square, Circle } = require('./lib/shapes.js');
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");


inquirer
    .prompt([{
        type: "checkbox",
        name: "userShape",
        message: "What shape would you like to use for your svg?",
        choices: ["Circle", "Triangle", "Square"],
    },
{
    type: "input",
    name: "userColor",
    message: "Choose the color you would like to use for your logo. Please use a color keyword",
},
{
    type: "input",
    name: "initialsText",
    message: "Please enter your initials. Do not use more than 3 characters.",
},
{
    type: "input",
    name: "initialsTextColor",
    message: "Please enter a color keyword to use as the color for your text.",
},
])
.then((answers) => {
    let userShape = answers.userShape;
    let userColor = answers.userColor;
    let userInitials = answers.initialsText;
    let initialTextColor = answers.initialTextColor;
    console.log(userShape, userColor, userInitials, initialTextColor);
    if (userShape == "Circle") {
        const circle = new Circle(userColor, userInitials, initialTextColor);
        const output = circle.makeCircle(circle.userShape, circle.initialsText, circle.initialTextColor);
        console.log(output);
        fs.writeFile(`./Output/circle-${newText}.svg`, output, (err) => 
        err ? console.log(err) : console.log('Circle Created.')
        );
    }
    else if (userShape == "Triangle") {
        const triangle = new Triangle(userColor, userInitials, initialTextColor);
        const output = triangle.makeTriangle(triangle.userShape, triangle.initialsText, triangle.initialTextColor);
        console.log(output);
        fs.writeFile(`./Output/Triangle-${newText}.svg`, output, (err) =>
        err ? console.log(err) : console.log('Triangle Created.')
        );
    }
    else if (userShape == "Square") {
        const square = new Square(userColor, userInitials, initialTextColor);
        const output = triangle.makeSquare(square.userShape, square.initialsText, square.initialTextColor);
        console.log(output);
        fs.writeFile(`./Output/square-${newText}.svg`, output, (err) =>
        err ? console.log(err) : console.log('Square Created.')
        );
    }
});
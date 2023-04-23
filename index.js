const { Shape, Triangle, Square, Circle } = require("./lib/shapes.js");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

inquirer
  .prompt([
    {
      type: "checkbox",
      name: "userShape",
      message: "What shape would you like to use for your svg?",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "userColor",
      message:
        "Choose the color you would like to use for your logo. Please use a color keyword",
    },
    {
      type: "input",
      name: "initialsText",
      message: "Please enter your initials. Do not use more than 3 characters.",
    },
    {
      type: "input",
      name: "initialsTextColor",
      message:
        "Please enter a color keyword to use as the color for your text.",
    },
  ])
  .then((answers) => {
    let userShape = answers.userShape;
    let userColor = answers.userColor;
    let initialsText = answers.initialsText;
    let initialsTextColor = answers.initialsTextColor;
    console.log(userShape, userColor, initialsText, initialsTextColor);
    if (userShape == "Circle") {
      const circle = new Circle(userColor, initialsText, initialsTextColor);
      const output = circle.makeCircle(
        circle.color,
        circle.text,
        circle.textColor
      );
      fs.writeFile(`./Output/circle-${initialsText}.svg`, output, (err) =>
        err ? console.log(err) : console.log("Circle Created.")
      );
    } else if (userShape == "Triangle") {
      const triangle = new Triangle(userColor, initialsText, initialsTextColor);
      const output = triangle.makeTriangle(
        triangle.color,
        triangle.text,
        triangle.textColor
      );
      fs.writeFile(`./Output/Triangle-${initialsText}.svg`, output, (err) =>
        err ? console.log(err) : console.log("Triangle Created.")
      );
    } else if (userShape == "Square") {
      const square = new Square(userColor, initialsText, initialsTextColor);
      const output = square.makeSquare(
        square.color,
        square.text,
        square.textColor
      );
      fs.writeFile(`./Output/square-${initialsText}.svg`, output, (err) =>
        err ? console.log(err) : console.log("Square Created.")
      );
    }
  });

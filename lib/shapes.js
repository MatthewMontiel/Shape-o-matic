class Shape {
    constructor(userColor, initialsText, initialsTextColor) {
        this.userColor = color;
        this.initialsText = text;
        this.initialsTextColor = textColor;
    }
}

class circle extends Shape {
    makeCircle = (color, text, textColor) => {
        return `<svg version="1.1"
        width-"300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        <circle cx="150" cy="100" r="80" fill= "${color}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        
        </svg>`
    }}

class triangle extends Shape {
        makeTriangle = (color, text, textColor) => {
        return `<svg version="1.1"
        width-"300" height="200"
        xmlns="http://www.w3.org/2000/svg">
        
        <polygon points="150, 18 244, 182, 56, 182" fill= "${color}"/>
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
        
        </svg>`
        }}

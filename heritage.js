class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}

  calcPerimeter(){
    let perimeter ;
    perimeter= this.sides+ this.sideLength;
    console.log ("le perimetre de ce square est   " + perimeter);
  }
}
class Square extends Shape{
  constructor(sideLength){
    super("name",4, sideLength);
    this.sideLength=sideLength;
  }
  calcArea(){
    let surface=this.sideLength*this.sideLength;
    console.log("la surface de ce square est:" +surface);
  }
}

var square = new Shape("square", 4, 5);
square.calcPerimeter();
var triangle= new Shape("triangle", 3,3);
triangle.calcPerimeter();
var square= new Square(5);
square.calcPerimeter();
square.calcArea();



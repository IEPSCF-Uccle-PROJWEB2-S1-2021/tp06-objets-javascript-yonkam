class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
}

  calcPerimeter(){
    let perimeter ;
    perimeter= this.sides+ this.sideLength;
    console.log ("le perimetre de ce square est :" + perimeter);
  }
}

var square = new Shape("square", 4, 5);
square.calcPerimeter();
var triangle= new Shape("triangle", 3,3);
triangle.calcPerimeter();


export class Triangle {
  constructor(lengthA, lengthB, lenghtC) {
    this.a = lengthA;
    this.b = lengthB;
    this.c = lenghtC;
  }

  isEquilateral() {
    if (this.triangleInequality()) {
      return false;
    } else {
      return this.a === this.b && this.b === this.c ? true : false;
    }
  }

  isIsosceles() {
    if (this.triangleInequality()) {
      return false;
    } else {
      return this.a === this.b || this.b === this.c || this.c === this.a
        ? true
        : false;
    }
  }

  isScalene() {
    if (this.triangleInequality()) {
      return false;
    } else {
      return this.a !== this.b && this.b !== this.c ? true : false;
    }
  }

  triangleInequality() {
    if (
      this.a === 0 ||
      this.b === 0 ||
      this.c === 0 ||
      this.a + this.b < this.c ||
      this.b + this.c < this.a ||
      this.a + this.c < this.b
    ) {
      return true;
    }
  }
}

// const abc = new Triangle(2, 0, 2);
// abc.isEquilateral();

'use strict';

const SQUIRREL_ACT = " is jumping";
const SQUIRREL_FLY_ACT = " is flying ";
const SQUIRREL_MAGIC_ACT = " say ";
const ARRAY_SQUIRREL_WORDS = [' hi', ' i\'m Kary'];
class Squirrel {
  /**
   *
   * @param {string} name
   * @param {string} color
   */
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  jump() {
    return this._name + SQUIRREL_ACT;
  }

  get name() {
    return this._name;
  }
  set name(string) {
    if (typeof string !== "string" || string === "" || string === ' ') {
      throw new TypeError("must be string");
    }
    this._name = string;
  }

  get color() {
    return this._color;
  }
  set color(value) {
    if (typeof value !== "string" || value === "") {
      throw new TypeError("must be string");
    }
    this._color = value;
  }
}

class SquirrelFly extends Squirrel {
  /**
   * 
   * @param {string} name 
   * @param {string} color 
   * @param {number} maxFlyDistance 
   */
  constructor(name, color, maxFlyDistance = 10) {
    super(name, color);
    this.maxFlyDistance = maxFlyDistance;
  }

  get maxFlyDistance() {
    return this._maxFlyDistance;
  }
  set maxFlyDistance(value) {
    if (typeof value !== "number" || Number.isNaN(value)) {
      throw new TypeError("must be positive number");
    }
    if (value <= 0) {
      throw new RangeError("must be more than 0");
    }
    this._maxFlyDistance = value;
  }

  fly() {
    return this._name + SQUIRREL_FLY_ACT + this._maxFlyDistance;
  }
}

class SquirrelMagic extends SquirrelFly {
  /**
   * 
   * @param {string} name 
   * @param {string} color 
   * @param {number} maxFlyDistance 
   * @param {array} arraySquirrelWords 
   */
  constructor(name, color, maxFlyDistance, arraySquirrelWords ) {
    super(name, color, maxFlyDistance);
    this._arraySquirrelWords = arraySquirrelWords;
  } 

  get arraySquirrelWords() {
    return this._arraySquirrelWords;
  }
  set arraySquirrelWords(array) {
    if (Array.isArray(array) === false) {
      throw new TypeError("must be array");
    }
    this._arraySquirrelWords = array;
  }

  speak() {
    return console.log(this._name + SQUIRREL_MAGIC_ACT + this._arraySquirrelWords);
    
  }
}

try {
  console.group('about squirrel');
  const squirrel = new Squirrel("Mary", "red");
  console.log(squirrel);
  console.log(squirrel.jump());
  console.groupEnd;

  console.group('about squirrelFly');
  const squirrelFly = new SquirrelFly("Emy", "black");
  console.log(squirrelFly);
  console.log(squirrelFly.jump());
  console.log(squirrelFly.fly());
  console.groupEnd;

  console.group('about magicSquirrel');
  const magicSquirrel = new SquirrelMagic('Kary', 'green',25, ARRAY_SQUIRREL_WORDS);
    console.log(magicSquirrel);
  console.log(magicSquirrel.jump());
  console.log(magicSquirrel.fly());
  console.log(magicSquirrel.speak());// console shows undefined (?)
  console.groupEnd;

} catch (error) {
  console.log(error.message);
}
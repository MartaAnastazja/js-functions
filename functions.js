/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

function numberToString (number) {

    let string = ``;

    return string += number;
    
}

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

function increase (number) {

    return number+=1;

}

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

 function decrease (number) {

    return number-=1;

 }

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

function add (number1, number2) {

    return number1 + number2;

}

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */

function subtract (number1, number2) {

    return number1 - number2;

}

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

 function multiply (number1, number2) {

    return number1 * number2;

 }

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

function divide (number1, number2) {

    return number1 / number2;

}

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

 function square (number1) {

    return number1 * number1;

 }


/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

 function calculate (operation, number1, number2) {


    if ( operation === "add" ) {

        console.log( `${number1} + ${number2} = ${add(number1, number2)}`);
        
        return add(number1, number2);

    } else if ( operation === "subtract") {

        console.log( `${number1} - ${number2} = ${subtract(number1, number2)}`);
        
        return subtract(number1, number2);

    } else if ( operation === "multiply") {

        console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);
        
        return multiply(number1, number2);

    } else if ( operation === "divide") {

        console.log(`${number1} / ${number2} = ${divide(number1, number2)}`);
        
        return divide(number1, number2);

    }
    
}

(calculate("add",4,7))

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

function isGreaterThan (number1, number2) {

    if ( number1 > number2 ) {

        return true;

    }

    return false;

}

/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

 function isLessThan (number1, number2) {

    if ( number1 < number2 ) {

        return true;

    }

    return false;

}

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function areEqual (number1, number2) {

    if (number1 === number2) {

        return true;

    }

    return false;

}

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function minimum (number1, number2) {

    if (isLessThan(number1,number2)) {

        return number1;

    }

    return number2;

}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function maximum (number1, number2) {

    if (isGreaterThan(number1,number2)) {

        return number1;

    }

    return number2;

}


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

function isEven (number) {

    if ( number % 2 === 0) {

        return true;
    }

    return false;

}

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

function isOdd (number) {

    if ( number%2 != 0) {

        return true;
        
    }

    return false;

}


/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

function letterGrade (score, total) {
    
    let percentage = Math.floor( (score/total) * 100 );

    let grade = [];
    

    if ( percentage >= 90 && percentage <= 100 ) {

        grade = "A";

    } else if ( percentage >= 80 && percentage <= 90 ) {

        grade = "B";

    } else if ( percentage >=70 && percentage <= 79 ) {

        grade = "C";

    } else if ( percentage >=60 && percentage <= 69 ) {

        grade = "D";

    } else if ( percentage >=0 && percentage <= 59 ) {

        grade = "F";

    }

    return grade;

}

console.log(letterGrade(315,350))
console.log(letterGrade(287,350))
console.log(letterGrade(105,350))
console.log(letterGrade(559,800))
console.log(letterGrade(2,4))

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

 function incrementReviews (object) {

    // if ( object[Object.keys(object)] != reviews ) {
    //     return object.reviews = 1;
    // }

    for (let i = 0; i < Object.keys(object).length; i++) {

        if ( object[Object.keys(object)[i]] == object.reviews ){

            object.reviews++;

            return object

        } 
          
    }

    object.reviews = 1;
    return object

}

var awesomeEatery = {
    reviews: 1776,
}

var res = {
    place: 50,
}

console.log(incrementReviews(awesomeEatery));
console.log(incrementReviews(res));


/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function combine (word1, word2) {

    return word1 + " " + word2;

    
}

/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

function createCircle (radius) {

    let circle = {

        circumference: 2 * Math.PI *radius,

        area: Math.PI * radius * radius,

    }

    return circle;

}

console.log(createCircle(5));
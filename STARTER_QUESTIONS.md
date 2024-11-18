# JavaScript Basics

Answer following questions in this file.

## What is JavaScript?

```
JavaScript is a high-level programming language used to create interactive effects in web browsers. It is a fundamental technology of the World Wide Web, alongside HTML and CSS.
```

## About values

### What is a primitive value?

```
A primitive value is a basic, immutable data type that is not an object.
```

### Which are primitive values? Explain them with at least one example for primitive.

```
The primitive values in JS are:

String: Textual data.
let greeting = "Hello, World!";
Number: Numeric values.
let age = 42;
Boolean: True or false.
let isStudent = true;
Null: Absence of a value.
let emptyValue = null;
Undefined: Declared but unassigned variable.
let notAssigned;
Symbol: Unique identifier.
let uniqueId = Symbol("description");
BigInt: Large integers.
let bigNumber = 9007199254740991n;
```

## About variables

### What is a variable in JS?

```
A variable is a named storage for data, used to store, retrieve, and manipulate values.
```

### How many ways can we define a variable in JS? Is there any not recommended way?

```
Ways to define variables in JS:

var: Function-scoped. (Not recommended due to hoisting issues.)
var x = 1;
let: Block-scoped, for mutable variables.
let x = 1;
const: Block-scoped, for immutable variables.
const x = 1;
```

### Which are the most used var naming conventions in JS?

```
The most used variable naming conventions are:

camelCase: For variables and functions.
let myVariableName = "example";
PascalCase: For class names.
class MyClassName { ... }
snake_case: Sometimes used for constants.
const MY_CONSTANT = 100;
```

## About operators

### Which are the main comparison operators in JS? Explain them with at least one example for primitive.

```
The main comparison operators are:

==: Equal to.
console.log(5 == "5"); // true
===: Strict equal to.
console.log(5 === "5"); // false
!=: Not equal to.
console.log(5 != "6"); // true
!==: Strict not equal to.
console.log(5 !== "5"); // true
>: Greater than.
console.log(5 > 3); // true
<: Less than.
console.log(5 < 3); // false
>=: Greater than or equal to.
console.log(5 >= 5); // true
<=: Less than or equal to.
console.log(5 <= 5); // true
```

### Which are the main logical operators in JS? Explain them with at least one example for primitive.

```
The main local operators are:

&&: Logical AND.
console.log(true && false); // false
||: Logical OR.
console.log(true || false); // true
!: Logical NOT.
console.log(!true); // false
```

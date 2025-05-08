## Blog 1
## Type Inference in TypeScript

TypeScript is a statically typed superset of JavaScript, i.e., TypeScript extends JavaScript with optional static typing. One of its most powerful and easiest features is Type Inference.

## 💡 What is Type Inference?

Type Inference is TypeScript's capability to infer the type of a variable from its initial assignment. That is, for example, if a string is assigned to a variable, TypeScript will automatically infer that the variable is of type string.

## 🔍 Why is  Type Inference Helpful?

Type inference enhances the developer experience as follows:

✅ Reduces boilerplate – No longer annotate plain types by hand.

🧠 Increases readability of code – Less noisy and more expressive.

🛡️ Type safety is not compromised – Still catches type errors at compile time.

💨 Speeds up development – Write less, build more.

## Basic Example:

1)
let message = "Hello, TypeScript!";
// Inferred as: string

message = "Another message"; // ✅ OK
message = 123;               // ❌ Error: Type 'number' is not assignable to type 'string'

2)
const user = {
  name: "Raisa",
  age: 24,
};

// Inferred type:
// {
//   name: string;
//   age: number;
// }

user.name = "Nuzhat"; // ✅ OK
user.age = "twenty";  // ❌ Error: Type 'string' is not assignable to type 'number'

## ⚠️ Where Type Inference Falls Short

Sometimes TypeScript will infer any, removing the benefit of type safety.

function logValue(value) {
  console.log(value);
}
// value is inferred as: any (⚠️ Not safe)

## 🔧 Fix it:

function logValue(value: string | number) {
  console.log(value);
}


## Blog 2
🔀 Understanding Union and Intersection Types in TypeScript
TypeScript is powerful because of its advanced type system. Among its core features are Union Types and Intersection Types — tools that let you write flexible, type-safe code.

In this post, we’ll explore what they are, when to use them, and how they differ — with clear examples.

🔹 What Are Union Types?
A Union Type allows a value to be one of several types.

🔧 Syntax:
ts
Copy
Edit
type AorB = TypeA | TypeB;
📦 Example:
ts
Copy
Edit
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log("ID (string):", id.toUpperCase());
  } else {
    console.log("ID (number):", id.toFixed(2));
  }
}

printId("abc123"); // ID (string): ABC123
printId(42);       // ID (number): 42.00
✅ Use union types when a value can belong to one of many types, and you want to handle each possibility.

🔹 What Are Intersection Types?
An Intersection Type combines multiple types into one.
The resulting type has all properties from the intersected types.

🔧 Syntax:
ts
Copy
Edit
type AandB = TypeA & TypeB;
📦 Example:
ts
Copy
Edit
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Raisa",
  employeeId: 1001,
};

console.log(`${staffMember.name} - ID: ${staffMember.employeeId}`);
✅ Use intersection types when you need a combination of multiple types.

⚖️ Union vs Intersection — The Difference
| Feature | Union (|) | Intersection (&) |
|------------------|----------------------------------|---------------------------------------|
| Meaning | Either one or the other | Both at the same time |
| Flexibility | More flexible, less strict | More strict, combines all properties |
| Usage scenario | Handling multiple possible types | Composing new types from others |

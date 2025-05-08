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

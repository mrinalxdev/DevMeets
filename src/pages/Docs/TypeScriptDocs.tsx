import React from 'react'

export default function TypeScriptDocs() {
  return (
    <div style={{ background: "black",minHeight: '100vh', padding: '20px 35px'}}>
      <h1 style={{ textAlign: 'center', fontSize: '60px', color: 'white', fontWeight: '600' }}>TypeScript Docs</h1>
      <div style={{padding: '30px 0', fontSize: '25px', color: 'white'}}>
        <h2 style={{padding: '20px 0'}}>TypeScript is a popular programming language that is a superset of JavaScript. It was developed and is maintained by Microsoft. TypeScript extends JavaScript by adding type annotations, which allow developers to write code that is more reliable and easier to maintain. In this documentation, we will discuss TypeScript in detail, including its features, syntax, and usage.TypeScript has many features that make it a powerful language for web development. Some of the most notable features include:</h2>
        <p style={{padding: '20px 0'}}>
          1.TypeScript is a statically typed language, which means that it can catch errors at compile-time rather than at runtime. This helps developers to write code that is more reliable and easier to maintain.
        </p>
        <p style={{padding: '20px 0'}}>
          2.TypeScript has a powerful type inference system that can automatically infer the type of a variable based on its value. This makes it easier for developers to write code without explicitly specifying types.
        </p>
        <p style={{padding: '20px 0'}}>
          3.TypeScript supports many of the features introduced in ECMAScript 6 (ES6), such as arrow functions, let and const declarations, and template literals.
        </p>
        <p style={{padding: '20px 0'}}>
          4.TypeScript is designed to be compatible with existing JavaScript code. This means that developers can gradually migrate their projects to TypeScript without having to rewrite everything from scratch.
        </p>
        <p style={{padding: '20px 0'}}>
          5.TypeScript is often used for web development, particularly for large-scale applications. It can be used with popular web frameworks such as React, Angular, and Vue.
        </p>
        <p style={{padding: '20px 0'}}>
          6.TypeScript can also be used for server-side development with Node.js. This allows developers to write code that can be run on both the client and server.
        </p>
        <p style={{padding: '20px 0'}}>
          7.TypeScript is also popular for building libraries that can be used by other developers. The strong typing and other features make it easier for developers to use and maintain these libraries.
        </p>
      </div>
    </div>
  )
}

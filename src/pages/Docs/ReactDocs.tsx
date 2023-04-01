import React from 'react'

export default function ReactDocs() {
  return (
    <div style={{ background: "black",minHeight: '100vh', padding: '20px 35px'}}>
      <h1 style={{ textAlign: 'center', fontSize: '60px', color: 'white', fontWeight: '600' }}>React Docs</h1>
      <div style={{padding: '30px 0', fontSize: '25px', color: 'white'}}>
        <h2 style={{padding: '20px 0'}}>React is a popular JavaScript library for building user interfaces. It was developed by Facebook and is now widely used by developers around the world.Here are some key concepts and features of React:</h2>
        <p style={{padding: '20px 0'}}>1. Components: React is built around the concept of components, which are small, reusable pieces of code that define a part of a user interface. Components can be combined to create larger, more complex interfaces.</p>
        <p style={{padding: '20px 0'}}>2.JSX: JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside of your JavaScript code. This makes it easier to write and understand the code that makes up your components.</p>
        <p style={{padding: '20px 0'}}>3.Virtual DOM: React uses a virtual representation of the DOM (the structure of the page) to efficiently update the user interface without having to redraw everything. This makes it faster and more efficient than other approaches to updating the DOM.</p>
        <p style={{padding: '20px 0'}}>4.Props: Props are short for "properties" and are used to pass data from one component to another. For example, you could pass a prop called "name" from a parent component to a child component, which would then display that name on the page.</p>
        <p style={{padding: '20px 0'}}>5.State: State is an object that stores information about a component and allows it to change over time. For example, you could use state to store whether a button has been clicked or not, and then update the component to show a different message depending on the button's state.</p>
        <p style={{padding: '20px 0'}}>6.React Router: React Router is a library that allows you to add routing to your React applications. This means you can create links that take users to different parts of your application without having to reload the entire page.</p>
        <p style={{padding: '20px 0'}}>7.Redux: Redux is a library for managing application state in a predictable way. It provides a central store for your application's data and allows you to update that data in a consistent and predictable way.</p>
        <p style={{padding: '20px 0'}}>8. Hooks: Hooks are a feature introduced in React 16.8 that allows you to use state and other React features in functional components. This makes it easier to write and manage stateful logic in your components.</p>
        <p style={{padding: '20px 0'}}>9.Lifecycle Methods: React components have a set of lifecycle methods that allow you to control what happens when a component is created, updated, or destroyed. For example, you can use the "componentDidMount" method to fetch data from an API when a component is first rendered.</p>
        <p style={{padding: '20px 0'}}>10.Context: Context is a way to pass data down through the component tree without having to manually pass props through every level of the tree. It allows you to create a "global" state for your application that can be accessed by any component.</p>
        <p style={{padding: '20px 0'}}>11.Server-Side Rendering: React can be used for server-side rendering, which means that your React components can be rendered on the server and sent to the client as HTML. This can improve performance and SEO for your application.</p>
        <p style={{padding: '20px 0'}}>12.Testing: React components can be tested using a variety of testing frameworks and tools, including Jest and Enzyme. Testing your components helps ensure that they are working correctly and can help catch bugs early in the development process.</p>

      </div>

    </div>
  )
}

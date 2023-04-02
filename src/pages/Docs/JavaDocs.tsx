import React from 'react'

export default function JavaDocs() {
  return (
    <div style={{ background: "black", minHeight: '100vh', padding: '20px 35px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '60px', color: 'white', fontWeight: '600' }}>Java Docs</h1>
      <div style={{ padding: '30px 0', fontSize: '25px', color: 'white' }}>
        <h2 style={{ padding: '20px 0' }}>
          Java is a popular, general-purpose, object-oriented programming language that is designed to run on a wide range of platforms, from computers and mobile devices to servers and supercomputers. Java was developed by James Gosling and his team at Sun Microsystems, which was later acquired by Oracle Corporation. Here are some important topics to consider:
        </h2>
        <p style={{padding: '20px 0'}}>
          1.Java Language Basics - Understanding the basic concepts of Java is essential to writing effective code. Topics in this area include data types, variables, control structures (if-else, loops, etc.), and methods.
        </p>
        <p style={{padding: '20px 0'}}>
          2.Object-Oriented Programming - Java is an object-oriented programming language, which means that it is built around the concept of objects that contain data and methods to manipulate that data. Understanding object-oriented programming concepts like classes, inheritance, and polymorphism is key to developing Java applications.
        </p>
        <p style={{padding: '20px 0'}}>
          3.Java Standard Libraries - Java comes with a vast array of libraries that provide useful functionality out of the box. Some important libraries to know include the Java Collection Framework, the Java I/O package, and the Java Networking API.
        </p>
        <p style={{padding: '20px 0'}}>
          4.Java Virtual Machine (JVM) - The JVM is the engine that runs Java applications. Understanding how the JVM works and how it interacts with your code is important for optimizing performance and troubleshooting issues.
        </p>
        <p style={{padding: '20px 0'}}>
          5.Exception Handling - Java provides a robust mechanism for handling exceptions, which are unexpected events that occur during the execution of your code. Knowing how to handle exceptions effectively is crucial to writing reliable and maintainable Java code.
        </p>
        <p style={{padding: '20px 0'}}>
          6.Concurrency - Java has built-in support for concurrent programming, which enables multiple threads of execution to run simultaneously. Understanding the concepts of thread safety, synchronization, and concurrency control is essential for developing high-performance Java applications.
        </p>
        <p style={{padding: '20px 0'}}>
          7.Java Enterprise Edition (Java EE) - Java EE is a set of specifications for building enterprise-scale applications. Topics in this area include JavaServer Pages (JSP), Java Servlets, Enterprise JavaBeans (EJB), and Java Persistence API (JPA).
        </p>
      </div>
    </div>
  )
}

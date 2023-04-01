import React from 'react'

export default function NextDocs() {
  return (
    <div style={{ background: "black", minHeight: '100vh', padding: '20px 35px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '60px', color: 'white', fontWeight: '600' }}>Next Js Docs</h1>
      <div style={{ padding: '30px 0', fontSize: '25px', color: 'white' }}>
        <h2 style={{padding: '20px 0'}}>Next.js is a React-based framework for building server-side rendered and statically generated web applications. It is built on top of Node.js and provides many built-in features such as automatic code splitting, server-side rendering, and static site generation, making it a powerful tool for building fast and scalable web applications. Some of the important topics covered in the Next.js documentation are:
        </h2>
        <p style={{padding: '20px 0'}}>1.Server-side rendering (SSR): One of the key features of Next.js is its ability to render pages on the server, which can improve performance and search engine optimization (SEO). The Next.js documentation provides information on how to use SSR, including how to fetch data on the server, how to use server-side routing, and how to handle errors.</p>
        <p style={{padding: '20px 0'}}>2.Static site generation (SSG): Next.js can also generate static websites at build time, which can improve performance and reduce server costs. The documentation provides information on how to use SSG, including how to fetch data at build time, how to use dynamic routes, and how to handle fallback pages.</p>
        <p style={{padding: '20px 0'}}>3.Routing: Next.js provides a simple and powerful routing system that allows you to create dynamic routes and handle different types of requests. The documentation covers how to use routing in Next.js, including how to create dynamic routes, how to handle client-side navigation, and how to use nested routes.</p>
        <p style={{padding: '20px 0'}}>4.Data fetching: Next.js provides several methods for fetching data, including server-side rendering, static generation, and client-side rendering. The documentation covers how to use these methods to fetch and display data in your Next.js application.</p>
        <p style={{padding: '20px 0'}}>5.Styling: Next.js provides built-in support for CSS modules, which allows you to scope your CSS to specific components. The documentation covers how to use CSS modules in Next.js, as well as how to use other styling solutions like styled-components and Sass.</p>
        <p style={{padding: '20px 0'}}>6.Deployment: The Next.js documentation provides information on how to deploy your application to various platforms, including Vercel, AWS, and Google Cloud.</p>
        <p style={{padding: '20px 0'}}>
          7.API routes: Next.js allows you to create API routes that can be used to handle HTTP requests. The documentation covers how to create and use API routes in Next.js, including how to handle different types of requests and how to authenticate users.
        </p>
      </div>
    </div>
  )
}

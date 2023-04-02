import React from 'react'

export default function RDocs() {
    return (
        <div style={{ background: "black", minHeight: '100vh', padding: '20px 35px' }}>
            <h1 style={{ textAlign: 'center', fontSize: '60px', color: 'white', fontWeight: '600' }}>R Docs</h1>
            <div style={{ padding: '30px 0', fontSize: '25px', color: 'white' }}>
                <h2 style={{ padding: '20px 0' }}>
                    R is a programming language and software environment for statistical computing and graphics. It is widely used in data analysis, machine learning, and scientific research. Here are some important topics to consider when learning R and using its documentation:
                </h2>
                <p style={{ padding: '20px 0' }}>
                    1.Installation and Setup:
                    To start using R, you need to download and install it on your computer. The R website provides installers for Windows, macOS, and Linux. Once you have installed R, you can launch it from the command line or a graphical user interface (GUI) such as RStudio.
                </p>
                <p style={{padding: '20px 0'}}>
                    2.Basic Syntax and Data Structures:
                    Like any programming language, understanding the basic syntax and data structures is essential to writing effective R code. R has several built-in data types, including numeric, character, logical, and factors. R also provides data structures such as vectors, matrices, arrays, and data frames for organizing and manipulating data.
                </p>
                <p style={{padding: '20px 0'}}>
                    3.Data Manipulation and Analysis:
                    R is often used for data manipulation and analysis, and it provides a rich set of functions and libraries for these tasks. Some important functions for data manipulation in R include subset(), filter(), select(), and mutate(). R also provides powerful libraries for data visualization, including ggplot2, lattice, and base graphics.
                </p>
                <p style={{padding: '20px 0'}}>
                    4.Programming with R:
                    R is a full-fledged programming language that allows for the creation of reusable code and custom functions. Understanding how to write functions and control flow statements (if-else, loops, etc.) is important for writing efficient and maintainable code in R. R also provides object-oriented programming capabilities through the S3 and S4 systems.
                </p>
                <p style={{padding: '20px 0'}}>
                    5.Graphics and Visualization:
                    R provides powerful graphics and visualization capabilities, which are essential for exploring and communicating data. R provides several libraries for creating various types of plots such as scatterplots, histograms, boxplots, and barplots. The ggplot2 library is one of the most popular libraries for creating high-quality graphics in R.
                </p>
                <p style={{padding: '20px 0'}}>
                    6.Packages and Libraries:
                    R has a vast ecosystem of packages and libraries that provide additional functionality beyond the built-in capabilities. You can install packages from CRAN (Comprehensive R Archive Network) and other sources. Some popular libraries for data analysis and machine learning include dplyr, tidyr, purrr, caret, and tensorflow.
                </p>
                <p style={{padding: '20px 0'}}>
                    7.Reproducible Research:
                    R is often used in scientific research, where reproducibility is key. Understanding how to document code, create reports, and share data and results is important for making research transparent and reproducible. R provides several tools for creating reproducible research, including R Markdown, knitr, and Shiny.
                </p>
            </div>
        </div>
    )
}

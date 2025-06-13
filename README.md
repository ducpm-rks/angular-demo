# Angular 7 Project: Comprehensive Example

This project is an Angular 7 application demonstrating various core Angular features, including routing, lifecycle hooks, inter-component communication, and integration with state management (Redux via NgRx). It's set up with both Karma for unit testing and Cypress for end-to-end testing.

## Table of Contents

* [Features](#features)

* [Prerequisites](#prerequisites)

* [Installation](#installation)

* [Development Server](#development-server)

* [Running Unit Tests](#running-unit-tests)

* [Running End-to-End Tests](#running-end-to-end-tests)

* [Code Linting](#code-linting)

* [Building the Application](#building-the-application)

* [Git Usage](#git-usage)

* [Important Notes](#important-notes)

* [License](#license)

## Features

This application showcases the following Angular functionalities accessible via the main navigation:

* **Test Lifecycle Hooks**: Demonstrates various Angular component lifecycle hooks (`ngOnInit`, `ngOnChanges`, `ngOnDestroy`, etc.).

* **Test Interceptor, Guard, Resolver**: Examples of implementing HTTP interceptors for request/response modification, route guards for access control, and resolvers for pre-fetching data before route activation.

* **Test Pass Data Between Components**: Illustrates different methods of passing data between Angular components (e.g., `@Input`, `@Output`, ViewChild/ViewChildren, services).

* **Test Redux**: Integration with NgRx for robust state management following the Redux pattern.

## Prerequisites

Before you begin, ensure you have the following installed on your development machine:

* **Node.js**: **Version 16.x** is recommended and has been used for this project setup. You can download it from the official [Node.js website](https://nodejs.org/).

  * *Note: Using a Node.js version significantly different from 16.x might lead to compatibility issues with Angular 7 or its dependencies, as newer Node.js versions introduce changes that might not be backward compatible with older Angular CLI build tools.*

* **npm**: The Node Package Manager, which comes bundled with Node.js.

* **Angular CLI**: While the project is already configured, having the Angular CLI installed globally can be helpful for running various `ng` commands directly.
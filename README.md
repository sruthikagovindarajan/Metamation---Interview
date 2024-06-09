# Product Management

This project is a React web application for managing products, allowing users to add products, list products, and manage their shopping cart. It includes features such as filtering, sorting, and editing quantities in the cart. I initially set up the basic routes to form the base of the project and implemented essential functionalities - to display products and to add products with local storage. I then expanded it to store the products added to the cart in the local storage with additional edit and remove funtionalities in a new a route. Further added the filter and sort option and enhanced css to produce a complete project. The homepage displays 'Product Unavailable' when the product list is empty or when product list does not match with the search element, and 'No items in cart' if cart is empty.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Routes](#routes)
- [Hosting](#hosting)
- [Screenshots](#screenshots)

## Project Overview

The React WebApp project is designed to provide users with a user-friendly interface for managing products. It includes the following key features:

- **Add Products**: Users can add new products, providing a name and category for each product.
- **List Products**: Users can view a list of all products, displayed as cards with options to add them to the shopping cart.
- **Filter and Sort**: The list of products can be filtered and sorted based on different criteria.
- **Manage Shopping Cart**: Users can add products to their shopping cart, view the contents of the cart, edit quantities, and remove items.

## Features

- Add new products with name and category.
- List all products with options to add them to the shopping cart.
- Filter and sort products based on different criteria.
- Manage shopping cart: add, edit quantities, and remove items.
- Elegant user interface using React Bootstrap components.

## Technologies Used

- React: JavaScript library for building user interfaces.
- React Router: Declarative routing for React applications.
- React Bootstrap: UI framework built on top of Bootstrap for React components.
- Local Storage: Browser storage options for storing product data.
- React Context: It provides a way to share data between components without explicitly passing the data through props, making it easier to manage global state

## Getting Started

### Prerequisites

-Node js: "20.14.0"
-create-react-app:"5.0.1"

### Installation

1. Clone the repository to your local machine
2. Navigate to the project directory
3. Run npm install to install the necessary dependencies.
4. Run npm start to start the development server.
5. Open your browser and navigate to http://localhost:3000 to view the app.


## Routes

- `/add`: Add new products.
- `/`: List all products.
- `/cart`: View and manage shopping cart.

## Hosting
Link - https://metamation-interview.vercel.app/

##  Screenshots
![Screenshots](https://github.com/sruthikagovindarajan/Metamation---Interview/blob/main/screenshots/Add.png)
![Screenshots](https://github.com/sruthikagovindarajan/Metamation---Interview/blob/main/screenshots/AddSuccess.png)
![Screenshots](https://github.com/sruthikagovindarajan/Metamation---Interview/blob/main/screenshots/Home.png)
![Screenshots](https://github.com/sruthikagovindarajan/Metamation---Interview/blob/main/screenshots/addtocart.png)
![Screenshots](https://github.com/sruthikagovindarajan/Metamation---Interview/blob/main/screenshots/deletion.png)
![Screenshots](https://github.com/sruthikagovindarajan/Metamation---Interview/blob/main/screenshots/filter.png)
![Screenshots](https://github.com/sruthikagovindarajan/Metamation---Interview/blob/main/screenshots/sort.png)

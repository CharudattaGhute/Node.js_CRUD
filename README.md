# Node.js_CRUD
# E-Commerce Website

This is a simple e-commerce website project built using Node.js, Express.js, MySQL, and HTML/CSS.

## Description

This project implements basic functionalities of an e-commerce website, including user authentication (login and registration), product listing, and shopping cart management.

## Features

- User authentication (login and registration)
- Session management for logged-in users
- Product listing with images, descriptions, and prices
- Shopping cart functionality (add to cart, view cart)
- Responsive design for various screen sizes

## Prerequisites

- Node.js installed on your machine
- MySQL server installed and running

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/CharudattaGhute/Node.js_CRUD.git
   ```

2. Install dependencies:

   ```bash
   npm install express
   ```

3. Set up the MySQL database:

   - Create a new database named `users`.
   - Import the provided SQL dump file to create the necessary tables.

4. Configure the database connection:

   - Open `app.js` and update the MySQL connection details (host, user, password) if necessary.

## Usage

1. Start the server:

   ```bash
   nodemon server.js
   ```

2. Open a web browser and navigate to [http://localhost:30000](http://localhost:30000) to access the website.

3. Use the provided login and registration forms to create an account or log in.

4. Browse through the available products, add items to the cart, and proceed to checkout.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the LICENSE file for details.


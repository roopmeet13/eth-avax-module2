
# Simple Contract Frontend

This project demonstrates a simple Ethereum smart contract with 2 functions and a frontend application to interact with the contract.

## Project Overview

The goal of this project is to showcase the integration of a frontend application with an Ethereum smart contract. The contract, named `SimpleContract`, includes two functions: `setValue1` and `setValue2`. These functions allow the user to set values in the contract. The contract also includes two public variables, `value1` and `value2`, which store the values set by the user.

The frontend application provides an intuitive user interface to interact with the contract. It includes input fields and buttons to set the values, as well as buttons to retrieve the stored values from the contract. The retrieved values are displayed on the page in a visually appealing format.

## Project Structure

The project consists of the following files:

- `roop.sol`: Solidity smart contract file that defines the `SimpleContract` with the `setValue1` and `setValue2` functions.
- `index.html`: HTML file that serves as the frontend application, allowing users to interact with the contract.
- `script.js`: JavaScript file that connects the HTML frontend with the deployed smart contract. It includes functions to set values, retrieve values, and update the UI accordingly.

## Usage

To use this project, follow these steps:

1. Deploy the `SimpleContract` in a suitable Ethereum development environment or network.
2. Copy the deployed contract address.
3. Open the `index.html` file in a web browser.
4. Replace `'YOUR_CONTRACT_ADDRESS'` in the `script.js` file with the actual deployed contract address.
5. Save the changes in the `script.js` file.
6. Interact with the HTML frontend application by setting values, retrieving values, and observing the displayed values on the page.

## Requirements

To run this project, you will need:

- An Ethereum development environment or access to an Ethereum network (e.g., Remix IDE, Ganache, Ropsten, etc.).
- A web browser (e.g., Google Chrome, Mozilla Firefox, etc.).

## Credits

This project is a simplified example for educational purposes. It utilizes the following technologies:

- Solidity - for writing the smart contract.
- HTML - for creating the frontend user interface.
- JavaScript (with ethers.js library) - for interacting with the deployed smart contract.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).


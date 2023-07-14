const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your actual contract address
const contractABI = [
    // Contract ABI (interface) goes here
];

const provider = new ethers.providers.JsonRpcProvider('https://ropsten.infura.io/v3/YOUR_INFURA_PROJECT_ID');
const signer = provider.getSigner();
const contract = new ethers.Contract(contractAddress, contractABI, signer);

function setValue1() {
    const value1Input = document.getElementById('value1Input').value;
    contract.setValue1(value1Input)
        .then(() => {
            console.log('Value 1 set successfully');
        })
        .catch((error) => {
            console.error(error);
        });
}

function setValue2() {
    const value2Input = document.getElementById('value2Input').value;
    contract.setValue2(value2Input)
        .then(() => {
            console.log('Value 2 set successfully');
        })
        .catch((error) => {
            console.error(error);
        });
}

function getValue1() {
    contract.value1()
        .then((result) => {
            const value1Output = document.getElementById('value1Output');
            value1Output.innerText = `Value 1: ${result}`;
        })
        .catch((error) => {
            console.error(error);
        });
}

function getValue2() {
    contract.value2()
        .then((result) => {
            const value2Output = document.getElementById('value2Output');
            value2Output.innerText = `Value 2: ${result}`;
        })
        .catch((error) => {
            console.error(error);
        });
}

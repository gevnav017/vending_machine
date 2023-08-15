let moneyThatUserHas = 100;

const vending_machine = [
    { snack: 'Snickers', quantity: 10, price: 1.50 },
    { snack: 'M&Ms', quantity: 5, price: 1 },
    { snack: 'Sour patch', quantity: 15, price: 3 },
]

// function addInVending (snackToAdd) {
//     vending_machine.push(snackToAdd)
// }

// addInVending( { snack: 'Snickers', quantity: 10, price: 1.50 } )
// addInVending( { snack: 'M&Ms', quantity: 5, price: 1 } )

// buying a snack function
function buySnack (chosenSnack) {
    for (let i = 0; i < vending_machine.length; i++) {
        let snackChosenArray = vending_machine[i];

        if (snackChosenArray.quantity === 0) {
            console.log(`${snackChosenArray.snack} is out of stock`);
        }
        else if (snackChosenArray.snack === chosenSnack) {
            snackChosenArray.quantity -= 1;
            moneyThatUserHas -= snackChosenArray.price;
        }
    }
}

// displaying vending machine items
function displayVendingMachine () {
    for (let i = 0; i < vending_machine.length; i++) {
        let snack = vending_machine[i].snack;
        let qty = vending_machine[i].quantity;
        let price = vending_machine[i].price;

        console.log(`${qty} ${snack}: $${price} each`)
    }
}

// display amount of money user has
function moneyThatUserHas () {
    console.log(`Remaining money: $${moneyThatUserHas}`)
}

// add up total amount of snacks
function getTotalPriceOfAllVendingMachineItems(vendingMachine) {
    let vendingTotal = 0;
    vendingMachine.forEach(snack => {
        vendingTotal += (snack.price * snack.quantity)
    })
    console.log(vendingTotal)
}

// get all snack names
function getNamesOfAllSnackItems(vendingMachine) {
    vendingMachine.forEach(snack => {
        console.log(snack.snack);
    })
}

// get all snacks under two dollars
function getAllSnacksUnderTwoDollars(vendingMachine) {
    const filteredPrice = vendingMachine.filter(snack => snack.price <= 2)
    console.log(filteredPrice)
}

// has snack true or false
function hasSnack (vendingMachine) {
    vendingMachine.forEach(snack => {
        if (snack.quantity > 0) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    })
}


// display vending machine items and money that user has after transactions
displayVendingMachine()
moneyThatUserHas()

module.exports = {
    moneyThatUserHas,
    getTotalPriceOfAllVendingMachineItems,
    buySnack,
    getNamesOfAllSnackItems,
    getAllSnacksUnderTwoDollars,
    hasSnack,
  }
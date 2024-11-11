/*----- Simple bank simulator for browser console -----*/

function bankSimulator() {
  let balance = 0;
  let isRunning = true;

  /*----- Gives you a menu  -----*/

  while (isRunning) {
    console.log("|-----------------|");
    console.log("|[D]eposit        |");
    console.log("|[W]ithdraw       |");
    console.log("|[B]alance        |");
    console.log("|[I]nterest/Year  |");
    console.log("|[Q]uit           |");
    console.log("|-----------------|");

    /*----- Ask the user what they want to do -----*/

    let menu = prompt("What can we help you with today?: ").toLowerCase();

    switch (menu) {
      case "d":
        let deposit = parseFloat(prompt("Deposit: "));
        if (!isNaN(deposit) && deposit > 0) {
          balance += deposit;
          console.log(`Your balance is: ${balance.toFixed(2)}\n`);
        } else {
          console.log("Invalid deposit amount. Please try again.\n");
        }
        break;

      case "w":
        let withdraw = parseFloat(prompt("Withdraw: "));
        if (!isNaN(withdraw) && withdraw > 0 && withdraw <= balance) {
          balance -= withdraw;
          console.log(`Your balance is: ${balance.toFixed(2)}\n`);
        } else if (withdraw > balance) {
          console.log("Not enough money in the account!\n");
        } else {
          console.log("Invalid withdrawal amount. Please try again.\n");
        }
        break;

      case "b":
        console.log(`Your balance is: ${balance.toFixed(2)}\n`);
        break;

      case "i":
        let depositYear = parseFloat(
          prompt("How much per year will you deposit? ")
        );
        let interestRate = parseFloat(
          prompt("What is your interest rate (%)? ")
        );
        let numberOfYears = parseInt(
          prompt("How many years will you save for? ")
        );

        if (
          !isNaN(depositYear) &&
          !isNaN(interestRate) &&
          !isNaN(numberOfYears)
        ) {
          let interestRatePercent = interestRate / 100;
          let totalBalance = depositYear;

          for (let year = 1; year <= numberOfYears; year++) {
            totalBalance *= 1 + interestRatePercent;
            console.log(`Year ${year}: Balance = ${totalBalance.toFixed(2)}`);
          }

          console.log(
            `Your balance after ${numberOfYears} years is: ${totalBalance.toFixed(
              2
            )}\n`
          );
        } else {
          console.log(
            "Invalid input for interest calculation. Please try again.\n"
          );
        }
        break;

      case "q":
        /*----- Quit the simulator -----*/

        console.log("Thanks and have a great day!");
        isRunning = false; // Stop the loop
        break;

      default:
        console.log("Wrong input, please try again!\n");
        break;
    }
  }
}

/*----- Start the bank simulator -----*/

bankSimulator();

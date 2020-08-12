var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roberto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {
        //ask user if they'd liked to fight or run
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose. ")

        //if player choses to skip confirm then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            window.alert(playerName + " has chosen to skip the fight!");
            // confirm users want to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("Player Money", playerMoney);
                break;
            }
        }
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left ");
        }
        // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
        playerHealth = playerHealth - enemyAttack;
        // Log a resulting message to the console so we know that it worked.
        console.log(
            enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining "
        );
        //check player health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died! ");
            break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left");
        }
    }
};
//if no (false), ask question again by running fight() again




for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("welcome to Robo Gladiators! Round" + (i + 1));

        //Pick new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        //reset enemyHealth before starting new fight
        enemyHealth = 50;

        //use debugger to pause script from running and check whats going on at the moment in the code
        //debugger;

        //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter

        fight(pickedEnemyName);
    }
}



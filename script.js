console.log("Hello World");

        let score = 0; // Initialize a score variable.

        let compScore = 0; // Initialize the computer score

        let rounds = 1; // Initialize the rounds

        const announcer = document.querySelector('#announcer'); // Create an announcer variable to display who played what and who won

        // Generate a random number from 1 to 3, these will be assigned to the computer's inputs

        function randomNumberInRange (min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        }

        // Function to receive a random number from the randomNumberInRange() function and assign it to a value

        function computerPlay () {
            let number = randomNumberInRange (1, 4);

            if (number === 1){ // If the number generated is 2, return the string of rock
                return "rock";
            }

            else if (number === 2){ // If the number generated is 2, return the string of paper
                return "paper";
            }

            else { //If the string is neither 1 or 2, then it must be 3 since the generateRandomNumber() function returns either 1, 2 or 3. Then assign the string of scissors to it
                return "scissors"
            }
        }

        // Obsolete code

        function playerPlay () {
            let playerInput = prompt("Rock, Paper, Scissors?");
            return playerInput
        }

        // End of obsolete code

        function dynamicAnnouncer(arg) {  // Dynamic announcer function that takes an argument and changes the text on the announcer paragraph
            announcer.textContent = `${arg}`;
        }

        const dynamicRounds = document.querySelector('#rounds'); // Selects the rounds header so that the text can be editted to match the current round

        dynamicRounds.textContent = `Round ${rounds}`; // Initializes the rounds header to display the rounds when the page loads

        const dynamicScore = document.querySelector('#points'); // Selects the points paragraph to display what points the player or the computer possesses

        dynamicScore.textContent = `You: ${score} : Computer: ${compScore}`; // Initializes the points paragraph to display the current points of either the player or the computer

        function roundKeeping(){ // Function to update the text of the rounds header depending on what the round variable is currently returning
            dynamicRounds.textContent = `Round ${rounds}`; // String literal to display the rounds
        }

        function scoreKeeping(){ // Function to update the points of either the player or the computer
            dynamicScore.textContent = `You: ${score} : Computer: ${compScore}`; // String literal displays the score along with other text
        }

        function singleRound (playerInput) { // Function to play a single round of the game(this is the most complex and important function)
            let playerSelection = playerInput; // Declare a variable and assigns it with the argument that was passed in from the singleRound() function
            let computerSelection = computerPlay(); // Calls the computerPlay function which generates a random number, assigns an input and returns it.
            let result; // Initializes a result variable which will change depending what either the player or the computer picked

            console.log(playerSelection, computerSelection);// Prints the playerSelection and computerSelection variables to the console

            // Several if and else statements to display depending on what either the player or the computer picked, it also assigns the result of the match to the variable result

            if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper"){
                result = "You Lose! Paper Beats Rock"
            }

            else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"){
                result = "You Win! Paper Beats Rock"
            }

            else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
                result = "You Lose! Scissors Beats Paper"
            }

            else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
                result = "You Win! Scissors Beats Paper"
            }

            else if (playerSelection.toLowerCase() === "paper" && computerSelection === "paper"){
                result = "It's a draw!"
            }

            else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"){
                result = "You Win! Rock Beats Scissors"
            }

            else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"){
                result = "You Lose! Rock Beats Scissors"
            }

            else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"){
                result = "You Lose! Scissors Beats Paper"
            }

            else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"){
                result = "You Win! Scissors Beats Paper"
            }

            else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "scissors"){
                result = "It's a draw"
            }

            else if (playerSelection.toLowerCase() === "rock" && computerSelection === "rock"){
                result = "It's a draw"
            }

            console.log(result);// Prints the result variable which contains a string that is returned depending on what was played

            if (result.includes("Win")){ // If the result string contains the word "Win", then increment the score variable by one.
                score++;
                dynamicAnnouncer(`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`)// This calls the dynamicAnnouncer() function and passes the string of who won and who played what. This function changes the paragraph which in turn displays the results of the round.
            }

            else if (result.includes("Lose")){// If the result string contains the word "Lose", then increment the computerScore by one
                compScore++;
                dynamicAnnouncer(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);// Calls the dynamicAnnouncer() function to display a different string in the case of a loss
            }

            else if (result.includes("draw")){ // If the result contains the word "Draw", then don't increase either score and call the dynamicAnnouncer() to display a draw message
                dynamicAnnouncer("It's a draw!");
            }

            if (score === 5 || compScore === 5){ // If either the player or the computer reaches the score of 5, then reset the round count to 1 and both the player score and computer score to 0
                console.log(score);
                score = 0;
                compScore = 0;
                console.log('Round Over, score reset!'); // Obsolete code, only shows in the Javascript console
                rounds = 1;
            }
            else {
                console.log(score); // Obsolete
                console.log(rounds); // Obsolete
                rounds++; // If neither the player score or computer score is at 5 then increase the round counter and don't reset anything
            }

            roundKeeping(); // Everytime the singleRound() function is run, run the roundKeeping() function to always update the text 

            scoreKeeping(); // Everytime the singleRound() function is run, run the scoreKeeping() function to update the text

            return result; // Return the result of the round, mostly obsolete but I left it there to end the function
        }

        function game(){ // Obsolete code but can be reviewed, basically calls the singleRound() function five times prompting the user to enter an input, keeps points and informs the player of a loss or a win

            let points = 0;

            for (let round = 1; round < 6; round++){
                if (singleRound().includes("You Win")){
                    points++
                }
            }

            let winner;

            if (points >= 3){
                winner = "You win!";
            }

            else {
                winner = "You lost!"
            }

            console.log(winner, points);
        }

        const playerButtons = document.querySelector('#playerInputs'); // Assigns the div of playerButtons to a Javascript variable

        const rockButton = document.querySelector('#rockButton'); // Assigns the button with the Rock text and ID to a Javascript variable

        const paperButton = document.querySelector('#paperButton');// Assigns the button with the Paper text and ID to a Javascript variable

        const scissorsButton = document.querySelector('#scissorsButton');// Assigns the button with the Scissors text and ID to a Javascript variable

        function playRock(){ // Function to call the singleRound("rock") function with the rock argument
            singleRound('rock');
        }

        function playPaper(){ // Function to call the singleRound("player") function with the rock argument
            singleRound('paper');
        }

        function playScissors(){ // Function to call the singleRound("scissors") function with the rock argument
            singleRound('scissors');
        }

        rockButton.addEventListener('click', playRock); // Added an event listener that calls the playRock() function which effectively calls the singleRound("rock") function which plays the round with rock

        paperButton.addEventListener('click', playPaper); // Added an event listener that calls the playPaper() function which effectively calls the singleRound("paper") function which plays the round with paper

        scissorsButton.addEventListener('click', playScissors); // Added an event listener that calls the playScissors() function which effectively calls the singleRound("scissors") function which plays the round with scissors

        



        


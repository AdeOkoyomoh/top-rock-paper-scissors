console.log("Hello World");

        let score = 0;

        let compScore = 0;

        let rounds = 1;

        const announcer = document.querySelector('#announcer');

        function randomNumberInRange (min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        }

        function computerPlay () {
            let number = randomNumberInRange (1, 4);

            if (number === 1){
                return "rock";
            }

            else if (number === 2){
                return "paper";
            }

            else {
                return "scissors"
            }
        }

        function playerPlay () {
            let playerInput = prompt("Rock, Paper, Scissors?");
            return playerInput
        }

        function dynamicAnnouncer(arg) {
            announcer.textContent = `${arg}`;
        }

        const dynamicRounds = document.querySelector('#rounds');

        dynamicRounds.textContent = `Round ${rounds}`;

        const dynamicScore = document.querySelector('#points');

        dynamicScore.textContent = `You: ${score} : Computer: ${compScore}`;

        function roundKeeping(){
            dynamicRounds.textContent = `Round ${rounds}`;
        }

        function scoreKeeping(){
            dynamicScore.textContent = `You: ${score} : Computer: ${compScore}`;
        }

        function singleRound (playerInput) {
            let playerSelection = playerInput;
            let computerSelection = computerPlay();
            let result;

            console.log(playerSelection, computerSelection);

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

            console.log(result);

            if (result.includes("Win")){
                score++;
                dynamicAnnouncer(`You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`)
            }

            else if (result.includes("Lose")){
                compScore++;
                dynamicAnnouncer(`You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`);
            }

            else if (result.includes("draw")){
                dynamicAnnouncer("It's a draw!");
            }

            if (score === 5 || compScore === 5){
                console.log(score);
                score = 0;
                compScore = 0;
                console.log('Round Over, score reset!');
                rounds = 1;
            }
            else {
                console.log(score);
                console.log(rounds);
                rounds++;
            }

            roundKeeping();

            scoreKeeping();

            return result;
        }

        function game(){

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

        const playerButtons = document.querySelector('#playerInputs');

        const rockButton = document.querySelector('#rockButton');

        const paperButton = document.querySelector('#paperButton');

        const scissorsButton = document.querySelector('#scissorsButton');

        function playRock(){
            singleRound('rock');
        }

        function playPaper(){
            singleRound('paper');
        }

        function playScissors(){
            singleRound('scissors');
        }

        rockButton.addEventListener('click', playRock);

        paperButton.addEventListener('click', playPaper);

        scissorsButton.addEventListener('click', playScissors);

        



        


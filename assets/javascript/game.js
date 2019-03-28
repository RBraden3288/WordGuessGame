    
     // WELCOME PROMPTS
    var watchOscars = confirm("Did you watch the oscars this year?");
        if (watchOscars) {
            alert("Great! You're ready to begin!");
        } else {
            alert("I'm sure you've watched enough movies to figure it out.");
        }
    
    // VARIABLES
    var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
    var oscarWinners = ["BLACKPANTHER", "RAMIMALEK", "SHALLOW", "GREENBROOK", "SPIKELEE", "ROMA", "SPIDERMAN"];
        // .join(" ") a method to create a space between two words
    var guessesRemaining = 10;

    // LETTER BUTTONS
    for (i = 0; i < letters.length; i++) {
        // Inside the loop...
  
        // 2. Create a variable named "letterBtn" equal to $("<button>");
      //   $(<"html element being created">)
        var letterBtn = $("<button>");
  
        // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
  
          letterBtn.addClass("letter-button");
          letterBtn.addClass("letter");
          letterBtn.addClass("letter-button-color");
          // or letterBtn.addClass("letter-button" "letter" "letter-button-color");
  
        // 4. Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]"
        letterBtn.attr("data-letter", letters[i]);
  
        // 5. Then give each "letterBtn" a text equal to "letters[i]".
       letterBtn.text(letters[i]);
  
        // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
        $("#letterOptions").append(letterBtn);
        }
  





    // create a key detection that starts Game
    document.onkeyup = function(event) {
            
        // Determines which key was pressed and defaults it to upper case
        var letters = event.key.toUpperCase();

        // game initiates with random word chosen from oscarWinners
        var randomWinner = oscarWinners[Math.floor(Math.random() * oscarWinners.length)];

        // oscarWinners field is filled with underscores that correspond to number of letters assoc.
        // index of i corresponds to underscores for each field missing
        var hiddenArray = [];
        for (var i = 0; i < randomWinner.length; i++) {
            hiddenArray[i] = "_";
        }

        // if letter chosen is correct then fill in underscore
        // Creates a new variable with correct letters
        var remainingLetters = randomWinner.length;

// The game loop
while (remainingLetters > 0) {
    // Show the player their progress
    alert(hiddenArray.join(" "));
    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop 
   playing.");
    if (guess === null) {
    // Exit the game loop
    break;
    } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
    } else {
    // Update the game state with the guess
    for (var j = 0; j < word.length; j++) {
    if (word[j] === guess) {
    hiddenArray[j] = guess;
    remainingLetters--;
    }
    }
    }

    // The end of the game loop
    }
    // Show the answer and congratulate the player
    alert(hiddenArray.join(" "));
    alert("Good job! The answer was " + word);
    </script>
   </body>
   </html>





       
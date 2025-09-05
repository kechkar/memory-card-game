// Define an array of emojis, with each emoji repeated twice to create pairs for the memory game
const emojis = ['😀','😀', '😳','😳', "🙄","🙄","😍","😍","😁","😁","😭","😭","😅","😅","😉","😉"];
 // Shuffle the emojis randomly
var shuf_emojis = emojis.sort(() => (Math.random() > .5) ? 2 : -1);
// Loop through each emoji in the shuffled array
for(var i = 0; i < emojis.length; i++) {
    // Create a new div element for each emoji
    let box = document.createElement("div");
    // Assign the class "item" to each memory card <div
    box.className = "item";
     // Set the content of the memory card <div> to be one of the shuffled emoji characters
    box.innerHTML = shuf_emojis[i];
    // Append each memory card <div> to the element with the class "game" (the game container)
    document.querySelector(".game").appendChild(box);
    // Add an onclick event handler to each memory card <div>
    box.onclick = function() {
        // Add the class "boxOpen" to the clicked memory card <div>, revealing its content
        this.classList.add('boxOpen');
        
        // Set a timeout to delay the execution of the code inside (to allow the player to see the content of the opened cards)
        setTimeout(function() {
            // Check if there are more than one opened cards
            if(document.querySelectorAll('.boxOpen').length > 1) {
                // Check if the content of the two opened cards match
                if(document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {
                    // If matched, add the class "boxMatch" to both opened cards
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
// Remove the class "boxOpen" from both opened cards
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
// If not matched, remove the class "boxOpen" from both opened cards, hiding their content
                    if(document.querySelectorAll('.boxMatch').length == emojis.length) {
                        alert("You Win");
                    }
                } else {
                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                } 
            }     
        }, 500);// Set the delay to 500 milliseconds
    };
}


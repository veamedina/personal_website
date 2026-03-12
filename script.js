// When the "Fun Fact" button is clicked, display a random fun fact from the list
document.getElementById("funFactBtn").addEventListener("click", function(){
    // List of fun facts to choose from
    const facts = [
        "My bookshelf is overflowing with books—though a few are still patiently waiting to be opened! xD",
        "I’m all about mellow tunes that set the perfect vibe.",
        "Nothing beats stargazing on a clear night and getting lost in the cosmos.",
        "I play around on the piano for fun—definitely not a pro, but it’s a blast!.",
        "Ice cream is my ultimate comfort food—I never say no to a scoop (or two)!"
    ];

    // Select a random fact from the list and display it in the fun fact section
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    
    // Show the fun fact
    const factText = document.getElementById("funFactText");
    factText.textContent = randomFact;
    factText.style.display = "block";
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Get the audio element from the HTML using its ID
const music = document.getElementById("relaxMusic");
const musicBtn = document.getElementById("musicBtn");

// Add an event listener so the button responds when clicked
musicBtn.addEventListener("click", function(){

// Check if the music is currently paused
if(music.paused){
    music.play();
    musicBtn.textContent = "⏸ Pause Music";

} else {
    // If music is already playing, pause it
    music.pause();
    musicBtn.textContent = "▶ Play Relaxing Music";
}

});
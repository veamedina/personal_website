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
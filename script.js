document.getElementById("funFactBtn").addEventListener("click", function(){
    const facts = [
        "I have a closet full of books, like many others some are still not opened xD.",
        "I enjoy mellow music",
        "I enjoy stargazing on clear nights.",
        "I slightly play a piano but not the expert level, I just play for fun."
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    const factText = document.getElementById("funFactText");
    factText.textContent = randomFact;
    factText.style.display = "block";
});
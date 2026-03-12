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

// Hybrid Mobile Toggle
function toggleElement(button, selector) {
  const card = button.closest('.card');
  if (!card) return;
  const element = card.querySelector(selector);
  if (!element) return;
  const style = window.getComputedStyle(element);
  if (style.display === "none") {
    element.style.display = selector === ".hobby-images" ? "flex" : "block";
  } else {
    element.style.display = "none";
  }
}

// Attach toggle for quotes
document.querySelectorAll(".toggleQuoteBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest('.card');
    if (!card) return;
    const quote = card.querySelector('.hobby-quote');
    if (!quote) return;
    quote.classList.toggle('show');
  });
});

// Attach toggle for images
document.querySelectorAll(".togglePhotoBtn").forEach(btn => {
    btn.addEventListener("click", () => toggleElement(btn, ".hobby-images"));
});


// Get audio elements and buttons
const music1 = document.getElementById("Music1");
const music2 = document.getElementById("Music2");
const btn1 = document.getElementById("musicBtn1");
const btn2 = document.getElementById("musicBtn2");

// Function to stop other music when one plays
function stopOther(current, other, otherBtn){
  if(!other.paused){
    other.pause();
    otherBtn.textContent = `▶ Play ${otherBtn.textContent.split('"')[1]}`;
  }
}

// Button 1 toggle
btn1.addEventListener("click", function(){
  stopOther(music1, music2, btn2);
  if(music1.paused){
    music1.play();
    btn1.textContent = '⏸ Pause "For Always"';
  } else {
    music1.pause();
    btn1.textContent = '▶ Play "For Always"';
  }
});

// Button 2 toggle
btn2.addEventListener("click", function(){
  stopOther(music2, music1, btn1);
  if(music2.paused){
    music2.play();
    btn2.textContent = '⏸ Pause "Back to Friends"';
  } else {
    music2.pause();
    btn2.textContent = '▶ Play "Back to Friends"';
  }
});
// PERSONALISE THIS FILE: replace the sample captions, reasons and letter with your own memories.
const memories = [
  { month: "Month One", title: "Where it all began", caption: "Add a little note about your first month together — the moment you keep replaying.", date: "Our beginning", photo: "assets/photos/month-01.jpg" },
  { month: "Month Two", title: "Getting closer", caption: "A tiny detail, a favourite date, or something that made you smile.", date: "A favourite memory", photo: "assets/photos/month-02.jpg" },
  { month: "Month Three", title: "Little moments, big feelings", caption: "Write about a moment that felt very much like the two of you.", date: "A moment to keep", photo: "assets/photos/month-03.jpg" },
  { month: "Month Four", title: "Our kind of happiness", caption: "Add the story behind this month's photo.", date: "One of our days", photo: "assets/photos/month-04.jpg" },
  { month: "Month Five", title: "More memories with you", caption: "What did you do, where were you, and why does it matter to you?", date: "A day I love", photo: "assets/photos/month-05.jpg" },
  { month: "Month Six", title: "Half a year of us", caption: "A little celebration of making it halfway around the sun together.", date: "Six months", photo: "assets/photos/month-06.jpg" },
  { month: "Month Seven", title: "Still my favourite person", caption: "Add a funny, sweet, or completely ordinary memory.", date: "Just us", photo: "assets/photos/month-07.jpg" },
  { month: "Month Eight", title: "The world feels softer", caption: "Write about a time you felt especially loved or understood.", date: "A little love note", photo: "assets/photos/month-08.jpg" },
  { month: "Month Nine", title: "Our own little world", caption: "A memory that belongs only to the two of you.", date: "Our little world", photo: "assets/photos/month-09.jpg" },
  { month: "Month Ten", title: "I would choose this again", caption: "Add a moment that reminds you why this is your favourite story.", date: "Always you", photo: "assets/photos/month-10.jpg" },
  { month: "Month Eleven", title: "Almost one whole year", caption: "The countdown to one year — and all the feelings that came with it.", date: "Almost there", photo: "assets/photos/month-11.jpg" },
  { month: "Month Twelve", title: "One whole year of us", caption: "We made it to a year. Here's to every memory still waiting to happen.", date: "27 November 2026 ♡", photo: "assets/photos/month-12.jpg" }
];

const reasons = [
  "The way you make me laugh",
  "How you listen to me",
  "Your smile",
  "The little things you remember",
  "How safe I feel with you",
  "Simply being you"
];

const timeline = document.getElementById("memoryTimeline");
memories.forEach((memory, index) => {
  const article = document.createElement("article");
  article.className = "memory";
  article.innerHTML = `
    <div class="memory-top">
      <span class="memory-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="memory-month">${memory.month}</span>
    </div>
    <div class="memory-card">
      <div class="memory-photo">
        <span class="photo-placeholder">your memory goes here ♡</span>
        <img src="${memory.photo}" alt="${memory.month} memory" loading="lazy">
      </div>
      <div class="memory-caption">
        <h3>${memory.title}</h3>
        <p>${memory.caption}</p>
        <span class="memory-date">${memory.date}</span>
      </div>
    </div>`;
  const img = article.querySelector("img");
  img.addEventListener("load", () => article.querySelector(".photo-placeholder").style.display = "none");
  img.addEventListener("error", () => img.style.display = "none");
  timeline.appendChild(article);
});

const reasonGrid = document.getElementById("reasonGrid");
reasons.forEach((reason, index) => {
  const button = document.createElement("button");
  button.className = "reason-note";
  button.type = "button";
  button.innerHTML = `<span class="note-symbol">♡</span><span class="note-text">a little reason ${index + 1}</span>`;
  button.addEventListener("click", () => {
    const opened = button.classList.toggle("revealed");
    button.querySelector(".note-text").textContent = opened ? reason : `a little reason ${index + 1}`;
    button.querySelector(".note-symbol").textContent = opened ? "✿" : "♡";
  });
  reasonGrid.appendChild(button);
});

const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicLabel.textContent = "now playing";
      musicToggle.setAttribute("aria-label", "Pause music");
    } catch {
      musicLabel.textContent = "add our-song.mp3";
    }
  } else {
    music.pause();
    musicLabel.textContent = "our song";
    musicToggle.setAttribute("aria-label", "Play music");
  }
});

const overlay = document.getElementById("letterOverlay");
document.getElementById("openLetter").addEventListener("click", () => {
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
});
function closeLetter() {
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
document.getElementById("closeLetter").addEventListener("click", closeLetter);
overlay.addEventListener("click", event => { if (event.target === overlay) closeLetter(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeLetter(); });

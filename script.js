document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("openCaseBtn")
    .addEventListener("click", nextPage);
});

/* 🎶 MUSIC (safe start) */
function fadeInMusic(audio) {
  audio.volume = 0;
  audio.play().catch(() => {});
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.6) {
      vol += 0.02;
      audio.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 120);
}

/* IMAGE FADE-IN */
function enhanceImages() {
  document.querySelectorAll("img").forEach(img => {
    if (img.complete) {
      img.classList.add("loaded");
    } else {
      img.onload = () => img.classList.add("loaded");
    }
  });
}

/* PAGE 1 → PAGE 2 */
function nextPage() {
  const music = document.getElementById("bgMusic");
  if (music && music.paused) fadeInMusic(music);

  document.getElementById("app").innerHTML = `
    <div class="card">
      <h1>🚆 Case History</h1>
      <p>
        Before that day,<br>
        we were familiar names,<br>
        quietly existing in each other’s world.<br><br>

        On <strong>31 May 2023</strong>,<br>
        a train carried more than passengers—<br>
        it carried an unspoken beginning. 🚆<br><br>

        Somewhere between stations,<br>
        <span class="heartbeat">Nila</span> became the diagnosis,<br>
        and love became the treatment. ❤️
      </p>
      <button onclick="loveDistance()">Continue</button>
    </div>
  `;
}

/* PAGE 2 → PAGE 3 */
function loveDistance() {
  document.getElementById("app").innerHTML = `
    <div class="card">
      <h1>💊 Treatment Plan</h1>
      <p>
        Daily calls 📞<br>
        Endless patience ⏳<br>
        Long-distance strength 🌍<br><br>
        Treatment ongoing for <strong>3 years</strong>.
      </p>
      <button onclick="memoryPage()">Continue 💖</button>
    </div>
  `;
}

/* PAGE 3 → PAGE 4 (IMAGE) */
function memoryPage() {
  document.getElementById("app").innerHTML = `
    <div class="card">
      <h1>🌙 Somewhere Between Us</h1>

      <img
        src="dreamy-us.webp"
        class="memory-img"
        loading="lazy"
        decoding="async"
        width="260"
        height="360"
        alt="Us"
      >

      <p class="poetic-text">
        From a train that never knew<br>
        it was carrying two hearts,<br>
        to distances that tried — and failed —<br>
        to pull us apart.
      </p>

      <button onclick="finalQuestion()">Continue 💫</button>
    </div>
  `;

  enhanceImages();
}

/* PROPOSAL PAGE */
function finalQuestion() {
  document.getElementById("app").innerHTML = `
    <div class="card final-card">

      <h1>Will you marry me, Nila? 💍</h1>
      <p class="final-line">
        From that train on 31 May 2023,<br>
        to forever — will you walk with me?
      </p>

      <div class="buttons">
        <button id="yesBtn">Yes 💖</button>
        <button id="noBtn">No 😢</button>
      </div>
    </div>
  `;

  document.getElementById("yesBtn").addEventListener("click", yesAnswer);
  moveNoButton();
  enhanceImages();
}

/* MOVING NO BUTTON */
function moveNoButton() {
  const noBtn = document.getElementById("noBtn");
  const card = document.querySelector(".card");
  if (!noBtn || !card) return;

  noBtn.addEventListener("mouseover", () => {
    const cardRect = card.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = cardRect.width - btnRect.width - 20;
    const maxY = cardRect.height - btnRect.height - 20;

    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
  });
}

/* YES → CASE CLOSED */
function yesAnswer() {
  document.getElementById("app").innerHTML = `
    <div class="card case-closed-card">

      <img
        src="case-closed.webp"
        class="case-img"
        loading="lazy"
        decoding="async"
        width="260"
        height="360"
        alt="Forever"
      >

      <h1>❤️ Case Closed</h1>
      <p class="case-text">
        Hi Chello!!<br>
        Ipdi vanthu maatikitiye da mandaya.
      </p>
    </div>
  `;

  enhanceImages();
}



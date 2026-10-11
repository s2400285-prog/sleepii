const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const toast = document.getElementById("toast");
const revealBox = document.getElementById("revealBox");

let toastTimer;

music.volume = 0.25;

// NOTIFICATIONS

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

// REVEAL HIDDEN MESSAGES

function showMessage(message) {
  revealBox.textContent = message;
  revealBox.classList.add("show");

  revealBox.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
}

// FLOATING HEART ANIMATION

function createHearts(amount = 12) {
  const symbols = ["♥", "♡", "💕", "💗"];

  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");

    heart.className = "heart-pop";

    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = 5 + Math.random() * 90 + "vw";
    heart.style.top = 45 + Math.random() * 40 + "vh";

    heart.style.color = ["#ff7884", "#941321", "#ffabb4"][
      Math.floor(Math.random() * 3)
    ];

    heart.style.animationDelay = Math.random() * 0.4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2200);
  }
}

// MUSIC AUTOPLAY

async function startMusic() {
  try {
    await music.play();

    musicBtn.textContent = "♫ Pause Music";
  } catch (error) {
    musicBtn.textContent = "♫ Play Our Music";

    console.log("Autoplay may be blocked. Click the music button to play.");
  }
}

// Try autoplay as soon as the page loads.
window.addEventListener("load", startMusic);

// MUSIC BUTTON

musicBtn.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();

      musicBtn.textContent = "♫ Pause Music";

      showToast("Our little soundtrack is playing, baby. ♡");
    } catch (error) {
      showToast("Check that music.mp3 is in the same folder as index.html.");
    }
  } else {
    music.pause();

    musicBtn.textContent = "♫ Play Our Music";

    showToast("Music paused, but my heart still misses you. ♡");
  }
});

// FIRST SURPRISE BUTTON

document.getElementById("surpriseBtn").addEventListener("click", () => {
  showMessage(
    "SURPRISE, BABY JULIE! ♡ If I could teleport to you right now, " +
      "I would give you the warmest hug, kiss your forehead, tell you " +
      "how much I miss you, and let you rest comfortably. Unlimited " +
      "hugs are included in this offer. No expiration date. HAHAHA. " +
      "I LOVE YOU, SLEEPY BABY! 💗",
  );

  createHearts(18);
});

// SECRET HEART BUTTON

document.getElementById("secretBtn").addEventListener("click", () => {
  showToast(
    "SECRET UNLOCKED! ♡ One forehead kiss, two warm hugs, " +
      "unlimited I MISS YOUs, and a whole lot of love for Julie!",
  );

  createHearts(25);
});

// PRAYER BUTTON

document.getElementById("prayerBtn").addEventListener("click", () => {
  showMessage(
    "Dear Heavenly Father, thank You for Julie and for the blessing " +
      "she is in my life. Please help her get the rest she needs after " +
      "not getting enough sleep. Give her peace, strength, good health, " +
      "and joy today. Protect her wherever she goes, guide her decisions, " +
      "and remind her of Your love. Help me care for her with patience, " +
      "kindness, honesty, and understanding. May You always be at the " +
      "center of our lives and our relationship. In Jesus' name, Amen. ♡",
  );

  createHearts(10);
});

// HOW MUCH DO I LOVE YOU BUTTON

document.getElementById("loveBtn").addEventListener("click", () => {
  showMessage(
    "Baby, I love you more than this little website can explain. ♡ " +
      "I love you on happy days, tired days, ordinary days, and the " +
      "days when everything feels difficult. I want to keep learning " +
      "about you, listening to you, praying for you, supporting you, " +
      "and making beautiful memories with you. I cannot promise that " +
      "every day will be perfect, but I can keep trying to treat you " +
      "with care, patience, and respect. You are so precious to me, " +
      "Julie. I MISS YOU AND I LOVE YOU! 💗",
  );

  createHearts(22);
});

// LITTLE HEARTS WHEN NAVIGATING

document.querySelectorAll(".nav-links a, .logo").forEach((link) => {
  link.addEventListener("click", () => {
    createHearts(5);
  });
});

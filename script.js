const quotes = {
  F: "True friendship multiplies the good in life. 👯‍♀️",
  L: "Love is composed of a single soul inhabiting two bodies. ❤️",
  A: "Affection is when you see someone's flaws perfectly. 😊",
  M: "Marriage is not the end, but the beginning of a beautiful journey. 💍",
  E: "Even enemies teach us lessons worth learning. 😠",
  S: "Siblings are built-in best friends. 👫"
};

const tips = {
  F: "Talk more! You both are great friend material.",
  L: "There's definitely a spark here. Maybe shoot your shot? 💘",
  A: "Soft vibes all around! Respect and warmth matter. ✨",
  M: "You two are a long-term type. Keep the connection growing. 💞",
  E: "Tread carefully. Opposites can clash. 🧨",
  S: "Always a sibling-like bond. That's rare and special. 🤗"
};

function typeEffect(text, elementId) {
  const el = document.getElementById(elementId);
  el.innerHTML = '';
  el.classList.add('typing');
  let i = 0;
  const interval = setInterval(() => {
    el.innerHTML = text.substring(0, i + 1);
    i++;
    if (i === text.length) {
      clearInterval(interval);
      el.classList.remove('typing');
    }
  }, 50);
}

function calculateFLAMES() {
  const resultDiv = document.getElementById("result");
  const quoteDiv = document.getElementById("quote");
  const tipDiv = document.getElementById("tip");
  const successSound = document.getElementById("successSound");
  const errorSound = document.getElementById("errorSound");
  const title = document.getElementById("easterTitle");
  const bgMusic = document.getElementById("bgMusic");

  let name1 = document.getElementById("name1").value.toLowerCase().replace(/\s/g, "");
  let name2 = document.getElementById("name2").value.toLowerCase().replace(/\s/g, "");

  if (!name1 || !name2) {
    errorSound.play();
    resultDiv.innerText = "❗ Please enter both names.";
    return;
  }

  // ===== EASTER EGGS ===== //
  
  // 1. Romeo & Juliet
  if ((name1 === 'romeo' && name2 === 'juliet') || (name1 === 'juliet' && name2 === 'romeo')) {
    title.innerText = "🌹 Romeo & Juliet Forever 💘";
    typeEffect("💖 You two are a timeless love story!", "result");
    typeEffect("🎭 Tragic yet beautiful. Shakespeare would be proud.", "quote");
    typeEffect("💡 Tip: Avoid poison and miscommunication 😅", "tip");
    createSpecialHearts();
    bgMusic.src = "https://www.bensound.com/bensound-music/bensound-romantic.mp3";
    bgMusic.play();
    return;
  }
  
  // 2. Celebrity Couples
  const celebrityCouples = {
    "bradpittangelinajolie": ["❤️ Brangelina Forever ❤️", "Hollywood's golden couple... until they weren't", "Tip: Maybe don't get matching tattoos too soon"],
    "beyoncejayz": ["👑 Queen B & Hova 👑", "They put a ring on it and never looked back", "Tip: When you're this powerful, you can have your own couple name"],
    "kimkanye": ["💔 Kimye 💔", "This ship has sailed... and then some", "Tip: Maybe don't air your marriage troubles on social media"]
  };
  
  const coupleKey = [name1, name2].sort().join("");
  if (celebrityCouples[coupleKey]) {
    title.classList.add("easter-egg-active");
    const [result, quote, tip] = celebrityCouples[coupleKey];
    typeEffect(result, "result");
    typeEffect(quote, "quote");
    typeEffect(tip, "tip");
    createConfetti();
    return;
  }
  
  // 3. Developer Mode
  if ((name1 === 'developer' && name2 === 'mode') || (name1 === 'debug' && name2 === 'mode')) {
    title.innerHTML = "👨‍💻 <span style='color: lime'>DEVELOPER MODE ACTIVATED</span> 👩‍💻";
    typeEffect("🤖 FLAMES Algorithm Override", "result");
    typeEffect("01001100 01101111 01110110 01100101", "quote");
    typeEffect("Tip: Ctrl+Alt+Del your relationship issues", "tip");
    document.body.style.background = "linear-gradient(135deg, #000, #333)";
    return;
  }
  
  // 4. Avengers Couples
  const avengersCouples = {
    "tonystarkpepperpotts": ["💍 Iron Man & Rescue 💍", "Proof that even genius billionaires need love", "Tip: Have your partner's back... literally with armor"],
    "steverogerspeggycarter": ["🛡️ Captain America & Agent Carter 🛡️", "A love that transcended time", "Tip: Sometimes you have to wait 70 years for the right moment"],
    "thorjane": ["⚡ God of Thunder & The Scientist ⚡", "When Norse mythology meets astrophysics", "Tip: Long distance works when you can bifrost"]
  };
  
  if (avengersCouples[coupleKey]) {
    title.innerHTML = "🦸‍♂️ MARVEL-ous Couple 🦸‍♀️";
    const [result, quote, tip] = avengersCouples[coupleKey];
    typeEffect(result, "result");
    typeEffect(quote, "quote");
    typeEffect(tip, "tip");
    createLightningEffect();
    return;
  }
  
  // 5. Secret Password
  if (name1 === 'open' && name2 === 'sesame') {
    title.innerHTML = "🎪 <span style='color: gold'>SECRET TREASURE FOUND!</span> 🏆";
    typeEffect("💰 You found the hidden treasure!", "result");
    typeEffect("The real treasure was the friends we made along the way", "quote");
    typeEffect("Tip: Now go enjoy your riches!", "tip");
    createCoinRain();
    return;
  }

  // Original FLAMES calculation
  let name1Arr = name1.split("");
  let name2Arr = name2.split("");

  for (let i = 0; i < name1Arr.length; i++) {
    let index = name2Arr.indexOf(name1Arr[i]);
    if (index !== -1) {
      name1Arr[i] = "";
      name2Arr[index] = "";
    }
  }

  let count = (name1Arr.join("") + name2Arr.join("")).length;

  let flames = ["F", "L", "A", "M", "E", "S"];
  let meanings = {
    F: "Friends 👯",
    L: "Love ❤️",
    A: "Affection 😊",
    M: "Marriage 💍",
    E: "Enemies 😠",
    S: "Siblings 👫"
  };

  let index = 0;
  while (flames.length > 1) {
    index = (index + count - 1) % flames.length;
    flames.splice(index, 1);
  }

  successSound.play();
  typeEffect(`💫 Result: ${meanings[flames[0]]}`, "result");
  typeEffect(`💬 Quote: ${quotes[flames[0]]}`, "quote");
  typeEffect(`🧠 Tip: ${tips[flames[0]]}`, "tip");
}
function reset()
{
  location.reload();
}
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// ===== SPECIAL EFFECT FUNCTIONS ===== //

function createFloatingHearts() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  const xPosition = Math.random() * window.innerWidth;
  const yPosition = window.innerHeight + 50;

  heart.style.left = `${xPosition}px`;
  heart.style.top = `${yPosition}px`;
  heart.style.animationDuration = `${Math.random() * 5 + 5}s`;
  heart.style.transform = `rotate(${Math.random() * 360}deg)`;
  heart.style.opacity = Math.random() * 0.5 + 0.3;

  const hue = Math.random() * 30 + 350;
  heart.style.backgroundColor = `hsl(${hue}, 100%, 70%)`;
  heart.style.setProperty('--heart-color', `hsl(${hue}, 100%, 70%)`);

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

function createSpecialHearts() {
  clearInterval(heartInterval);
  for (let i = 0; i < 50; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.style.left = `${Math.random() * window.innerWidth}px`;
      heart.style.top = `${window.innerHeight + 50}px`;
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
      heart.style.transform = `rotate(${Math.random() * 360}deg)`;
      heart.style.backgroundColor = `hsl(${Math.random() * 60 + 330}, 100%, 70%)`;
      document.body.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, i * 100);
  }
}

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = `${Math.random() * window.innerWidth}px`;
      confetti.style.top = `-10px`;
      confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      confetti.style.width = `${Math.random() * 10 + 5}px`;
      confetti.style.height = confetti.style.width;
      confetti.style.animation = `floatHearts ${Math.random() * 3 + 2}s linear forwards`;
      document.body.appendChild(confetti);
      
      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }, i * 50);
  }
}

function createLightningEffect() {
  const lightning = document.createElement('div');
  lightning.style.position = 'fixed';
  lightning.style.top = '0';
  lightning.style.left = '0';
  lightning.style.width = '100%';
  lightning.style.height = '100%';
  lightning.style.background = 'linear-gradient(transparent 70%, rgba(255,255,0,0.3))';
  lightning.style.pointerEvents = 'none';
  lightning.style.animation = 'flash 0.5s 3';
  document.body.appendChild(lightning);
  
  setTimeout(() => {
    lightning.remove();
  }, 2000);
}

function createCoinRain() {
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const coin = document.createElement('div');
      coin.innerHTML = '💰';
      coin.style.position = 'absolute';
      coin.style.fontSize = '30px';
      coin.style.left = `${Math.random() * window.innerWidth}px`;
      coin.style.top = `-50px`;
      coin.style.animation = `floatHearts ${Math.random() * 3 + 2}s linear forwards`;
      document.body.appendChild(coin);
      
      setTimeout(() => {
        coin.remove();
      }, 5000);
    }, i * 200);
  }
}

// Create hearts at intervals
let heartInterval = setInterval(createFloatingHearts, 50);

// Start background music
document.addEventListener('click', function() {
  const bgMusic = document.getElementById('bgMusic');
  bgMusic.volume = 0.3;
  bgMusic.play().catch(e => console.log("Autoplay prevented:", e));
}, { once: true });

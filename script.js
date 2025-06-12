const fullMessage = `
  Actually,I saw you on 19th september in blue dress at first .I dont know why I like you ?
  But,I fall for you at the moment. I tried many time to say this to you but I cant in college .
  Now too I dont know that you are listening this . 
I WANT TO CONFESS YOU SOMETHING
  <STRONG>I LOVE YOU
  WILL YOU BE MY HAPPY MEMORY OF MY LIFE ?
  💖 CAN I BE YOURS 💖
`;

function revealMessage() {
  const messageDiv = document.getElementById("message");
  const music = document.getElementById("bgmusic");
  const buttons = document.getElementById("response-buttons");

  music.play();
  messageDiv.innerHTML = "";
  messageDiv.style.display = "block";
  buttons.style.display = "none";
  let i = 0;

  function typeWriter() {
    if (i < fullMessage.length) {
      messageDiv.innerHTML = fullMessage.substring(0, i + 1);
      i++;
      setTimeout(typeWriter, 80);
    } else {
      // After full message, show Yes/No buttons
      buttons.style.display = "flex";
    }
  }

  typeWriter();

  // Floating hearts animation
  for (let j = 0; j < 30; j++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}

function handleNo() {
  const messageDiv = document.getElementById("message");
  const music = document.getElementById("bgmusic");
  const buttons = document.getElementById("response-buttons");

  // Stop music
  music.pause();
  music.currentTime = 0;

  // Clear everything
  messageDiv.innerHTML = "<strong>💔 Maybe it just wasn't meant to be.</strong>";
  buttons.style.display = "none";

  // Optional: fade out everything after a few seconds
  setTimeout(() => {
    document.body.innerHTML = "<h2 style='text-align:center;margin-top:50vh;'>Thank you for listening. Dont say to anyone its for you </h2>";
  }, 1000);
}

function handleYes() {
  const messageDiv = document.getElementById("message");
  const buttons = document.getElementById("response-buttons");
  buttons.style.display = "none";

  messageDiv.innerHTML += `<br><br><strong>💞 BE READY ON YOUR BIRTHDAY FOR MY PROPOSAL MY HAPPINESS 💞</strong>`;
}

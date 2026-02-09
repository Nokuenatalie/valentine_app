let boy = "";
let girl = "";
let msg = "";

function createInvite() {
  boy = document.getElementById("boyName").value;
  girl = document.getElementById("girlName").value;
  msg = document.getElementById("message").value;

  if (boy === "" || girl === "" || msg === "") {
    alert("Please fill in all fields 💕");
    return;
  }

  document.getElementById("formCard").classList.add("hidden");
  document.getElementById("inviteCard").classList.remove("hidden");

  document.getElementById("inviteTitle").innerText =
    `Dear ${girl} 💖`;

  document.getElementById("inviteMessage").innerText =
    msg;
}

function sayYes() {
  document.getElementById("inviteCard").classList.add("hidden");
  document.getElementById("yesCard").classList.remove("hidden");

  document.getElementById("secretMessage").innerText =
    `${girl}, I’m so happy 😍 Happy Valentine’s Day! Love, ${boy} ❤️`;
}

function sayNo() {
  document.getElementById("inviteCard").classList.add("hidden");
  document.getElementById("noCard").classList.remove("hidden");
}

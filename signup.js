document.getElementById("signup-btn").addEventListener("click", function () {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const passcode = document.getElementById("passcode").value;
  const termsCheckbox = document.getElementById("terms-checkbox").checked;
  if (!firstName || !lastName || !email || !contact || !passcode){
      alert("CHACHO DATA ENTER KARO");
      return;
  }
  if (!termsCheckbox) {
      alert("CHACHO TERMS SE AGREE KARO.");
      return;
  }
  alert(`Welcome ${firstName} ${lastName}! Your account has been created.`);
  window.location.href = 'add.html';
  document.querySelector(".sign-up-form").reset();
});

//---------------------------------------------------------------------------------------------------

document.getElementById("login-btn").addEventListener("click", function(){
  const email = document.getElementById("email2").value.trim();
  const username = document.getElementById("username2").value.trim();
  const passcode = document.getElementById("passcode2").value.trim();
  const termsCheckbox = document.getElementById("terms-checkbox2").checked;

  if (!email || !username || !passcode) {
    alert("CHACHO DATA ENTER KARO");
    return;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  if (passcode.length < 6) {
    alert("Passcode must be at least 6 characters long.");
    return;
  }
  if (!termsCheckbox) {
      alert("KYA AP KA USER NAME AUR PASSCODE SAI HAI??");
      return;
  }
  alert(`AGYA TU JAWAN HO KAR, ${username}`);
  document.querySelector(".log-in-form").reset();
  window.location.href = 'add.html';
  
});
//---------------------------------------------------------------------------------------------------
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();

  const name = document.getElementById("name3").value;
  const email = document.getElementById("email3").value;
  const contact = document.getElementById("contact3").value;
  const query = document.getElementById("query").value;
  if (!name || !email || !contact || !query){
    alert("CHACHO DATA ENTER KARO");
      return;
  }
  alert(`Thank yo, ${name} ap ki prablum solve kartay hain hum.`);
  document.querySelector(".help-center-form").reset();
});




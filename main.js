let accordions = document.querySelectorAll('.accordion-container .accordion')

accordions.forEach(acco => {
  acco.onclick = () => {
    accordions.forEach(subAcco => { subAcco.classList.remove('active') })
    acco.classList.add('active');
  }
})
/*------------------------------------------------------------------------------------------------------------------------------------------- */

/*document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.registe');
    form.addEventListener('submit', function(event) {
        var name = document.getElementById('full-name').value;
        var cin = document.getElementById('cin').value;
        var tel = document.getElementById('tel').value;
        var email = document.getElementById('email').value;

        var fullNameRegex = /^[A-Za-z\s']{3,}$/;
        var cinRegex = /^[a-zA-Z]{2}\d{6}$/;
        var telRegex = /^[+212]\d{9}$/;
        var emailRegex = /^\S+@\S+.\S+$/;

        if (!fullNameRegex.test(name)) {
            alert("Please enter a valid full name (minimum 3 characters).");
            event.preventDefault();
            return;
        }

        if (!cinRegex.test(cin)) {
            alert("Please enter a valid CIN (8 digits).");
            event.preventDefault();
            return;
        }

        if (!telRegex.test(tel)) {
            alert("Please enter a valid phone number (starts with +212 and followed by 9 digits).");
            event.preventDefault();
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        if (ville === "") {
            alert("Please choose a city.");
            event.preventDefault();
            return;
        }

        if (plans === "") {
            alert("Please choose a plan.");
            event.preventDefault();
            return;
        }
    });
});*/
// regex
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.regitre-j');
  form.addEventListener('submit', function (event) {
    var fullName = document.getElementById('full-name').value;
    var cin = document.getElementById('cin').value;
    var tel = document.getElementById('tel').value;
    var email = document.getElementById('email').value;

    var fullNameRegex = /^[A-Za-z\s']{3,}$/;
    var cinRegex = /^[a-zA-Z]{2}\d{6}$/;
    var telRegex = /^[+212]\d{9}$/;
    var emailRegex = /^\S+@\S+.\S+$/;

    if (!fullNameRegex.test(fullName)) {
      alert("Please enter a valid full name (minimum 3 characters).");
      event.preventDefault();
      return;
    }

    if (!cinRegex.test(cin)) {
      alert("Please enter a valid CIN (8 digits).");
      event.preventDefault();
      return;
    }

    if (!telRegex.test(tel)) {
      alert("Please enter a valid phone number (starts with +212 and followed by 9 digits).");
      event.preventDefault();
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;
    }
  });
});





const menuicon = document.querySelector(".menu-icon");
const navBar = document.querySelector(".nav-bar");

menuicon.addEventListener("click", () => {
  menuicon.classList.toggle("active");
  navBar.classList.toggle("active");
})

document.querySelectorAll(".nav-bar li").forEach(n => n.addEventListener("click", () => {
  menuicon.classList.remove("active");
  navBar.classList.remove("active");
}))

const faq = document.querySelectorAll("h4");

faq.forEach((faq) => {
  faq.addEventListener('click', () => {
    const answer = faq.nextElementSibling;
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {
      answer.style.display = 'block';
    }
  })
})


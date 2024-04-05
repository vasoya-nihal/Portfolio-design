var typed = new Typed(".text",{
    strings:["Frontend Developer", "Youtuber","Web developer","Blogger"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    startDelay: 1289,
    loop:true
});

var nav_full = document.getElementById('navbarSupportedContent');

nav_full.addEventListener('click', function() {
   
    var toggler = document.querySelector(".navbar-toggler");
    toggler.click();
   
});


document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        suggestion: document.getElementById('suggestion').value
    };

    // Save form data to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Reset the form after submission
    this.reset();

    // Inform the user that the data has been saved
    alert('Form data has been saved.');
});
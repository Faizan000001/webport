const menu = document.querySelector(".hamburger");
    const list = document.querySelector(".navlist");
document.addEventListener('DOMContentLoaded', function() { 
    menu.addEventListener('click', () =>{
        list.classList.toggle("navlist-active")
    })
  });
  

// Contact coding
const submit = document.getElementById('submit');
document.addEventListener('DOMContentLoaded', function() { 
    submit.addEventListener('click', () =>{
    // Capture the values from the input fields
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("textarea").value;

    // Store the values (you can store in an array or log it as needed)
    let formData = {
        name: name,
        subject: subject,
        phone: phone,
        email: email,
        message: message
    };

    console.log("Form Data:", formData); // You can replace this with a function to store the data elsewhere

    // Clear the input fields
    document.getElementById("name").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("textarea").value = "";

    // Optionally, show a success message or handle further actions
    alert("Form submitted successfully!");
});

function Login(e){
e.preventDefault(); // PAGE RELOAD NAH HO


let email=document.getElementById("email").value;

console.log(email)
}
document.getElementById("loginForm").addEventListener("submit", Login);

});

   
// Blog coding
const submits = document.getElementById('submits');
document.addEventListener('DOMContentLoaded', function(event) { 
    event.preventDefault();
    submits.addEventListener('click', () =>{
        let message = document.getElementById('textarea').value;
        console.log(message);
        document.getElementById('textarea').value = '';
        alert('comment submitted successfully!');
    })
    
    
})

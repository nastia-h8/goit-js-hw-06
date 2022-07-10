const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const {elements: { email, password }}  = event.currentTarget;

     if (email.value === "" || password.value === "") {
        return window.alert("Усі поля повинні бути заповнені!");
     }
    
    let userData = {
        Email: email.value,
        Password: password.value,
    }
    console.log(userData);
    
    event.currentTarget.reset();
})  



// login form data
const login_user = document.querySelector('#user');
const login_pass = document.querySelector('#passcode');
const login_btn = document.querySelector('#loginBtn');
const change_view = document.querySelector('#changeType');

// sign up form data
const signUp_user = document.querySelector('#userName');
const signUp_mail = document.querySelector('#userMail');
const signUp_pass = document.querySelector('#passCode');
const signUp_changeView = document.querySelector('#changeTypeSignUp');
const signUp_btn = document.querySelector('#signBtn');

// validation
function valid(email, password) {
    // username pattern
    const user_name = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z0-9]{2,}$/;

    // form data 
    let user_data = email.value.trim();
    let password_data = password.value.trim();

    // username match 
    if (!user_name.test(user_data)) {
        alert('Enter valid email')
        return
    }

    // password match
    if (password_data === '') {
        alert('Your password field should not be empty')
        return
    }
}

// pasword show/hide function
function visibility(passcode) {
    // condition
    return passcode.getAttribute('type') === 'password' ? passcode.setAttribute('type', 'text') : passcode.setAttribute('type', 'password')
}

// eye button visibility 
function eyeButton(button) {
    let icon = button.querySelector('i')
    // condition
    if (icon.classList.contains('fa-eye')) {
        icon.classList.replace('fa-eye', 'fa-eye-slash')
    } else {
        icon.classList.replace('fa-eye-slash', 'fa-eye')
    }
}

// login with button call 
login_btn.addEventListener('click', (e) => {
    // prevent page from reload
    e.preventDefault()
    // call the main function
    valid(login_user, login_pass)
})

// login password hide/show button
change_view.addEventListener('click', () => {
    // change eye button
    eyeButton(change_view)
    // call the show-hide function
    visibility(login_pass)
})

// Sign Up with button call 
signUp_btn.addEventListener('click', (e) => {
    // prevent form from reload
    e.preventDefault()
    // name validation
    const namePattern = /[a-zA-Z0-9]/
    
    // checkpoint for name
    if (!namePattern.test(signUp_user.value)) {
        alert('Please input your name')
        return
    }
    // mail and password validation
    valid(signUp_mail, signUp_pass)
})

// sign up password show/hide button
signUp_changeView.addEventListener('click', () => {
    // change eye button
    eyeButton(signUp_changeView)
    // call the show-hide function
    visibility(signUp_pass)
})

// Certain 
const certain = document.querySelector('.certains');

// Certain functionality
function Certain(heading, buttonText) {
    // default pattern
    const info = `
    <div class="info">
        <h1>${heading}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, dolorem!</p>
        <p>Let's Quick <button class="btn">${buttonText}</button></p>
    </div>`;
    
    // add to HTML Doc.
    certain.innerHTML = info;

    // re-bind toggle after content update
    const btn = certain.querySelector('.btn');
    btn.addEventListener('click', () => {
        if (btn.textContent === 'Sign Up Now') {
            certain.classList.add('active');
            Certain('Explore your <br> Gym world.', 'Login Now');
        } else {
            certain.classList.remove('active');
            Certain('Quick Join & <br> Explore your health', 'Sign Up Now');
        }
    });
}

// Initialize with default values
Certain('Quick Join & <br> Explore your health', 'Sign Up Now');


// index document from validation
// newsletter subscribe validation
const firstName = document.querySelector('#firstName'); 
const lastName = document.querySelector('#lastName'); 
const email = document.querySelector('#email'); 
const submitBtn = document.querySelector('#submitNewsletter'); 

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    // get values
    let firstNameValue = firstName.value;
    let lastNameValue = lastName.value;
    let emailValue = email.value;

    // Name Validation
    const namePattern = /[a-zA-Z]/;
    const emailPattern = /^[a-zA-Z0-9.&!]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/

    // check 
    firstName.parentElement.querySelector('p').textContent = !namePattern.test(firstNameValue) ? 'Please add valid name' : '';
    lastName.parentElement.querySelector('p').textContent = !namePattern.test(lastNameValue) ? 'Please add valid name' : '';
    email.parentElement.querySelector('p').textContent = !emailPattern.test(emailValue) ? 'Please add valid email (john@mail.com)' : '';
})
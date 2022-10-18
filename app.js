const formContainer = document.querySelector('.form-container');
const mainForm = document.querySelector('.main');
const logBtns = document.querySelectorAll('.log-btn');
const form = document.querySelector('form');

let login = true;

function formChanger() {
    if(login) {
        mainForm.innerHTML = `
        <h1 class="title">Welcome to our website</h1>
        <p class="subtitle">to order of using our services you should log in your account first</p>
        <div class="input-container txt-container"><input type="text" class="name txt" id="name"><span class="placeholder txt-placeholder">Name</span></div>
        <div class="input-container txt-container"><input type="email" class="email txt" id="email"><span class="placeholder txt-placeholder">Email</span></div>
        <div class="input-container txt-container"><input type="password" class="pass txt" id="password"><span class="placeholder txt-placeholder">password</span></div>
        <div class="input-container txt-container"><input type="password" class="confirmation txt" id="confirmation"><span class="placeholder txt-placeholder">confirm</span></div>
        <div class="input-container check"><input type="checkbox" required  onclick="enableSubmit(event)"><label for="" class="placeholder">I read your terms of services and i agreed.</label></div>
        <div class="input-container check"><input type="checkbox" id="check"><label for="" class="placeholder">remember me</label></div>
        <div class="submit-container"><div class="submit-border"></div> <input type="submit" value="Submit" class="submition-btn" onmouseenter="borderAnimation(event)" onmouseout="borderAnimation(event)" disabled id="agreement"></div>
        <p class="sign-up-directon" onclick="formChanger()">Already have an account? click here.</p>`;
        login = false;
        logBtns[0].classList.remove('active-btn');
        logBtns[1].classList.add('active-btn');
    }   
    else {
        mainForm.innerHTML = `
        <h1 class="title">Welcome back to our website</h1>
        <p class="subtitle">to order of using our services you should log in your account first</p>
        <div class="input-container txt-container"><input type="email" class="email txt" id="email"><span class="placeholder txt-placeholder">Email</span></div>
        <div class="input-container txt-container"><input type="password" class="pass txt" id="password"><span class="placeholder txt-placeholder">password</span></div>
        <div class="input-container check"><input type="checkbox" id="check"><label for="" class="placeholder">remember me</label></div>
        <div class="submit-container"><div class="submit-border"></div> <input type="submit" value="Submit" class="submition-btn" onmouseenter="borderAnimation(event)" onmouseout="borderAnimation(event)"></div>
        <p class="sign-up-directon" onclick="formChanger()">Don't have an account? click here.</p>`;
        login = true;
        logBtns[1].classList.remove('active-btn');
        logBtns[0].classList.add('active-btn');
    }
}


logBtns.forEach( btn => btn.addEventListener('click', formChanger))

let isOnButton = false;

function borderAnimation(event){
    if(!isOnButton){
        event.target.parentElement.firstChild.style.width = '400px';
        isOnButton = true
    } else {
        event.target.parentElement.firstChild.style.width = '0';
        isOnButton = false;
    }
}

// function setCoockie(event){
    
// }


form.addEventListener('submit', ()=> {
    let coockieCheck = document.getElementById('check');
    let emailInput = document.getElementById('email')
    if(coockieCheck.checked){
        document.cookie = "name=meiti;path=/"
    }
})


function enableSubmit(event){
    let agreement = document.getElementById('agreement')
    if(agreement.disabled){
        agreement.disabled = false
    }
    else{
        agreement.disabled = true
    }
}
const signUpBtn = document.querySelector('.sign-up');
const logInBtn = document.querySelector('.signup-log-in');
const signUpForm = document.querySelector('.signup-form');
const logInForm = document.querySelector('.login-form');
const loginEmail = document.querySelector('.login-email');
const loginPass = document.querySelector('.login-pass');
const loginSetCookie = document.querySelector('.login-cookie');
const signupDirection = document.querySelector('.sign-up-direction');
const loginSubmit = document.querySelector('.login-submit');
const signUpEmail = document.querySelector('.signup-email');
const signUpPass = document.querySelector('.signup-pass');
const sigUPSetCookie = document.querySelector('.signup-cookie');
const signUpSubmit = document.querySelector('.signup-submit');
const signUpName = document.querySelector('.name');
const agreement = document.querySelector('.agreement');
const confirmationPass = document.querySelector('.sign-confirmation');
console.dir(agreement)


let isLogin = true;

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",'1','2','3','4','5','6','7','8','9','0'];
function randomIdGenerator(){
    let myIdArr = [];
    for(let i = 0;i < 50; i++){
        myIdArr.push(alphabet[Math.floor(Math.random()*(alphabet.length))]);
    }
    let myId = myIdArr.join('');
    return myId;
}

signUpBtn.addEventListener('click', ()=>{
    logInForm.classList.remove('active-form');
    signUpForm.classList.add('active-form');
})


logInBtn.addEventListener('click',()=>{
    signUpForm.classList.remove('active-form');
    logInForm.classList.add('active-form');
});

signupDirection.addEventListener('click', ()=>{
    logInForm.classList.remove('active-form');
    signUpForm.classList.add('active-form');
})



signUpSubmit.addEventListener('click',(event)=>{
    if( confirmationPass.value === signUpPass.value){
        event.preventDefault();
        let users = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPass.value,
            id: randomIdGenerator()
        }
        fetch('https://myusers-d4904-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(users)
        })
            .then((response) => {
                window.location.href = 'main.html';
                window.localStorage.setItem('islogin','true');
            })
            .catch(err => console.log(err))
    } else {
        alert('please repeat the password here');
        confirmationPass.focus()
    }
})




loginSubmit.addEventListener('click', ()=>{
    fetch('https://myusers-d4904-default-rtdb.firebaseio.com/users.json')
        .then(res => res.json())
        .then(data => Object.values(data))
        .then((result)=>{
            let users = result.findIndex((user) => {
                return user.email === loginEmail.value
            })
            if(result[users].password === loginPass.value){
                window.location.href = 'main.html';
            }
            else {
                alert('invaliud email or password');
            }
        })
        .catch(err => console.log(err))
})

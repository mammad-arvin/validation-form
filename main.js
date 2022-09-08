const signIn=document.querySelector('.sign-inForm')
const signUp=document.querySelector('.sign-upForm')
const signUpOverlay=document.querySelector('.sign-upOverlay');
const overlayContainer=document.querySelector('.overlayContainer');
const overlayBtn=document.querySelectorAll('.overlayBtn')
for(let item of overlayBtn){
    item.addEventListener('click',switchOverlay)
}
function switchOverlay(){
    signUp.classList.toggle('sign-upAnime');
    signIn.classList.toggle('sign-inAnime');
    overlayContainer.classList.toggle('changeOverlayPosition');
}
    // tab key jump to other form not active so disabled
document.addEventListener('keydown',tabKey)
function tabKey(event){
    if(event.keyCode === 9){
        event.preventDefault();
        alert('TabKey Not support');
    }
}


const popUp=document.querySelector('.popUp')
let email=document.getElementById('email');
let password=document.getElementById('password');
document.getElementById('sign-inSubmit').addEventListener('click',signinSubmitfunc);
function signinSubmitfunc(){
    if(email.value.includes('@') && password.value.length>=8){
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:'POST',
            body:JSON.stringify({
                userMail:email.value,
                userPassword:password.value
            }),
            headers:{'Content-Type': 'Application/json'}
        })
            .then(response => response.json())
            .then(() => {
                creatPopUp(true);
                email.value="";
                password.value="";
            })
    }else{
            creatPopUp(false);
        }
}
function creatPopUp(status){
    let color='#e74c3c';
    let paragraph;
    if(status){
        color='#5a8919';
        paragraph='Sign in Successful';
    }else if(!status){
        // color='#e74c3c';
        paragraph='Sign in Failed. Please Cheke Your Password and Email';
    }
    else if(status === 'signuped'){
        color='#5a8919';
        paragraph='Sign up Successful';
    }
    else if(status==="nameFailed"){
        paragraph='Please Fill Name';
    }
    popUp.style.display='flex';
    const popUpContent=
        `<div class="popUpContent" style="--clr:${color};">
            <p>${paragraph}</p>
            <button class="delet">Back</button>
        </div>`
    ;
    popUp.innerHTML=popUpContent;
}
const name=document.getElementById('name');
const signUpEmail=document.getElementById('sign-upEmail');
const signUpPassword=document.getElementById('sign-upPassword');
const signUpRenterPassword=document.getElementById('sign-upRenterPassword');
document.getElementById('sign-upSubmit').addEventListener('click',signupSubmitfunc)
function signupSubmitfunc(){
    const input=document.querySelectorAll('input')
    for(let item of input){
        item.style.borderColor="#cecece";
    }
    if(name.value && signUpEmail.value.includes('@') && signUpPassword.value.length >=8 && signUpPassword.value === signUpRenterPassword.value){
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:'POST',
            body:JSON.stringify({
                userMail:signUpEmail.value,
                userPassword:signUpPassword.value
            }),
            headers:{'Content-Type': 'Application/json'}
        })
            .then(response => response.json())
            .then(() => {
                creatPopUp('signuped');
                email.value="";
                password.value="";
            })
    }
    else if(!name.value){
        name.placeholder = 'Name Shall Filled';
        name.style.borderColor="red";
    }
    else if(!signUpEmail.value.includes('@')){
        signUpEmail.placeholder = 'Email invalid';
        signUpEmail.style.borderColor="red";
    } 
    else if(signUpPassword.value !== signUpRenterPassword.value){
        signUpPassword.placeholder = ' password not match';
        signUpPassword.style.borderColor="red";
        signUpRenterPassword.placeholder = ' password not match';
        signUpRenterPassword.style.borderColor="red";
    }
    else if(signUpPassword.value.length <=8){
        signUpPassword.placeholder = 'Password Shall 8 character or more than 8';
        signUpPassword.style.borderColor="red";
    }
}
popUp.addEventListener('click',popUpDelete)
function popUpDelete(event){
    const delet=event.target;
    if(delet.classList.contains('delet')){
        delet.parentElement.parentElement.style.display='none';
        delet.parentElement.remove();
    }
}
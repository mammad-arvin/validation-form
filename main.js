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
    

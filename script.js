//////////////////////////////////////////// Global variables
const signInForm = document.querySelector('.signIn');
const signUpForm = document.querySelector('.signUp');
const signInBtn = document.querySelector('.signInButton');
const signUpBtn = document.querySelector('.signUpButton');
const signInInput = document.querySelector('.signInInput');
const signUpInput = document.querySelector('.signUpInput');
const signInPassword = document.querySelector('.signInPassword');
const signUpPassword = document.querySelector('.signUpPassword');
const signInSubmit = document.querySelector('.signInSubmit');
const signUpSubmit = document.querySelector('.signUpSubmit');
const signInInUp = document.querySelector('.signInInUp');
const signUpInIn = document.querySelector('.signUpInIn');
const signUpSwitchContainer = document.querySelector('.signUpSwitchContainer');
const signInSwitchContainer = document.querySelector('.signInSwitchContainer');
const forgotPassword = document.querySelector('.forgotPassword');
const veiwProjects = document.querySelector('.viewProjects');
const logInBtn = document.querySelector('.logInBtn');
const closeBtn = document.querySelector('.close');
const formContainer = document.querySelector('.container');
const switchContainer = document.querySelector('.switchContainer');
const signInName = document.querySelector('.signInName');
const signInGreeting = document.querySelector('.signInGreeting');
const signUpName = document.querySelector('.signUpName');
const signUpGreeting = document.querySelector('.signUpGreeting');
const signUpNotice = document.querySelector('.signUpNotice');
const signInNotice = document.querySelector('.signInNotice');
let errorPage;
let getName;
let name;

////////////////////////////////////////////////////////functions


/////////////////////////////////////////////////////////////////
//////////
//10101/// /////// Name Collection
//////////
getName = function () {
    let name = window.prompt('Hello, what is your name?');
    
    while (!name || name.trim() === "") {
        window.alert('Please fill in your name, ok?');
        name = window.prompt('Fill in your name.');
    }
    
    return name.trim();
}

name = getName();

//////////
//10101/// /////// Name Insertion
//////////
logInBtn.textContent = `Login In ${name} `;
signInGreeting.textContent = `Welcome ${name}`;
signUpGreeting.textContent = `Your New! We welcome you ${name}, Sign Up`;
signInNotice.textContent = `${name}, fill in your account details to visit Emmanuel's Portfolio and Projects website.`;
signUpNotice.textContent = `${name} ,sign up then sign in and you will be able to visit Emmanuel's Portfolio and Project's website.`


///////////////////////////////////////////////////////////////////
///////////
//10101//// //////////Log In Btn
///////////
logInBtn.onclick = function () {
    logInBtn.style.visibility = "hidden";
    formContainer.style.visibility = "visible";
    switchContainer.style.visibility = "visible";
    closeBtn.style.visibility = "visible";    
    signInSwitchContainer.style.visibility = "visible";
    signInForm.style.visibility = "visible";

}

///////////
//10101//// ///////// Close btn
//////////
closeBtn.onclick = function () {
    logInBtn.style.visibility = "visible";
    formContainer.style.visibility = "hidden";
    switchContainer.style.visibility = "hidden";
    closeBtn.style.visibility = "hidden";
    
    // Hide both forms
    signInForm.style.visibility = "hidden";
    signUpForm.style.visibility = "hidden";
    
    //hiding both switch containers
    signUpSwitchContainer.style.visibility = "hidden";
    signInSwitchContainer.style.visibility = "hidden";

}







//////////////////////////////////////////////////////////////////////////

//////////
//10101/// ///////Error Page
//////////
errorPage = function () {
    window.location.href = './404/404.html';  
}

/////////
//10101// //////Children of the Error
/////////
forgotPassword.onclick = function (){
    errorPage();
}

signInBtn.onclick = function () {
    errorPage();
}
/////////////////////////////////////////////////////////////////////////////////////////////


////////////
//101010//// doin the sliding feature thingi
////////////

signUpInIn.onclick = function () {

    signInForm.style.visibility = "hidden";
    signUpSwitchContainer.style.visibility = "visible";
    signInSwitchContainer.style.visibility = "hidden";
    signUpForm.style.visibility = "visible";
    signUpForm.style.zIndex = "10";
    

    
}

signInInUp.onclick = function () {
    signInForm.style.visibility = "visible";
    signUpSwitchContainer.style.visibility = "hidden";
    signInSwitchContainer.style.visibility = "visible";
    signUpForm.style.visibility = "hidden";

}

//////////////////////////////////////////////////////////////////////

//////////
//10101/// ///////// Sign Up button features
//////////
signUpBtn.onclick = function () {
    signInInUp.onclick();
}
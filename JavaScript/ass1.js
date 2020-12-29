//Toggle.Spin.Class.On.Icon
document.querySelector(".toggle-settings .fa-cog").onclick=function(){
//Toggle Class Fa-spin for rotation on self 
this.classList.toggle("fa-spin");
//Toggle Class Open on main settings box
document.querySelector(".settings-box").classList.toggle("open");
};
//Select landing-page element
let landingPage=document.querySelector(".back-ground");
//Get array of images
let imgsArray=["2.jpg","3.jpg","5.jpg","6.jpg","7.jpg","background.jpg"];
setInterval(() => {
    //Get Random Number
    let randomNumber = Math.floor(Math.random() * imgsArray.length);
    //Change background image Url
    landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber] + '")';
}, 6000);

const email = document.getElementById("email"),
    form = document.getElementById("form"),
    errorElement = document.getElementById("error");

function validateEmail(InputText) {
    let messages = [];
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (InputText.value.match(mailformat)) {
        alert("valid");
        document.form1.text1.focus();
        return true;
    } else {
        alert("Invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}


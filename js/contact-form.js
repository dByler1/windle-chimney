// Initialize Firebase
var config = {
    apiKey: "AIzaSyAN9Hk3Rp2x5p1nh8-8GbXz4aXPPdUt4VY",
    authDomain: "uclmessages-b4aaa.firebaseapp.com",
    databaseURL: "https://uclmessages-b4aaa.firebaseio.com",
    projectId: "uclmessages-b4aaa",
    storageBucket: "uclmessages-b4aaa.appspot.com",
    messagingSenderId: "17157242884"
};
firebase.initializeApp(config);



//Process contact message submission

document.getElementById('contact').addEventListener('submit', SubmitForm)

function SubmitForm(e){
    e.preventDefault();
    
    var name = getInputVal('name');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    
    alert(message);
    
    
    
    
}



function getInputVal(id){
    return document.getElementById(id).value;
}
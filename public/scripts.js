let letters = "";

function keyLetter(letterr){
    letters = letters + letterr;
    document.getElementById("output").innerText =letters;
};

function clearOutput(){
    letters = "";
    document.getElementById("output").innerText = letters;
};

function spaceOutput(){
    letters = letters + "  ";
    document.getElementById("output").innerText = letters;
};

let sendMessage = () =>{
    alert("Message sent successfully");
    letters = "";
    document.getElementById("output").innerText = letters;
}
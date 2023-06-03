// document.querySelector("h1").textContent = "Hello world!";

// document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
// });

// document.querySelector("h1").addEventListener("click", () => {
//     alert("You just clicked to H1 element!");
// });

const myImage = document.querySelector("img");


// else i kapatinca neden click calismiyor
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/small_Image.jpg") {
        console.log("as");
        myImage.setAttribute("src", "images/samurai.png");
    }
    else {
        myImage.setAttribute("src", "images/small_Image.jpg");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
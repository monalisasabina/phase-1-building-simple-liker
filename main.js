// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Add the .hidden class to the error modal in the HTML so it does not appear 
// when the page first loads
const hidden= document.querySelector("div#modal");
  hidden.className="hidden"

// function clickHeart(){
  
//   const heart= document.getElementsByClassName("like-glyph");
//   heart.addEventListener('click',() =>{
//   mimicServerCall();   
//   heart.innerHTML= FULL_HEART
//  })
// }


// .then()
// .catch(){}

const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;

  mimicServerCall("bogusUrl")
  // Invoke mimicServerCall to simulate making a server request

    .then(function(){
      if ( heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART;
        //adding the full heart icon on line 2
        //if it is not an empty heart, according to if statement

        heart.className = "activated-heart"
        //adding class to it

      } else {
        heart.innerText = EMPTY_HEART;
        // adding the empty heart icon
        // if it's not an 'full heart' 

        heart.className = "";
      }
    })


    .catch(function(error) {
      const modal = document.getElementById("modal");
      modal.className = "";
      modal.innerText = error;
      setTimeout(() =>  modal.className = "hidden", 3000);
    });
}

for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

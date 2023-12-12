console.log("javascript file is connected!");

/* declare variables (video and text), but these are only used in the simplified 
code commented out below */
var video = document.getElementById("video");
var text = document.getElementById("text");

/*
	Because of Google Chrome autoplay policy, the user must
	interact with the page before a video can play
	This file has a div for the user to click
*/

function init() {
	// Add an event listener to the play box
	// event listener method attaches an event handler to the specified element
	document.getElementById("playBox").addEventListener("click", start);
}

function start() {
	// Make the play box invisible
	document.getElementById("playBox").style.display = "none";
	// Show the video
	document.getElementById("video").style.display = "block";
	// Play the video
	document.getElementById("video").play();
}

function shirt(){
	document.getElementById("text").innerHTML = "You picked t-shirt! Now choose what bottoms you'd like.";
	document.getElementById("video").src = "Assets/Shirt/Shirt_Avatar.mp4";
	document.getElementById("firstOp").src ="Assets/Shein_Pics/Graphics/Shein_Jeans_Graphic-1.png";
	document.getElementById("secondOp").src ="Assets/Shein_Pics/Graphics/Shein_Shorts_Graphic-1.png";
	document.getElementById("firstcontainer").querySelector('.overlay p').innerText = "Choose Jeans";
	document.getElementById("firstcontainer").onclick = shirtjeans;
	document.getElementById("secondcontainer").querySelector('.overlay p').innerText = "Choose Shorts";
	document.getElementById("secondcontainer").onclick = shirtshorts;

/* 
Commented out lines below are a simplified way to format the code, using the variables declared above.
console.logs display that the video is moving forward on the timeline.
*/

	//text.innerHTML = "You decided to go to sleep, and had a strange dream...";
	//video.src = "video/typingDream.mp4";
	//console.log(video.currentTime);
	//video.currentTime = 5;//5 seconds
	//console.log(video.currentTime);
}

function shirtjeans(){
	document.getElementById("text").innerHTML = "You picked jeans! Now choose what shoes you'd like.";
	document.getElementById("video").src = "Assets/Shirt_Jeans/Shirt_Jeans_Avatar.mp4";
	document.getElementById("firstOp").src ="Assets/Shein_Pics/Graphics/Shein_Sneakers_Graphic-1.png";
	document.getElementById("secondOp").src ="Assets/Shein_Pics/Graphics/Shein_Boots_Graphic-1.png";
	document.getElementById("firstcontainer").querySelector('.overlay p').innerText = "Choose Sneakers";
	document.getElementById("firstcontainer").onclick = shirtjeanssneakers;
	document.getElementById("secondcontainer").querySelector('.overlay p').innerText = "Choose Boots";
	document.getElementById("secondcontainer").onclick = shirtjeansboots;
}

function shirtjeansboots(){
	document.getElementById("text").innerHTML = "You picked boots! Now click to finalize your Shein-crafted outfit!";
	document.getElementById("video").src = "Assets/Shirt_Jeans_Boots/Shirt_Jeans_Boots_Avatar.mp4";
	createbutton2();
}

function shirtjeanssneakers(){
	document.getElementById("text").innerHTML = "You picked sneakers! Now click to finalize your Shein-crafted outfit!";
	document.getElementById("video").src = "Assets/Shirt_Jeans_Sneakers/Shirt_Jeans_Sneakers_Avatar.mp4";
	createbutton1();
	
}


function shirtshorts(){
	document.getElementById("text").innerHTML = "You picked shorts! Now choose what shoes you'd like.";
	document.getElementById("video").src = "Assets/Shirt_Shorts/Shirt_Shorts_Avatar.mp4";
	document.getElementById("firstOp").src ="Assets/Shein_Pics/Graphics/Shein_Sneakers_Graphic-1.png";
	document.getElementById("secondOp").src ="Assets/Shein_Pics/Graphics/Shein_Boots_Graphic-1.png";
	document.getElementById("firstcontainer").querySelector('.overlay p').innerText = "Choose Sneakers";
	document.getElementById("firstcontainer").onclick = shirtshortssneaker;
	document.getElementById("secondcontainer").querySelector('.overlay p').innerText = "Choose Boots";
	document.getElementById("secondcontainer").onclick = shirtshortsboots;
}


function shirtshortssneaker(){
	document.getElementById("text").innerHTML = "You picked sneakers! Now click to finalize your Shein-crafted outfit!";
	document.getElementById("video").src = "Assets/Shirt_Shorts_Sneakers/Shirt_Shorts_Sneakers_Avatar.mp4";
	document.getElementById("firstcontainer").querySelector('.overlay p').innerText = "Choose Sneakers";
	createbutton4()
}



function shirtshortsboots(){
	document.getElementById("text").innerHTML = "You picked boots! Now click to finalize your Shein-crafted outfit!";
	document.getElementById("video").src = "Assets/Shirt_Shorts_Boots/Shirt_Shorts_Boots_Avatar.mp4";
	createbutton3()

}


function hoodie(){
	document.getElementById("text").innerHTML = "You picked hoodie! Now choose what bottoms you'd like.";
	document.getElementById("video").src = "Assets/Hoodie/Hoodie_Avatar.mp4";
	document.getElementById("firstOp").src ="Assets/Shein_Pics/Graphics/Shein_Jeans_Graphic-1.png";
	document.getElementById("secondOp").src ="Assets/Shein_Pics/Graphics/Shein_Shorts_Graphic-1.png";
	document.getElementById("firstcontainer").querySelector('.overlay p').innerText = "Choose Jeans";
	document.getElementById("firstcontainer").onclick = hoodiejeans;
	document.getElementById("secondcontainer").querySelector('.overlay p').innerText = "Choose Shorts";
	document.getElementById("secondcontainer").onclick = hoodieshorts;
}

function hoodiejeans(){
	document.getElementById("text").innerHTML = "You picked jeans! Now choose what shoes you'd like.";
	document.getElementById("video").src = "Assets/Hoodie_Jeans/Hoodie_Jeans_Avatar.mp4";
	document.getElementById("firstOp").src ="Assets/Shein_Pics/Graphics/Shein_Sneakers_Graphic-1.png";
	document.getElementById("secondOp").src ="Assets/Shein_Pics/Graphics/Shein_Boots_Graphic-1.png";
	document.getElementById("firstcontainer").querySelector('.overlay p').innerText = "Choose Sneakers";
	document.getElementById("firstcontainer").onclick = hoodiejeanssneakers;
	document.getElementById("secondcontainer").querySelector('.overlay p').innerText = "Choose Boots";
	document.getElementById("secondcontainer").onclick = hoodiejeansboots;
}

function hoodiejeansboots(){
	document.getElementById("text").innerHTML = "You picked boots! Now click to finalize your Shein-crafted outfit!";
	document.getElementById("video").src = "Assets/Hoodie_Jeans_Boots/Hoodie_Jeans_Boots.mp4";
	createbutton8()
}

function hoodiejeanssneakers(){
	document.getElementById("text").innerHTML = "You picked sneakers! Now click to finalize your Shein-crafted outfit!";
	document.getElementById("video").src = "Assets/Hoodie_Jeans_Sneakers/Hoodie_Jeans_Sneakers_Avatars.mp4";
	createbutton7()
}




function hoodieshorts(){
	document.getElementById("text").innerHTML = "You picked shorts! Now choose what shoes you'd like.";
	document.getElementById("video").src = "Assets/Hoodie_Shorts/Hoodie_Shorts_Avatar.mp4";
	document.getElementById("firstOp").src ="Assets/Shein_Pics/Graphics/Shein_Sneakers_Graphic-1.png";
	document.getElementById("secondOp").src ="Assets/Shein_Pics/Graphics/Shein_Boots_Graphic-1.png";
	document.getElementById("firstcontainer").querySelector('.overlay p').innerText = "Choose Sneakers";
	document.getElementById("firstcontainer").onclick = hoodieshortssneaker;
	document.getElementById("secondcontainer").querySelector('.overlay p').innerText = "Choose Boots";
	document.getElementById("secondcontainer").onclick = hoodieshortsboots;
}


function hoodieshortssneaker(){
	document.getElementById("text").innerHTML = "You picked sneakers! Now click to finalize your Shein-crafted outfit!";
	document.getElementById("video").src = "Assets/Hoodie_Shorts_Sneakers/Hoodie_Shorts_Sneakers_Avatar.mp4";
	createbutton5()

}



function hoodieshortsboots(){
	document.getElementById("text").innerHTML = "You picked boots! Now click to finalize your Shein-crafted outfit!";
	document.getElementById("video").src = "Assets/Hoodie_Shorts_Boots/Hoodie_Shorts_Boots_Avatar.mp4";
	createbutton6()
}



function again(){
	console.log("again worked!");
	document.getElementById("text").innerHTML = "You have been coding for hours.<br>You want to sleep, but need to finish your project.<br>What do you want to do?";
	document.getElementById("video").src = "video/coding.mp4";
	document.getElementById("select").innerHTML = '<div id="select"><button class="sleep" onclick="sleep()">Go to sleep!</button><button class="code" onclick="code()">Keep coding!</button></div>';
}


function createbutton1(){

	var firstContainer = document.getElementById("firstcontainer");
	var secondContainer = document.getElementById("secondcontainer");
  
	firstContainer.style.display = "none";
	secondContainer.style.display = "none";
   
	  button1();
  
  }
  
  
  
  function button1(){
	  var myButton = document.createElement("button");
  myButton.textContent = "Finalize!";
  myButton.className = "resultbutton";
  myButton.addEventListener("click", function() {
    window.location.href = "resultpage1.html";
  });
  document.body.appendChild(myButton);
  }

  
function createbutton2(){

	var firstContainer = document.getElementById("firstcontainer");
	var secondContainer = document.getElementById("secondcontainer");
  
	firstContainer.style.display = "none";
	secondContainer.style.display = "none";
   
	  button2();
  
  }
  
  
  
  function button2(){
	  var myButton = document.createElement("button");
  myButton.textContent = "Finalize!";
  myButton.className = "resultbutton";
  myButton.addEventListener("click", function() {
    window.location.href = "resultpage2.html";
  });
  document.body.appendChild(myButton);
  }

  function createbutton3(){

	var firstContainer = document.getElementById("firstcontainer");
	var secondContainer = document.getElementById("secondcontainer");
  
	firstContainer.style.display = "none";
	secondContainer.style.display = "none";
   
	  button3();
  
  }
  
  
  
  function button3(){
	  var myButton = document.createElement("button");
  myButton.textContent = "Finalize!";
  myButton.className = "resultbutton";
  myButton.addEventListener("click", function() {
    window.location.href = "resultpage3.html";
  });
  document.body.appendChild(myButton);
  }

  function createbutton4(){

	var firstContainer = document.getElementById("firstcontainer");
	var secondContainer = document.getElementById("secondcontainer");
  
	firstContainer.style.display = "none";
	secondContainer.style.display = "none";
   
	  button4();
  
  }
  
  
  
  function button4(){
	  var myButton = document.createElement("button");
  myButton.textContent = "Finalize!";
  myButton.className = "resultbutton";
  myButton.addEventListener("click", function() {
    window.location.href = "resultpage4.html";
  });
  document.body.appendChild(myButton);
  }


  function createbutton5(){

	var firstContainer = document.getElementById("firstcontainer");
	var secondContainer = document.getElementById("secondcontainer");
  
	firstContainer.style.display = "none";
	secondContainer.style.display = "none";
   
	  button5();
  
  }
  
  
  
  function button5(){
	  var myButton = document.createElement("button");
  myButton.textContent = "Finalize!";
  myButton.className = "resultbutton";
  myButton.addEventListener("click", function() {
    window.location.href = "resultpage5.html";
  });
  document.body.appendChild(myButton);
  }


  function createbutton6(){

	var firstContainer = document.getElementById("firstcontainer");
	var secondContainer = document.getElementById("secondcontainer");
  
	firstContainer.style.display = "none";
	secondContainer.style.display = "none";
   
	  button6();
  
  }
  
  
  
  function button6(){
	  var myButton = document.createElement("button");
  myButton.textContent = "Finalize!";
  myButton.className = "resultbutton";
  myButton.addEventListener("click", function() {
    window.location.href = "resultpage6.html";
  });
  document.body.appendChild(myButton);
  }


  function createbutton7(){

	var firstContainer = document.getElementById("firstcontainer");
	var secondContainer = document.getElementById("secondcontainer");
  
	firstContainer.style.display = "none";
	secondContainer.style.display = "none";
   
	  button7();
  
  }
  
  
  
  function button7(){
	  var myButton = document.createElement("button");
  myButton.textContent = "Finalize!";
  myButton.className = "resultbutton";
  myButton.addEventListener("click", function() {
    window.location.href = "resultpage7.html";
  });
  document.body.appendChild(myButton);
  }

  function createbutton8(){

	var firstContainer = document.getElementById("firstcontainer");
	var secondContainer = document.getElementById("secondcontainer");
  
	firstContainer.style.display = "none";
	secondContainer.style.display = "none";
   
	  button8();
  
  }
  
  
  
  function button8(){
	  var myButton = document.createElement("button");
  myButton.textContent = "Finalize!";
  myButton.className = "resultbutton";
  myButton.addEventListener("click", function() {
    window.location.href = "resultpage8.html";
  });
  document.body.appendChild(myButton);
  }

//   function showresult() {
// 	var elements = document.getElementById("video", "firstcontainer","secondcontainer","text");
// 	elements.style.display = "none";

// 	var imageContainer = document.createElement("div");
//   imageContainer.className = "image-container";

//   var newImage = document.createElement("img");
//   newImage.src = "Assets/Shein (Un)Sustainability Impact End Screens/Shein (Un)Sustainability Impact End Screens-1.png"; // Replace with the actual path to your image
//   newImage.width = 200;
//   newImage.height = 200;


// 	var myButton1 = document.createElement("button");
// 	myButton.textContent = "Reset";
// 	myButton.className = "resetbutton";
	

// 	document.body.appendChild(myButton1);
//   }

  function reset(){
	document.getElementById("video").src = "Assets/Naked_Avatar/Naked_Avatar.mp4";
	
	var firstContainer = document.getElementById("firstcontainer");
	var secondContainer = document.getElementById("secondcontainer");
	document.getElementById("firstOp").src ="Assets/Shein_Pics/Graphics/Shein_Shirt_Graphic-1.png";
	document.getElementById("secondOp").src ="Assets/Shein_Pics/Graphics/Shein_Hoodie_Graphic-1.png";
	document.getElementById("firstcontainer").querySelector('.overlay p').innerText = "Choose Shirt";
	document.getElementById("firstcontainer").onclick = shirt;
	document.getElementById("secondcontainer").querySelector('.overlay p').innerText = "Choose Hoodie";
	document.getElementById("secondcontainer").onclick = hoodie;
  
	firstContainer.style.display = "inline-block";
	secondContainer.style.display = "inline-block";
	
	var myButton = document.querySelector(".resultbutton");
	if(myButton) {
		myButton.parentNode.removeChild(myButton)
	}

}

window.onload = init();



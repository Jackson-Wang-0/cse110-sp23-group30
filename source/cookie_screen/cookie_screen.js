// const variables
const cookie = document.getElementById("fortune-cookie");
const message = document.getElementById("fortune-message");
const backgroundMusic = document.getElementById('background-music');
const buttonsContainer = document.querySelector(".buttons_container");
var videoPlayer = document.getElementById('video-player');
var fullscreenVideo = document.getElementById('fullscreen-video');

// video array for animation
const videos = [
    "media/media/video_blue.mp4",
    "media/media/video_gold.mp4",
    "media/media/video_purple.mp4"
];

// array of messages
const messages = [
    /*        message length for better display         */
    "You will have a prosperous future.",
    "Good fortune will come your way.",
    "Seize the day and make it yours.",
    "Your hard work will pay off soon.",
    "Expect a pleasant surprise in the near future.",
    "A thrilling opportunity is on its way.",
    "Your talents will be recognized and rewarded.",
    "Adventure awaits you at every corner.",
    "You will find love in unexpected places.",
    "A new chapter in your life will bring great happiness.",
    "Your creativity will lead you to success.",
    "An exciting journey will soon begin.",
    "Good fortune will follow you wherever you go.",
    "You will receive a pleasant surprise in the near future.",
    "Believe in yourself and all that you are capable of.",
    "Your dreams will become a reality with perseverance.",
    "Great things will come from your positive attitude.",
    "You will make a lasting impression on those you meet.",
    "Opportunities will arise when you least expect them.",
    "Your future is filled with abundance and prosperity.",
    "You are destined for greatness.",
    "Your kindness will be rewarded tenfold.",
];


function shakeCookie() {
    cookie.innerHTML = '<img src="media/media/cookie_before.png" alt="Cracked Cookie">';
    // Clear the fortune message
    message.textContent = "";
    // Hide the fortune message
    message.style.display = "none";

    // Lower the volume of the background music
    backgroundMusic.volume = 0.2; // Adjust the volume level as needed

    // Randomly select a video from the 'videos' array
    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    // Set the source of the video player to the randomly selected video
    videoPlayer.src = randomVideo;
    fullscreenVideo.style.display = 'block';
    videoPlayer.play();

}

videoPlayer.addEventListener('ended', function() {
    fullscreenVideo.style.display = 'none';
    openFortune();
    backgroundMusic.play();
    backgroundMusic.volume = 1;
});

function openFortune() {
    cookie.classList.add("shake-animation");
    setTimeout(function() {
        cookie.classList.remove("shake-animation");
    
        // Replace the image source with the cracked cookie image
        cookie.innerHTML = '<img src="media/media/cookie_after.png" alt="Cracked Cookie">';
        
        const randomIndex = Math.floor(Math.random() * messages.length);
        message.textContent = messages[randomIndex];
        message.style.display = "block";
    }, 1000);
}

function restartGame() {
    // Replace the image source with the initial cookie image
    cookie.innerHTML = '<img src="media/media/cookie_before.png" alt="Fortune Cookie">';

    // Clear the fortune message
    message.textContent = "";
    // Hide the fortune message
    message.style.display = "none";
    // go to cart screen
    window.location.href = "../cart_screen/cart.html";
}

function goToHome() {
    // Replace the image source with the initial cookie image
    cookie.innerHTML = '<img src="media/media/cookie_before.png" alt="Fortune Cookie">';

    // Clear the fortune message
    message.textContent = "";
    // Hide the fortune message
    message.style.display = "none";
    // go to home 
    window.location.href = "../opening_screen/opening-screen.html";
}


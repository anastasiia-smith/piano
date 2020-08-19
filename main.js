document.addEventListener("keydown", function(event) {
    if (event.code == "KeyA") {
        let audio = new Audio("src/A.mp3");
        audio.play();
    } else if (event.code == "KeyS") {
        let audio = new Audio("src/S.mp3");
        audio.play();
    } else if (event.code == "KeyD") {
        let audio = new Audio("src/D.mp3");
        audio.play();
    } else if (event.code == "KeyF") {
        let audio = new Audio("src/F.mp3");
        audio.play();
    } else if (event.code == "KeyG") {
        let audio = new Audio("src/G.mp3");
        audio.play();
    } else if (event.code == "KeyH") {
        let audio = new Audio("src/H.mp3");
        audio.play();
    } else if (event.code == "KeyJ") {
        let audio = new Audio("src/J.mp3");
        audio.play();
    } else if (event.code == "KeyW") {
        let audio = new Audio("src/W.mp3");
        audio.play();
    } else if (event.code == "KeyE") {
        let audio = new Audio("src/E.mp3");
        audio.play();
    } else if (event.code == "KeyT") {
        let audio = new Audio("src/T.mp3");
        audio.play();
    } else if (event.code == "KeyY") {
        let audio = new Audio("src/Y.mp3");
        audio.play();
    } else if (event.code == "KeyU") {
        let audio = new Audio("src/U.mp3");
        audio.play();
    } else {
        console.log("Another key is pressed");
    };
});

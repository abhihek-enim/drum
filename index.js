for(var i=0;i<7;i++){
    document.querySelectorAll(" .drum")[i].addEventListener("click",function(){
        var btnpsd=this.innerHTML;
        makesound(btnpsd);
        buttonanimation(btnpsd);
        
    });
}
document.addEventListener("keydown", function(event){
    makesound(event.key);
    buttonanimation(event.key);
});
function makesound(key){
 switch(key){
            case "w":
                var play= new Audio("tom-1.mp3");
                play.play();
                break;
            case "a":
                var play= new Audio("tom-2.mp3");
                play.play();
                break;
            case "s":
                var play= new Audio("tom-3.mp3");
                play.play();
                break;
            case "d":
                var play= new Audio("tom-4.mp3");
                play.play();
            case "j":
                var play= new Audio("kick-bass.mp3");
                play.play();
                break;
            case "k":
                var play= new Audio("snare.mp3");
                play.play();
                break;
            case "l":
                var play= new Audio("crash.mp3");
                play.play();
                break;
        }   
}
function buttonanimation(currentkey){
    var activebutton= document.querySelector("."+ currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed")
    },100);
}

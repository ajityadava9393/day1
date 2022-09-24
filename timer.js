function showMessage(){
    console.log("welcome to application");
}
function display(){
        console.log("fetching data from source");
}

//showMessage();

setInterval(display,1000);
setInterval(showMessage,3000);
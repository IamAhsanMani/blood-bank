if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('../sw.js')
        .then(() => {
            console.log('service worker')
        })
}


function joinUs() {
    swal({
        text: "Redirecting...",
        button: false
    })
    
    setTimeout(()=>{
        location = "./pages/signup.html"
    },4000)
}




function donationBtn() {
    swal({
        title: "To donate Blood please signup",
        buttons: {cancel: true,confirm: "Signup"},
        icon: "./images/info.png",
        closeOnClickOutside: false
    })
    .then((yes)=>{
        if(yes) {
            location = "./pages/signup.html"
            document.getElementById("loader2").style.display = "none"
        // location = "./pages/signup.html"
        }
        else{
            window.location.reload()
        }
    })
}
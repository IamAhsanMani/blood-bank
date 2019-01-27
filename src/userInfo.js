// Initialize Firebase
var config = {
    apiKey: "AIzaSyAHF2gTNHYngMhXoVIUDC3MTOLJdhsmHNU",
    authDomain: "asan-foundation.firebaseapp.com",
    databaseURL: "https://asan-foundation.firebaseio.com",
    projectId: "asan-foundation",
    storageBucket: "asan-foundation.appspot.com",
    messagingSenderId: "509789326306"
  };
  firebase.initializeApp(config);

window.addEventListener("load", () =>{
    load()
})


function load() {
    let data = ''
    // var user = localStorage.getItem("userId")
    // console.log(user)
    // var userId = JSON.parse(user)
    // console.log(userId)
    firebase.auth().onAuthStateChanged(function (user) {
        if (user === null || user === "undefined" || user === "") {
                console.log("NULL")
                swal.fire({
                    title: 'you are logout<br /><br />آپ لاگ آؤٹ ہیں',
                    imageUrl: '../images/wrong.png',
                    showConfirmButton: false,
                    padding: "1em"
                })
    
                setTimeout(()=>{
                    location = '../index.html'
                },500)
        }
        else if(user) {
            var userId = firebase.auth().currentUser.uid;
            console.log(userId)
        
        firebase.database().ref("exportorList/"+ userId)
        .once("value", (data)=>{
            var data = data.val()
            console.log(data)
            try{
            document.getElementById("userImg").setAttribute("src", data.profile);
            document.getElementById("userName").innerHTML = data.firstName + " " + data.lastName;
            document.getElementById("userProfession").innerHTML = data.profession;
            document.getElementById("userAge").innerHTML = data.age;
            document.getElementById("userNum").innerHTML = data.mobileCode + data.mobileNumber;
            document.getElementById("userEmail").innerHTML = data.email;
            document.getElementById("userAddress").innerHTML = data.city + ", " + data.state + ", " + data.country + " " + data.zip;
        }
        catch{
            if(data === null) {
                firebase.database().ref("donorList/" + userId)
                .once("value", (data)=>{
                    var data = data.val()
                    console.log(data)
                        document.getElementById("userImg").setAttribute("src", data.profile);   
                        document.getElementById("userName").innerHTML = data.firstName + " " + data.lastName;
                        document.getElementById("userProfession").innerHTML = data.profession;
                        document.getElementById("userAge").innerHTML = data.age;
                        document.getElementById("userNum").innerHTML = data.mobileCode + data.mobileNumber;
                        document.getElementById("userEmail").innerHTML = data.email;
                        document.getElementById("userAddress").innerHTML = data.city + ", " + data.state + ", " + data.country + " " + data.zip;
                })
            }
        }

        })
    }
        // console.log(userId)
    })
    
}


function goBack() {
    // var user = localStorage.getItem("userId")
    // console.log(user)
    // var userId = JSON.parse(user)
    // console.log(userId)

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var userId = firebase.auth().currentUser.uid;

            firebase.database().ref("exportorList/"+userId)
            .once("value", (data)=>{
                var obj = data.val()
                if(obj === null) {
                    location = "../pages/donor.html";
                }
                else{
                    location = "../pages/acceptor.html";
                }
            })

        }
        

    })
}


function logOut() {
    firebase.auth().signOut()
        .then(() => {
            // localStorage.clear()
            window.location = "../index.html"
            // Sign-out successful.
        }).catch((error) => {
            let message = error.message;
            // console.log(message)
            // An error happened.
        });
}

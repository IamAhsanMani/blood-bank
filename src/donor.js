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




window.addEventListener("load", async function loader() {
    setTimeout(()=>{
        document.getElementById("loader").style.display = "none"
    },2000)
    await load();
})





// load data when page load
async function load() {
    await firebase.auth().onAuthStateChanged(function (user) {
        if (user === null || user === "undefined" || userId === "") {
            console.log("NULL")
            swal.fire({
                title: 'you are logout<br /><br />آپ لاگ آؤٹ ہیں',
                imageUrl: '../images/wrong.png',
                showConfirmButton: false,
                padding: "1em"
            })

            setTimeout(()=>{
                location = '../index.html'
            },1500)
        }
        else if(user) {
            var userId = firebase.auth().currentUser.uid;
            // localStorage.setItem("userId", JSON.stringify(userId))
            // console.log(userId)
        }

        // console.log(userId)
        firebase.database().ref("donorList/"+ userId)
        .once("value", (data)=>{
            var currentUserData = data.val();
            // console.log(currentUserData)
            document.title = currentUserData.firstName + " " + currentUserData.lastName;
            document.getElementById("profileName").innerHTML = currentUserData.firstName + " " + currentUserData.lastName;
            document.getElementById("profileImg").setAttribute("src", currentUserData.profile)
        })

        firebase.database().ref("post/")
        .once("value",(data)=>{
        
            let post = data.val()
            if(post === null) {
                document.getElementById("post").innerHTML = `
                <div class="container text-center shadow p-3 mb-5 bg-white rounded">
                    <h4 class="text-muted" style="font-family: 'Montserrat', sans-serif;">No Post yet...</h4>
                </div>`
            }

        else{
        // console.log(post)
            for(var a in post) {

                for(var b in post[a]){
                    // console.log(post[a][b])

                    document.getElementById("post").innerHTML += `
                    
                    <div class="col-sm-12 shadow p-3 mb-5 bg-white rounded" key="${post[a].keyId}">
                    <img id="acceptorImg" src="${post[a][b].profile}" />
                    <span class="accepName text-info">${post[a][b].firstName} ${post[a][b].lastName}</span>
                    <span class="address">${post[a][b].country}, ${post[a][b].zip}</span>

                    <!-- Default dropleft button -->
                    <div class="btn-group dropleft">
                        <i class="fas fa-ellipsis-h text-info" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </i>
                        <div class="dropdown-menu shadow mb-5 bg-white rounded">
                            <ul class="dropDownUl" style="">
                            <li style="border-bottom:2px solid #2ecc71; text-transform:uppercase; color:#2ecc71; font-size:18px">acceptor detail</li>
                            <li><b>Email:</b> <a href="mailto:${post[a][b].email}" class="link text-info">${post[a][b].email}</a></li>
                            <li><b>Mobile No:</b> <a href="tel:${post[a][b].mobileCode}${post[a][b].mobileNumber}" class="link text-info">${post[a][b].mobileCode}${post[a][b].mobileNumber}</a></li>
                            <li><b>Occupation:</b> <em class="text-info">${post[a][b].profession}</em></li>
                            <li><b>Age:</b> <em class="text-info">${post[a][b].age}</em></li>
                            <li><b>Address:</b> <em class="text-info">${post[a][b].city}, ${post[a][b].state}, ${post[a][b].zip}</em></li>
                            <li><b>Country:</b> <em class="text-info">${post[a][b].country}</em></li>
                            </ul>
                        </div>
                    </div>

                    <!-- alert -->
                    <div class="alert alert-danger" role="alert">
                        <span  class="text-danger" style="font-family: 'Arvo', serif;">EMERGENCY <i class="fas fa-bullhorn text-danger" style="float:right;position: relative;top: 8px;color: #b2bec3"></i></span> 
                    </div>
                    
                    <!-- more detail -->
                    <div id="moreDetailDiv" class="moreDetailDiv">
                    <p>${post[a][b].moreDetail}</p>
                    </div>
                    <!-- list -->
                    <div class="listDiv">
                        <h3 class="listHeader">Patient Info</h3>
                        <hr/>
                        <ul>
                            <li><span class="counter">1</span> <span class="detailLabel">Paitent Name:</span> <span class="patientDetail" id="patientName">${post[a][b].exportorName}</span></li>
                            <br />
                            <li><span class="counter">2</span> <span class="detailLabel">Gender:</span> <span class="patientDetail" id="patientGender">${post[a][b].exportorGender}</span></li>
                            <br />
                            <li><span class="counter">3</span> <span class="detailLabel">Patient Age:</span> <span class="patientDetail" id="patientAge">${post[a][b].exportorAge}</span></li>
                            <br />
                            <li><span class="counter">4</span> <span class="detailLabel">Address:</span> <span class="patientDetail" id="patienAddress">${post[a][b].location}</span></li>
                        </ul>
                    </div>
                    </div>`
                }   
            }
        }   
        })
    })
}


// logout function
function logOut() {
    firebase.auth().signOut()
        .then(() => {
            // localStorage.clear()
            window.location = "../index.html"
            // Sign-out successful.
        })
        .catch((error) => {
            let message = error.message;
            // console.log(message)
            // An error happened.
        });
}
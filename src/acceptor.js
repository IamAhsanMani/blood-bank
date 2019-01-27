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
    await getPost();
})



// to clear input field
function allClear(msgClearId) {
    document.getElementById(msgClearId).innerHTML = "";
}




// load data when page load
async function load() {
    await firebase.auth().onAuthStateChanged(function (user) {
        if (user === null || user === "undefined" || userId === "") {
            console.log("NULL")
            swal.fire({
                title: 'you are logout...<br /><br />آپ لاگ آؤٹ ہیں',
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
            console.log(userId)
        }
        console.log(userId)
        firebase.database().ref("exportorList/"+ userId)
        .once("value", (data)=>{
            var currentUserData = data.val();
            // console.log(currentUserData.firstName)
            document.title = currentUserData.firstName + " " + currentUserData.lastName;
            document.getElementById("profileName").innerHTML = currentUserData.firstName + " " + currentUserData.lastName;
            document.getElementById("profileImg").setAttribute("src", currentUserData.profile)
            document.getElementById("msj").innerHTML += `Hello ${currentUserData.firstName}!`
        })


        firebase.database().ref("donorList/")
        .once("value",(data)=>{
            let donorsObj = data.val()
            // console.log(donorsObj)
            
            for(var a in donorsObj) {
                // console.log(donorsObj[a].acType)
            document.getElementById("showDonor").innerHTML +=  `
                
                <div class="col-sm-4">
                    <div class="card shadow p-3 mb-5 bg-white rounded">
                        <div class="header text-center"><h1>${donorsObj[a].acType}</h1></div>  
                        <div class="img-box">
                            <img class="card-img-top" src="${donorsObj[a].profile}" style="border:6px solid #70a1ff; transition: 0.8s ease-in;width:195px;height:195px;border-radius:50%"/>
                        </div>
                        <div class="card-body text-center">
                            <span class="name">${donorsObj[a].firstName} ${donorsObj[a].lastName}</span>
                            <br />
                            <h2 class="text-center" style="color:#ff6348;font-family: 'Coiny', cursive; text-transform:uppercase;font-size:57px;margin-top:14%">${donorsObj[a].bloodGroup}</h2>
                            <p class="text-left" style="margin-top:15%; margin-left:-8%; color:#70a1ff; font-size:18px; font-family: 'Righteous', cursive;">Donor Information:</p>
                            <ul style="" class="donorList">
                            <li class="text-left"><img src="../images/email.png" /> <a class="para link2" style="text-transform:lowercase !important" href="mailto:${donorsObj[a].email}">${donorsObj[a].email}</a></li>
                            <li class="text-left"><img src="../images/mobile.png" /> <a class="para link2" href="tel:${donorsObj[a].mobileCode}${donorsObj[a].mobileNumber}" class="link2">${donorsObj[a].mobileCode}${donorsObj[a].mobileNumber}</a></li>
                            <li class="text-left"><img src="../images/city.png" /> <span class="para" style="">${donorsObj[a].city}, ${donorsObj[a].country}</span></li>
                            </ul>
                            <a class="text-primary link" style="font-size:18px; font-family: 'Sintony', sans-serif;margin-top:12%" data-toggle="collapse" href="#${donorsObj[a].firstName}" role="button" aria-expanded="false" aria-controls="collapseExample">More Details! <img src="../images/arrow.png" alt=""/></a>

                            <div class="collapse" id="${donorsObj[a].firstName}">
                            
                            <div style="margin-top:18%">
                            <ul class="donorList">
                            <li class="text-left"><img src="../images/profession.png" /> <span class="para" style="">${donorsObj[a].profession}</span></li>
                            <li class="text-left"><img src="../images/dob.png" /> <span class="para" style="">${donorsObj[a].age}</span></li>
                            <li class="text-left"><img src="../images/map.png" /> <span class="para" style="">${donorsObj[a].state}, ${donorsObj[a].country}, ${donorsObj[a].zip}</span></li>
                            </ul>
                            </div>

                            </div>

                        </div>
                    </div>
                </div>`
            }
        })
    })
}







// create post
async function createPost() {

    let exportorName = document.getElementById("exportorName").value;
    let exportorGender = document.getElementById("exportorGender").value;
    let exportorAge = document.getElementById("exportorAge").value;
    let location = document.getElementById("location").value;
    let moreDetail = document.getElementById("moreDetail").value;



    if(!isNaN(exportorName) || exportorName === "" || exportorName === null || exportorName === 'undefined') {
        document.getElementById('exportorNameError').innerHTML = "please fill full name"
    }

    else if(exportorGender === "") {
        document.getElementById('exportorGenderError').innerHTML = "please select gender"
    }
    
    else if(isNaN(exportorAge) || exportorAge === "" || exportorAge === null || exportorAge === "undefined") {
    document.getElementById('exportorAgeError').innerHTML = "invalid age!";
    }

    else if(exportorAge.length > 3) {
    document.getElementById('exportorAgeError').innerHTML = "enter correct age e.g, 3 digits";
    }

    else if(location === "") {
        document.getElementById('locationError').innerHTML = "provide location where blood needed?";
    }

    else if(moreDetail === "" || moreDetail.length < 80) {
        document.getElementById('moreDetailError').innerHTML = "Min char 80...";
    }


    else{
        await firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var userId = firebase.auth().currentUser.uid; 
            }


            // console.log(userId)
            firebase.database().ref(`exportorList/`+userId)
            .once("value", (data)=>{
                let qwe = data.val()
                
                let postBtn2 = document.getElementById("postBtn2");
            
                
            
                let bloodNeeder = {
                    exportorName,
                    exportorAge,
                    exportorGender,
                    location,
                    moreDetail
                }


                for(var key in bloodNeeder) {
                    qwe[key] = bloodNeeder[key]
                }
                
                // console.log(qwe)
        
                
                
                firebase.database().ref("post/"+ userId).push(qwe)
                .then((success)=>{
                    // console.log(success)
                })
                .catch((e)=>{
                    // console.log(e.message)
                })
            })
            postBtn2.setAttribute("data-dismiss", "modal")
            
            setTimeout(()=>{
                window.location.reload()
            },1000)
    })

    }
}







// get post from db
async function getPost() {

    await firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var userId = firebase.auth().currentUser.uid;
        
            
        }

        firebase.database().ref("post/"+ userId)
        .once("value",(data)=>{
        
            let post = data.val()
            if(post === null) {
                document.getElementById("post").innerHTML = `
                <div class="container text-center shadow p-3 mb-5 bg-white rounded">
                    <h4 class="text-muted" style="font-family: 'Montserrat', sans-serif;">No Post yet...</h4>
                </div>
                `
            }
            else{
                for(var a in post) {
                    post[a].keyId = a;
                    document.getElementById("post").innerHTML += `
                    
                    <div class="col-sm-12 shadow p-3 mb-5 bg-white rounded" key="${post[a].keyId}">
                    <img id="acceptorImg" src="${post[a].profile}" />
                    <span class="accepName text-info" style="text-transform:capitalize">${post[a].firstName} ${post[a].lastName}</span>
                    <span class="address">${post[a].country}, ${post[a].zip}</span>

                    <!-- Default dropleft button -->
                    <div class="btn-group dropleft">
                        <i class="fas fa-ellipsis-h text-info" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        </i>
                        <div class="dropdown-menu shadow mb-5 bg-white rounded">
                            <ul class="dropDownUl" style="">
                                <li style="border-bottom:1px solid #bdc3c7; padding:7px; margin-left:-5px"><a class="text-secondary link" onClick="edit(this)" data-toggle="modal" data-target="#exampleModal2"><img src="../images/edit.png" /> Edit Post</a></li>
                                <li style="padding:7px; padding-bottom:0px; margin-left:-5px"><a class="text-secondary link" onClick="deletePost(this)"><img src="../images/de.png" /> Delete Post</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- alert -->
                    <div class="alert alert-danger" role="alert">
                        <span  class="text-danger" style="font-family: 'Arvo', serif;">EMERGENCY <i class="fas fa-bullhorn text-danger" style="float:right;position: relative;top: 8px;color: #b2bec3"></i></span> 
                    </div>
                    
                    <!-- more detail -->
                    <div id="moreDetailDiv" class="moreDetailDiv">
                    <p>${post[a].moreDetail}</p>
                    </div>
                    <!-- list -->
                    <div class="listDiv">
                        <h3 class="listHeader">Patient Info</h3>
                        <hr/>
                        <ul>
                            <li><span class="counter">1</span> <span class="detailLabel">Paitent Name:</span> <span class="patientDetail" id="patientName">${post[a].exportorName}</span></li>
                            <br />
                            <li><span class="counter">2</span> <span class="detailLabel">Gender:</span> <span class="patientDetail" id="patientGender">${post[a].exportorGender}</span></li>
                            <br />
                            <li><span class="counter">3</span> <span class="detailLabel">Patient Age:</span> <span class="patientDetail" id="patientAge">${post[a].exportorAge}</span></li>
                            <br />
                            <li><span class="counter">4</span> <span class="detailLabel">Address:</span> <span class="patientDetail" id="patienAddress">${post[a].location}</span></li>
                        </ul>
                    </div>
                </div>`
                }
            }
        })
    })
}






// delete function
function deletePost(e) {
    var p1 = e.parentNode;
    var p2 = p1.parentNode;
    var p3 = p2.parentNode;
    var p4 = p3.parentNode;
    var p5 = p4.parentNode.getAttribute("key");
    // console.log(p5)

    var id = firebase.auth().currentUser.uid;

    firebase.database().ref("post/" + id).child(p5).remove()
    .then(()=>{
        setTimeout(()=>{
            location.reload()
        },2000)
    })
    // console.log(id)
}





// edit function to get value in input
function edit(e) {
    var p1 = e.parentNode;
    var p2 = p1.parentNode;
    var p3 = p2.parentNode;
    var p4 = p3.parentNode;
    var p5 = p4.parentNode.getAttribute("key");
    
    let ts = p4.parentNode;
    // console.log(ts.childNodes[21])

    // paragraph 
    let paraDiv = ts.childNodes[17];
    let paragraph = paraDiv.childNodes[1].innerText;
    // console.log(paragraph)

    // list div
    let listDiv = ts.childNodes[21];
    let ul = listDiv.childNodes[5]
    let name = ul.childNodes[1].childNodes[4].innerText;

    let gender = ul.childNodes[5].childNodes[4].innerText;

    let age = ul.childNodes[9].childNodes[4].innerText;

    let location = ul.childNodes[13].childNodes[4].innerText;
    // console.log(location)




    document.getElementsByClassName("update")[0].setAttribute("id",p5);
    document.getElementsByClassName("closeBtn")[0].setAttribute("id",p5);


    var c1 = document.getElementById("moreDetailDiv").childNodes[1]
    // console.log(c1.innerText)



    document.getElementById("editName").value = name
    document.getElementById("editGender").value = gender;
    document.getElementById("editAge").value = age;
    document.getElementById("editLocation").value = location;
    document.getElementById("editMoreDetail").value = paragraph;



    var id = firebase.auth().currentUser.uid;

    // console.log(id)
}






// update post
function update(e) {
    var obj2 = {}
    let exportorName = document.getElementById("editName").value;
    let exportorGender = document.getElementById("editGender").value;
    let exportorAge = document.getElementById("editAge").value;
    let location = document.getElementById("editLocation").value;
    let moreDetail = document.getElementById("editMoreDetail").value;

    var obj ={
        exportorName,
        exportorGender,
        exportorAge,
        location,
        moreDetail
    }
    var id = firebase.auth().currentUser.uid;

    var postId = e.getAttribute("id");
    firebase.database().ref("post/" + id).child(postId)
    .once("value", (data)=>{
        var userData = data.val()
        obj2 = {}
        // console.log(userData)

        obj2.acType = userData.acType;
        obj2.age = userData.age;
        obj2.city = userData.city;
        obj2.country = userData.country;
        obj2.email = userData.email;
        obj2.firstName = userData.firstName;
        obj2.lastName = userData.lastName;
        obj2.mobileCode = userData.mobileCode;
        obj2.mobileNumber = userData.mobileNumber;
        obj2.profession = userData.profession;
        obj2.state = userData.state;
        obj2.zip = userData.zip;
        obj2.profile = userData.profile;

        for(var key in obj2) {
            obj[key] = obj2[key]
        }

        // console.log(obj)

        firebase.database().ref("post/" + id).child(postId).set(obj)
        .then(()=>{
            document.getElementsByClassName("update")[0].setAttribute("data-dismiss", "modal");
            setTimeout(()=>{
                window.location.reload()
            },1000)
        })
    })
    .then((success)=>{
        // console.log(success)

    })
}






// clearing Modal inputs when close btn fire
function clearModal(e) {

    document.getElementById("exportorName").value = "";
    document.getElementById("exportorGender").value = "";
    document.getElementById("exportorAge").value = "";
    document.getElementById("location").value = "";
    document.getElementById("moreDetail").value = "";

    // clear inputs error
    document.getElementById("exportorNameError").innerHTML = "";
    document.getElementById("exportorGenderError").innerHTML = "";
    document.getElementById("exportorAgeError").innerHTML = "";
    document.getElementById("locationError").innerHTML = "";
    document.getElementById("moreDetailError").innerHTML = "";

    let id = firebase.auth().currentUser.uid;
}






// funtion to logout
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
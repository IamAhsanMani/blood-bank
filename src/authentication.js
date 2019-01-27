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



// to clear input field
function allClear(msgClearId) {
  document.getElementById(msgClearId).innerHTML = "";
}


// signup page1 function
function signup1() {
  

  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let profession = document.getElementById("profession").value;
  let bloodGroup = document.getElementById("bloodGroup").value;
  let acType = document.getElementById("acType").value;




  if(!isNaN(firstName) || firstName === "" || firstName === null || firstName === 'undefined') {
    document.getElementById('firstNameError').innerHTML = "please fill first name"
  }

  else if(!isNaN(lastName) || lastName === "" || lastName === null || lastName === 'undefined') {
    document.getElementById('lastNameError').innerHTML = "please fill last name"
  }
  
  else if(profession === "") {
    document.getElementById('professionError').innerHTML = "Select Profession"
  }

  else if(bloodGroup === "") {
    document.getElementById('bloodGroupError').innerHTML = "Select blood group"
  }

  else if(acType === "") {
    document.getElementById('acTypeError').innerHTML = "Select Account Type"
  }



    else{
      var user ={
        firstName,
        lastName,
        profession,
        bloodGroup,
        acType, 
      }
      
      localStorage.setItem("detail", JSON.stringify(user))
        document.getElementById('progress-bar').style.width="50%"
        document.getElementById('progress-bar').innerHTML = "50%"
    
        setTimeout(()=>{
          document.getElementById("firstName").value = "";
          document.getElementById("lastName").value = "";
          document.getElementById("profession").value = "";
          document.getElementById("acType").value = "";
          document.getElementById('loader').style.display = "block"
        },3000)
          setTimeout(()=>{
  
            location = "../pages/signup2.html"
          },7000)
         }

}

// signup page2 function

function abc() {
  let email_patt = /^[a-zA-Z]+\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

    let country = document.getElementById("country").value;
    let lowerCountry = country.toLowerCase();
    let email = document.getElementById("email").value;
    let age = document.getElementById("age").value;
    let mobileCode = document.getElementById("mobileCode").value;
    let mobileNumber = document.getElementById("mobileNumber").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
    var profilePic = document.getElementById("profilePic").files[0];
    let password = document.getElementById("password").value;
    let conPassword = document.getElementById("conPass").value;    

    var object = {
        country: [{code: "+7 840", name: "Abkhazia"},{code: "+93", name: "Afghanistan"},
          {code: "+355",name: "Albania"},{code: "+213",name: "Algeria"},{code: "+1 684",name: "American Samoa"},{code: "+376",name: "Andorra"},{code: "+244",name: "Angola"},{code: "+1 264",name: "Anguilla"},{code: "+1 268",name: "Antigua and barbuda"},{code: "+54",name: "Argentina"},{code: "+374",name: "Armenia"},{code: "+297",name: "Aruba"},{code: "+247",name: "Ascension"},{code: "+61",name: "Australia"},{code: "+672",name: "Australian external territories"},{code: "+43",name: "Austria"},{code: "+994",name: "Azerbaijan"},{code: "+1 242",name: "Bahamas"},
          {
            code: "+973",
            name: "Bahrain"
          },
          {
            code: "+880",
            name: "Bangladesh"
          },
          {
            code: "+1 246",
            name: "Barbados"
          },
          {
            code: "+1 268",
            name: "Barbuda"
          },
          {
            code: "+375",
            name: "Belarus"
          },
          {
            code: "+32",
            name: "Belgium"
          },
          {
            code: "+501",
            name: "Belize"
          },
          {
            code: "+229",
            name: "Benin"
          },
          {
            code: "+1 441",
            name: "Bermuda"
          },
          {
            code: "+975",
            name: "Bhutan"
          },
          {
            code: "+591",
            name: "Bolivia"
          },
          {
            code: "+387",
            name: "Bosnia and herzegovina"
          },
          {
            code: "+267",
            name: "Botswana"
          },
          {
            code: "+55",
            name: "Brazil"
          },
          {
            code: "+246",
            name: "British indian ocean territory"
          },
          {
            code: "+1 284",
            name: "British virgin islands"
          },
          {
            code: "+673",
            name: "Brunei"
          },
          {
            code: "+359",
            name: "Bulgaria"
          },
          {
            code: "+226",
            name: "Burkina faso"
          },
          {
            code: "+257",
            name: "Burundi"
          },
          {
            code: "+855",
            name: "Cambodia"
          },
          {
            code: "+237",
            name: "Cameroon"
          },
          {
            code: "+1",
            name: "Canada"
          },
          {
            code: "+238",
            name: "Cape verde"
          },
          {
            code: "+ 345",
            name: "Cayman islands"
          },
          {
            code: "+236",
            name: "Central african republic"
          },
          {
            code: "+235",
            name: "Chad"
          },
          {
            code: "+56",
            name: "Chile"
          },
          {
            code: "+86",
            name: "China"
          },
          {
            code: "+61",
            name: "Christmas island"
          },
          {
            code: "+61",
            name: "Cocos-keeling islands"
          },
          {
            code: "+57",
            name: "Colombia"
          },
          {
            code: "+269",
            name: "Comoros"
          },
          {
            code: "+242",
            name: "Congo"
          },
          {
            code: "+243",
            name: "Congo"
          },
          {
            code: "+682",
            name: "Cook islands"
          },
          {
            code: "+506",
            name: "Costa rica"
          },
          {
            code: "+385",
            name: "Croatia"
          },
          {
            code: "+53",
            name: "Cuba"
          },
          {
            code: "+599",
            name: "Curacao"
          },
          {
            code: "+537",
            name: "Cyprus"
          },
          {
            code: "+420",
            name: "Czech republic"
          },
          {
            code: "+45",
            name: "Denmark"
          },
          {
            code: "+246",
            name: "Diego garcia"
          },
          {
            code: "+253",
            name: "Djibouti"
          },
          {
            code: "+1 767",
            name: "Dominica"
          },
          {
            code: "+1 809",
            name: "Dominican republic"
          },
          {
            code: "+670",
            name: "East timor"
          },
          {
            code: "+56",
            name: "Easter island"
          },
          {
            code: "+593",
            name: "Ecuador"
          },
          {
            code: "+20",
            name: "Egypt"
          },
          {
            code: "+503",
            name: "El salvador"
          },
          {
            code: "+240",
            name: "Equatorial guinea"
          },
          {
            code: "+291",
            name: "Eritrea"
          },
          {
            code: "+372",
            name: "Estonia"
          },
          {
            code: "+251",
            name: "Ethiopia"
          },
          {
            code: "+500",
            name: "Falkland islands"
          },
          {
            code: "+298",
            name: "Faroe islands"
          },
          {
            code: "+679",
            name: "Fiji"
          },
          {
            code: "+358",
            name: "Finland"
          },
          {
            code: "+33",
            name: "France"
          },
          {
            code: "+596",
            name: "French antilles"
          },
          {
            code: "+594",
            name: "French guiana"
          },
          {
            code: "+689",
            name: "French polynesia"
          },
          {
            code: "+241",
            name: "Gabon"
          },
          {
            code: "+220",
            name: "Gambia"
          },
          {
            code: "+995",
            name: "Georgia"
          },
          {
            code: "+49",
            name: "Germany"
          },
          {
            code: "+233",
            name: "Ghana"
          },
          {
            code: "+350",
            name: "Gibraltar"
          },
          {
            code: "+30",
            name: "Greece"
          },
          {
            code: "+299",
            name: "Greenland"
          },
          {
            code: "+1 473",
            name: "Grenada"
          },
          {
            code: "+590",
            name: "Guadeloupe"
          },
          {
            code: "+1 671",
            name: "Guam"
          },
          {
            code: "+502",
            name: "Guatemala"
          },
          {
            code: "+224",
            name: "Guinea"
          },
          {
            code: "+245",
            name: "Guinea-bissau"
          },
          {
            code: "+595",
            name: "Guyana"
          },
          {
            code: "+509",
            name: "Haiti"
          },
          {
            code: "+504",
            name: "Honduras"
          },
          {
            code: "+852",
            name: "Hong kong"
          },
          {
            code: "+36",
            name: "Hungary"
          },
          {
            code: "+354",
            name: "Iceland"
          },
          {
            code: "+91",
            name: "India"
          },
          {
            code: "+62",
            name: "Indonesia"
          },
          {
            code: "+98",
            name: "Iran"
          },
          {
            code: "+964",
            name: "Iraq"
          },
          {
            code: "+353",
            name: "Ireland"
          },
          {
            code: "+972",
            name: "Israel"
          },
          {
            code: "+39",
            name: "Italy"
          },
          {
            code: "+225",
            name: "Ivory coast"
          },
          {
            code: "+1 876",
            name: "Jamaica"
          },
          {
            code: "+81",
            name: "Japan"
          },
          {
            code: "+962",
            name: "Jordan"
          },
          {
            code: "+7 7",
            name: "Kazakhstan"
          },
          {
            code: "+254",
            name: "Kenya"
          },
          {
            code: "+686",
            name: "Kiribati"
          },
          {
            code: "+965",
            name: "Kuwait"
          },
          {
            code: "+996",
            name: "Kyrgyzstan"
          },
          {
            code: "+856",
            name: "Laos"
          },
          {
            code: "+371",
            name: "Latvia"
          },
          {
            code: "+961",
            name: "Lebanon"
          },
          {
            code: "+266",
            name: "Lesotho"
          },
          {
            code: "+231",
            name: "Liberia"
          },
          {
            code: "+218",
            name: "Libya"
          },
          {
            code: "+423",
            name: "Liechtenstein"
          },
          {
            code: "+370",
            name: "Lithuania"
          },
          {
            code: "+352",
            name: "Luxembourg"
          },
          {
            code: "+853",
            name: "Macau"
          },
          {
            code: "+389",
            name: "Macedonia"
          },
          {
            code: "+261",
            name: "Madagascar"
          },
          {
            code: "+265",
            name: "Malawi"
          },
          {
            code: "+60",
            name: "Malaysia"
          },
          {
            code: "+960",
            name: "Maldives"
          },
          {
            code: "+223",
            name: "Mali"
          },
          {
            code: "+356",
            name: "Malta"
          },
          {
            code: "+692",
            name: "Marshall islands"
          },
          {
            code: "+596",
            name: "Martinique"
          },
          {
            code: "+222",
            name: "Mauritania"
          },
          {
            code: "+230",
            name: "Mauritius"
          },
          {
            code: "+262",
            name: "Mayotte"
          },
          {
            code: "+52",
            name: "Mexico"
          },
          {
            code: "+691",
            name: "Micronesia"
          },
          {
            code: "+1 808",
            name: "Midway island"
          },
          {
            code: "+373",
            name: "Moldova"
          },
          {
            code: "+377",
            name: "Monaco"
          },
          {
            code: "+976",
            name: "Mongolia"
          },
          {
            code: "+382",
            name: "Montenegro"
          },
          {
            code: "+1664",
            name: "Montserrat"
          },
          {
            code: "+212",
            name: "Morocco"
          },
          {
            code: "+95",
            name: "Myanmar"
          },
          {
            code: "+264",
            name: "Namibia"
          },
          {
            code: "+674",
            name: "Nauru"
          },
          {
            code: "+977",
            name: "Nepal"
          },
          {
            code: "+31",
            name: "Netherlands"
          },
          {
            code: "+599",
            name: "Netherlands antilles"
          },
          {
            code: "+1 869",
            name: "Nevis"
          },
          {
            code: "+687",
            name: "New caledonia"
          },
          {
            code: "+64",
            name: "New zealand"
          },
          {
            code: "+505",
            name: "Nicaragua"
          },
          {
            code: "+227",
            name: "Niger"
          },
          {
            code: "+234",
            name: "Nigeria"
          },
          {
            code: "+683",
            name: "Niue"
          },
          {
            code: "+672",
            name: "Norfolk island"
          },
          {
            code: "+850",
            name: "North korea"
          },
          {
            code: "+1 670",
            name: "Northern mariana islands"
          },
          {
            code: "+47",
            name: "Norway"
          },
          {
            code: "+968",
            name: "Oman"
          },
          {
            code: "+92",
            name: "Pakistan"
          },
          {
            code: "+680",
            name: "Palau"
          },
          {
            code: "+970",
            name: "Palestinian territory"
          },
          {
            code: "+507",
            name: "Panama"
          },
          {
            code: "+675",
            name: "Papua"
          },
          {
            code: "+595",
            name: "Paraguay"
          },
          {
            code: "+51",
            name: "Peru"
          },
          {
            code: "+63",
            name: "Philippines"
          },
          {
            code: "+48",
            name: "Poland"
          },
          {
            code: "+351",
            name: "Portugal"
          },
          {
            code: "+1 787",
            name: "Puerto rico"
          },
          {
            code: "+974",
            name: "Qatar"
          },
          {
            code: "+262",
            name: "Reunion"
          },
          {
            code: "+40",
            name: "Romania"
          },
          {
            code: "+7",
            name: "Russia"
          },
          {
            code: "+250",
            name: "Rwanda"
          },
          {
            code: "+685",
            name: "Samoa"
          },
          {
            code: "+378",
            name: "San marino"
          },
          {
            code: "+966",
            name: "Saudi arabia"
          },
          {
            code: "+221",
            name: "Senegal"
          },
          {
            code: "+381",
            name: "Serbia"
          },
          {
            code: "+248",
            name: "Seychelles"
          },
          {
            code: "+232",
            name: "Sierra leone"
          },
          {
            code: "+65",
            name: "Singapore"
          },
          {
            code: "+421",
            name: "Slovakia"
          },
          {
            code: "+386",
            name: "Slovenia"
          },
          {
            code: "+677",
            name: "Solomon islands"
          },
          {
            code: "+27",
            name: "South africa"
          },
          {
            code: "+500",
            name: "South georgia"
          },
          {
            code: "+82",
            name: "South korea"
          },
          {
            code: "+34",
            name: "Spain"
          },
          {
            code: "+94",
            name: "Sri lanka"
          },
          {
            code: "+249",
            name: "Sudan"
          },
          {
            code: "+597",
            name: "Suriname"
          },
          {
            code: "+268",
            name: "Swaziland"
          },
          {
            code: "+46",
            name: "Sweden"
          },
          {
            code: "+41",
            name: "Switzerland"
          },
          {
            code: "+963",
            name: "Syria"
          },
          {
            code: "+886",
            name: "Taiwan"
          },
          {
            code: "+992",
            name: "Tajikistan"
          },
          {
            code: "+255",
            name: "Tanzania"
          },
          {
            code: "+66",
            name: "Thailand"
          },
          {
            code: "+670",
            name: "Timor leste"
          },
          {
            code: "+228",
            name: "Togo"
          },
          {
            code: "+690",
            name: "Tokelau"
          },
          {
            code: "+676",
            name: "Tonga"
          },
          {
            code: "+1 868",
            name: "Trinidad"
          },
          {
            code: "+216",
            name: "Tunisia"
          },
          {
            code: "+90",
            name: "Turkey"
          },
          {
            code: "+993",
            name: "Turkmenistan"
          },
          {
            code: "+1 649",
            name: "Turks"
          },
          {
            code: "+688",
            name: "Tuvalu"
          },
          {
            code: "+1 340",
            name: "U.S. virgin islands"
          },
          {
            code: "+256",
            name: "Uganda"
          },
          {
            code: "+380",
            name: "Ukraine"
          },
          {
            code: "+971",
            name: "United arab emirates"
          },
          {
            code: "+44",
            name: "United kingdom"
          },
          {
            code: "+1",
            name: "United states"
          },
          {
            code: "+598",
            name: "Uruguay"
          },
          {
            code: "+998",
            name: "Uzbekistan"
          },
          {
            code: "+678",
            name: "Vanuatu"
          },
          {
            code: "+58",
            name: "Venezuela"
          },
          {
            code: "+84",
            name: "Vietnam"
          },
          {
            code: "+1 808",
            name: "Wake island"
          },
          {
            code: "+681",
            name: "Wallis"
          },
          {
            code: "+967",
            name: "Yemen"
          },
          {
            code: "+260",
            name: "Zambia"
          },
          {
            code: "+255",
            name: "Zanzibar"
          },
          {
            code: "+263",
            name: "Zimbabwe"
          }]
        }    



    for(var key in object) {
        for(var key2 in object[key]) {
          // console.log(object[key][key2].name.toLowerCase())
            switch(lowerCountry) {
                case object[key][key2].name.toLowerCase():
                document.getElementById("mobileCode").value = object[key][key2].code;
                break;
    
                default:
                // console.log("no")
                break;
                
            }
        }
    }




    // country error message
    if(!isNaN(lowerCountry) || lowerCountry === "" || lowerCountry === null || lowerCountry === 'undefined') {
    document.getElementById('countryError').innerHTML = "invalid Country!"
    }

    else if(!email.match(email_patt)) {
      document.getElementById('emailError').innerHTML = "invalid email !!!"
    }

    else if(isNaN(age) || age === "" || age === null || age === "undefined") {
      document.getElementById('ageError').innerHTML = "invalid age!";
    }
  
    else if(age.length > 3) {
      document.getElementById('ageError').innerHTML = "enter correct age e.g, 3 digits";
    }

    else if(isNaN(mobileNumber) || mobileNumber === "") {
      document.getElementById('numberError').innerHTML = "Please enter a valid mobile phone number. No Space Hyphens '-' Or Any Special Character .";
    }

    else if(mobileNumber.length < 10 || mobileNumber.length >10) {
      document.getElementById('numberError').innerHTML = "Phone number must contain 10 digits.";
    }

    else if(mobileNumber.charAt(0) === '0') {
      document.getElementById('numberError').innerHTML = "Please enter Phone number without '0'";
    }

    else if(!isNaN(city) || city === "" || city === null || city === "undefined") {
      document.getElementById('cityError').innerHTML = "invalid city!";
    }

    else if(!isNaN(state) || state === "" || state === null || state === "undefined") {
      document.getElementById('stateError').innerHTML = "invalid state!";
    }

    else if(isNaN(zip) || zip === "" || zip === null || zip === "undefined") {
      document.getElementById('zipError').innerHTML = "invalid zip!";
    }

    else if(zip.length !== 5) {
      document.getElementById('zipError').innerHTML = "provide 5 digits zip code";
    }

    else if(profilePic == null) {
        document.getElementById('profileError').innerHTML = "please select profile picture";
    }
    
    else if(password === "" || password === null || password === 'undefined' || password.length < 8) {
      document.getElementById('passError').innerHTML = "Enter correct password. max 8 chars";
    }
  
    else if(conPassword !== password) {
      document.getElementById('conPassError').innerHTML = "Passwerd not Match!!!"
    }



    else{       

        let localStorageData = localStorage.getItem("detail")
        let userObj = JSON.parse(localStorageData)
        // console.log(userObj)
        var userInfo = {
            country,
            email,
            age,
            mobileCode,
            mobileNumber,
            city,
            state,
            zip,
            profilePic,
            password
          }

        for(var a in userObj) {
            userInfo[a] = userObj[a]
        }

        // console.log(userInfo)





        // donor list created
        if(userInfo.acType === "donor") {
                firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
                    .then((success)=>{
                        // console.log(success)
                        document.getElementById("progress-bar").style.width= "100%"
                        document.getElementById("progress-bar").innerHTML= "100%"
                        setTimeout(()=>{
                          document.getElementById("loader").style.display = "block"
                        },1000)
                        
                        localStorage.clear()
                        let storageRef = firebase.storage().ref().child(`profile/${profilePic.name}`)
                        storageRef.put(profilePic)
                        .then((url) =>{
                            url.ref.getDownloadURL()
                            .then((refUrl) =>{
                            userInfo.profile = refUrl
                                firebase.database().ref('donorList/' + success.user.uid).set(userInfo)
                                .then((succ) =>{
                                    console.log(succ)
                                  location = "../pages/signin.html"
                                  })
                                .catch((err) =>{
                                    var errMessage = err.err.message
                                    // console.log(errMessage)
                                })
                            })
                        })
                    })
                    .catch((error)=>{
                        var errMessage = error.message;
                        if(errMessage === 'The email address is already in use by another account.') {
                            document.getElementById("emailError").innerHTML = errMessage
                        }
                    })
        }



        // exportor list created
        if(userInfo.acType === "acceptor") {
            firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
                .then((success)=>{
                    localStorage.clear()
                    document.getElementById("progress-bar").style.width= "100%"
                    document.getElementById("progress-bar").innerHTML= "100%"
                    setTimeout(()=>{
                      document.getElementById("loader").style.display = "block"
                    },1000)
                    // console.log(success)
                    let storageRef = firebase.storage().ref().child(`profile/${profilePic.name}`)
                    storageRef.put(profilePic)
                    .then((url) =>{
                        url.ref.getDownloadURL()
                        .then((refUrl) =>{
                        userInfo.profile = refUrl
                            firebase.database().ref('exportorList/' + success.user.uid).set(userInfo)
                            .then((succ) =>{
                                console.log(succ)
                              location = "../pages/signin.html"
                              })
                            .catch((err) =>{
                                var errMessage = err.message
                                // console.log(errMessage)
                            })
                        })
                    })
                })
                .catch((error)=>{
                    var errMessage = error.message;
                    document.getElementById("emailError").innerHTML = errMessage;
                    // console.log(errMessage)
                })
        }


      }

}




// signin function
function signIn() {

  let email = document.getElementById("signInEmail").value;
  let signInPass = document.getElementById("signInPassword").value;
  
  // console.log(email, signInPass)
  firebase.auth().signInWithEmailAndPassword(email, signInPass)
  .then((success)=>{

    // console.log(user)
    
    firebase.database().ref("donorList/"+success.user.uid)
    .once("value", (data)=>{
      let userData = data.val()
        if(userData.acType === "donor") {
          location = "../pages/donor.html"
          // console.log(userData.acType)
        }
    })

  try{
    firebase.database().ref("exportorList/"+success.user.uid)
    .once("value", (data)=>{
      let userData = data.val()
        if(userData.acType === "acceptor") {
          location = "../pages/acceptor.html"
          // console.log(userData.acType)
        }
    })
  }
  catch(err) {
    // console.log(err.message)
  }
    
    
  })
  .catch((err)=>{

    // console.log(err.message)
    if(err.message === "The email address is badly formatted.") {
      document.getElementById("signInEmailError").innerHTML = err.message;
    }

    else if(err.message === "The password is invalid or the user does not have a password.") {
      document.getElementById("signInPasswordError").innerHTML = err.message;
    }

    else if(err.message === "There is no user record corresponding to this identifier. The user may have been deleted.") {
      document.getElementById("otherError").innerHTML = err.message;
    }
  })
}








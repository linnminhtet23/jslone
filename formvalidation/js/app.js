// UI
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cfmpassword = document.getElementById("cfmpassword");

//Event listener Method 1
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   // console.log('hay');
//   if (username.value === "") {
//     showerror(username, "Username is required");
//   } else {
//     showsuccess(username);
//   }
//   if (email.value === "") {
//     showerror(email, "Email is required");
//   }else if(!validateEmail(email.value)){
//       showerror(email,"Email is not valid")
//   }
//    else {
//     showsuccess(email);
//   }

//   if(password.value===""){
// showerror(password,"Password is required");

// }else{
//     showsuccess(password);
// }

// if(cfmpassword.value===""){
//     showerror(cfmpassword,"Confirm Password is required");

//     }else if(password.value !== cfmpassword.value){
//         showerror(cfmpassword,"Password do not match")
//     }
//      else{
//         showsuccess(cfmpassword);
//     }
// });

//for checking email format(Regular Expression)
// function validateEmail(email) {
//   const re =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //regular expression
//   return re.test(String(email).toLowerCase());
// }



// Event Listener method2
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log("hay");
  checkrequired([username, email, password, cfmpassword]);

  checklength(username, 3, 15);
  checkemail(email);

  checklength(password, 6, 25);

  checkpasswordmatch(password,cfmpassword);
});



function showerror(input, message) {
  const formcontrol = input.parentElement;
  formcontrol.className = "form-control error";

  const small = formcontrol.querySelector("small");
  small.innerText = message;
}

function showsuccess(input) {
  const formcontrol = input.parentElement;

  // formcontrol.classList.remove('error');
  // formcontrol.classList.add('success');

  formcontrol.className = "form-control success";
}




// Check the requirement 
function checkrequired(inputarrs) {
  inputarrs.forEach(function (inputarr) {
    // console.log(inputarr.value);

    if (inputarr.value === "") {
      showerror(inputarr, `${getfieldname(inputarr)} is required`);
    } else {
      showsuccess(inputarr);
    }

  });
}



//get field name
function getfieldname(inputarr) {
  // console.log('hay');
  // console.log(inputarr.id.charAt(0).toUpperCase)
  return inputarr.id.charAt(0).toUpperCase() + inputarr.id.slice(1);
}
//check input length
function checklength(input, min, max) {

  if (input.value.length < min) {
    showerror(
      input,
      `${getfieldname(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {

    showerror(input, `${getfieldname(input)}must be at least ${max} characters`);
  } else {
    showsuccess(input);
  }
}


//check email is valid
function checkemail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //regular expression
  // return re.test(String(email).toLowerCase());

  if(re.test(input.value)){
    
    showsuccess(input);

  }else{
    showerror(input,"Email is not valid")
  }
}

//check password match
function checkpasswordmatch(input1,input2){

  if(input1.value !==input2.value){
    showerror(input2, "Password do not match");
  }
}



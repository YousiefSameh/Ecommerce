function loginValidate() {
  const Email = document.querySelector("#email").value;
  const Password = document.querySelector("#password").value;
  const Error = document.querySelector("#error");
  let pass = "1234";
  let Text = "";
  if (Email == "" || Password == "") {
    Text = "Please Fill Your Data";
    Error.innerHTML = Text;
    return false;
  } else if (Email.indexOf("@") == -1) {
    console.log("ddd");
    Text = "Please Enter Valid Email";
    Error.innerHTML = Text;
    return false;
  } else if (Password != pass) {
    Text = "Please Enter Valid Password";
    Error.innerHTML = Text;
    return false;
  }
}

function signValidate() {
  const Name = document.querySelector("#name").value;
  const Email = document.querySelector("#email").value;
  const Password = document.querySelector("#password").value;
  const Error = document.querySelector("#error");
  let Text = "";
  if (Email == "" || Password == "") {
    Text = "Please Fill Your Data";
    Error.innerHTML = Text;
    return false;
  } else if (Email.indexOf("@") == -1) {
    console.log("ddd");
    Text = "Please Enter Valid Email";
    Error.innerHTML = Text;
    return false;
  } else if (Name.length < 3) {
    Text = "Please Enter Valid Name";
    Error.innerHTML = Text;
    return false;
  }
}
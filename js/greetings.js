const logInButton = document.querySelector("#login-form button");  
const name = document.querySelector("#login-form input");
const userName = document.querySelector("#represent_name h1");
//로컬스토리지에 값을 저장해볼까 


function logInClick() {
    const username = name.value
    console.log("Hello ", username);
    localStorage.setItem("name", username);

    userName.innerText = `Hello ${username}`;
    name.value = "";
}

//name.addEventListener("submit", submitInput);
logInButton.addEventListener("click", logInClick);

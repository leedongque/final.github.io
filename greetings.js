const logInButton = document.querySelector("#login-form button");  
const name = document.querySelector("#login-form input");
const userName = document.querySelector("#represent_name h1");
//���ý��丮���� ���� �����غ��� 


function logInClick() {
    const username = name.value
    console.log("Hello ", username);
    localStorage.setItem("name", username);

    userName.innerText = `Hello ${username}`;
    name.value = "";
}

//name.addEventListener("submit", submitInput);
logInButton.addEventListener("click", logInClick);

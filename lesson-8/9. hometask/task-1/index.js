const baseForm = document.getElementById("form");
//emailDiv
const emailDiv = document.createElement('div');
emailDiv.className = "form-group";
const emailLabel = document.createElement('label');
emailLabel.setAttribute("for", "email");
emailLabel.innerHTML = "Email";
const emailInput = document.createElement('input');
emailInput.className = "form-control";
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "email");
emailInput.setAttribute("placeholder", "Введите свою электропочту");
emailDiv.append(emailLabel);
emailDiv.append(emailInput);
baseForm.prepend(emailDiv);
//emailDiv

//passwordDiv
const passwordDiv = document.createElement('div');
passwordDiv.className = "form-group";
const passwordLabel = document.createElement('label');
passwordLabel.setAttribute("for", "password");
passwordLabel.innerHTML = "Password";
const passwordInput = document.createElement('input');
passwordInput.className = "form-control";
passwordInput.setAttribute("type", "password");
passwordInput.setAttribute("id", "password");
passwordInput.setAttribute("placeholder", "Введите пароль");
passwordDiv.append(passwordLabel);
passwordDiv.append(passwordInput);
emailDiv.after(passwordDiv);
//passwordDiv

//formCheckDiv
const checkBoxDiv = document.createElement('div');
checkBoxDiv.className = "form-group form-check";
const checkboxInput = document.createElement('input');
checkboxInput.setAttribute("type", "checkbox");
checkboxInput.className = "form-check-input";
checkboxInput.setAttribute("id", "exampleCheck1");
const checkboxLabel = document.createElement('label');
checkboxLabel.className = "form-check-label";
checkboxLabel.setAttribute("for", "exampleCheck1");
checkboxLabel.innerHTML = "Запомнить меня";
checkBoxDiv.append(checkboxInput);
checkBoxDiv.append(checkboxLabel);
passwordDiv.after(checkBoxDiv);
//formCheckDiv

//button
const button = document.createElement('button');
button.className = "btn btn-primary";
button.setAttribute("type", "submit");
button.innerHTML = "Вход";
checkBoxDiv.after(button);
//button
/**
 * Доработать форму из 1-го задания.
 * Добавить обработчик сабмита формы.
 * Для того что бы увидеть результат откройте index.html файл в браузере.
 * Обязательно!
 * 1. При сабмите формы страница не должна перезагружаться
 * 2. Генерировать ошибку если пользователь пытается сабмитить форму с пустыми или содержащими только пробел(ы) полями.
 * 3. Если поля формы заполнены и пользователь нажимает кнопку Вход → вывести в консоль объект следующего вида
 * {
 *  email: 'эмейл который ввёл пользователь',
 *  password: 'пароль который ввёл пользователь',
 *  remember: 'true/false'
 * }
*/

const func = (definitions) => {
    
    const {divClassName, label, labelName, placeholder, type } = definitions;

    const divEl     = document.createElement('div');
    divEl.className = divClassName;

    const labelEl     = document.createElement('label');
    labelEl.innerHTML = labelName;
    labelEl.setAttribute("for", label);
    
    const inputEl     = document.createElement('input');
    inputEl.setAttribute("type", type);
    inputEl.setAttribute("id", label);

    if (type == 'checkbox') {
        inputEl.className ="form-check-input";
        divEl.append(inputEl);
        divEl.append(labelEl);
    } else {
        inputEl.className = "form-control";
        inputEl.setAttribute("placeholder", placeholder);
        divEl.append(labelEl);
        divEl.append(inputEl);
    }

    return divEl;
};

const email = func({
    divClassName: 'form-group',
    label:        'email',
    labelName:    'Email',
    placeholder:  'Введите свою электропочту',
    type:         'email'
});

const password = func({
    divClassName: 'form-group',
    label:        'password',
    labelName:    'Password',
    placeholder:  'Введите свой пароль',
    type:         'password'
});

const checkbox = func({
    divClassName: 'form-group form-check',
    label:        'exampleCheck1',
    labelName:    'Запомнить меня',
    type:         'checkbox'
});

const button = document.createElement('button');
button.className = "btn btn-primary";
button.setAttribute("type", "submit");
button.innerHTML = "Вход";

const baseForm = document.getElementById("form");
baseForm.append(email);
baseForm.append(password);
baseForm.append(checkbox);
baseForm.append(button);

baseForm.onsubmit = (event) => {
    const emailInput    = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const checkboxInput = document.getElementById("exampleCheck1");

    if (!emailInput.value.trim()) {
        alert("Email Input should not be empty");
    } 
    else if(!passwordInput.value.trim()){
        alert("Password Input should not be empty");
    }
    else {
        const obj = {
            email:    emailInput.value,
            password: passwordInput.value,
            remember: checkboxInput.checked
        };
        console.log(obj);
    }

    event.preventDefault();
};
//проверка валидности формы и блокировка кнопки "Отправить"
const formSubmit = () => {
	const btn = document.forms.userRegistration__form.elements.formButton; //кнопка отправить
	const radioBtn = document.forms.userRegistration__form.elements.gender;//кнопки выора пола, radio
	const checkBtn = document.forms.userRegistration__form.elements.checkboxForm;// чекбокс на согласие
    const nameInput = document.forms.userRegistration__form.elements.userName;//поле ввода имени
    const ageInput = document.forms.userRegistration__form.elements.age; //поле для ввода возраста
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ //шаблон ввода пароля минимум 8 символов одна заглавная буква, 1 строчная и цифра
    const passwordInput = document.forms.userRegistration__form.elements.passwordUser; // поле ввода пароля
    const emailInput = document.forms.userRegistration__form.elements.email;// поле ввода email 
    let regexEmail = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    let passwordValue = passwordInput.value;//поле ввода пароля
    let errorPasswordMessage = document.getElementById('errorPasswordId');//сообщение об ошибке ввода пароля
    let errorEmailMessage = document.getElementById('errorEmailId');//сообщение об ошибке ввода поля email
    let errorNameMessage = document.getElementById('errorNameId');//сообщение об ошибке имени
    let errorNameMessage2 = document.getElementById('errorNameId2');//сообщение об ошибке имени
    let regexName = /^[A-Za-z\s]+$/g //только буквы и пробелы
    let errorAgeMessage = document.getElementById('errorAgeId');
    //проверка на отметку соласие обработки данных
    if(!checkBtn.checked) {
        btn.disabled = true
    }
    //проверка имени на количество знаков
    else if(nameInput.value.length<2){
        btn.disabled = true;
        errorNameMessage.textContent = 'Поле имя может содержать только буквы и пробелы, должно быть не меньше 2 знаков, но не более 20!';
    }
    else if(!regexName.test(nameInput.value)){
        btn.disabled = true;
        errorNameMessage2.textContent = 'Поле имя может содержать только буквы и пробелы, должно быть не меньше 2 знаков, но не более 20!';
    }
    //проверка заполненного возраста, что бы не было отрицательное число и число больще 120
    else if(ageInput.value < 1 ){
        btn.disabled = true;
        errorAgeMessage.textContent = 'Возраст не может быть меньше 1, тем более отрицательным числом'
    }
    else if(ageInput.value > 120 ){
        btn.disabled = true;
        errorAgeMessage.textContent = 'Возраст не может быть больше 120, рекордсмен по продолжительности жизни 122 года, либо мы Вас поздравляем!'
    }
    //проверка на пароль согласно установленным требованиям безопасности
    else if(!regexPassword.test(passwordValue)){
        btn.disabled = true;
        errorPasswordMessage.textContent = 'Пароль должен содержать минимум 8 знаков из них 1 заглавная буква латинского алфвита, 1 строчная буква латинского алфвита и 1 цифра!'
    }
    //проверка email
    else if(!regexEmail.test(emailInput.value)){
        btn.disabled = true;
        errorEmailMessage.textContent = 'email должен содержать @ и доменное имя!';
    }
    //если условия выполняются, то разблокировка кнопки отправить
    else {
        btn.disabled = false;
        errorPasswordMessage.textContent="";
        errorEmailMessage.textContent="";
        errorNameMessage.textContent="";
        errorNameMessage2.textContent="";
      };
  }
  formSubmit()

  //вывод данных пользователя в консоль

  const formReg = document.forms[0];

  formReg.addEventListener('submit', getFormValue);

  function getFormValue(event) {
    event.preventDefault();
    let name = formReg.querySelector('[name="userName"]');
    let userEmail = formReg.querySelector('[name="email"]');
    let userAge = formReg.querySelector('[name="age"]');
    let women = formReg.querySelector('[name="gender_w"]');
    let male = formReg.querySelector('[name="gender_m"]');
    let prof = formReg.querySelector('[name="formSelect"]');
    let passw = formReg.querySelector('[name="passwordUser"]');
    let agreeement = formReg.querySelector('[name="checkboxForm"]');
    let dataForm = {
        name: name.value,
        email: userEmail.value,
        age: userAge.value,
        women: women.checked,
        male: male.checked,
        proffesion: prof.options[prof.selectedIndex].text,
        password: passw.value,
        agreeement: agreeement.checked,
    };
    console.log(dataForm);

}

// функции для событий focus и blur

const nameInput = document.forms.userRegistration__form.elements.userName;
const ageInput = document.forms.userRegistration__form.elements.age;
const emailInput = document.forms.userRegistration__form.elements.email;
const passwordInput = document.forms.userRegistration__form.elements.passwordUser;

nameInput.addEventListener('focus', function () {
    nameInput.style.border = '3px solid green';
    nameInput.style.backgroundColor = 'lightgreen'; 
  });

ageInput.addEventListener('focus', function () {
    ageInput.style.border = '3px solid gold';
    ageInput.style.backgroundColor = 'lightyellow'; 
  });

emailInput.addEventListener('focus', function () {
    emailInput.style.border = '3px solid blue';
    emailInput.style.backgroundColor = 'lightblue'; 
  })

passwordInput.addEventListener('focus', function () {
    passwordInput.style.border = '3px solid pink';
    passwordInput.style.backgroundColor = 'lightpink'; 
  })

nameInput.addEventListener('blur', function () {
    nameInput.style.border = ''; 
    nameInput.style.backgroundColor ='';
  });

ageInput.addEventListener('blur', function () {
    ageInput.style.border = '';
    ageInput.style.backgroundColor = ''; 
  });

emailInput.addEventListener('blur', function () {
    emailInput.style.border = '';
    emailInput.style.backgroundColor = ''; 
  })

passwordInput.addEventListener('blur', function () {
    passwordInput.style.border = '';
    passwordInput.style.backgroundColor = ''; 
  })
//очистка формым после отправки
formReg.addEventListener('submit', (e) => {
	e.preventDefault();
	e.target.reset(); 
  })
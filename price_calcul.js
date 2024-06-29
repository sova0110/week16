//функция выбора модели авто в зависимости от марки
let all_models=[];
 
all_models[0]=["mondeo","focus","kuga"];
all_models[1]=["logan","duster","kaptur"];
all_models[2]=["roma","portofino","monza"];

car_id.onchange=function(){
    model_id.disabled=false;
    model_id.innerHTML="<option value='0'>- Выберите марку -</option>";
    mymodel=this.value-1;
    if(mymodel!=-1){
        for(var i=0;i<all_models[mymodel].length;i++){
            model_id.innerHTML+='<option value="'+(i+1)+'">'+all_models[mymodel][i]+'</option>';
        }
    }else{
        model_id.disabled=true;

    }
    }

//разблокировка поле количество владельцев при выборе поддержанного авто
carStatusId.onchange=function(){
    let status_car__used = document.getElementById('used');;
    let car_owners = document.forms.carPriceForm.elements.selectOwners;
    
    if(status_car__used.checked){
        car_owners.disabled=false
    } else{
        car_owners.disabled=true
    }
}

//калукулятор
// усовия расчета если год выпуска ранее 2017 года, то от первоначальной стоимости вычитается 15% от стоиости
// если можность двигателя больше 2, то стоимость увеличивается на 5%
// если новый то стоиомость равна ервоначальной, если поддрежанный 1-2 владельца стоимоть уменьшется на 100 тыс более 3 на 270 тыс

let modelInput = document.querySelector("#model_id");
let result = document.getElementById('totalPriceId');
let carInput = document.querySelector("#car_id");
let yearInput = document.querySelector("#yearId");
let ownersInput = document.querySelector("#owners_id");
let engineInput = document.querySelector('#engineId')
const photoShow = document.getElementById('photoId');
let fuelBlock = document.querySelector("#fuelBlockId");
let messageYear = document.getElementById('errorYear');
let messageEngine = document.getElementById('errorEngine');

modelInput.addEventListener('change', function(e){
    priceCalculater()
});

let priceMondeo = 1500000;
let priceLogan = 800000;
let priceRoma = 25000000;
let priceFocus = 840000;
let priceKuga = 2170000;
let priceDuster = 1170000;
let priceKuptur = 1420000;
let pricePortofino = 19900000;
let priceMonza = 21700000;
let totalPrice;
let img = document.createElement('img');
function priceCalculater(){
    if(carInput.value==='1' && modelInput.value==='1'){
        totalPrice=priceMondeo;
        img.src = 'https://avatars.mds.yandex.net/i?id=f1d5bf680e7959b8939525c0a0c600ce3da0129415acb0fa-13492568-images-thumbs&n=13'
        
    }
    else if(carInput.value==='1' && modelInput.value==='2'){
        totalPrice=priceFocus;
        img.src='https://carsweek.ru/upload/iblock/7c1/7c18bf660ca61fc3fd2065aa1bdad59b.jpg'
    }
    else if(carInput.value==='1' && modelInput.value==='3'){
        totalPrice = priceKuga;
        img.src='https://www.avtorinok.ru/photo/pics/ford/kuga/104115.jpg'
    };
    if(carInput.value==='2' && modelInput.value==='1'){
        totalPrice = priceLogan;
        img.src='http://otzyvy-avtovladelcev.ru/img/auto-body-image/5714/92624.jpg'
     }
     else if(carInput.value==='2' && modelInput.value==='2'){
        totalPrice = priceDuster;
        img.src='https://s1.autorating.ru/upload/medialibrary/0e2/0e21fec9400dc5ff6e7c088857d74dd9.jpeg'
    }
    else if(carInput.value==='2' && modelInput.value==='3'){
        totalPrice = priceKuptur;
        img.src='https://renta-auto.ru/assets/images/kaptur/Renault-Kaptur_3.jpg'
    };
     if(carInput.value==='3' && modelInput.value==='1'){
        totalPrice = priceRoma;
        img.src = 'https://foto.carexpert.ru/img/foto1680/ferrari/ferro005.jpg'
     }
     else if(carInput.value==='3' && modelInput.value==='2'){
        totalPrice = pricePortofino;
        img.src='https://foto.carexpert.ru/img/foto1680/ferrari/ferpo041.jpg'
    }
    else if(carInput.value==='3' && modelInput.value==='3'){
        totalPrice = priceMonza;
        img.src='https://carsweek.ru/upload/uf/9e4/9e4212575b100215d82df2f13fb5b978.jpg'
    };
    if(yearInput.value===''){totalPrice=totalPrice;
        messageYear.innerHTML='укажите год выпуска';}
    else if(yearInput.value < '2017'){
            totalPrice = totalPrice*0.85;
        }
    else if(yearInput.value < '1990'){
            messageYear.innerHTML='похоже на раритет!';
        }
    else if(yearInput.value > '2024'){
            messageYear.innerHTML='привет из будущего!';
        } 
    else{
            messageYear.innerHTML=''};
    if(ownersInput.value===''){totalPrice=totalPrice;}
    else if(ownersInput.value==='1'){
        totalPrice= totalPrice-100000;
    }
    else if(ownersInput.value==='2'){
        totalPrice-=270000;
    };
    if(engineInput.value===''){totalPrice=totalPrice;
        messageEngine.innerHTML='укажите мощность двигателя'}
        else if(engineInput.value > '2' && engineInput.value < '3.6'){
            totalPrice = totalPrice*1.05;
        }
        else if(engineInput.value===0){
            messageEngine.innerHTML='укажите мощность двигателя'
        }
        else if( engineInput.value < '1.1'){
            messageEngine.innerHTML='Это велосипед? Мощность двигателя от 1.1 до 3.5'
        }
        else if( engineInput.value > '3.5'){
            messageEngine.innerHTML='Воу-воу! максимальная мощность двигателя 3.5'
        } else{
            messageEngine.innerHTML=''
        };
    result.innerHTML = totalPrice.toLocaleString('ru-Ru');
    photoShow.append(img)
    
}

engineInput.addEventListener('focus', function () {
    engineInput.style.border = '3px solid green';
    engineInput.style.backgroundColor = 'lightgreen'; 
  });
engineInput.addEventListener('blur', function () {
    engineInput.style.border = '';
    engineInput.style.backgroundColor = ''; 
  });

yearInput.addEventListener('focus', function () {
    yearInput.style.border = '3px solid green';
    yearInput.style.backgroundColor = 'lightgreen'; 
  });
yearInput.addEventListener('blur', function () {
    yearInput.style.border = '';
    yearInput.style.backgroundColor = ''; 
  });


/* это было необходимо для контроля на основной функционал не влияет
let form = document.forms[0];

form.addEventListener('submit', getFormValue);

function getFormValue(event){
    event.preventDefault();
    let car = form.querySelector('[name="selectBrandCar"]');
    let model = form.querySelector('[name="selectModelCar"]');
    let owners = form.querySelector('[name="selectOwners"]');
    let year = form.querySelector('[name="year"]');
    let dataForm = {
        car: car.value,
        model: model.value,
        owners: owners.value,
        year: year.value,
    };
    console.log(dataForm);
}**/
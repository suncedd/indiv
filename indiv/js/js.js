var price = document.querySelector('.price'),
    day = document.querySelector('.day'),
    curse = document.querySelector('.curse'),
    bonus = document.querySelector('.bonus'),
    button = document.querySelector('.button'),
    clear = document.querySelector('.clear');
    dayprice =document.querySelector('.dayprice'),
    fio = document.querySelector('.fio'),
    sum = document.querySelector('.sum'),
    range = document.querySelector('#range'),
    rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = 1;
    summ = document.querySelector('.summ');
var ser = 0; 
var days = 300;  
range.oninput = function()
{
    var rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = range.value;
}
    curse.onchange = function()
    {
        if (curse.value == "Стандарт")
        {
            dayprice.value = '2500';
        }
        else if (curse.value == "2"){
            dayprice.value = '3000';
        }
        else if (curse.value == "Специальный курс")
        {
            dayprice.value = '2800';
        }
        else {
            dayprice.value = '5000';
        }
    }
    clear.onclick = function(){
        day.value='';
        bonus.value="Нет";
        fio.value = '';
        dayprice.value = 2500;
        curse.value="Сандарт";
        summ.classList.remove("out");
    }
    button.onclick = function(){
        summ.classList.remove("out");
        if(day.value != '' && fio.value !='')
        {
            if(day.value >0)
            {
                if(bonus.value == "Личный")
                {
                    ser = 500;
                }
                sum.value = (+dayprice.value + (+range.value * +days)) + +ser ;
                summ.classList.add("out");
            }
            else{
                alert("Введите корректное !");
            }
        }
        else{
            if(day.value == '')
            {
                alert("Введите количество человек!");
            }
            else if(fio.value == '')
                alert("Введите ФИО ребенка!");
            }
        }  
    

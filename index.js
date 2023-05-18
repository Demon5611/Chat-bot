//
const btn = document.querySelector('.buttons')
const divRight = document.querySelector('div')
const right = document.querySelector(".right")
const div = document.querySelector('.left')


//сбросить все 
window.addEventListener("load", (event) => {
    document.querySelector(".button2").onclick = function () {
        location.reload(true);
    };
});
// добавляем текст в инпут при клике по вопросу
div.addEventListener('click', addQuestionToInput) 
function addQuestionToInput (){
let res=''
let span = document.querySelectorAll('span');
[].forEach.call(span, (el) =>{
    el.onclick = function (event)    {
        res = document.querySelector("input").value = el.innerText
    }; 
});
return res 
} 

// enter не работает передача вопроса в функцию при нажатии 

let input= document.querySelector('input')
input.addEventListener("keydown", function (data) 
{
    if (input.key === "Enter")  {
        propertyValue(data)
    } 
    console.log('ll')
});


// создание карточки справа 
function addCard ()
{
    const data = [
        {
        'Какая численность населения Москвы ?': 'Численность населения города Москва, по данным Росстата, составляет 13 015 126 человек (2022). Из них 12 455 682 — городское население, 199 368 — сельское.',
        'Какая численность населения Санкт-Петербурга ?': 'Численность населения города Санкт-Петербург, по данным Росстата, составляет 5 384 342 чел. (2021). Плотность населения — 3837,73 чел./км 2 (2021). Без учёта выделяемых отдельно населённых пунктов в составе Санкт-Петербурга, общая численность населения муниципальных округов города составляет 4 542 813 чел.',
        'Может Вас интересует численность населения Самары ?': 'Население города Самара  — 1 136 709 чел. (2022), восьмой по численности населения город России. В пределах агломерации (третьей по численности населения в России) проживает свыше 2,7 млн человек.',
        'Или численность населения Тюмени ?': 'Численность населения города Тюмени по состоянию на 1 января 2021 года – 816,7 тыс. человек.'
        },
    ]

    const divRight = document.createElement('div')
    divRight.className = 'right'
    let replyText = document.createElement('p')
    let span = document.createElement('span')
    span.innerText = propertyValue(data)
    replyText.append(span)
    divRight.append(replyText)
    right.append(divRight)
    input.value=''


}
btn.addEventListener('click', addCard)



const answers = [
    'О возможности существования жизни на Марсе люди размышляли веками из-за близости планеты и её сходства с Землёй. Поиск признаков жизни начался в XIX веке и продолжается по настоящее время. С 1960-х годов телескопические наблюдения дополнили запуски автоматических межпланетных станций для изучения планеты, вначале с пролётной траектории, а затем с орбиты искусственного спутника.',
    'Устаревшая гипотеза, по которой Земля представляет собой плоский диск. Концепция плоской Земли присутствовала в космогонической мифологии многих народов древности, в частности, древних египтян, вавилонян, в раннем индуизме, буддизме.',
    'В нашей галактике существует примерно от 100 до 400 миллиардов звезд. По версии телескопа «Хаббл», сейчас найдено около 100 миллиардов галактик, и считается, что вскоре их будет найдено еще 100 миллиардов.',
    'Совокупность светил, видимых ночью на небесном своде. В основном это звёзды. Невооружённым глазом можно различить звёзды до 5-6 звёздной величины.'
]


function propertyValue (data)
{
    // const text = data.target.value; // для ENTER, но не работает 
    let input = key = document.querySelector('input').value;
    let result;
    let rValue;
    data.map((key) =>
    {
        if (key[input])
        {
        result =key[input]
        } else
        {
            
            let rand = Math.floor(Math.random() * answers.length);
            rValue = answers[rand];
             result=rValue
            return rValue
            
        }
    });

    return result
}




    


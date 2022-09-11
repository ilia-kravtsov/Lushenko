/*
_______________________________________№1 Подключаем JS файл___________________________________________

тег <script src="..."></script> подключает файл js к файлу html
    его можно располагать и в head и в body, если расположить в хед то
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./CSS_L.css">
    <title>Lushenko</title>
        <script>
        alert('hello');
        </script>
</head>
<body>
    <h1>Lushenko_course.</h1>
    <p>let's get started</p>
</body>
</html>


код выше значит что к моменту выполнения JS будет выполнена только часть кода ниже

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./CSS_L.css">
    <title>Lushenko</title>
        <script>
        alert('hello');
        </script>

Ни нажатие кнопок и вывод информации на страницу - не возможно.

            Поправочка (при изменении браузера изменяется внешний вид всплывающего окна)
                       ( alert это вспомогательная системная функция ее не применяют для веб разработки)
                       (нужна для отладки)

Если подключить sript внутри body, то

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./CSS_L.css">
    <title>Lushenko</title>
</head>
<body>
    <h1>Lushenko_course.</h1>
    <p>let's get started</p>
    <script>
        alert('hello');
    </script>
</body>
</html>

в данном случае к моменту выполнения alert будет доступен вот этот участок кода

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./CSS_L.css">
    <title>Lushenko</title>
</head>
<body>
    <h1>Lushenko_course.</h1>
    <p>let's get started</p>
    <script>
        alert('hello');
    </script>

тегами h1 и p тоже можно манипулировать
но такое подключение не практикуется
для правильного подключения создаётся новый js файл

Рекомендуется подключать js файл в самом низу документа перед закрывающимся тегом body
в теге script в качестве атрибута указывается src и место расположения файла

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./CSS_L.css">
    <title>Lushenko</title>
</head>
<body>
    <h1>Lushenko_course.</h1>
    <p>let's get started</p>
    <script src="JS_L.js"></script>
</body>
</html>

alert('hello'); -- в консоли видим всплывающее окно hello
Если alert не заработал, ищем ошибку в написании тега <script> либо атрибута src
либо самого называния js файла в html документе

Всё что будет в html документе выше тега <script> будет доступно для манипуляции

На практике будет много js файлов

если мы добавим несколько script тегов то к каждому js файлу нужно указывать источник src

выглядит вот так

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./CSS_L.css">
    <title>Lushenko</title>
</head>
<body>
    <h1>Lushenko_course.</h1>
    <p>let's get started</p>
    <script src="JS_L.js"></script>
    <script src="JS_L2.js></script>
</body>
</html>   -- в консоли в начале отработает JS_L а потом JS_L2
То есть js файл отрабатывает первым, если файл подключен первым, как js_l то 
он отработает в консоль первым
Если файл подключен вторым он отрабатывает вторым

Для проекта чаще всего практикуется создание отдельной папки для js файлов
в этом случае нужно указать данный факт в пути src тега script 

Относительно html файл находится внутри папки js то есть
в пути тега script src нужно указать 

<script src="js/JS_L.js"></script>

Если не указать путь через папку в консоли увидим ошибку

Так же Важный атрибут для script в html это defer иногда он пишется

<script defer></script>

Иногда в полном виде 

<script defer="defer"></script>

defer - откладывает выполнение script до тех пор пока вся страница не будет загружена полностью

то есть применение данного атрибута позволяет обезопасить себя от
того что какая-то часть страницы не загрузится
не успеет подгрузиться а мы попытаемся в ней работать js     

Используя defer тег script можно писать в любов месте html файла
Иногда его применяют подключаяя sript внутри head

Но чаще всего его не используют и применяют написание Javascript перед закрывающимся тегом body


Атрибут async - асинхронный. поддерживается всеми браузерами кроме IE9 
Скрипт выполняется полностью асинхронно
То есть при обнаружении <script async src=""> браузер не останавлиает обработку страницы
А работает дальше. Когда скрипт будет загружен он выполнится

то есть JS находит первый скрипт и начинает его выполнять 
    <script src="JS_L.js"></script>
после его выполнения переходит на следующий скрипт
Как только браузер видит async
Он начинает выполнять следующий скрипт сразу же
    <script src="JS_L2.js></script>
Не дожидаясь окончания выполнения первого скрипта

То есть будут выполняться два скрипта одновременно
Это увеличивает скорость запуска
Это позволяет делать множественные различные действия параллельно
Это важно для игр и интерактивных объектов

Но с другой стороны, если второй скрипт (который ниже в коде)
    <script src="JS_L2.js></script>
Требует результатов работы первого скрипта
    <script src="JS_L.js"></script>
Может случиться ошибка

Далее переходим в JS_L.js
*/

/*
_______________________________________№2 Правила именования___________________________________________

Идентификатор - это специальное слово которое позволяет нам обратиться к области памяти 
                либо выполнить какие-то действия. Обратиться либо к переменной 
                либо к функции
В JS считается что именем переменной или именем фукнции необходимо правильно писать и исользовать
такие имена.

Под переменной мы скрываем какую-то число строку или значение true/false
Такие обращения к таким областям памяти к значениям называются переменными.

в JS для того чтобы обозначить переменную используют несколько способов

Можно писать 
Первая буква должна быть либо $ либо _ либо латинская буква всё остальное -- Ошибка --
1 Латинские буквы
2 с маленькой буквы
3 Если переменая должна состоять из двух значений(слов) тогда нужно писать в стиле camelCase
где каждое последующее слово начинается с заглавной буквы getElementById
4 Цифры - можно использовать (но не в начале переменной) 
customer1 - можно использовать customer_1 - можно использовать  1customer - нельзя использовать.
5 _ $ можно использовать
6 Помнить про чувствительность к регистру camelCase не то же самое что CamelCase


Нельзя использовать
1 Первый символ не должен быть цифрой 1customer -- Ошибка -- как и название классов в CSS
2 ключевые слова: new name etc
3 русские буквы между английскими 
если заменим о русскую на o латинскую программа выдаст ошибку которую будет сложно выявить
4 пробелы
5 дефисы (в целом можно но на практике не стоит)

Комментарий может быть 

однострочным //  закоментировать строку Ctrl + /             
многострочным /* ... */ // в некоторых случаях * ставят на каждой строчке, зачем?
// Данные строки не будут восприниматься js

/*
В конце каждой строки необходимо ставить ; наличие пробелов перед ; роли не играет.
Если необходимо создать переменную содержащую данные пользователя, то
a = 'ivanov'; - плохой пример, название переменной не отражает сути переменной
Транслитерации 
Polzovatel = 'ivanov'; - плохой пример, название переменной может смутить иностранных программистов

Имена должны быть:
1 Максимально короткими
2 Максимально понятными

Например для покупателя хорошим примером будет:
customer 
Если нужно будет указать более конкретно, например имя покупателя, то 
customerName = 'ivan';
Либо
customer_Name = 'ivan';

Через дефис не писать!

Можно писать вот так:

$customer_name

Либо

_customerName

Для того чтобы вычислить что-то локально и пойти дальше подойдут

temp temp1 etc

В таком случае можно оставить комментарий temp - временная переменная
Комментарии принято оставлять на английском языке

Ширина прямоугольника

rectWidth rectangularWidth rect_width rect_w

Узнавать в каком стиле принято писать в кампании и использовать этот стиль

________________________________________№3 Типы переменных_________________________________________________

Если я хочу вывести в консоль результат каких-либо операций, то */
console.log(4/6); //  в консоли увидим 0.(6)
/* Однако работать с переменными удобнее, так как изменив значение переменной не нужно будет менять 
каждое число отдельно, что ускоряет работу.
*/
// var x;
// x = 5 + 7;       не рекомендуется к использованию
// console.log(x);  в консоли увидим 12

// ------------------------------Объявление переменной и присваивание значения (var)
/* Переменную перед её использованием нужно объявить! (инициализировать)
Для этого в JS ввели такое понятие как "инициализация переменной"

Инициализация переменной - это команда которая объявляет переменную (а создай здесь вот эту переменную)
Пример:
var = x; - значит начиная с 281-й строки я хочу использовать переменную x и дальше я могу с ней работать

var x;             объявляю переменную х
x = 5 + 7;         внутрь х кладу какое-либо значение
console.log(x);    Когда обращаюсь к х я обращаюсь к этому значению - x = 5 + 7; в консоли увидим 12
*/
// Добавим еще одну переменную y
// если теперь вместо 7 поставить y то вместо 7 подставится 3, а в консоль выведется результат 5 + 3
// var x;
// var y;
// y = 3;
// x = 5 + y;         
// console.log(x);  в консоли видим 8

// в качестве значения переменной может быть не только число но еще и строка
x = 'Hello'; // - т.о. перезаписал значение переменной (обновил) что можно только с let и var
// то есть до 297 строки х был равен 8, но на 297 строке я выкинул это значение 8
// и записал в х значение Hello
// то есть переменная - как ящик, в неё можно что-то положить, а что-то выкинуть и положить что-то ещё
// иногда мы можем достать переменную произвести манипуляцию и положить обратно
console.log(x); // в консоли видим(вкв) Hello
// так же внутри переменной может быть true или false
// обновим значение переменной ещё раз
x = 6; // все предыдущие манипуляции с x выполняются но на 306 строке они полностью игнорируются 
// из x выкидывается всё и кладётся новое значение 6
console.log(x); // вкв 6
// обновим значение переменной ещё раз
x = x + 4; 
// выражение выше значит: всегда сначала вычисляется та часть которая находится справа от =
// до строки 310 x был равен 6 поэтому будет производиться вычисление 
// 6 + 4 = 10 и эта 10 кладётся внутрь x 
console.log(x); // вкв 10
// запись x = x + 4; эквивалентна записи x += 4;
x += 4;
console.log(x); // вкв - 14 потому что на строке 310 x был равен 10, 10 + 4 = 14

// в ES5 можно было выполнять такой манёвр даже после всего выше
var x; // объявляю новую переменную x взамен той х которая была
// это значило что с 10 строки x полностью становилась новой переменной
// при этом все предыдущие вычисления так же производятся
console.log(x);
// но так как этой переменной не присвоено никакое значение то вкв - undefined
// если я положу что-то в х то он будет равен этому значению, пример
x = 7;
console.log(x); // вкв 7
/* Запись var x;
       x = 7;  эквивалентна записи (Э) до var x = 7;
В старом стандарте ES5 мы могли создавать заново одну и ту же переменную сколько угодно раз
то есть запись
var x = 7;
var x = 8; с точки зрения ES5 - корректна вкв 8

-------------------------------Всплытие переменной (hoisting)

Более того имело место "всплытие переменной" hoisting
то есть можно было объявить переменную внизу а начать пользовать ей вверху
в результате чего переменная воспринимала операции выше и производила все указанные с ней манипуляции
Грубо говоря, программа находила строку var x; и переносился её вверх, то есть первоначальная запись

x = 6;
x = x + 4;
x += 4;
var x;
console.log(x);

JS-ом читалась как 

var x;
x = 6;
x = x + 4;
x += 4;
console.log(x); 

И в итоге обе записи в консоли имели бы одинаковое значение

Поэтому подход к переменной в ES6 был реорганизован

------------------------------ Типы переменных let и const (отличия)

1 в ES6 - отказались от ключевого слова var для того чтобы обозначить новые переменные
2 в ES6 - переменную объявляют (инициализируют) сокращением let
let имеет похожие свойства с var за некоторыми исключениями */
// let y;
// y = 12;
// console.log(y);  вкв 12
/*
Если мы продублируем это действие, то
let y;
y = 12;
console.log(y);
let y;
y = 13;
console.log(y); вкв - ошибка y - has already been declared

то есть с let - объявить переменную дважды уже не получится это вызывает ошибку

Отличие let от var и const

let от var отличается тем что при let переменную нельзя объявлять дважды
во вторых такое явление как "всплытие переменной" hoisting с let - вызывает ошибку
вкв is not defined
поэтому нельзя использовать переменную d ES6 не объявляя её
все остальные операции манипуляции можно производить как и с предыдущим var
(насколько знаю есть еще одно отличие в разнице действия области видимости переменной с var и let
у переменных объявленных с помощью var область видимости ограничена функцией 
а у переменных объявленных с помощью let - блоком)
let = y;
y = 13; э let y = 13;

Таким образом переменные объявляемые с помощью let должны быть объявлены в начале программы
в начале функции в начале цикла или if

второе серьёзное отличие let от var - область видимости */
// var y = 5;
// console.log(y);  вкв 5
//  добавим условный оператор
// if (1) {  если единица это правда всегда то будет выполняться console.log(y);
//     console.log(y); /вкв - 5
// }

/*То есть в ES5 переменная var y была видна в глобальной области видимости (вне блоков) 
и была доступна везде либо если мы ее объявили так же внутри функции var y = 5; она была видна везде
внутри функции(не блока)
Другой пример */
var y = 5;
 // добавим условный оператор
if (1) {  // если единица это правда всегда то будет выполняться console.log(y);
    var y = 7;
    console.log(y); // вкв - 7
}
console.log(y); // вкв - 7

/* То есть если переменная объявлена с помощью var то она будет видна как в блоке так и вне его пределов
и выполнятся будет по стандартному свойству наследования, какое значение ниже в коде, то и является
последним если из --

var y = 5;
if (1) {   
    var y = 7;   -- убрать ключевое слово var, и останется только y = 7; резльтат будет такой же
    console.log(y); вкв - 7
}
console.log(y); вкв - 7

---------------------------------- Замыкание 77

Если тоже самое написать с let */
let z = 5;
if (1) {   
    let z = 7; // но если здесь убрать let смотри ниже 77 (замыкание)
    console.log(z); // вкв 7
}
console.log(z); // вкв 5

/* то есть let имеет область видимости ограниченную блоком и такая переменная не существует 
вне блока внутри которого она объявлена

77 (Замыкание) - в этом случае оба console.log(z); выдадут 7 

Если внутри блока js не находит объявление переменной z и 
после этого выходит за пределы блока и ищет объявление переменной z с помощью ключевого слова вне блока,
если находит let z = 5; то js перезаписывает значение которое было в коде ниже, 
то есть z = 7; в let z = 7; и т.о. в обоих console.log(z); мы видим 7 если переменная
не была объявлена внутри блока с помощью ключевого слова let, - это и есть замыкание

---------------------------------- Далее опять раздел отличия let var const

а если переменная была объявлена внутри блока с помощью ключевого слова let, 
то оба console.log действуют в пределах своих областей видимости
первый в пределах своего блока
второй в пределах глобальной области видимости

если вместо z = 7; внутри блока указать var z = 7; вкв has already been declared
потому что область видимости var выйдет за пределы этого блока и встретится там с 
let z = 5; 
Поэтому если убрать какое-либо ключевое слово, то ошибки не будет и будет 2 значения 7
Если подставить var то будет ошибка в связи со столкновением областей переменных
А если и там и там подставить let то первый лог загрузит 7 а второй 5
таким образом каждая область видимости будет действовать в своих пределах

Область видимости let - блок любой степени вложенности
Область видимости var - функция(не блок)

Если объявить переменную let вне блоков она будет считаться глобальной переменной и будет видна
вне любых блоков, если объявить переменную let внутри блока она будет видна только внутри этого блока
и всем, вложнным внутрь этого блока, блокам.

Итак главное отличие let от var в том что области видимости let z = 7; заключены внутри блока 
в котором данный let z = 7; - объявлен, если let z = 7; не объявлен с помощью let.
а просто указано z = 7; то внутри блока js не находит объявление переменной z и 
после этого выходит за пределы блока и ищет объявление переменной z с помощью ключевого слова вне блока
если находит let z = 5; то js перезаписывает значение которое было в коде ниже, то есть z = 7;
в let z = 7; и таком образом в обоих console.log(z); мы видим 7 если переменная не была объявлена 
внутри блока с помощью ключевого слова let, а если переменная была объявлена внутри блока с помощью 
ключевого слова let, то оба console.log действуют в пределах своих областей видимости
первый в пределах своего блока
второй в пределах глобальной области видимости

Так же внутри ES6 стали использовать новый тип переменной - константу const

Константа const - это тип переменной при котором переменная не изменяет своего значения. */

const a = 9;
// a = 88; после const a = 9; - запрещено (в отличие от let) 
//     при константе переменная не изменяет своего значения
//     такая попытка в консоли выведет Assignment to constant variable at такой то строке
// a = a + 5; или a += 5; после const a = 9; 
//     вызовет ту же ошибку в консоли Assignment to constant variable at такой то строке
// const a = 10; после const a = 9; 
//     так же вызовет ошибку indentifier 'a' has already been declared
console.log(a); // вкв 9
// но мы можем использовать значение переменной объявленной с помощью const с другими переменными
// пример
let n = 3 + a;
console.log(n); // вкв - 12

// Часто константы объявляют большой буквой const A = 7; 
const A = 10;
/*Константа const не меняет своего значения, но const может изменять свойства
Если у вас есть массив или объект вы можете менять его свойства,
хотя массив и объект может оставаться константой */

// var - не используем, но понимаем как работает.

//____________________________________№4 Undefined & Undeclared_________________________________________
/*
Не объявленная & не идентифицированная переменная*/
let u = 5;
let p = 7;
console.log(u*p); // вкв 35
// Если мы введём переменную t которой у нас нет, то
// console.log(u*p*t); // вкв t is not defined э undeclared
// t не определено поскольку система не могла найти переменную с таким идентификатором
// комментируем консоль лог выше и объявляем переменную t
let t; // но не присваиваем ей значение
// в этом случае
console.log(u*p*t); // вкв NaN (Not a Number)
/*То есть попытка обратиться к переменной которая была объявлена, но ей не присвоено значение,
привела к тому что в консоли появилось значение Not a Number
u есть p есть t не определено, умножение на неопределённость дало NaN

Если напищем в консоль лог просто вывести t*/
console.log(t); // вкв undefined посколько в переменную t не положено значение
/*Если let t; законментировать и после этого вызвать console.log(t); 
консоль покажет t is not defined э undeclared
То есть ошибки происходят в принципе по логике одинаковые, но вызывают разные варианты ошибок
Выводы 
Если видим is not defined значит - переменная не была объявлена
Но если мы её (переменную) объявили (let = t;) 
Но не присвоили ей значение то она по умолчанию равна undefined  

Undefined - переменная в которую ничего не положили (пустая коробка) 
is not defined - переменная не объявлена

Если перед t убрать ключевое слово let, то в консоли увидим is not defined
то есть мы получаем ту же самую ошибку когда переменная не была объявлена

----------------------Use strict 
Строка "use strict" ставится в начале скрипта, она необходимо для того чтобы сказать браузеру
что мы жестко придерживаемся стандарта ECMA SCRIPT 6 и мы будем работать конкретно в нём
потому что современные стандарты позволяют идентифицировать такие вещи как необъявленные переменные 
с меньшими потерями. всё что делали в предыдущем разделе итак было по use strict, но если использовать
use strict с var, то всё будет точно так же :)
Если мы перед объявлением всех переменных добавим use strict то*/
"use strict"
var r = 2;
var f = 1;
var q;
console.log(q); // undefined просто q - is not defined, 
// is not defined э undeclared

//___________________________________№5 Hoisting (всплытие, поднятие переменной)__________________________________
/*Если мы выведем не существующую переменную в лог, то получим undefined,
Если мы выведем в лог переменную которая будет только объявлена, то получим is not defined

А если мы сначала вызовем ранее не объявленную переменную в лог, а потом её объявим
то в консоли увидим undefined, пример: */
//            ---|  
console.log(L);//|
var L; // ---|       лог undefined такой же если бы var L; было бы выше console.log(L);

/*Данное явление и называется Hoisting или всплытие, поднятие переменной 

Когда JS разбирает код и в каком-то блоке находит команды для работы с переменными типа
console.log(L); JS продолжает смотреть есть ли переменные в данном блоке (в том числе и ниже лога)
если переменные есть, то фактически происходит следующее
JS находит лог затем начинает искать объявление переменной и когда находит это объявление ниже в коде
начинает его поднимать выше лога в результате:

console.log(L);            var L;
        var L;      э      console.log(L);  
     
Hoisting - процесс в работе JS при котором, переносится
именно объявленная переменная вверх логического блока

Минус Hoisting 
Если используем значение которое мы вообще не использовали ранее 
в этом случае переменная вместо того чтобы выдать ошибку is not declared (undeclared)
выдаст ошибку undefined и программист будет думать что напутал с вычислениями ранее,
но используется переменную которой ещё нет в принципе потому что где-то ниже
переменная где-то была объявлена и использована.

поэтому сначала переменная объявляется и только потом с ней производятся какие-либо действия

Если мы присвоим L значение 5
*/
console.log(L);
var L = 5; // лог undefined процесс всплытия hoisting поднятия переменной 
// относится только лишь к объявлению переменной
//  и в этом случае наверх JS поднял только var L; а дальнейшую часть не прочёл
// поскольку она нарушает логику программы

// Если
//                                          ES5
console.log(b);                        
var b = 7;
console.log(b);
b = 5;
console.log(b); // лог undefined 7 5 

// в первом логе переменная хотя и была не объявлена из-за всплытия объявилась
// но ей значение не присвоилось и она равна undefined в логе
// во втором логе мы присвоили значение переменной 7 и b стала равна 7
// и в третьем логе присвоили значение переменной 5 и она стала равна 5

// то есть всплытие работает только лишь на объявление переменных (var b)
// всплытие работает внутри блока, если вы внутри функции объявляете переменные 
// они всплывут к началу функции, но присвоится значение им уже позже когда
// вы явно его присвоите b = 5;
// код выше относится к ES5

//                                          ES6

// let m = 99;
// console.log(m); // лог покажет 99
// теперь если мы укажем let m = 99; ниже console.log(m); то 
// let m = 99; в логе будет is not defined
// то есть всплытие в ES6 сразу вызывает ошибку 
// то есть в ES6 всплытие переменной не происходит это приводит к ошибке
/* в ES6 попытка применить всплытие в ECMASCRIPT 6 приводит к ошибке
в ES6 объявление переменных и соответственно заполнение происходит в том месте
где вы его сделали всплытие не происходит, то есть этот факт 
исключает ошибку 
когда после того как переменную мы используем а она undefined мы не можем сказать в ES5
мы ее где-то не правильно вычислили не присвоили значение или мы её не объявили
в эта ошибка была убрана поэтому 
Где объявили после этого и используйте */

//___________________________№6 Типы данных в JS Variables and Types_____________________________________________
/* в ES6 Типов данных ещё нет но в Angular 2 они есть
   в любом случае при выполнении операций JS присваивает переменной определённый тип
   и в зависимости от типа результат операции может значительно отличаться

-----------------------------Основные типы данных в JS
1 Число, числовой тип
*/
let aa = 8;
console.log(aa);
// Для того чтобы узнать тип данных существует специальная функция typeof
console.log(typeof aa); // лог number
let bb = 8.3;
console.log(typeof bb); // лог number
// Если заменить 8.3 на 8,3 то
// let bbb = 8,3;
// console.log(typeof bbb); // лог unexpected number
// потому что дроби в js пишутся через точку
// итак не важно дробь это или число тип данных всё равно number
// 8 - целое число
// 8.3 - число с плаващющей запятой (а почему с запятой если в js дроби с точкой)

// Следующий тип данных это строка
let cc = 'Helloy'; // так как это строка её нужно взять в кавычки
console.log(typeof cc); // лог string

let d;
let e;
console.log(typeof d*e); // Лог NaN not a number 
// NaN выводится когда одному из элементов выражения не присвоено значение
// NaN не является типом данных, это просто результат выполнения арифметической операции
// к элементам которые не являются числами

// Если 
console.log(typeof d); // лог undefined
// можно спорить является ли d типом данных или нет, но можно сказать что это специальное значение
// Специальный результат JS в том случае когда переменную мы объявили но не присвоили ей значение

// Ещё один тип данных - null
// Если я попытаюсь сослаться на пустой объект я должен взять указатель на этот объект
// Если указателя нет - мы получим null

let ff = true; // boolean значение принимает всего два вида true / false
console.log(typeof ff); // лог boolean
// если убрать в команде console.log(typeof ff); typeof то
console.log(ff); // лог true
// если мы обновим переменную на false то
ff = false; 
console.log(ff); // лог false, при этом тип данных не изменится и останется boolean
// изменится только значение с true на false

// Есть такое явление как массивы
let g = [2, 3, 4];
// Если мы попытаемся вывести тип данных массива, то
console.log(typeof g); // лог object
// то есть все массивы в js это - объект,
// соответственно над ним можно выполнять операции как над объектом

//________________________________№7 Базовые операции JS____________________________________________

//                        Базовые операции над типами данных в JS

// Допустим у нас есть несколько переменных
let aaaa = 5;
let bbbb = 2;
// выведем в консоль результаты операций 

// Сложение aaaa + bbbb
console.log(aaaa + bbbb); // лог 7
// в JS знак + используется как для сложения двух чисел так и для сложения двух строк (конкатенации)

// Вычитание aaaa - bbbb
console.log(aaaa - bbbb); // лог 3

// Умножение aaaa * bbbb
console.log(aaaa * bbbb); // лог 10

// Деление aaaa / bbbb
console.log(aaaa / bbbb); // Лог 2.5

// Остаток от деления remainder
console.log(aaaa % bbbb); // Лог 1
// То есть сколько раз можно использовать двойку внутри пятёрки
// 2 * 2 = 4; 5 - 4 = 1; 1 - remainder

/* Операнд – то, к чему применяется оператор.
Например, в умножении 5 * 2 есть два операнда: левый операнд равен 5, а правый операнд равен 2. 
Иногда их называют «аргументами» вместо «операндов». 

Знаки между 5 и 2 называются операторами ( + - * / )*/

// Если 
console.log(aaaa > bbbb); // то Лог True 
// данный оператора называется оператором сравнения
// он возвращает true если операция верна (а куда возвращает?)
// операторы сравнения могут быть > < 
console.log(aaaa < bbbb); // Лог false
// может быть >= 
console.log(aaaa >= bbbb); // Лог true
// <= 
console.log(aaaa <= bbbb); // Лог false

// в некоторых случаях нам нужно узнать Не равно, пишется !=
console.log(aaaa != bbbb); // Лог true

// проверка на равенство, а равно ли ==
console.log(aaaa == bbbb); // Лог false

// Итого проверка на равенство == проверка на неравенство !=
// Больше равно >= Меньше равно <=
// Один знак равно = означает Присваивание

// Со строками
let ccc = 'Helloy';
// что будет если умножить Helloy на aaaa
console.log(ccc*aaaa); // Лог NaN not a number
// То есть попытка умножить строку на число приведет к значению Not a number
// Потому что число и строка не могут быть умножены друг на друга

// Если поделим
console.log(ccc/aaaa); // Лог NaN

// Если вычтем
console.log(ccc-aaaa); // Лог NaN

// Так происходит потому что над строками не предполагается математических операций
// умножение деление вычитание, но над строками разрешена операция сложения
// Данная операция сложения применительно к строкам называется конкатенация

// Если сложим
console.log(ccc+aaaa); // Лог Helloy5
// Если поменяем местами слагаемые
console.log(aaaa+ccc); // Лог 5Helloy

// Если есть строка которая визуально выглядит как число
let dd = '8';
// Если выполним операцию сложение, то
console.log(dd+aaaa); // Лог 58 но в результате мы получаем не число 58 итоговый тип 58 - string
// при добавлении в команду атрибута typeof 5 - number 8 - 8
/* off course
console.log(typeof dd + aaaa); сработает как 
console.log((typeof dd) + aaaa);
Если я хочу узнать тип итоговой операции после dd + aaaa то 
console.log(typeof (dd + aaaa);*/
console.log(typeof (dd + aaaa)); // Лог string

/* чтобы такого не происходило нужно при сложении научиться перегонять
вот такого вида строки '8' в числа
затем чтобы когда мы вычитываем число из элемента input в html(поле ввода)
То Js получит доступ к этому элементу в виде строки
то есть если в поле ввода в html ввести 7, то 7 придёт ввиде строки
и это проблема так как мы не можем строки складывать чтобы в итоге получить число 

---------------------------Преобразование строк в числа Prompt(Незамедлительный)

Учимся получать числа в простом виде на практике не используем, но понимаем

Метод Prompt - выводит окно с кнопками ок и cancel, если нажать cancel всё закрывается и
ничего не происходит, если я нажимаю ок, то возвращается то что я ввёл внутри данного окна*/
//  let ee = prompt ('Enter a number', ''); 
//  console.log(ee); // лог всплывающее поле ввода с кнопками ок и отмена,
// где заголовок поля Enter a number, а пустое значение '' - поле ввода
// вводим 9 нажимаем ок, тогда в логе вижу 9
// то есть мы с помощью prompt организовали ввод чисел
// Если получить тип переменной ee, то
//  console.log(typeof ee); // лог string
// то есть введя в поле ввода число на выходе я получаю тип данных строка
// и теперь если понадобится вывести результат
// console.log(ee + 24); // лог если в этот момент во всплывающее поле ввода ввести 5, то
// в логе мы получим 524 а не 29 и соотв. тип данных у 524 будет string
// JS возвращает из всех подобных окон как input prompt etc - тип данных строка
// а для строк знак + обозначает конкатенацию которая и происходит

// поэтому всегда когда мы получаем что-либо из элемента ввода мы обязаны 
// преобразовать эти данные в соответствующий тип например число
// некоторые операции производят это автоматически, если поставить / или умножить
// а со строками таких операций в принципе нет то
// console.log(ee * 24); // лог 72, (в поле вводил 3)
// то есть значение 3 из поля ввода правильно было умножено на 24, 
// так же будет и с делением если вписать в поле ввода 48 в логе будет 2
// так же будет и с вычитанием если вписать в поле воода 25 в логе будет 1

// но если попытаться сделать то же самое со сложением то будет включаться механизм конкатенации

// -------------- Как преобразовать тип данных строка в число при конкатенации или сложении
/* Вариант 1 вводим +ee и проверяем*/
// console.log(ee + 24);
// +ee; // лог 324 при вводе 3, то есть всё равно остался тип данных - строка
// потому что результат был слеплен, попробуем написать +ee в операции
// console.log(+ee + 24); //лог 27 при вводе 3, РАБОТАЕТ!
// ПРИМЕЧАНИЕ этот метод работает и с 3.5 в отличие от parseInt
// но этот метод на работает если ввести в поле 3.5a в этом случае лог - NaN
// а в parseFloat - 27.5
// Итак 1 вариант преобразовать строку из поля ввода в число это написать в операции +varibale
// то есть поставить + перед той переменной которая выводит значение которое вводится в поле ввода
// это не всегда удобно поэтому существуют другие способы:

// Способ №2 Чётко преобразовать строку к числу, для этого сущ-ет след-щая операция
// parseInt(ee)
// console.log(parseInt(ee) + 24); // лог 25 при вводе 1 РАБОТАЕТ!
// parseInt это специальная конструкция, специальная функция которая получает 
// переменную ввиде строки и пытается её преобразовать в число
// в отличие от первого способа(прибавления +) parseInt будет работать даже на сложных числах т.е.
// 4а будет преобразовано к 4, 45ds будет преобразовано к 45
// но а2 уже не будет преобразовано и выведет соответственно Not a Number
// проверим введя в поле 3a лог 27 3-ку смогло считать

// проблема в том что parseInt не сможет считать 3.5, проверим
// в логе видим 27 то есть JS дочитал до 3 а .5 отбросил
// потому что . тоже считается строкой и значение отбрасывается

// Способ №3 Если необходимо преобразовать десятичное число то существует оператор parseFLoat
// который позволяет считывать дроби
// console.log(parseFloat(ee) + 24); // лог 27.6 РАБОТАЕТ и при десятичном числе и одновременно 
// при 3.6a лог так же будет 27.6

// как же понять что ввёл пользователь какой именно тип данных
// для этого в JS существует конструкция isNaN
// console.log( isNaN(3)); // лог true
// NaN это Not a number не число
// is значит если hello не число то вывести в консоль true
// то есть если мы введём в команду число то в логе увидим false независимо от того что введем в поле
// то есть isNaN это функция которая проверяет что введенное значение не является числом
// тогда она даёт true

//_________________________________№8 Условные операторы____________________________________________

/*Операторы ветвления в JS
Операторы ветвления нужны если необходимо выполнить какое- либо действие по определенному условию
Существуют два основных направления операторов ветвления

Первый оператор - if */
// let zz = 1; // если zz будет равно 9 я хочу выводить допустим всплывающее окнок alert
// // с каким-либо текстом, если нет - не выводить
// // оператор if имеет вид 
// /* if (условие верно) то тогда выполнять действие заключённое в фигурных скобках {
//     таких действий может быть несколько, если действие одно можно обойтись без фигурных {}
// } 

// Пример ниже:
// --------I if Работает простро реагированием на какое-то значение либо не реагируем вообще
// Если а, если я хочу проверить на равенство я должен поставить == (а равно ли?)
// if (a == 9) {}; - если переменная а равна 9, то {действие}*/
// if (zz == 9) {
//     alert('Yes'); // лог вижу всплывающее окно yes //// когда только одно действие можно писть не через {}
// }
// если поменяем zz = 1 то alert не выскочит, то есть if работает как переключатель
// а именно если условие верно мы выполняем то что в скобочках
// оператор if позволяет просто проверить условие и либо выполнить действие либо 
// не делать ничего
// будут встречаться два варианта событий,
// Если условие верно и если условие не верно, то есть как реагировать на поступившие условия
// Для этого существует следующий синтаксис
// if (условие верно) то тогда выполнять действие заключённое в фигурных скобках {
//    таких действий может быть несколько, если действие одно можно обойтись без фигурных {}
// }
 
/*------II if else обязательно реагирует либо одним либо другим
Но если наша задача представляет из себя развилку (вилку) где в любом случае должно 
что- то сработать пишется оператор else и далее просто пишется действие {действия}
которые будут выполнены если условия не верны*/
// let xx = 5;
// // если xx = 5 то alert ('xx = 5');
// if (xx == 5) {
//     alert ('xx = 5');  // когда только одно действие можно писть не через {}
// } 
// // в противном случае else выведи окно алерт b не равно 5
// else {
//     alert ('xx != 5'); // когда только одно действие можно писть не через {}
// }
/* Программа работает сл образом
Присваиваем переменной xx значение 5
Если условие xx = 5 верно, то будет выполняться действие alert ('xx = 5');
то есть будет выполняться только часть программы if а else выполняться не будет
Если условие xx = 5 не верно, то будет выполняться действие alert ('xx != 5');
то есть будет выполняться только часть программы else а if выполняться не будет

Таким образом если задача поддаётся решению (в виде развилки) либо то либо то жёстко задано 
Когда мы пишем оператор if else в любом случае какой-то из них будет выполнено третьего не дано

-------III Сравнение двух чисел

Два числа могут быть 
1-е > 2- го
2-e > 1-го
1-e === 2-му     */
let vv = 4;
let nn = 4;
/* в завивимости от того какое число больше либо меньше либо равно я должен отреагировать
для этого существует расширенный список if else 
Так как одно действие пишем в одну строчку без {} но если несколько команд то {} обязательны */
// if (vv>nn) alert('vv больше'); else alert('nn больше');
/* если после этого написать else (в противном случае, то есть в любом если условие не выполнилось)
в данном примере условие не совсем верно сформулировано, если написать значение переменной vv = 4
то выполнится часть программы после else потому что else выполняется в любом случае
из этого нужно выходить более расширенным синтаксисом if else если задача предусматривает вилку не
двух путей а 3-х 4-х 8-ми мы можем воспользоваться синтаксисом else if который позволяет 
описать значительно больше условий в одном блоке

if (vv>nn) то else if(nn>vv) alert('nn больше'); и третий вариант  else alert('числа равны') */
if (vv>nn) alert('vv больше'); else if (nn>vv) alert('nn больше'); else alert('числа равны');
/* РАБОТАЕТ!!! 
else if может быть несколько 
if (vv>nn) alert('vv больше'); 
else if (nn>vv) alert('nn больше'); 
else if (nn>vv) alert('nn больше'); 
else if (nn>vv) alert('nn больше'); 
else if (nn>vv) alert('nn больше'); 
else alert('числа равны');

Если мы дошли до этого условия соответственно осуществляем выход из оператора else if 
Когда мы пишем этот оператор в любов случае что-то из этого блока
if else if else - обязательно сработает

ЕСЛИ ЕСТЬ ELSE ЗНАЧИТ ЧТО-ТО ОБЯЗАТЕЛЬНО СРАБОТАЕТ
Даже если все предыдущие условия не верны выполнится последний else
Но можно обходиться и без последнего else в этом случае если ни одно из условий не будет
выполнено в конце просто ничего не сработает, и это не критично поскольку ничего делаться не будет

-------- IV Тернарный оператор

Тернарный оператор это упрощённая конструкция if else 
Тернарный оператор позволяет нам записать код ниже в другом виде

let xx = 5;

if (xx == 5) {
        alert ('xx = 5'); 
} 
else {
        alert ('xx != 5');
}

Пусть у нас будет такая конструкция мне нужно проверить какое-либо условие
Если оно верно выполнить его, если оно не верно выполнить что-то другое*/
let xx = 15;
// условие ? то yes     : else no    ;
xx == 15 ? alert('yes') : alert('no');
// условие? команда при положительном результате выполнения условия : к п отриц вып условия ;
/*Только в том случае если внутри if всего лишь одна команда или одно действие (либо то либо это)
и есть конструкция if else то мы можем воспользоваться тернарным оператором

условие в тернарном операторе берется в скобки затем знак вопроса
всё что до вопроса считается условием, часть до двоеточего выполнится если условие верно
после двоеточего если условие ошибочно

Ограничение использования тернарного оператора, тернарный оператор ограничен в одном случае, в том
если у вас несколько команд то внутрь тернарного оператора их не поместить это будет не работающая
конструкция */















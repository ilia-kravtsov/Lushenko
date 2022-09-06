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
*/

console.log(a);

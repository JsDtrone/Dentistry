<!-- Через 10 секунд после появления сообщения об отправке или ошибке — отправляемся на сайт Кода :) -->
 <meta http-equiv='refresh' content='2; url=https://luvidenta.ru/'>
<meta charset="UTF-8" />
<!-- Начался блок PHP -->
<?php
// Получаем значения переменных из пришедших данных
$name = !empty($_POST['name'])?$_POST['name']:false;
$phone = !empty($_POST['phone'])?$_POST['phone']:false;

// Формируем сообщение для отправки, в нём мы соберём всё, что ввели в форме
$mes = "Имя: $name \nТелефон: $phone";
// Пытаемся отправить письмо по заданному адресу
// Если нужно, чтобы письма всё время уходили на ваш адрес — замените первую переменную $phone на свой адрес электронной почты
$adminmail = "a.d.nagornyy9@mail.ru, denta-vita.ru@yandex.ru";
$postmail = "zayavky@luvidenta.ru";
if($name and $phone){
$send = mail($adminmail,  "Заявка с сайта", $mes, "Content-type:text/plain; charset = UTF-8\r\nFrom:$postmail");

}else {
  echo '<html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="mail.css" />
      <style type="text/css">
        * {
          box-sizing: border-box;
          padding: 0px !important;
          margin: 0px !important;
          overflow: hidden;
        }
        .resp {
          padding: 0px !important;
  
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100svw !important;
          height: 100svh !important;
        }
        .img-send {
          min-width: 85svw;
          max-width: 90svw;
        }
        @media (min-width: 900px) {
          .img-send {
            min-width: 25svw;
            max-width: 35svw;
          }
        }
      </style>
    </head>
  
    <body>
      <div class="resp">
        <div class="bg-gray-200">
          <img class="img-send" src="https://luvidenta.ru/img/nosend.webp" />
        </div>
      </div>
    </body>
  </html>';
}
if ($send == 'true' and $name and $phone) {echo '<html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="mail.css" />
      <style type="text/css">
        * {
          box-sizing: border-box;
          padding: 0px !important;
          margin: 0px !important;
          overflow: hidden;
        }
        .resp {
          padding: 0px !important;
  
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100svw !important;
          height: 100svh !important;
        }
        .img-send {
          min-width: 85svw;
          max-width: 90svw;
        }
        @media (min-width: 900px) {
          .img-send {
            min-width: 25svw;
            max-width: 35svw;
          }
        }
      </style>
    </head>
  
    <body>
      <div class="resp">
        <div class="bg-gray-200">
          <img class="img-send" src="https://luvidenta.ru/img/send.webp" />
        </div>
      </div>
    </body>
  </html>
    ';}
// Если письмо не ушло — выводим сообщение об ошибке
else {echo `<html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Play:wght@700&display=swap"
        rel="stylesheet"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="mail.css" />
      <style type="text/css">
        * {
          box-sizing: border-box;
          padding: 0px !important;
          margin: 0px !important;
          overflow: hidden;
        }
        .resp {
          padding: 0px !important;
  
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100svw !important;
          height: 100svh !important;
        }
        .img-send {
          min-width: 85svw;
          max-width: 90svw;
        }
        @media (min-width: 900px) {
          .img-send {
            min-width: 25svw;
            max-width: 35svw;
          }
        }
      </style>
    </head>
  
    <body>
      <div class="resp">
        <div class="bg-gray-200">
          <img class="img-send" src="https://luvidenta.ru/img/nosend.webp" />
        </div>
      </div>
    </body>
  </html>`;}
?>

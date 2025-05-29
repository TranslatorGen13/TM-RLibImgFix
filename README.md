## ! Теперь картинки могут отображаться без применения скрипта !
![image](https://github.com/user-attachments/assets/91c515cf-7d03-465f-823f-359ae8c51e67)
# Скрипт для исправления некоторых ошибок сайтов Lib-а 
## Функции:
 - Исправление проблемы загрузки картинок в главах на ranobelib (novelslib)
	 - Первопричина устранена, функция сохранена
 - Ссылки на ranobelib в закреплённых комментариях не ведут на ranobelib, благодаря чему вы продолжите чтение на том же сайте
 - Исправлено отображение панели переключения глав над комментариями в ranobelib: теперь она не находится поверх верхнего и контекстного меню
 - Удаление комментариев-дубликатов: теперь встретить доппельгангера сложнее
## Установка
1. Установите [Tampermonkey](https://www.tampermonkey.net/index.php) (магазины расширений [Chrome](https://chromewebstore.google.com/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/), [Firefox Mobile](https://addons.mozilla.org/ru/android/addon/tampermonkey/), [Opera и Яндекс Браузер](https://addons.opera.com/en/extensions/details/tampermonkey-beta/), [Edge](https://microsoftedge.microsoft.com/addons/detail/iikmkjmpaadaobahmlepeloendndfphd) (для мобильной версии Edge следует перейти в `Расширения > Tampermonkey > Получить` ) )
2. Нажмите на иконку расширения Tampermonkey или дождитесь открытия сайта `www.tampermonkey.net`
3. [Установить скрипт](https://raw.githubusercontent.com/TranslatorGen13/TM-RLibImgFix/refs/heads/main/TM-RLibImgFix.user.js) – должно открыться окно установки скрипта в Tampermonkey, а не загрузка файла на компьютер. Если окно не открывается, выполните пункт 2.
4. Если вы используете десктопный браузер на движке [Chrome](https://www.tampermonkey.net/faq.php#Q209) (например Яндекс Браузер, Opera, Eagle), потребуется включить **режим разработчика** в меню расширений. Для этого вставьте в адресную строку `chrome://extensions/` и переключите тумблер **«Режим разработчика»** (в правом верхнем углу или в левом нижнем для Edge).
## Своместимость:
Скрипт протестировано в следующих браузерах:

| Статус | Браузер        | Платформа тестирования | Необходимо включить режим разработчика для работы |
| ----- | --------------- | ---------------------- | ------------------------------------------------- |
| ⠀✅  | Google Chrome   | Windows                |                     Да                            |
| ⠀✅  | Opera           | Windows                |                     Да                            |
| ⠀✅  | Яндекс Браузер  | Windows                |                     Да                            |
| ⠀✅  | MS Edge         | Windows, Android       |               На компьютере Да                    |
| ⠀✅  | Firefox         | Windows, Android       |                     Нет                           | 

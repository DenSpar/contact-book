15.09.20
1) git init
2) сделал компонент выбора набора данных ChooseListSize из двух кнопок
3) написал компонент для таблицы

16.09.20
1) сделал заполнение state по get-запросу
2) настроил абсолютные пути
3) отрисовал пагинацию, пока кнопки неактивны. Отображается 10 контактов, количество страниц зависит от количества контактов
4) закончил пагинацию
5) сделал fullInfo component, но заданием не предусмотренно кейсов при которых компонент должен исчезать

17.09.20
1) переделал fullInfo, теперь компонент скрывается при смене страницы или перезагрузке списка контактов. Также поставил пагинацию над таблицей, чтобы "не прыгала вниз" при открытие fullInfo
2) сделал сортировку по клику по столбцу таблицы. По умолчанию контакты будут сортироваться по id по возрастанию. При смене сортировки блок fullInfo скрывается, пагинатор переходит на стр 1
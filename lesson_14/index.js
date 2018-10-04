// В репозитории создать папку lesson_14, В ней файлы index.html 
// с подключенным файлом index.js, В нем нужно написать:
// - В index.html внутри body, создать кнопку с тегом button и 
// текстом “Удалить”.
// - Функцию “init“ которая принимает два аргумента - массив объектов 
// такой структуры:
// { className: 'class', attributes: { 'data-name': 'Anatoliy' }, content: 'Some Text' },
// и число n.
// -Функция должна создать элемент ul внутри body, и для каждого элемента
// входного массива, необходимо создать n элементов li внутри ul, задав
// им класс из obj.className, атрибуты из obj.attributes где ключи - 
// названия атрибутов, значения ключей - значения атрибутов, и 
// внутренний контент элементов li взять из obj.content.
// Функцию “listen“ которая начнет слушать событие нажатия на кнопку 
// “Удалить”, и по этому событию удалять созданный список ul,
// и возвращать true в случае успеха, и false, если списка ul нет.


'use strict'
let parentElem = document.body;
let btn = document.createElement('button');
let list = document.createElement('ul');
btn.innerText = 'Удалить';
parentElem.append(btn);
parentElem.append(list);

function init (array, n) {

  for(let i = 0; i < array.length; i += 1) {
    let nameArr = [];
    nameArr = Object.keys(array[i].attributes);

    for(let j = 0; j < n; j += 1) {
      let item = document.createElement('li');
      item.className = (array[i].className);

      for(let k = 0; k < nameArr.length; k += 1) {
        let nameAttr = nameArr[k];
        let valueAttr = array[i].attributes[nameArr[k]];
        item.setAttribute(nameAttr, valueAttr);
        item.innerText = arr[i].content;
      }
      list.appendChild(item.cloneNode(true));
    }
  }
  return;
} 

function listen () {
  let exist = parentElem.contains(list);
  if(exist) {
    btn.addEventListener ('click', () => parentElem.removeChild(list));
    return true;
  } else {
    return false;
  }
}

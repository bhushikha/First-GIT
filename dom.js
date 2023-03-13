console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[0]);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);
console.log(document.getElementById('header-title'));
var headerTitle=document.getElementById('header-title');
console.log(headerTitle)
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].style.backgroundColor='green';
items.style.fontWeight='bold';
var li= document.getElementsByTagName('li');
console.log(li);
li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='green';
var items= document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent='Hello 2';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='red';
var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor='green';
var thirdtem=document.querySelector('.list-group-item:nth-child(3)');
secondItem.style.display='none';
document.querySelectorAll('li')[1].style.color = 'green';
const oddElements = document.querySelectorAll('li:nth-child(odd)');
for (let i = 0; i < oddElements.length; i++) {
 oddElements[i].style.backgroundColor = 'green';
}
var itemList= document.querySelector('#items');
//parentelement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';
//lastChild
console.log(itemList.lastChild);
//firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';
//firstChild
console.log(itemList.firstChild);
//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color= 'green';
//createElement
var newDiv= document.createElement('div');
newDiv.className='Hello';
newDiv.id='Hello1';
//setAttribute
newDiv.setAttribute('title','Hello div');
//create text node
newDiv.createTextNode('Hello World');
//append child
newDiv.appendChild(newDivText);

console.log(newDiv);

<h1>Hello world Item Lister <span style="display:none">123</span></h1>;
<li class="list-group-item">Hello world Item 1</li>;

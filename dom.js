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

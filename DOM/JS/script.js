console.log(document);
console.log(document.body);
console.log('All of the elements of this particular tag in the document:',document.getElementsByTagName('p'));
console.log('Only a specific element of this id:',document.getElementById('first-paragraph'));
var firstParagraph=document.getElementById('first-paragraph');
firstParagraph.style.color='green';
firstParagraph.style.fontSize='30px';
var authors=document.getElementsByClassName('author');
for(var i=0;authors.length;i++){
    var element=authors[i];
    console.log(element.innerHTML);
    element.innerHTML='Lekhok-'+(i+1);
    element.style.backgroundColor='blue';
    element.style.margin='5px';
    element.style.color='white';
    element.style.textAlign='center';
}
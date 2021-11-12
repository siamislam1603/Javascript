console.log(document);
console.log(document.body);
console.log('All of the elements of this particular tag in the document:',document.getElementsByTagName('p'));
console.log('Only a specific element of this id:',document.getElementById('first-paragraph'));
var firstParagraph=document.getElementById('first-paragraph');
firstParagraph.style.color='green';
firstParagraph.style.fontSize='30px';
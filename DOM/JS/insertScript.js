// ADD a new paragraph in the first article
const firstArticle=document.getElementById('first-article');
const newParagraph=document.createElement('p');
newParagraph.innerHTML="N.B: That's a new paragraph created in JS using createElement and appended as child in this specific article.";
newParagraph.style.color='blue';
firstArticle.appendChild(newParagraph);

// add a new list in the list of HTML
const giftList=document.getElementById('gift-list');
newList=document.createElement('li');
newList.innerHTML='Appended list using JS';
newList.style.color='blue';
giftList.appendChild(newList);

console.log('Child Nodes list:',giftList.childNodes);
console.log('Parent Node:',giftList.parentNode);
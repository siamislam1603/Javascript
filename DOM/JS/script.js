console.log(document);
console.log(document.body);

// Multiple elements of this tag name can be accessed
console.log('All of the elements of this particular tag in the document:',document.getElementsByTagName('p'));

// Only a specific element can be accssed by id
console.log('Only a specific element of this id:',document.getElementById('first-paragraph'));
var firstParagraph=document.getElementById('first-paragraph');
firstParagraph.style.color='green';
firstParagraph.style.fontSize='30px';

// Multiple elements of  this class name can be accessed
var authors=document.getElementsByClassName('author');
for(var i=0;i<authors.length;i++){
    var element=authors[i];
    console.log(element.innerHTML);
    element.innerHTML='Lekhok-'+(i+1);
    element.style.backgroundColor='blue';
    element.style.margin='5px';
    element.style.color='white';
    element.style.textAlign='center';
}

// Multiple elements of this specific selector can be accessed
var specialArticles=document.querySelectorAll('.special-article h3');
for(var i=0;i<specialArticles.length;i++){
    var element=specialArticles[i];
    console.log(element.innerHTML);
    element.innerHTML='Special Article-'+(i+1);
    element.style.backgroundColor='red';
    element.style.textAlign='center';
    element.style.color='white';
    // this will set the title attribute of element. If we hover to this article text, it'll show this title.
    element.setAttribute('title','One of the best authors');
}

// 1st element of this specific selector can be accessed
var specialArticle=document.querySelector('.special-article h3');
specialArticle.style.backgroundColor='purple';
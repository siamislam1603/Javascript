function handleClick1(){
    alert('Mouse entered on Click me-1');
}
document.getElementById('btn-2').addEventListener('click',function(){
    document.getElementById('btn-2').style.backgroundColor='red';
});
thirdBtn=document.getElementById('btn-3');
thirdBtn.onclick=function(){
    document.body.style.backgroundColor='lightblue';
}
function handleClick4(){
    document.body.style.color='red';
}
fourthBtn=document.getElementById('btn-4');
fourthBtn.onmouseout=handleClick4;
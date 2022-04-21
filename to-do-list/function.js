function register()
{
//alert('hi');
var name=document.getElementById('name').value;
var pwd=document.getElementById('pwd').value;
var mail=document.getElementById('mail').value;
let value={
"values":[]
}
value.values.push(
{"name":name,
"pwd":pwd,
"mail":mail,
"to-do-list":[]
});
localStorage.setItem("value",JSON.stringify(value));
/*if(name.value.length==0)
{
alert('please fill name');
}*/
//else{
/*localStorage.setItem('name',name.value);
localStorage.setItem('pwd',pwd.value);
localStorage.setItem('mail',mail.value);*/
alert('your account has been created');
//}
return false;
}

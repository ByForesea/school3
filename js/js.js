mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "50px";
    document.getElementById("logo").style.width = "8%";
    mybutton.style.display = "block";
  } else {
    document.getElementById("navbar").style.height = "70px";
    document.getElementById("logo").style.width = "11%";
    mybutton.style.display = "none";
  }

  if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650) {
    sidebar.style.position = "absolute";
  } else {
    sidebar.style.position = "fixed";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




//宣告預設表單內容為空 （你想要的話也可以加東西）
var initSubject='',initBody='';
 
//按下傳送按鈕後執行
function submitHandler(){
    var to = "hsiuwennn5@gmail.com";//寫死的傳送對象 就是公司的信箱 不會顯示在網頁上
    var name = nameText.value;//讀取ID為 nameTextuser 物件中的值
    var email = emailText.value;
    var tel = telText.value;
    var subject = subText.value;
//把user填的資料都塞到 mail body 中
    var body = ""+bodyText.value+'%0A%0A%0A';//%0A是換行 換了三行
        body += "From："+nameText.value+'%0A';
        body += "Email："+emailText.value+'%0A';
        body += "Tel："+telText.value;
//傳送的主要程式碼
    mailTo.href="mailto:"+to+"?subject="+subject+"&body="+body;
    mailTo.click();
}
//在body onload
function init(){
    subText.value=initSubject;
    toText.value=initTo;
    bodyText.value=initBody;
}
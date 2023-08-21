function kiem_tra(){
    var sdt = document.getElementById("sdt");
    if(sdt.value.length == 0 ){
      alert("Vui lòng nhập số điện thoại !");
      return false;
      }
  if(isNaN(sdt.value)){
    alert("Vui lòng nhập số !");
    return false;
  }
    var dn = document.getElementById("dn");
  if(dn.value.length == 0){
  alert("Vui lòng nhập tên đăng nhập !");
  return false;
   }

   var pw = document.getElementById("pw");
   if(pw.value.length == 0){
   alert("Vui lòng tạo mật khẩu !");
   return false;
    }

    var date = document.getElementById("date");
    if(date.value.length == 0){
    alert("Vui lòng nhập ngày sinh !");
    return false;
     }

     alert("Đăng ký thành công !");
  return true;
}



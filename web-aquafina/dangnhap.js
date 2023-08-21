function kiem_tra(){
    var sdt = document.getElementById("sdt");
    if(sdt.value.length == 0){
    alert("Vui lòng nhập tên đăng nhập !");
    return false;
    }

    var loai = document.getElementById("pw");
  if(loai.value.length == 0){
  alert("Vui lòng nhập password !");
  return false;
   }

 alert("Đăng nhập thành công !");
  return true;
}
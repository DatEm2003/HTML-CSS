 const listImages = [
    "/assets/img/chicago.jpg",
    "/assets/img/ny.jpg",
    "/assets/img/la.jpg"
 ];

 let index = 0;
 function slider(){
    if(index == listImages.length - 1){
        index = 0;
    }else{
        index++;
    }
    document.querySelector('#image').src = listImages[index];
 }

 setInterval(slider, 2000);
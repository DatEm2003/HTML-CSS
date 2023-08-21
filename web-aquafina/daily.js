var vLeft = document.getElementById("iconL");
function prev(){
    var myImg = document.getElementById("diving");
    var child = myImg.children[0];
    myImg.removeChild(child);
    myImg.appendChild(child);

}
function next(){
    var myImg = document.getElementById("diving");
    var child = myImg.children[0];
    myImg.removeChild(child);
    myImg.appendChild(child);
}
function showImg(vSrc){
    var vBigImg = document.getElementById("bigImg");

    vBigImg.innerHTML = "<img src=' "+vSrc+ "'>";
    vBigImg.style.display = "block";
    document.getElementById("diving".style.opacity="0.5");
}
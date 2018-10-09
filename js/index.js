var contImgHeight = function(){
    var a = document.getElementById('cont-img-s1').offsetHeight
    var imgHeight = document.getElementById('cont-img-s2').style.height = a + 'px';    
    console.log(imgHeight);
    //imgHeight.style.height = dHeight;
}
//contImgHeight()
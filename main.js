setInterval(changeimage,1000);
a=['1.png','2.jpg','3.jpg','4.jpg','5.jpg'];
function changeimage()
{
    var n=Math.floor(Math.random()* a.length);
    document.getElementById('imagecon').src=a[n];
}
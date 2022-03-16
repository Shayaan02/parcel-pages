const img = document.createElement('img');
document.body.append(img);
// img.src ='./img/drake.jpg';

const imgUrl = new URL('./img/drake.jpg', import.meta.url);

console.log(imgUrl);
img.src = imgUrl.href;
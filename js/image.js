const smallImages = document.getElementsByClassName("slide01");//Коллекция елементов у которых есть имя класса Slide
smallImages[0].onclick = function (){slideShow(0)};
smallImages[1].onclick = function (){slideShow(1)};
smallImages[2].onclick = function (){slideShow(2)};
smallImages[3].onclick = function (){slideShow(3)};
smallImages[4].onclick = function (){slideShow(4)};
smallImages[5].onclick = function (){slideShow(5)};
smallImages[6].onclick = function (){slideShow(6)};
smallImages[7].onclick = function (){slideShow(7)};
function slideShow(n){
	//Просмотр изображений в большом размере
	const smallImages = document.getElementsByClassName("slide01");
	let bigImg = document.querySelector(".slider img");//Первый в документе елемент , который соответствует указанному в css селектору
	let tmp = bigImg.src;
	bigImg.src = smallImages[n].src;
	smallImages[n].src = tmp;
	
}
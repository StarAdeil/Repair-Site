
/*
let num = 1992;
let one = num%10;
let two = ((num%100)-one)/10;
let three = ((num%1000)-(one+two*10))/100;
let four = (((num-(three*100))-(two*10))-one)/1000;
let sum = one+two+three+four;
let oneone = sum%10;
let twotwo = (sum-oneone)/10;
alert(oneone+twotwo);//257
*/
/*
let num = 1992;
let one = num%100;
let two = (num-one)/100;
let three = two%10;
let four = (two-three)/10;
let five = one%10;
let six = (one-five)/10;
let sum = three+four+five+six;
let seven = sum%10;
let etch = (sum-seven)/10;
alert(seven+etch);//243
*/

let roomElem = document.area.elements;
console.log(roomElem.length);
roomElem[10].onclick = roomArea;//Имя функции в JS представляет собой текстовою строку которая содержит ее функциональное определение
console.log(roomArea);
function roomArea(){
//Рсчет параметров жилой комнаты 
//form input
	let roomElem = document.area.elements;
	let widthRoom = roomElem[1].value;
	let lengthRoom = roomElem[2].value;
	let heightRoom = roomElem[3].value;
	let doorWidth = roomElem[5].value;
	let doorHeight = roomElem[6].value;
	let windowWidth = roomElem[8].value;
	let windowHeight = roomElem[9].value;
//AREA
	//WINDOW AREA
	let windowArea = rectArea(windowWidth/100,windowHeight/100);
	//DOOR AREA
	let doorArea = rectArea(doorWidth/100,doorHeight/100);
	//WALL AREA
	let wallArea = widthRoom*heightRoom;
	//ALL WALL AREA
	let allRoomArea = rectArea(widthRoom*2+lengthRoom*2,heightRoom);
	//FLOOR AREA
	let floorArea = rectArea(widthRoom,lengthRoom);
//PERIMETER 
	//PERIMETER WALL
	let perimeterWall = perimetr( widthRoom,heightRoom);
	//PERIMETER room
	let perimeterAllWall =  perimetr (widthRoom,lengthRoom);
	//PERIMETER FLOOR
	let perimeterFloor=perimetr(widthRoom,lengthRoom);
//RESULT HTML ID	
	let windowResult = document.getElementById("windowArea");
	let doorResult = document.getElementById("doorArea");
	let roomAreaResult = document.getElementById("wallArea");
	let cleanRoomAreaResult = document.getElementById("cleanWallArea");
	let roomPerimeter = document.getElementById("perimeter");
// INNER HTML 	
	windowResult.innerHTML =
	" Высота окна: "+windowHeight+"см| Ширина окна: "+windowWidth+"см| Площадь окна: "+	rectArea(windowWidth/100,windowHeight/100)+"м/кв";
	doorResult.innerHTML = " Высота двери: "+doorHeight+"cм| Ширина двери: "+doorWidth+"см| Площадь двери: "+doorArea+"м/кв";
	roomAreaResult.innerHTML =" Ширина комнаты: "+widthRoom+"м| Длина комнаты: "+lengthRoom+"м| Высота комнаты: "+heightRoom+"м| Площадь одной стены:"+wallArea+"м/кв| Площадь комнаты: "+allRoomArea+"м/кв|"+" Площадь пола: "+floorArea;;
	cleanRoomAreaResult.innerHTML = "Площадь стен: "+(allRoomArea-(doorArea+windowArea));
	roomPerimeter.innerHTML ="Периметр одной стены: "+perimeterWall+"| Периметр всех стен: "+perimeterAllWall+"| Периметр пола(потолка): "+perimeterFloor;
	
}

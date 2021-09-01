/*
let num = 1992;
let one = num%10;
let two = ((num%100)-one)/10;
let three = ((num%1000)-(one+two*10))/100;
let four = (((num-(three*100))-(two*10))-one)/1000;
let sum = one+two+three+four;
let oneone = sum%10;
let twotwo = (sum-oneone)/10;
let sumsum = oneone+twotwo;
alert(sumsum);
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
alert(seven+etch);
*/

function roomArea(){
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
	let windowArea = (windowWidth/100)*(windowHeight/100);
	//DOOR AREA
	let doorArea = (doorWidth/100)*(doorHeight/100);
	//WALL AREA
	let wallArea = widthRoom*heightRoom;
	//ALL WALL AREA
	let allRoomArea = (widthRoom*2+lengthRoom*2)*heightRoom;
	//FLOOR AREA
	let floorArea = widthRoom*lengthRoom;
//PERIMETER 
	//PERIMETER WALL
	let perimeterWall = widthRoom*2+heightRoom*2;
	//PERIMETER ALL WALL
	let perimeterAllWall =  (widthRoom*4+heightRoom*4)+(lengthRoom*4+heightRoom*4);
	//PERIMETER FLOOR
	let perimeterFloor=widthRoom*2+lengthRoom*2;
//RESULT HTML ID	
	let windowResult = document.getElementById("windowArea");
	let doorResult = document.getElementById("doorArea");
	let roomAreaResult = document.getElementById("wallArea");
	let cleanRoomAreaResult = document.getElementById("cleanWallArea");
	let roomPerimeter = document.getElementById("perimeter");
// INNER HTML 	
	windowResult.innerHTML =" Высота окна: "+windowHeight+"см| Ширина окна: "+windowWidth+"см| Площадь окна: "+windowArea+"м/кв";
	doorResult.innerHTML = " Высота двери: "+doorHeight+"cм| Ширина двери: "+doorWidth+"см| Площадь двери: "+doorArea+"м/кв";
	roomAreaResult.innerHTML =" Ширина комнаты: "+widthRoom+"м| Длина комнаты: "+lengthRoom+"м| Высота комнаты: "+heightRoom+"м| Площадь одной стены:"+wallArea+"м/кв| Площадь комнаты: "+allRoomArea+"м/кв|"+" Площадь пола: "+floorArea;;
	cleanRoomAreaResult.innerHTML = "Площадь стен: "+(allRoomArea-(doorArea+windowArea));
	roomPerimeter.innerHTML ="Периметр одной стены: "+perimeterWall+"| Периметр всех стен: "+perimeterAllWall+"| Периметр пола(потолка): "+perimeterFloor;
	
}

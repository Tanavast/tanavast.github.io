function Field(field) {
	// размер стороны игрового поля в px
	this.fieldSide	= 330,
	// размер палубы корабля в px
	this.shipSide	= 33,
	// массив с данными кораблей
	this.shipsData	= [
		'',
		[4, 'fourdeck'],
		[3, 'tripledeck'],
		[2, 'doubledeck'],
		[1, 'singledeck']
	],
	// объект игрового поля, полученный в качестве аргумента
	this.field		= field;
	// координаты всех четырёх сторон рамки игрового поля относительно начала
	// document, с учётом возможной прокрутки по вертикали 
	this.fieldX		= field.getBoundingClientRect().top + pageYOffset;
	this.fieldY		= field.getBoundingClientRect().left + pageXOffset;
	this.fieldRight	= this.fieldY + this.fieldSide;
	this.fieldBtm	= this.fieldX + this.fieldSide;
	// пустой массив, куда будем заносить данные по каждому созданному кораблю
	// эскадры
	this.squadron	= [];
	// флаг начала игры
	this.startGame	= false;
}

function getElement(id) {
	return document.getElementById(id);
}

// зарегистрируем переменные и присвоим им значения полученных элементов игровых полей
var userfield = getElement('field_user'),
	compfield = getElement('field_comp');
// с помощью конструктора создаём объект user, за его основу взято поле игрока
var user = new Field(getElement('field_user'));

getElement('type_placement').addEventListener('click', function(e) {
	// используем делегирование основанное на всплытии событий
	var el = e.target;
	if (el.tagName != 'SPAN') return;
 
	// если мы уже создали эскадру ранее, то видна кнопка начала игры
	// скроем её на время расстановки кораблей новой эскадры
	this.getElementsByClassName('play').classList.add('hidden');
 
	var type = el.getAttribute('data-target'),
		// создаём литеральный объект typeGeneration
		// каждому свойству литерального объекта соответствует анонимная функция
		// в которой вызывается рандомная или ручная расстановка кораблей
		typeGeneration = {
			'random': function() {
				user.randomLocationShips();
			},
			'manually': function() {
				// этот код мы рассмотрим, когда будем реализовывать
				// расстановку кораблей перетаскиванием на игровое поле
			}
		};
 
	// вызов анонимной функции литерального объекта в зависимости
	// от значения атрибута 'data-target'
	typeGeneration[type]();
});










	// создаем двумерный массив, заполненный нулями
function createMatrix() {
	var x = 10, y = 10, arr = [10];
	for (var i = 0; i < x; i++) {
		arr[i] = [10];
		for(var j = 0; j < y; j++) {
			arr[i][j] = 0;
		}
	}
	return arr;
}
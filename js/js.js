var c = 1;
function slc(m){
	var is = document.getElementById('mslimg');
	var slco = document.getElementById('mslc');
	switch(m){
		case 0:c--;break;
		case 1:c++;break;
	}
	switch(c){
		case 4:c = 1;break;
		case 0:c = 3;break;
	}
	switch(c){
		case 1:sc('img/b1.jpg');break;
		case 2:sc('img/b2.jpg');break;
		case 3:sc('img/b3.jpg');break;
	}
	slco.innerHTML = c;
}

function sc(sr){
	var is = document.getElementById('mslimg');
	is.style.opacity = '0';
	setTimeout(function(){is.src = sr;},400);
	setTimeout(function(){is.style.opacity = '1'},600);
}

function sel(co){
	var comt = document.getElementById('comt');
	var comd = document.getElementById('comd');
	var comi = document.getElementById('comimg');
	var commands = document.getElementById('commands');
	
	commands.style.opacity = '0';
	setTimeout(function(){
	switch(co){
		case 'commbc':comt.innerHTML = 'Boston Celtics';comd.innerHTML = '«Бо́стон Се́лтикс» — американский профессиональный баскетбольный клуб, располагающийся в Бостоне, штат Массачусетс. Выступает в Атлантическом дивизионе Восточной конференции Национальной баскетбольной ассоциации.';comi.src = 'img/bc.jpg';commands.style.background = 'white';commands.style.color = '#008347';break;
		case 'commhr':comt.innerHTML = 'Houston Rockets';comd.innerHTML = '«Хьюстон Рокетс» — профессиональный баскетбольный клуб, выступающий в Юго-Западном дивизионе Западной конференции Национальной баскетбольной ассоциации. Клуб базируется в городе Хьюстон, Техас. Принимает домашние матчи на арене Тойота-центр.';comi.src = 'img/hr.jpg';commands.style.background = 'white';commands.style.color = '#d31145';break;
		case 'commcb':comt.innerHTML = 'Chicago Bulls';comd.innerHTML = '«Чикаго Буллз» — профессиональная баскетбольная команда, которая базируется в городе Чикаго, штат Иллинойс, выступает в центральном дивизионе восточной конференции НБА. Домашние игры проводит в «Юнайтед-центр».';comi.src = 'img/cb.jpg';commands.style.background = '#cf093f';commands.style.color = 'black';break;
		case 'commll':comt.innerHTML = 'Los Angeles Lakers';comd.innerHTML = '«Лос-Анджелес Лейкерс» — американский профессиональный баскетбольный клуб из Лос-Анджелеса, штата Калифорния, выступающий в Тихоокеанском дивизионе Западной конференции, в Национальной баскетбольной ассоциации.';comi.src = 'img/ll.png';commands.style.background = '#fdba21';commands.style.color = '#552084';break;
		case 'commgsw':comt.innerHTML = 'Golden State Warriors';comd.innerHTML = '«Голден Стэйт Уорриорз», «Го́лден Стейт Уо́рриорс» — американский профессиональный баскетбольный клуб из Окленда, Калифорния. Выступает в Тихоокеанском дивизионе Западной конференции Национальной баскетбольной ассоциации.';comi.src = 'img/gsw.jpg';commands.style.background = '#006bb8';commands.style.color = '#fdba21';break;
	}
},400);
	setTimeout(function(){commands.style.opacity = '1';},500);
}

function podpis(){
	var fc = document.getElementById('fotcon');
	fc.style.opacity = '0';
	setTimeout(function(){fc.innerHTML = 'Ви підписані на почтову розсилку';},400);
	setTimeout(function(){fc.style.opacity = '1';},500);
}
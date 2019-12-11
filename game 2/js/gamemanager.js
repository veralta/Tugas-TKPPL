let GameManager = {
	setGameStart: function(classType){
		this.resetPlayer(classType);
		this.setPreFight();
	},
	resetPlayer: function(classType){
		if(document.getElementById('Tank')){
			//hp, mana, strength, agility, speed
			switch(classType){
				case "Hylos":
					player = new Player(classType, 600, 0, 300, 100, 130);
				break;
				case "Grock":
					player = new Player(classType, 550, 100, 300, 150, 110);
				break;
				case "Johnson":
					player = new Player(classType, 560, 0, 280, 100, 140);
				break;
				case "Khufra":
					player = new Player(classType, 610, 170, 330, 100, 90);
				break;
			}
		}
		else if(document.getElementById('Fighter')){
			//hp, mana, strength, agility, speed
			switch(classType){
				case "Guini":
					player = new Player(classType, 400, 180, 400, 100, 180);
				break;
				case "Badang":
					player = new Player(classType, 440, 100, 380, 200, 170);
				break;
				case "Alucard":
					player = new Player(classType, 430, 70, 420, 150, 160);
				break;
				case "Sun":
					player = new Player(classType, 410, 0, 450, 200, 170);
				break;
			}
		}
		else if(document.getElementById('Assasin')){
			switch(classType){
				case "Gusion":
					player = new Player(classType, 300, 0, 400, 200, 200);
				break;
				case "Karina":
					player = new Player(classType, 290, 210, 400, 100, 190);
				break;
				case "Helcurt":
					player = new Player(classType, 330, 70, 380, 150, 210);
				break;
				case "Selena":
					player = new Player(classType, 310, 200,420, 110, 210);
				break;
			}
		}
		let getInterface = document.querySelector(".interface");
		getInterface.innerHTML = '<img src="img/avatar-player/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health +'</p><p>Mana: ' + player.mana +'</p><p>Strength: ' + player.strength +'</p><p>Agility: ' + player.agility +'</p><p>Speed: ' + player.speed +'</p></div>';
	},
	setPreFight: function(){
		let getHeader = document.querySelector(".header");
		let getAction = document.querySelector(".action");
		let getArena = document.querySelector(".arena");
		getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
		getAction.innerHTML = '<center><a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for Enemy</a></center>';
		getArena.style.visibility = "visible";
	},
	setFight: function(){
		let getHeader = document.querySelector(".header");
		let getAction = document.querySelector(".action");
		let getEnemy = document.querySelector(".enemy");

		//enemy
		let enemy1 = new Enemy("Storm Spirit", 700, 250, 100, 160, 170);
		let enemy2 = new Enemy("Tiny", 600, 0, 370, 100, 200);
		let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
	
		switch (chooseRandomEnemy){
			case 0:
				enemy = enemy1;
				break;
			case 1:
				enemy = enemy2;
				break;
		}
		getHeader.innerHTML ='<p>Task: Choose your move</p>';
		getAction.innerHTML = '<center><a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a><center>';
		getEnemy.innerHTML = '<img src="img/avatar-enemy/' + enemy.enemyType.toLowerCase() + '.jpg" alt="' + enemy.enemyType + '"class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
	}
}
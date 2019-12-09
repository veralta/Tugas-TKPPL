let GameManager = {
	setGameStart: function(classType){
		this.resetPlayer(classType);
		this.setPreFight();
	},
	resetPlayer: function(classType){
		if(document.getElementById('Tank')){
			switch(classType){
				case "Hylos":
					player = new Player(classType, 300, 50, 400, 150, 130);
				break;
				case "Grock":
					player = new Player(classType, 150, 400, 60, 130, 110);
				break;
				case "Baxia":
					player = new Player(classType, 250, 70, 450, 170, 130);
				break;
				case "Johnson":
					player = new Player(classType, 130, 100, 550, 200, 140);
				break;
				case "Khufra":
					player = new Player(classType, 500, 10, 200, 150, 90);
				break;
			}
		}
		else if(document.getElementById('Fighter')){
			switch(classType){
				case "Guini":
					player = new Player(classType, 300, 50, 400, 150, 130);
				break;
				case "Badang":
					player = new Player(classType, 150, 400, 60, 130, 110);
				break;
				case "Alucard":
					player = new Player(classType, 250, 70, 450, 170, 130);
				break;
				case "Sun":
					player = new Player(classType, 130, 100, 550, 200, 140);
				break;
				case "Terizla":
					player = new Player(classType, 500, 10, 200, 150, 90);
				break;
			}
		}
		let getInterface = document.querySelector(".interface");
		getInterface.innerHTML = '<img src="img/avatar-player/' + classType.toLowerCase() + '.jpg" class="img-avatar"><div><h3>' + classType + '</h3><p>Health: ' + player.health +'</p><p>Mana: ' + player.mana +'</p><p>Strength: ' + player.strength +'</p><p>Agility: ' + player.agility +'</p><p>Speed: ' + player.speed +'</p></div>';
	},
	setPreFight: function(){
		let getHeader = document.querySelector(".header");
		let getAction = document.querySelector(".action");
		let getArena = document.querySelector(".arena");
		getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
		getAction.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for Enemy</a>';
		getArena.style.visibility = "visible";
	},
	setFight: function(){
		let getHeader = document.querySelector(".header");
		let getAction = document.querySelector(".action");
		let getEnemy = document.querySelector(".enemy");

		//enemy
		let enemy1 = new Enemy("Storm Spirit", 140, 170, 90, 120, 100)
		let enemy2 = new Enemy("Tiny", 600, 0, 370, 100, 80)
		let randomEnemy = Math.floor(Math.random() * Math.floor(2));
		console.log(randomEnemy);
		switch (randomEnemy){
			case 0:
				enemy = enemy1;
				break;
			case 1:
				enemy = enemy2;
				break;
		}
		getHeader.innerHTML ='<p>Task: Choose your move</p>';
		getAction.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
		getEnemy.innerHTML = '<img src="Enemy/' + enemy.enemyType.toLowerCase() + ' .jpg" alt="' + enemy.enemyType + '"class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Mana: ' + enemy.mana + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div> />';
	}
}
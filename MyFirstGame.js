var Player = document.getElementById("player");
var print = document.getElementById("space");
var print1 = document.getElementById("space1");
var map = document.getElementById("map");
var mapinfo = window.getComputedStyle(map);
var mapwidth = mapinfo.getPropertyValue("width");
 
var mapWidth = map.offsetWidth;
var mapHeight = map.offsetHeight;
var playX = 0;
var playY = 0;
var step = 20;
var offWidth = Player.offsetWidth;
var offHeight = Player.offsetHeight;
			
			function move(X, Y) {
			    Player.style.left = X + "px";
			    Player.style.top = Y + "px";
			    Player.classList.add("animate");
			    print.innerHTML = X;
			    print1.innerHTML = Y;
			}
			
  function move1(X, Y) {
      var resultX = mapWidth - X - 28;
      var resultY = mapHeight - Y - 28;
      if(resultX <= step) {
          playX+=resultX
          move(playX,playY);
      }
      if(resultY <= step) {
          playY+=resultY;
          move(playX,playY);
      }
  }

					function move2(X, Y) {
					    
					    if(X <= step) {
					        playX-=X;
					        move(playX, playY);
					    } else if(Y <= step) {
					        playY-=Y;
					        move(playX, playY);
					    }
					}

			
			function right() {
			    if(playX + step <= mapWidth - offWidth) {
			        playX += step;
			        move(playX, playY);
						
						} else {
						    move1(playX, playY);
						}
			}
			
			function left() {
			    if(playX - step >= 0) {
			        playX -= step;
			        move(playX, playY);
						} else {
						    move2(playX, playY);
						}
			}
			
			function up() {
			    if(playY - step >= 0) {
			        playY -= step;
			        move(playX, playY);
				} else {
				    move2(playX, playY);
				}
			}
			
			function down() {
						if(playY + step <= mapHeight - offHeight) {
									playY += step;
									move(playX, playY);
						} else {
						    move1(playX,playY);
						}
			}


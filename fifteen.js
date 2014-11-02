 /*Stefan Cooper */
/*60044726*/
var piece;var x;var y;
	

window.onload = function (){

	
	var puzzlearea = document.getElementById('puzzlearea');
    
   
  
    var num=Math.floor((Math.random() * 8) + 1);
    var btn = document.createElement("BUTTON");
    btn.id= "picBtn";
    var t = document.createTextNode("Change Pic");
	btn.appendChild(t);
    var controlDiv= document.getElementById('controls');
    controlDiv.appendChild(btn);


var picBtn = document.getElementById('picBtn');

picBtn.onclick = function(){
	/*alert("this works");*/

var num2=Math.floor((Math.random() * 8) + 1);

for (var i=0; i<piece.length; i++){

piece[i].style.backgroundImage= "url(background"+num2+".jpg)";

}
}



	piece = puzzlearea.getElementsByTagName('div');
    
    

	for (var i=0; i<piece.length; i++)	{
		piece[i].className = 'puzzlepiece';
		piece[i].style.left = (i%4*100)+'px';
		piece[i].style.top = (parseInt(i/4)*100) + 'px';
		piece[i].style.backgroundPosition= '-' + piece[i].style.left + ' ' + '-' + piece[i].style.top;
        piece[i].style.backgroundImage= "url(background"+num+".jpg)";
		piece[i].onmouseover = function()
		{
			if (moveable(parseInt(this.innerHTML)))
			{
				this.style.border = "2px solid greenyellow";
				this.style.color = "yellowgreen";
			}
		};
		piece[i].onmouseout = function()
		{
			this.style.border = "2px solid black";
			this.style.color = "black";
		};

		piece[i].onclick = function()
		{
			if (moveable(parseInt(this.innerHTML)))
			{
				swap(this.innerHTML-1);
				
			}
		};
	}

	x = '300px';
	y = '300px';

	var shufflebutton = document.getElementById('shufflebutton');
	shufflebutton.onclick = function(){
/*alert("this works");*/
		for (var i=0; i<250; i++)
		{
			var random = parseInt(Math.random()* 100) %4;
			if (random == 0)
			{
				var tmp = up(x, y);
				if ( tmp != -1)
				{
					swap(tmp);
				}
			}
			if (random == 1)
			{
				var tmp = down(x, y);
				if ( tmp != -1) 
				{
					swap(tmp);
				}
			}

			if (random == 2)
			{
				var tmp = left(x, y);
				if ( tmp != -1)
				{
					swap(tmp);
				}
			}

			if (random == 3)
			{
				var tmp = right(x, y);
				if (tmp != -1)
				{
					swap(tmp);
				}
			}
		}
	};
};

function swap (position) {
	var temp = piece[position].style.top;
	piece[position].style.top = y;
	y = temp;

	temp = piece[position].style.left;
	piece[position].style.left = x;
	x = temp;
}



function moveable(position){
	if (down(x, y) == (position-1))
	{
		return true;
	}

	if (up(x, y) == (position-1))
	{
		return true;	
	}
	if (left(x, y) == (position-1))
	{
		return true;
	}

	if (right(x, y) == (position-1))
	{
		return true;
	}
}


function left(x, y){
	var x = parseInt(x);
	var yy = parseInt(y);

	if (x > 0)
	{
		for (var i = 0; i < piece.length; i++) 
		{
			if (parseInt(piece[i].style.left) + 100 == x && parseInt(piece[i].style.top) == yy)
			{
				return i;
			} 
		}
	}
	else 
	{
		return -1;
	}
}

function right (x, y) {
	var x = parseInt(x);
	var yy = parseInt(y);
	if (x < 300)
	{
		for (var i =0; i<piece.length; i++){
			if (parseInt(piece[i].style.left) - 100 == x && parseInt(piece[i].style.top) == yy) 
			{
				return i;
			}
		}
	}
	else
	{
		return -1;
	} 
}

function up (x, y) {
	var x = parseInt(x);
	var yy = parseInt(y);
	if (yy > 0)
	{
		for (var i=0; i<piece.length; i++)
		{
			if (parseInt(piece[i].style.top) + 100 == yy && parseInt(piece[i].style.left) == x) 
			{
				return i;
			}
		} 
	}
	else 
	{
		return -1;
	}
}

function down (x, y){
	var x = parseInt(x);
	var yy = parseInt(y);
	if (yy < 300)
	{
		for (var i=0; i<piece.length; i++)
		{
			if (parseInt(piece[i].style.top) - 100 == yy && parseInt(piece[i].style.left) == x) 
			{
				return i;
			}
		}
	}
	else
	{
		return -1;
	} 
}



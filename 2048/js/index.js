var game = {
	data:null,
	RN:4,
	CN:4,
	state:0,
	RUNNING:0,
	GAMEOVER:0,
	score:0,
	start:function(){
		this.data = [];
		this.state = this.RUNNING;
		for(var row=0;row<this.RN;row++){
			this.data[row] = [];
			for(var col=0;col<this.CN;col++){
				this.data[row][col] = 0;
			}
		}
		console.log(this.data);
	}
}
window.onload = function(){
	game.start();
}

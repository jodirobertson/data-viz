function init() {
    var canvas = $('#canvas').get(0);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Position of an element
function Posn(x, y) {
    this.x = x;
    this.y = y;
}

// Music to be played
function Music(volume) {
    this.volume = volume; // loud volume indicates a higher income
}

Music.prototype.play = function () {
    $('#cardiacarrest')[0].play();
};

Music.prototype.changeVolume = function () {
    var audio = $('#cardiacarrest')[0];
    audio.volume = this.volume;
};

// A train car that moves along the track
function Car(curPos, music) {
    this.curPos = curPos;
    this.music = music;
}

Car.prototype.draw = function () {
    var canvas = $('#canvas').get(0);
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(this.curPos.x, this.curPos.y, 100 /*radius*/, 0 /*start angle*/, 2*Math.PI /*end angle*/);
    ctx.fillStyle = '#fff';
    ctx.fill();
    
};


window.onload = function() { 
    init();
    
    var music = new Music(.5);
    music.play();
    music.changeVolume();

    var posn = new Posn(100, 100);
    var car = new Car(posn, music);
    car.draw();
}
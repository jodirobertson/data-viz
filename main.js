
// The entire MBTA map
function Map(lines) {
    this.lines = lines;
}

Map.prototype.draw = function () {
    // TODO what happens when map begins to generate
};

// Different colored lines of the subway
function Line(segments, stops, car) {
    this.segments = segments;
    this.stops = stops;
    this.car = car;
}

Line.prototype.draw = function () {
    // TODO: 
    // this.segments.draw();
    // this.stops.draw();
    // this.car.draw();
};

// A segment of a line, divided into racial demographics
function Segment(startStop, endStop, color) {
    this.startStop = startStop;
    this.endStop = endStop;
    this.color = color; // brightness of color signifies population
}

Segment.prototype.draw = function () {
    // TODO: draw the segment
};

// A stop on the MBTA line
function Stop(name, pos, avgIncome, isHit) {
    this.name = name;
    this.pos = pos;
    this.avgIncome = avgIncome;
    this.isHit = isHit;
}

Stop.prototype.draw = function () {
    // TODO: draw the stop
};

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
    ctx.fill();
};

window.onload = function() { 
    var music = new Music(.5);
    music.play();
    music.changeVolume();

    var posn = new Posn(200, 200);
    var car = new Car(posn, music);
    car.draw();
}
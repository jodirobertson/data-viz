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
// A segment of a line, divided into racial demographics
function Segment(startStop, endStop, color) {
    this.startStop = startStop;
    this.endStop = endStop;
    this.color = color; // brightness of color signifies population
}

Segment.prototype.draw = function () {
    // TODO: draw the segment
};
var view = new Pan.Viewport();
var fps = new Pan.Ticker();

var c = document.getElementById("root");
var ctx = c.getContext("2d");


c.width = view.width;
c.height = view.height;

var drawLines = function(ctx, view) {
    var width = view.width;
    var gutter = view.width / 16;
    var middleOfScreen = view.width / 2;

    var balloonWidth = 40;
    var balloonHeight = 50;

    var reservedForHappy = balloonWidth * 5;
    var spaceForHappy = balloonWidth * 2 * 5;

    var start = (view.width - spaceForHappy) / 2;
    var end = start + spaceForHappy; 

    // draw happy
    for (var i = start; i <= end; i += balloonWidth * 2  +10) {
        ctx.beginPath();
        ctx.ellipse(i, 200, balloonWidth, balloonHeight, 0 * Math.PI/180, 0, 2 * Math.PI);
        ctx.fillStyle = "#8E79AD";
        ctx.fill();
    }

    var reservedForHappy = balloonWidth * 8;
    var spaceForHappy = balloonWidth * 2 * 8;

    var start = (view.width - spaceForHappy) / 2;
    var end = start + spaceForHappy; 

    // draw birthday
    for (var i = start; i <= end; i += balloonWidth * 2  +10) {
        ctx.beginPath();
        ctx.ellipse(i, 400, balloonWidth, balloonHeight, 0 * Math.PI/180, 0, 2 * Math.PI);
        ctx.fillStyle = "#8E79AD";
        ctx.fill();
    }
}

drawLines(ctx, view);

var drawBallons = function() {

}
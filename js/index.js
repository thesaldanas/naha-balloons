var view = new Pan.Viewport();

var canvases = new Array();
var letters = ['H','A','P','P','Y','','B','I','R','T','H','D','A','Y'];

var canvasWidth = 120;
var canvasHeight = 140;

var balloonWidth = 50;
var balloonHeight = 60;

var center = canvasWidth * 5;
var centerBig = canvasWidth * 8;
var marginSmall = (view.width - center) / 2;
var marginBig = (view.width - centerBig) / 2;

// create canvanses
for (var i = 0; i < 14; i++) {
    var canvas = document.createElement("canvas");
    var letterDiv = document.createElement("div");
    letterDiv.classList.add('letter-container');
    var letter = document.createElement("span");
    letter.innerText = letters[i];

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    if (i < 5) {
        canvas.style.left = (marginSmall + (i * canvasWidth)) + 'px';
        canvas.style.top = '200px';

        // letter
        letterDiv.style.position = 'absolute';
        letterDiv.style.left = (marginSmall + (i * canvasWidth)) + 'px';
        letterDiv.style.top = '200px';
    }

    else if (i === 5)
    continue;

    else {
        canvas.style.left = (marginBig + ((i - 6) * canvasWidth)) + 'px';
        canvas.style.top = '400px';

        letterDiv.style.position = 'absolute';
        letterDiv.style.left = (marginBig + ((i - 6) * canvasWidth)) + 'px';
        letterDiv.style.top = '400px';

    }

    document.getElementsByTagName('body')[0].appendChild(canvas);
    letterDiv.appendChild(letter);
    document.getElementsByTagName('body')[0].appendChild(letterDiv);

    var ctx = canvas.getContext("2d");

    // draw balloon
    ctx.beginPath();
    ctx.ellipse(canvasWidth/2, canvasHeight/2, balloonWidth, balloonHeight, 0 * Math.PI/180, 0, 2 * Math.PI);
    ctx.fillStyle = "#8E79AD";
    ctx.fill();

    var info = {
        canvasElement : canvas,
        ctx : ctx
    }

    canvas.onclick = function(e) {
        e.target.style.opacity = 0;
    }

    canvases.push(info);
}

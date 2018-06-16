var game1 = [ //horizontal track
    [{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""}],
    [{t:"s", m:""},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"f", m:""}],
    [{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""}]
];

var game2 = [ //loop track
    [{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""}],
    [{t:"g", m:""}, {t:"t", m:"270"},{t:"f", m:""},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"s", m:""},{t:"t", m:"0"},{t:"g", m:""}],
    [{t:"g", m:""}, {t:"v", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"v", m:""},{t:"g", m:""}],
    [{t:"g", m:""}, {t:"t", m:"180"},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"t", m:"90"},{t:"g", m:""}],
    [{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""}]
];

var game3 = [ //right turn
    [{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""}],
    [{t:"g", m:""}, {t:"s", m:""},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"h", m:""},{t:"t", m:"0"},{t:"g", m:""}],
    [{t:"g", m:""}, {t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"v", m:""},{t:"g", m:""}],
    [{t:"g", m:""}, {t:"g", m:"180"},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"f", m:"90"},{t:"g", m:""}],
    [{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""}]
];

var game4 = [ //8 track
    [{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""}],
    [{t:"g", m:""}, {t:"t", m:"270"},{t:"f", m:""},{t:"s", m:""},{t:"t", m:"0"},{t:"g", m:"0"},{t:"g", m:""},{t:"g", m:""},{t:"g", m:"0"},{t:"g", m:""}],
    [{t:"g", m:""}, {t:"v", m:""},{t:"g", m:""},{t:"g", m:""},{t:"v", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""}],
    [{t:"g", m:""}, {t:"t", m:"180"},{t:"h", m:""},{t:"h", m:""},{t:"i", m:""},{t:"h", m:""},{t:"t", m:"0"},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""}],
    [{t:"g", m:""}, {t:"g", m:"180"},{t:"g", m:""},{t:"g", m:""},{t:"v", m:""},{t:"g", m:""},{t:"v", m:"0"},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""}],

    [{t:"g", m:""}, {t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"t", m:"180"},{t:"h", m:""},{t:"t", m:"90"},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""}],
    [{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""},{t:"g", m:""}]
];

var tracks = [{id:"game-1", board: game1}, {id:"game-2", board: game2}, {id:"game-3", board: game3}, {id:"game-4", board: game4}];

var images = [
    {id:"t",img:"track-90.png"},
    {id:"h",img:"track-horizontal.png"},
    {id:"v",img:"track-vertical.png"},
    {id:"s",img:"track-start.png"},
    {id:"f",img:"track-finish.png"},
    {id:"i",img:"track-intersection.png"},
    {id:"g",img:"track-grass.png"}
];

let timerId;
let direction = "east";

function reset() {
    stop();
    direction = "east";
    var board = document.querySelector("#game-board");
    board.innerHTML = '';
    loadGame();
}

function start() {
    var picker = document.querySelector("#game-picker");
    if(picker.selectedIndex > 0) {
        var event = new Event("redraw");
        var gameBoard = document.querySelector("#game-board");
        gameBoard.addEventListener('redraw', redraw, false);
        timerId = setInterval(function() {gameBoard.dispatchEvent(event);}, 100);
    }
}

function stop() {
    window.clearInterval(timerId);
}

function redraw() {
    var code = document.querySelector("#code");
    eval(code.value);
    checkFinish();
}

function checkFinish() {
    var car = document.querySelector("#car");
    var finish = document.querySelector("#finish");

    var cp = getProps(car);
    var fp = getProps(finish);

    if(cp.left > fp.left
        && cp.top > fp.top
        && (cp.top + cp.height) < (fp.top + fp.height)
        && (cp.left + cp.width) < (fp.left + fp.width + 50)) {
            finished();
        }

}

function finished() {
    stop();
}

function driveEast() {
    direction = "east";
    var car = document.querySelector("#car");
    car.style.left = (parseInt(car.style.left.replace("px","")) + 50) + "px";
}

function driveNorth() {
    direction = "north";
    var car = document.querySelector("#car");
    car.style.top = (getProps(car).top - 50) + "px";
}

function driveSouth() {
    direction = "south";
    var car = document.querySelector("#car");
    car.style.top = (getProps(car).top + 50) + "px";
}

function driveWest() {
    direction = "west";
    var car = document.querySelector("#car");
    car.style.left = (getProps(car).left - 50) + "px";
}

function isTurnAhead() {
    var car = document.querySelector("#car");
    var cp = getProps(car);
    var square;

    switch(direction) {
        case "east":
            square = document.querySelector(".pos-" + (cp.top - 30) + "-" + cp.left);
            if(square != null && square.dataset.squareType == "t") {
                return true;
            } 
            break;

        case "west":
            var pos = ".pos-" + (cp.top - 30) + "-" + (cp.left - 60);
            square = document.querySelector(pos);
            if(square != null && square.dataset.squareType == "t") {
                return true;
            } 
            break;

        case "south":
            var pos = ".pos-" + (cp.top) + "-" + (cp.left - 10);
            square = document.querySelector(pos);
            if(square != null && square.dataset.squareType == "t") {
                console.log("turning -------------------")
                return true;
            } 
            break;

        case "north":
            var pos = ".pos-" + (cp.top - 80) + "-" + (cp.left - 10);
            square = document.querySelector(pos);
            if(square != null && square.dataset.squareType == "t") {
                return true;
            } 
            break;
    }
}

function turnSouth() {
    direction = "south";
    var car = document.querySelector("#car");
    car.style.transform = "rotate(90deg)";
    car.style.left = (getProps(car).left + 10) + "px";
    car.style.top = (getProps(car).top + 20) + "px";
}

function turnWest() {
    direction = "west";
    var car = document.querySelector("#car");
    car.style.transform = "rotate(180deg)";
    car.style.top = (getProps(car).top + 30) + "px";
}

function turnEast() {
    direction = "east";
    var car = document.querySelector("#car");
    car.style.transform = "rotate(0deg)";
    car.style.left = (getProps(car).left + 10) + "px";
    car.style.top = (getProps(car).top - 50) + "px";
}

function turnNorth() {
    direction = "north";
    var car = document.querySelector("#car");
    car.style.transform = "rotate(270deg)";
    car.style.left = (getProps(car).left - 50) + "px";
    car.style.top = (getProps(car).top) + "px";
}

function getTurnDirection() {
    var car = document.querySelector("#car");
    var cp = getProps(car);
    var square;
    switch(direction) {
        case "east":
            square = document.querySelector(".pos-" + (cp.top - 30) + "-" + cp.left);
            if(square != null) {
                //right turn
                if(square.dataset.squareMeta == "0") {
                    return "south";
                } 
                else if(square.dataset.squareMeta == "90") {
                    return "north";
                }
            }
            break;

        case "south":
            var pos = ".pos-" + (cp.top) + "-" + (cp.left - 10);
            square = document.querySelector(pos);
            console.log(square);
            if(square != null) {
                //right turn
                if(square.dataset.squareMeta == "180") {
                    return "east";
                } 
                else if(square.dataset.squareMeta == "90") {
                    return "west";
                }
            }
            break;

        case "west":
            var pos = ".pos-" + (cp.top - 30) + "-" + (cp.left - 60);
            square = document.querySelector(pos);
            console.log(square);
            if(square != null) {
                //right turn
                if(square.dataset.squareMeta == "180") {
                    return "north";
                } 
                else if(square.dataset.squareMeta == "0") {
                    return "south";
                }
            }
            break;

        case "north":
            var pos = ".pos-" + (cp.top - 80) + "-" + (cp.left - 10);
            square = document.querySelector(pos);
            console.log(square);
            if(square != null) {
                //right turn
                if(square.dataset.squareMeta == "270") {
                    return "east";
                } 
                else if(square.dataset.squareMeta == "0") {
                    return "south";
                }
            }
            break;
    }
}

function loadGame() {
    var menu = document.querySelector("#game-picker");
    var trackid = menu[menu.selectedIndex].id;
    paintTrack(trackid);
    showCar();
}

function showCar(){
    var gameBoard = document.querySelector("#game-board");
    var start = document.querySelector("#start");
    var car = document.createElement("img");
    car.setAttribute("id", "car");
    car.setAttribute("style", "top:" + (getCompTop(start) + 30) + "px;left:" + window.getComputedStyle(start).left);
    car.setAttribute("src", "art/car-red.png");
    gameBoard.appendChild(car);
}
function getProps(element) {
    var ce = window.getComputedStyle(element);
    var props = {
        left: stripPx(ce.left), top: stripPx(ce.top), width: stripPx(ce.width), height: stripPx(ce.height)
    }

    return props;
}
function stripPx(prop) {
    return parseInt(prop.replace("px", ""));
}
function getCompTop(element) { return parseInt(window.getComputedStyle(element).top.replace("px","")); }
function getCompLeft(element) { return parseInt(window.getComputedStyle(element).left.replace("px","")); }

function paintTrack(trackid) {
    var track = tracks.find(element => { return element.id == trackid; });
    var squareTop = 0;
    for(var i = 0;i<track.board.length;i++) {
        var squareLeft = 0;
        for(var j = 0;j<track.board[i].length;j++) {
            addSquare(track.board[i][j], squareTop, squareLeft);
            squareLeft += 100;
        }
        squareTop += 100;
    }
}

function addSquare(square, squareTop, squareLeft) {
    var gameBoard = document.querySelector("#game-board");
    var boardimg = images.find(function(element) {
        return element.id == square.t;
    });
    var pos = "pos-" +squareTop + "-" + squareLeft;
    var img = document.createElement("img");
    img.setAttribute("src","art/" + boardimg.img);
    img.setAttribute("style", "top:" +squareTop + "px;left:" + squareLeft + "px");
    img.setAttribute("class", "square " + pos);
    img.setAttribute("data-square-meta", square.m);
    img.setAttribute("data-square-type", square.t);

    if(square.t == "s") {
        img.setAttribute("id","start");
    }
    else if(square.t == "f") {
        img.setAttribute("id", "finish");
    }

    switch(parseInt(square.m)) {
        case 90:
            img.setAttribute("class", "square r90 " + pos);
            break;

        case 180:
            img.setAttribute("class", "square r180 " + pos);
            break;

        case 270:
            img.setAttribute("class", "square r270 " + pos);
            break;
    }
        

    gameBoard.appendChild(img);
}

const minX =  0;
const maxX =  6;
const minY = -1;
const maxY =  1;

function start() {
    const userFunction = document.getElementById('user_function');
    const canvas       = document.getElementById('canvas');
    const context      = canvas.getContext("2d");

    const f = () => Function('x', 'return ' + userFunction.value);
    display(context, f());

    userFunction.onchange = _ => display(context, f());
}

function display(context, func) {
    // clear
    context.fillStyle = "papayawhip";
    context.fillRect(0, 0, canvas.width, canvas.height);
    // draw the function plot
    normx = normalizeX(canvas.width);
    normy = normalizeY(canvas.height);

    context.fillStyle = "black";
    context.beginPath();
    context.moveTo(normx(minX), normy(func(minX)));

    const stride = (maxX - minX) / 100; // 100 Stützstellen
    for (let x = minX; x <= maxX; x += stride) {
        context.lineTo(normx(x), normy(func(x)));
        context.stroke();
    }
}

const normalizeY = height => y => {
    let scaleFactor = height / (maxY - minY);
    return height - (y - minY) * scaleFactor;
};

const normalizeX = width => x => {
    let scaleFactor = width / (maxX - minX);
    return ( x - minX) * scaleFactor;
};

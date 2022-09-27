"use strict";

var gl;
var points;

window.onload = function init() {
    var canvas = document.getElementById("trisquare-canvas");
    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL isn't available");
    }

    // Three Vertices
    var vertices1 = [
        -0.5, 0.5,
        -1.0, 0.0,
        0.0, 0.0
    ];

    var vertices2 = [
        0.0, 1.0,
        0.0, 0.0,
        0.5, 0.5,
    ];
    var vertices3 = [
        0.0, 0.0,
        0.5, -0.5,
        1.0, 0.0,
    ];
    var vertices4 = [
        0.0, 0.0,
        -0.5,-0.5,
        0.0, -1.0,
        
    ];
    // Configure WebGL
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    // Load shaders and initialize attribute buffers
    var program1 = initShaders(gl, "vertex-shader", "fragment1-shader");
    gl.useProgram(program1);

    // Load the data into the GPU
    var bufferId1 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId1);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices1), gl.STATIC_DRAW);

    // Associate external shader variables with data buffer
    var vPosition1 = gl.getAttribLocation(program1, "vPosition");
    gl.vertexAttribPointer(vPosition1, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition1);
    render1();

    var program2 = initShaders( gl, "vertex-shader", "fragment2-shader" );
    gl.useProgram( program2 );

    var bufferId2 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId2);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices2), gl.STATIC_DRAW);

    var vPosition2 = gl.getAttribLocation( program2, "vPosition" );
    gl.vertexAttribPointer( vPosition2, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition2 );
    render2();

    // Load shaders and initialize attribute buffers
    var program3 = initShaders(gl, "vertex-shader", "fragment3-shader");
    gl.useProgram(program3);

    // Load the data into the GPU
    var bufferId3 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId3);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices3), gl.STATIC_DRAW);

    // Associate external shader variables with data buffer
    var vPosition3 = gl.getAttribLocation(program3, "vPosition");
    gl.vertexAttribPointer(vPosition3, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition3);
    render3();

    // Load shaders and initialize attribute buffers
    var program4 = initShaders(gl, "vertex-shader", "fragment4-shader");
    gl.useProgram(program4);

    // Load the data into the GPU
    var bufferId4 = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, bufferId4);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices4), gl.STATIC_DRAW);

    // Associate external shader variables with data buffer
    var vPosition4 = gl.getAttribLocation(program4, "vPosition");
    gl.vertexAttribPointer(vPosition4, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(vPosition4);
    render4();
}

function render1() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    //gl.drawArrays(gl.TRIANGLE_FAN, 2, 4);
    //gl.drawArrays( gl.TRIANGLES, 0, 9 );
    //gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}

function render2() {
    //gl.clear(gl.COLOR_BUFFER_BIT);
    //gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    //gl.drawArrays( gl.TRIANGLES, 0, 9 );
    //gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}

function render3() {
    //gl.clear(gl.COLOR_BUFFER_BIT);
    //gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    //gl.drawArrays( gl.TRIANGLES, 0, 9 );
    //gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}

function render4() {
    //gl.clear(gl.COLOR_BUFFER_BIT);
    //gl.drawArrays(gl.TRIANGLES, 0, 3);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
    //gl.drawArrays( gl.TRIANGLES, 0, 9 );
    //gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}

var Rec = require('./rectangulo');
var Rectangulo = require('./misModulos/rectCallback');
Rectangulo(10,10,function(error, respuesta){
    if (error){
        console.log(error);
    } else {
        console.log("*********");
        console.log(respuesta.area());
        console.log(respuesta.perimetro());
    }
});

//Calcula el perímetro de lados a,b
var area1=function(a,b) {
    return a*b;
}

function area2(a,b){
    return a*b;
}

//function area3(a,b)=>(a+b)

/* var rectangulo={
    area:(a,b)=>(a*b),
    perimetro:(a,b)=>(2*(a+b)),
    per2: function (a,b){
        return 2*(a+b);
    }
} */

/* console.log(rectangulo.area(4,4));
console.log(rectangulo.perimetro(10,10)); */

function calcularRect(l,b) {

    if (l<=0 || b<=0) {
        console.log("las dimensiones del rectángulo deben ser más grandes: l="
            + l + ", y b = " + b);
    } else {
        console.log("el área del rectángulo es "+ Rec.area(l,b));
        console.log("el perímetro del rectángulo es "+ Rec.perimetro(l,b));
    }
}

calcularRect(10,-5);
calcularRect(10,5);
calcularRect(-10,5);
calcularRect(10,0);
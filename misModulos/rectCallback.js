module.exports=(x,y,callback)=>{
    if(x<=0 || y<=0) {
        setTimeout(() => {
            callback(new Error("las dimensiones son inválidas"), null);
        }, 3000);        
    } else {
        setTimeout(() => {
            callback(new Error("las dimensiones son inválidas"), null);callback(null,{
                area:()=>(x*y),
                perimetro:()=>(2*(x+y))
            });
        }, 3000);        
    }
}
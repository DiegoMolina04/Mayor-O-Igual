
/*Se verifica el tamaño de pantalla*/
reportInitialScreen(window.screen.width);

/*Cada vez que se modifica el tamaño de la página, llama a la funcion reportWindowSize*/
window.onresize = reportWindowSize;  

/*Agrega los arreglos para responsive en diferentes dispositivos*/
function addFix(){
    $('.contenedor').addClass('fix');
    $('#cajaNum1').addClass('fix');
    $('#cajaNum2').addClass('fix');
    $('#cajaEnviar').addClass('fix');
    $('#cajaLimpiar').addClass('fix');
    $('#botonResponsive').addClass('fix');
}

/*Remueve los arreglos responsive y muestra la página original*/
function removeFix(){
    /*JQuery*/
    $('.contenedor').removeClass('fix');
    $('#cajaNum1').removeClass('fix');
    $('#cajaNum2').removeClass('fix');
    $('#cajaEnviar').removeClass('fix');
    $('#cajaLimpiar').removeClass('fix');
    $('#botonResponsive').removeClass('fix');
}

function reportWindowSize() {
    
    console.log(window.innerWidth)

    var ancho = window.innerWidth

    if(ancho > 958){
        
        removeFix();

    }else{

        addFix();
       
    }
    
}

function reportInitialScreen(tamañoInicial){

    if(tamañoInicial<750){
        
        addFix();

    }else{
        
        removeFix();

    }

}

function enviar(){
    
    //Toma los elementos de los input por id
    var campo1 = document.getElementById("numero1").value;
    var campo2 = document.getElementById("numero2").value;

    if(campo1==""||campo2==""){

        //Inserta cadena de texto en el input por id
        document.getElementById("resultado").value="Error ! Verifique los campos";

    }else if(campo1=="0"||campo2=="0"){

        document.getElementById("resultado").value="Error ! El cero no se evalua";

        
    }else{

        //Pasa los elementos de tipo text a int
        num1 = Number.parseInt(campo1);
        num2 = Number.parseInt(campo2);
        
        if(num1<0||num2<0){

            document.getElementById("resultado").value="Error ! No se evaluan números negativos";

        }else{

            if(num1 > num2){
    
                document.getElementById("resultado").value="El número 1 es mayor que el número 2";
        
            }else if(num2 > num1){
        
                document.getElementById("resultado").value="El número 2 es mayor que el número 1";
            
            }else if(num1 == num2){
                
                document.getElementById("resultado").value="Los dos números son iguales";
                
            }
        }
    }
   
}

function limpiar(){

    document.getElementById("numero1").value="";
    document.getElementById("numero2").value="";
    document.getElementById("resultado").value="";

}
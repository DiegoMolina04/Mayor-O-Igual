

window.onresize = reportWindowSize;  

function reportWindowSize() {
    
    console.log(window.innerWidth)

    var ancho = window.innerWidth

    if(ancho > 958){
        $('.contenedor').removeClass('fix');
        $('#derecha').removeClass('fix');
    }else{
        $('.contenedor').addClass('fix');
        $('#derecha').addClass('fix');
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
let boton=document.getElementById("boton")
boton.addEventListener("click",function (event){
    alert("hiciste click")
    let selector=document.getElementById("producto").value
    alert("usted elige el"+selector)
    let total=0
    let descuento=0
    let cantidad=document.getElementById("cantidad").value
    switch(selector){
        case "28000":
            
            total=cantidad*28000
            alert("el total es: "+total)
            break
        case "15000":
           
            total=cantidad*15000
            alert(total)
            break
        case "10000":
            
            total=cantidad*10000
            alert(total)
            break
        case "8500":
            
            total=cantidad*8500
            alert(total)
            break
        case "22000":
           
            total=cantidad*22000
            alert(total)
            break
        case "9000":
            
            total=cantidad*9000
            alert(total)
            break
        case "25000":
           descuento=10000
        
        total=cantidad*25000-10000
        alert(total)
            break
        case "27000":
            descuento=10000
        
        total=cantidad*27000-10000
        alert(total)
            break
        case "12500":
            
            total=cantidad*12500
            alert(total)
        break
        case "20000":
          descuento=10000 
       
        total=cantidad*20000-10000
        alert(total)
        break
        default :
            alert("no sabe no contesta")
    }
}) 
let boton=document.getElementById("boton")
boton.addEventListener("click",function (event){
    alert("hiciste click")
    let selector=document.getElementById("producto").value
    alert("usted elige el"+selector)
    let total=0
    let cantidad=0
    switch(selector){
        case "28000":
            alert("elegiste el 1")
            break
        case "15000":
            alert("elegiste el 2")
            break
        case "10000":
            alert("elegiste el 3")
            break
        case "8500":
            alert("elegiste el 4")
            break
        case "22000":
            alert("elegiste el 5")
            break
        case "9000":
            alert("elegiste el 6")
            break
        case "25000":
            alert("elegiste el 7")
            break
        case "27000":
            alert("elegiste el 8")
            break
        case "12500":
            alert("elegiste el 9")
        break
        case "20000":
            alert("elegiste el 10")
        break
        default :
            alert("no sabe no contesta")
    }
}) 
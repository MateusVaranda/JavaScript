function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        // BOM DIA  
        img.src = '../fotos/nascer-sol.jpg'
    } else if (hora >= 12 && hora <= 18) {
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        // BOA TARDE
        img.src = '../fotos/sol-tarde.jpg'
    } else {
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        // BOA NOITE
        img.src = '../fotos/noite.jpg'
    }
}
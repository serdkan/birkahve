let arrow = ()=>{

    let isim = prompt("isim ney");
    let soyisim = prompt("soyisim ney");
    let parola = prompt("parlonızı girin");

    function kisibulma(){
        if(isim == "burak" && soyisim == "üçkardeş" && parola == 1925){
            alert(`Hoşgeldiniz ${isim} Bey`);
        }
        if(isim == "serdar" && soyisim  == "kandıran" && parola == 5291){
            alert(`Hoşgeldiniz ${isim} Bey`);
        }
        if(isim == "ali" && soyisim  == "üçkardeş" && parola == 2016){
            alert(`Hoşgeldiniz ${isim} Bey`);
        }
        if(isim == "ömer" && soyisim  == "üçkardeş" && parola == 4525){
            alert(`Hoşgeldiniz ${isim} Bey`);
        }
        else{
        alert("girdiğiniz bilgi(ler) yanlış");
        }
    }
    kisibulma();
}

arrow();
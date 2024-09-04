let kullaniciGirisi = prompt("Lütfen bir sayı girin:");

function sayiyaCevir(sayiDegerİ) {
    let sayi = parseFloat(sayiDegerİ);
    return sayi;
}

let deger = sayiyaCevir(kullaniciGirisi);      

console.log("Girilen sayının değeri: " + deger);


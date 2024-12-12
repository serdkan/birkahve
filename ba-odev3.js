function yasHesapla() {

    let yil1 = prompt("Doğum yılınızı giriniz...");
    let ay1 = prompt("Kaçıncı ayda doğdunuz?sayı ile giriniz...");
    let gun1 = prompt("Ayın kaçında doğdunuz?sayı ile giriniz...");
    
    let yil = Number(yil1);
    let ay = Number(ay1);
    let gun = Number(gun1);

    
    var simdikiTarih = new Date();

    let simdikiYil = simdikiTarih.getFullYear();
    let simdikiAy = simdikiTarih.getMonth() + 1;
    let simdikiGun = simdikiTarih.getDate();



    let kacYas = simdikiYil -yil;

    let kacAy1 = simdikiAy-ay;
    let kacAy2 =kacYas*12;
    let kacAy= kacAy2-kacAy1;

    let kacGun1 = kacYas*365;
    let kacGun2 = simdikiAy-ay;
    let kacGun3 = simdikiGun-gun;
    let kacGun4 = kacGun1+kacGun2;
    let kacGun = kacGun4+kacGun3;

    let kacSaat = kacGun*24;




    console.log(kacYas + " " + "Sene yaşadınız!");
    console.log(kacAy + " " + "Ay yaşadınız!");
    console.log(kacGun + " " + "Gün yaşadınız!");
    console.log(kacSaat + " " + "Saat yaşadınız!");
    

    
}

yasHesapla()
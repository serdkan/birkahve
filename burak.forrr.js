function carpaniYazdir(sayi) {
    console.log(`${sayi} sayısının çarpanları:`);

    for (let i = 1; i <= sayi; i++) {
        if (sayi % i === 0) {
            console.log(i);
        }
    }
}
carpaniYazdir(24);
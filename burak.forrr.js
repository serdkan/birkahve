function carpaniYazdir(sayi) {
    console.log(`${sayi} sayısının çarpanları:`);

    for (let i = 1; i <= 10; i++) {
        if (sayi % i === 0) {
            console.log(i);
        }
    }
}
carpaniYazdir(24);
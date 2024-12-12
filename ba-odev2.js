let yildiz = " ";
let yildizKarmasi = [];

for (let i= 0; i<11; i++) {

    yildiz = yildiz + "*";
    console.log(yildiz);
    yildizKarmasi.push(yildiz);
    
}

for (let x = 9; x>-1; x--)
{
    console.log(yildizKarmasi[x]);
}
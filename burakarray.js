const alışverişListesi = [
  {
    kategori: "Sebzeler",
    ürünler: [
      {
        id: 1,
        isim: "Patates",
        miktar: 2,
        birim: "kg",
        fiyat: 10.0,
      },
      {
        id: 2,
        isim: "Domates",
        miktar: 1.5,
        birim: "kg",
        fiyat: 12.0,
      },
    ],
  },
  {
    kategori: "Meyveler",
    ürünler: [
      {
        id: 3,
        isim: "Elma",
        miktar: 1,
        birim: "kg",
        fiyat: 15.0,
      },
      {
        id: 4,
        isim: "Muz",
        miktar: 6,
        birim: "adet",
        fiyat: 18.0,
      },
    ],
  },
  {
    kategori: "Süt ve Ürünleri",
    ürünler: [
      {
        id: 5,
        isim: "Süt",
        miktar: 1,
        birim: "Litre",
        fiyat: 8.0,
      },
      {
        id: 6,
        isim: "Peynir",
        miktar: 250,
        birim: "gram",
        fiyat: 25.0,
      },
    ],
  },
  {
    kategori: "Ekmek ve Unlu Mamuller",
    ürünler: [
      {
        id: 7,
        isim: "Ekmek",
        miktar: 2,
        birim: "adet",
        fiyat: 5.0,
      },
      {
        id: 8,
        isim: "Kraker",
        miktar: 1,
        birim: "paket",
        fiyat: 7.0,
      },
    ],
  },
];

console.log(alışverişListesi[0].ürünler[0].isim);
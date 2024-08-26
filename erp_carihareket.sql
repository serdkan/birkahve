create table erp_carihareket
(
 id int NOT NULL,
 cariId int NOT NULL,
 tarih date NOT NUll,
 belgeNo nvarchar(30) NOT NULL,
 aciklama nvarchar(50) NOT NULL,
 borc decimal(18,2) NOT NULL,
 alacak decimal(18,2) NOT NULL,
 dovizTuruId int NOT NULL,
 tur int NOT NULL
)
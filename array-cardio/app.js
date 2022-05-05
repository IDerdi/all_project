const inventors=[
    { first:"Albert", last:"einstein", year:"1879", passed:"1955" },
    { first:"Isaac", last:"Newton", year:"1643", passed:"1727" },
    { first:"Galileo", last:"Galilei", year:"1564", passed:"1642" },
    { first:"Marie", last:"Curie", year:"1867", passed:"1934" },
    { first:"Johannes", last:"Kepler", year:"1571", passed:"1630" },
    { first:"Nicolaus", last:"Copernicus", year:"1473", passed:"1543" },
    { first:"Max", last:"Planck", year:"1858", passed:"1947" },
]

const people= ["Beck, Glenn", "Becker, Carl", "Backet, Samuel", "Beddoes, Mick", "Beecher, Henry", "Bethoven, Ludwig", "Begin, Menachem"]




//arrray.prototype.filter()
//1500'lerde doğanlar için mucitlerin listesini filtreleyin

console.table(inventors.filter(inventor => inventor.year>=1500 && inventor.year<1600 ))


//array.protottype.map() 
//bize mucitlerin ad ve soyadlarının bir dizisini verin

console.log(inventors.map(inventor => inventor.first +" "+ inventor.last))



//array.prototype.sort
//mucitleri büyükten küçüğe doğum gününe göre sırala

inventors.sort( (a,b)=> a.year>b.year ? 1 :-1 )

console.table(inventors)


//array.prototype.reduce
//toplam tüm mucitler kaç yıl yaşadı

const intotal= inventors.reduce((acc, sayi) => acc + (sayi.passed-sayi.year), 0)

console.log(intotal)

//array.prototype.sort
//mucitleri yaşlıdan gence göre sıralayın

console.table(inventors.sort((a,b) =>{

   const lastMAn=a.passed - a.year
   const firtsMAn=b.passed - b.year
   
   return  lastMAn>firtsMAn ? -1 : 1

}))

//altaki linke giderek Boulevards in parisin linklerinin içindeki textcontentlerini içinde "de" bulunan cümleleri al
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category=document.querySelector(".mw-category");
// const links =[...category.querySelectorAll("a")];
// const de=links.map(link => link.textContent)
//               .filter(streetName => streetName.includes("de"));




//BEDEN KİTLE ENDEKSİ HESAPLAMA


let agirlik = Number(prompt("Vücut ağırılığınızı kg olarak giriniz: "));
let boy = Number(prompt("Boy uzunluğunuzu metre olarak giriniz: "));

let bke = agirlik/(boy*boy);

if(bke <= 18.5){
    alert("İdeal kilonun altında.");
}
else if(bke > 18.5 && bke < 24.9){
    alert("İdeal kiloda.");
}
else if(bke > 25 && bke < 29.9){
    alert("İdeal kilonun üzerinde.");
}
else if(bke > 30 && bke < 39.9){
    alert("İdeal kilonun üsütünde (obez).");
}
else if(bke > 40){
    alert("İdeal kilonun çok üstünde (morbid obez).");
}
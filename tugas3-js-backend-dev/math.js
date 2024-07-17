function hitungLuasLingkaran (jariJari){
    let luas = Math.PI * jariJari * jariJari;
    return luas;
}

let jariJari = 5;
let luas = hitungLuasLingkaran(jariJari);
console.log(`luas lingkaran dengan jari jari ${jariJari} adalah : ${luas.toFixed(2)}`);


function kuadratArray (angkaArray){
    let hasilKuadrat = angkaArray.map((angka) =>{
        return angka * angka;
    });
    return hasilKuadrat;
}

let angkaArray = [1,2,3,4,5];
let hasil = kuadratArray(angkaArray);
console.log(`array asal : ${angkaArray}`);
console.log(`arra hasil kuadrat : ${hasil}`);
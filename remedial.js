var ganjil = []
var genap = []
var jumlah = []
do{
    var input = prompt('Masukan Angka')
    if(Number.isInteger(parseInt(input))){
        if(input % 2 == 0){
            genap.push(parseInt(input))
        }else if(input % 2 !=0){
            ganjil.push(parseInt(input))
        }else{
            jumlah.push(parseInt(input))
        }
    }
}while(Number.isInteger(parseInt(input)))

function printData(arr){
    var hasil = ''
    for(var i = 0 ; i < arr.length ; i++){
        hasil += arr[i] + ','
    }
    return hasil
}


function firstAndLast(array) {

// var jumlah = []
// var nilai = str.substring(0,totalJumlah.length-1)
//     return nilai

// }
var firstItem = jumlah[0];
var lastItem = jumlah[jumlah.length-1];

    var output = {
    hasil : firstItem + lastItem
    }
    return output
}

var printNilai = firstAndLast(jumlah)
var printGanjil = printData(ganjil)
var printGenap = printData(genap)


var totalGenap = 0
for(var i = 0 ; i < genap.length ; i++){
    totalGenap += parseInt(genap[i])
}

var totalGanjil = 0
for(var i = 0 ; i < ganjil.length ; i++){
    totalGanjil += parseInt(ganjil[i])
}

var totalJumlah = 0
for(var i = 0 ; i < jumlah.length ; i++){
    totalJumlah += parseInt(jumlah[i])
}

var totalJumlah = totalGanjil + totalGenap
var rataRataJumlah = parseInt(genap.length + ganjil.length/totalJumlah)




document.getElementById('hasil').innerHTML = 'Jumlah angka awal akhir = ' + printNilai + '<br>Angka Ganjil = ' + printGanjil + '<br>Angka Genap = ' + printGenap + '<br>Jumlah Angka = ' + totalJumlah + '<br>Rata-rata angka = ' + rataRataJumlah 

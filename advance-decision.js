/* bikin loop sampe 1000
kalau misal ketemu angka yang habis dibagi 3 outputkan => fizz
kalau misal ketemu angka yang habis dibagi 5 outputkan => buzz
kalau misal ketemu angka yang habis dibagi 3 dan 5 outputkan => fizzbuzz
selain itu, outputkan angkanya */

for (let i = 1; i <= 1000; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('fizzbuzz');
    }
    else if(i % 3 == 0){
        console.log('fizz');
    }
    else if(i % 5 == 0 ){
        console.log('buzz');
    }
    else {
        console.log(i);
    } 
}
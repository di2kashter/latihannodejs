const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput(callback) {
    rl.question('masukan angka 1- 7 : ', (answer) => {
        callback(answer);
    });
}


function processInput(answer) {

    let number = parseInt(answer);

    if (isNaN(number)) {
        console.log("Input bukan angka");
        getInput(processInput);
    } else {
        if (number < 1 || number > 7) {
            console.log(" angka harus 1 - 7");
            getInput(processInput);
        } else {

            if (number % 2 === 0) {
                console.log(number + " adalah genap");
            } else {

                console.log(number + " adalah ganjil");
            }







            let dayName;

            switch (number) {
                case 1:
                    dayName = "Senin";
                    break;
                case 2:
                    dayName = "Selasa";
                    break;
                case 3:
                    dayName = "rabu";
                    break;
                case 4:
                    dayName = "kamis";
                    break;
                case 5:
                    dayName = "jumat";
                    break;
                case 6:
                    dayName = "sabtu";
                    break;
                case 7:
                    dayName = "minggu";
                    break;
            }

            console.log(`hari ke ${number} adalah : ${dayName}`);

            rl.close();
        }
    }
}

getInput(processInput);
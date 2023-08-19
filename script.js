var bill1,bill2,bill3,tip1,tip2,tip3;

bill1 = parseFloat(prompt("Enter First restorent bill : "));
bill2 = parseFloat(prompt("Enter Second restorent bill : "));
bill3 = parseFloat(prompt("Enter third restorent bill : "));

console.log(bill1);
console.log(bill2);
console.log(bill3);


function caltip ( bill){
    if (bill<1000) {
        return parseFloat(0.2*bill);
    }

    else if (bill>1000 && bill < 1500){
            return parseFloat( 0.15*bill);
    } 

    else {
        return parseFloat(0.1*bill);
    }

}
tip1 = caltip(bill1);
tip2 = caltip(bill2);
tip3 = caltip(bill3);

console.log(tip1);
console.log(tip2);
console.log(tip3);

const tip = [];
const total= [];

tip.push(tip1);
tip.push(tip2);
tip.push(tip3);

total.push(tip1+bill1);
total.push(tip2+bill2);
total.push(tip3+bill3);

alert("total tip of all restorent : " + tip );
alert("total of the all restorent : " + total );










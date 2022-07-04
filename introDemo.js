let harryAttack = 25;
let lordVAttack = 35;


if(harryAttack > lordVAttack){
    console.log("Harry has a better attack than Lord V");
} else if(lordVAttack > harryAttack){
    console.log("Lord V has a better attack than Harry")
} else {
    console.log("Harry and Lord V have the same attack")
}

let harryHealth = 100;
let harryDefense = 0;

// Lord V attacks harry
console.log('Lord V attacks Harry --> "Avra kadavra"')
if( harryHealth <= lordVAttack){
    console.log("Harry has been slain")
} else {
    harryHealth -= lordVAttack;
    console.log('Harrys health is down ${harryHealth}')
}
//harry picks up a shield
harryDefense += 25;

if(harryHealth <=  (lordVAttack-harryDefense)){
    console.log("harry has been slain")
} else {
    harryHealth -= (lordVAttack-harryDefense)
    console.log('Harrys health is down ${harrthealth}')

    }
    //townsperson gives harry a shield
    let healthKit = 50;
    
    if((harryHealth+healthKit)>=100){
        harryHealth = 100
    } else{
        harryHealth += healthKit;
    }
    console.log('harry got some help. Health is now ${harryHealth');
    
    let coinTossHeads = false;
    if(coinTossHeads !== false){
        console.log("The fight continues");
    } else {
        console.log("Harry is allowed to run away");
    }

    for(let i=0; i<5; i++){
        if(harryHealth <= 0){
            console.log("Harrys has been slaid")
        }
        harryHealth -= (lordVAttack - harryDefense)
        console.log('Harrys health is ${harryhealth}');
    }

while(harryHealth > 0){
    harryHealth -= (lordVAttack - harryDefense)
    console.log('Harrys health is ${harryhealth}');
    
    if(harryHealth <= 0)
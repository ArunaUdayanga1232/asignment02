const dice1 = document.querySelector('.dice1');
const dice2 = document.querySelector('.dice2');

const rollBtn = document.querySelector('.roll');





const randomDice = () =>{

    const random = Math.floor(Math.random() * 10);

    if(random >= 1 && random <= 6){

        rollDice(random);

    }else{

        randomDice();

    }

}

const randomDice2 = () =>{

    const random = Math.floor(Math.random() * 10);

    if(random >= 1 && random <= 6){

        rollDice2(random);

    }else{

        randomDice2();

    }

}



const rollDice = random =>{

    dice1.style.animation = 'rolling 4s';

    setTimeout(() =>{

        switch (random) {

            case 1: dice1.style.transform = 

            'rotateX(0deg) rotateY(0deg)';

            break;

            case 6: dice1.style.transform = 

            'rotateX(180deg) rotateY(0deg)';

            break;

            case 2: dice1.style.transform = 

            'rotateX(-90deg) rotateY(0deg)';

            break;

            case 5: dice1.style.transform = 

            'rotateX(90deg) rotateY(0deg)';

            break;

            case 3: dice1.style.transform = 

            'rotateX(0deg) rotateY(90deg)';

            break;

            case 4: dice1.style.transform = 

            'rotateX(0deg) rotateY(-90deg)';

            break;



            default: break;

        }

        dice1.style.animation = 'none';





    },4050);

}
//dice 2 style

const rollDice2 = random =>{

    dice2.style.animation = 'rolling 4s';

    setTimeout(() =>{

        switch (random) {

            case 1: dice2.style.transform = 

            'rotateX(0deg) rotateY(0deg)';

            break;

            case 6: dice2.style.transform = 

            'rotateX(180deg) rotateY(0deg)';

            break;

            case 2: dice2.style.transform = 

            'rotateX(-90deg) rotateY(0deg)';

            break;

            case 5: dice2.style.transform = 

            'rotateX(90deg) rotateY(0deg)';

            break;

            case 3: dice2.style.transform = 

            'rotateX(0deg) rotateY(90deg)';

            break;

            case 4: dice2.style.transform = 

            'rotateX(0deg) rotateY(-90deg)';

            break;



            default: break;

        }

        dice2.style.animation = 'none';





    },4050);

}

rollBtn.addEventListener('click', randomDice);
rollBtn.addEventListener('click', randomDice2);
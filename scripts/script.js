
//get element for box #s
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');

let txtBoxNumber = document.getElementById('boxNumber');
let txtChangeColor = document.getElementById('changeColor');
let btnColor = document.getElementById('btnColor');
let btnReset = document.getElementById('btnReset');


btnColor.addEventListener('click', e => {
boxColorChange();

});

btnReset.addEventListener('click', e =>{
    txtBoxNumber.value = '';
    txtChangeColor.value = '';
    box1.style.backgroundColor = 'white';
    box2.style.backgroundColor = 'white';
    box3.style.backgroundColor = 'white';
    box4.style.backgroundColor = 'white';
    box5.style.backgroundColor = 'white';
    box6.style.backgroundColor = 'white';
    box7.style.backgroundColor = 'white';
    box8.style.backgroundColor = 'white';
    
})



function boxColorChange(){
    let boxNumber = txtBoxNumber.value;   
    let changeColor = txtChangeColor.value;

    
    // switch(boxNumber){

    //     case '1' && changeColor === 'blue':
            
    //             box1.style.backgroundColor = 'blue'
           

    // }
    if(boxNumber === '1' && changeColor === 'blue'){
        box1.style.backgroundColor = 'blue'
    }
    else if(boxNumber === '1' && changeColor === 'red'){
        box1.style.backgroundColor = 'red'
    }
    else if(boxNumber === '1' && changeColor === 'yellow'){
        box1.style.backgroundColor = 'yellow'
    }
    else if(boxNumber === '1' && changeColor === 'brown'){
        box1.style.backgroundColor = 'brown'
    }
    else if(boxNumber === '1' && changeColor === 'purple'){
        box1.style.backgroundColor = 'purple'
    }


    if(boxNumber === '2' && changeColor === 'blue'){
        box2.style.backgroundColor = 'blue'
    }
    else if(boxNumber === '2' && changeColor === 'red'){
        box2.style.backgroundColor = 'red'
    }
    else if(boxNumber === '2' && changeColor === 'yellow'){
        box2.style.backgroundColor = 'yellow'
    }
    else if(boxNumber === '2' && changeColor === 'brown'){
        box2.style.backgroundColor = 'brown'
    }
    else if(boxNumber === '2' && changeColor === 'purple'){
        box2.style.backgroundColor = 'purple'
    }  


    if(boxNumber === '3' && changeColor === 'blue'){
        box3.style.backgroundColor = 'blue'
    }
    else if(boxNumber === '3' && changeColor === 'red'){
        box3.style.backgroundColor = 'red'
    }
    else if(boxNumber === '3' && changeColor === 'yellow'){
        box3.style.backgroundColor = 'yellow'
    }
    else if(boxNumber === '3' && changeColor === 'brown'){
        box3.style.backgroundColor = 'brown'
    }
    else if(boxNumber === '3' && changeColor === 'purple'){
        box3.style.backgroundColor = 'purple'
    }




    if(boxNumber === '4' && changeColor === 'blue'){
        box4.style.backgroundColor = 'blue'
    }
    else if(boxNumber === '4' && changeColor === 'red'){
        box4.style.backgroundColor = 'red'
    }
    else if(boxNumber === '4' && changeColor === 'yellow'){
        box4.style.backgroundColor = 'yellow'
    }
    else if(boxNumber === '4' && changeColor === 'brown'){
        box4.style.backgroundColor = 'brown'
    }
    else if(boxNumber === '4' && changeColor === 'purple'){
        box4.style.backgroundColor = 'purple'
    }





    if(boxNumber === '5' && changeColor === 'blue'){
        box5.style.backgroundColor = 'blue'
    }
    else if(boxNumber === '5' && changeColor === 'red'){
        box5.style.backgroundColor = 'red'
    }
    else if(boxNumber === '5' && changeColor === 'yellow'){
        box5.style.backgroundColor = 'yellow'
    }
    else if(boxNumber === '5' && changeColor === 'brown'){
        box5.style.backgroundColor = 'brown'
    }
    else if(boxNumber === '5' && changeColor === 'purple'){
        box5.style.backgroundColor = 'purple'
    }




    if(boxNumber === '6' && changeColor === 'blue'){
        box6.style.backgroundColor = 'blue'
    }
    else if(boxNumber === '6' && changeColor === 'red'){
        box6.style.backgroundColor = 'red'
    }
    else if(boxNumber === '6' && changeColor === 'yellow'){
        box6.style.backgroundColor = 'yellow'
    }
    else if(boxNumber === '6' && changeColor === 'brown'){
        box6.style.backgroundColor = 'brown'
    }
    else if(boxNumber === '6' && changeColor === 'purple'){
        box6.style.backgroundColor = 'purple'
    }




    if(boxNumber === '7' && changeColor === 'blue'){
        box7.style.backgroundColor = 'blue'
    }
    else if(boxNumber === '7' && changeColor === 'red'){
        box7.style.backgroundColor = 'red'
    }
    else if(boxNumber === '7' && changeColor === 'yellow'){
        box7.style.backgroundColor = 'yellow'
    }
    else if(boxNumber === '7' && changeColor === 'brown'){
        box7.style.backgroundColor = 'brown'
    }
    else if(boxNumber === '7' && changeColor === 'purple'){
        box7.style.backgroundColor = 'purple'
    }



    if(boxNumber === '8' && changeColor === 'blue'){
        box8.style.backgroundColor = 'blue'
    }
    else if(boxNumber === '8' && changeColor === 'red'){
        box8.style.backgroundColor = 'red'
    }
    else if(boxNumber === '8' && changeColor === 'yellow'){
        box8.style.backgroundColor = 'yellow'
    }
    else if(boxNumber === '8' && changeColor === 'brown'){
        box8.style.backgroundColor = 'brown'
    }
    else if(boxNumber === '8' && changeColor === 'purple'){
        box8.style.backgroundColor = 'purple'
    }
    

}

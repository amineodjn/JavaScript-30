const allButtons=document.getElementsByTagName('button');
let copyAllButton=[];
for(let i=0; i<allButtons.length;i++){
copyAllButton.push(allButtons[i].classList[1]);
}

function buttonColorChange(buttonThingy){
   
    if(buttonThingy.value==='red'){
        buttonRed();
    }
    else if(buttonThingy.value==='green'){
        buttonGreen();
    }
    else if(buttonThingy.value==='reset'){
        buttonReset();
    }
    else if(buttonThingy.value==='random'){
        buttonRandom();
    }
    function buttonRed(){
        for(let i=0;i<allButtons.length;i++){
allButtons[i].classList.remove(allButtons[i].classList[1]);
allButtons[i].classList.add('btn-danger');
        }
    }
    function buttonGreen(){
        for(let i=0;i<allButtons.length;i++){
allButtons[i].classList.remove(allButtons[i].classList[1]);
allButtons[i].classList.add('btn-success');
        }
    }
    function buttonReset(){
        for(let i=0;i<allButtons.length;i++){
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add(copyAllButton[i]);
            console.log(copyAllButton);   
    }}
    
    function buttonRandom(){
        const choices=['btn-success','btn-danger','btn-primary','btn-warning']
       
        for(let i=0;i<choices.length;i++){
            const RandNum=Math.floor(Math.random()*4);
            allButtons[i].classList.remove(allButtons[i].classList[1]);
            allButtons[i].classList.add(choices[RandNum]);
        }


    }


}
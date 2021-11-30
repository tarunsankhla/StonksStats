const res = document.querySelector('#result');
const butn = document.querySelector('#btnShow');
const CP = document.querySelector('#currentPrice');
const QS = document.querySelector('#quantityStock');
const IP = document.querySelector('#initiaPrice');

function Calc(){
    
    var initial = IP.value;
    var current = CP.value;
    var quants = QS.value;
    console.log(initial,current,quants);
    if(initial > current){
        //loss
    
        var loss = (initial - current )* quants;
        var LP = (loss/initial) * 100;
        console.log(`Hi ! The loss is ${loss} and percetage ${LP}`);
        res.innerHTML =`Hi ! The loss is ${loss} and percentage ${LP}`
        console.log(LP);
    }else if(current > initial){
        var profit = ( current - initial )* quants;
        var PP = (profit/initial) * 100;
        console.log(`Hi ! The loss is ${profit} and percetage ${PP}`);
        res.innerHTML =`Hi ! The loss is ${profit} and percentage ${PP}`
        console.log(PP);
    }else{
        res.innerHTML = 'No Pain No Gain and No Gain No Pain'
    }
}

butn.addEventListener('click',Calc);



// this is deposit

let btn = document.getElementById('depo')
btn.addEventListener('click',()=>{
    let depoin = document.getElementById('depoIn')
    let depovalue = depoin.value
    let depovp = parseInt(depovalue)
    let depodit = document.getElementById('depos')
    let deposit = depodit.innerText
    let depositp = parseInt(deposit)
    let result = depovp +depositp
    depodit.innerText= result
    depoin.value = ""
// total
    let total = document.getElementById('total')
    let tot = total.innerText
    let totalp =parseInt(tot)
    total.innerText = totalp+ result
})

// this is withraw

document.getElementById('with').addEventListener('click' , function(){
    let within = document.getElementById('withIn');
    let withinvalue = within.value;
    let withinnumber = parseInt(withinvalue);
    let withraw = document.getElementById('Withdraw')
    let withr = withraw.innerText;
    let withra = parseInt(withr)
    let result = withinnumber +withra;
    withraw.innerText = result
    within.value = ""

// this is total
    let total = document.getElementById('total')
    let tot = total.innerText;
    let tota = parseInt(tot)
    total.innerText = tota -result 


})
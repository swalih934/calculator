

txt=""
setInput=(e)=>{
    // txt=""
    txt +=e.target.textContent
    inp.value = txt
}
resultValue=()=>{
    txt=eval(txt)
    inp.value=txt 
}
clearInp=()=>{
    txt=""
    inp.value=txt
}
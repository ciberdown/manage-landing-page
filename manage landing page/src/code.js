function clickHandle(n,that){
    let consChildren = document.getElementById("cons").children;
    let dots = document.getElementById("dots").children;
    //.classList.remove('hidden')
    //console.log(consChildren[n].classList.remove('mobile:hidden'))
    for(let i=0; i<consChildren.length; i++){
        if(i == n){
            consChildren[i].classList.remove('mobile:hidden');
            dots[i].classList.add('bg-orange-600');
        }else{
            consChildren[i].classList.add('mobile:hidden');
            dots[i].classList.remove('bg-orange-600');
        }
    }
    // console.log(consChildren[n])
}
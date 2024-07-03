



function toggle(){

ele = document.getElementsByClassName('c2')

let classes = (ele[0].classList)



if(classes.contains('down')){
    classes.remove('down')
    classes.add('up')
}


else{

    classes.remove('up')
    classes.add('down')

}

}
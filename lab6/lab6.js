var  a;

function changeImage1() {
    a=1;
    document.getElementById("image").src="images/medium/5855774224.jpg";
}

function changeImage2() {
    a=2;
    document.getElementById("image").src="images/medium/5856697109.jpg";

}

function changeImage3() {
    a=3;
    document.getElementById("image").src="images/medium/6119130918.jpg";

}

function changeImage4() {
    a=4;
    document.getElementById("image").src="images/medium/8711645510.jpg";

}

function changeImage5() {
    a=5;
    document.getElementById("image").src ="images/medium/9504449928.jpg";


}

function over() {

    document.getElementById("name").style.opacity='80';

    document.getElementById("name").TransitionDuration='1s';

    if( a===1){
        document.getElementById("name").innerHTML="Battle";

        document.getElementById("image").title="Battle";
    }

    if(a===2){
        document.getElementById("name").innerHTML="Luneburg";

        document.getElementById("image").title="Luneburg";
    }

    if( a===3){
        document.getElementById("name").innerHTML='Bermuda';

        document.getElementById("image").title="Bermuda";

    }

    if( a===4){

        document.getElementById("name").innerHTML='Athens';

        document.getElementById("image").title="Athens";

    }

    if( a===5){
        document.getElementById("name").innerHTML="Florence";

        document.getElementById("image").title="Florence";

    }
}
function out() {

    document.getElementById("name").style.opacity='0';

    document.getElementById("name").TransitionDuration='1s';
}


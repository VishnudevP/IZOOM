
var Wheels = 0;
var Ramp = 0;
var Weight = 0;
var Speed = 0;

function addWheels() {
    Wheels += 1;
    // console.log(Wheels)
    change();
    updateBestScore();

}

function minWheels() {
	if(Wheels >= 1){
    Wheels -= 1;
	change();
		updateBestScore();
    }
}

function addRamp() {
    Ramp += 1;
    // console.log(Ramp)
    change();
    updateBestScore();

}

function minRamp() {
	if(Ramp >= 1){
    Ramp -= 1;
    // console.log(Ramp)
	change();
		updateBestScore();
    }
}

function addWeight() {
	if( Weight >= 0 &&  Weight <=4){
	 Weight += 1;
		updateBestScore();
	}
}
function minWeight() {
	if( Weight >= 1 &&  Weight <=5){
	 Weight -= 1;
		updateBestScore();
	}
}	
function addSpeed() {
	if( Speed >= 0 &&  Speed <=4){
	 Speed += 1;
		updateBestScore();
	}
}
function minSpeed() {
	if( Speed >= 1 &&  Speed <=5){
	 Speed -= 1;
		updateBestScore();
	}
}

function change(){
    var image = document.getElementById('robot');
    if ( Ramp == 0){
    if( Wheels == 1){

    image.src ='data/robot1.png';
    }
      if( Wheels == 2){
   image.src ='data/robot2.png';
    }
    if( Wheels == 3){
   image.src ='data/robot3.png';
    }
    if( Wheels == 4){
   image.src ='data/robot4.png';
    }
    if( Wheels == 0){
        image.src ='data/robotmain.png';
         }
    
}
if (Wheels == 0){
    if(Ramp == 1){
        image.src ='data/robot10.png';
    }
    if(Ramp == 2){
        image.src ='data/robot11.png';
    }
    if(Ramp == 3){
        image.src ='data/robot12.png';
    }
    if( Ramp == 4){
        image.src ='data/robot13.png';
    }
}
if (Wheels == 1){
    if(Ramp == 1){
        image.src ='data/robot20.png';
    }
    if(Ramp == 2){
        image.src ='data/robot21.png';
    }
    if(Ramp == 3){
        image.src ='data/robot22.png';
    }
    if( Ramp == 4){
        image.src ='data/robot23.png';
    }
}
if (Wheels == 2){
    if(Ramp == 1){
        image.src ='data/robot30.png';
    }
    if(Ramp == 2){
        image.src ='data/robot31.png';
    }
    if(Ramp == 3){
        image.src ='data/robot32.png';
    }
    if( Ramp == 4){
        image.src ='data/robot33.png';
    }
}
if (Wheels == 3){
    if(Ramp == 1){
        image.src ='data/robot40.png';
    }
    if(Ramp == 2){
        image.src ='data/robot41.png';
    }
    if(Ramp == 3){
        image.src ='data/robot42.png';
    }
    if( Ramp == 4){
        image.src ='data/robot43.png';
    }
}
if (Wheels == 4){
    if(Ramp == 1){
        image.src ='data/robot50.png';
    }
    if(Ramp == 2){
        image.src ='data/robot51.png';
    }
    if(Ramp == 3){
        image.src ='data/robot52.png';
    }
    if( Ramp == 4){
        image.src ='data/robot53.png';
    }
}
}


function updateBestScore() {
    
    var   Wheels_weight = 0;
    var Ramp_weight = 0;
    var Weight_weight = 0;
    var  Speed_weight = 0;
    var Best_calc = 0;
        
        if(  Wheels == 0 ){
                Wheels_weight = 0;
          }
          if(    Wheels == 1 ){
                Wheels_weight = 0.2;
          }
          if(    Wheels == 2 ){
                Wheels_weight = 0.4;
          }
          if(    Wheels == 3 ){
                Wheels_weight = 1;
          }
          if(    Wheels == 4 ){
                Wheels_weight = 0.6;
          }

    
          if(  Ramp == 0){
              Ramp_weight = 0;
          }
          if(  Ramp == 1){
              Ramp_weight = 0.2;
          }
          if(  Ramp == 2){
              Ramp_weight = 1;
          }
          if(  Ramp == 3){
              Ramp_weight = 0.4;
          }
          if(  Ramp == 4){
              Ramp_weight = 0.6;
          }

        
          if(  Weight == 0){
              Weight_weight = 0;
          }
          if(  Weight == 1){
              Weight_weight = 0.5;
          }
          if(  Weight == 2){
              Weight_weight = 1;
          }
          if(  Weight == 3){
              Weight_weight = 0.75;
          }
          if(  Weight == 4){
              Weight_weight = 0.3;
          }
      
          if(   Speed == 0){
               Speed_weight = 0;
          }
          if(   Speed == 1){
               Speed_weight = 0.2;
          }
          if(   Speed == 2){
               Speed_weight = 0.4;
          }
          if(   Speed == 3){
               Speed_weight = 1;
          }
          if(   Speed == 4){
               Speed_weight = 0.6;
          }

              

        Best_calc = (  Wheels_weight*30.0)+(Ramp_weight*40.0)+(Weight_weight*10.0)+( Speed_weight*20.0);
          document.getElementById("percent").innerHTML = Best_calc + '%';
        
        const progressBar = document.getElementsByClassName('progress-bar')[0]
        setInterval(() => {
          const computedStyle = getComputedStyle(progressBar)
          const width = Best_calc;
      progressBar.style.setProperty('width',width)
    }, 5)
        
      
    }
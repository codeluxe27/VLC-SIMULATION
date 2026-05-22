
    document.getElementsByTagName('body')[0].addEventListener('contextmenu' , (event)=>{
            event.preventDefault()
    })
    //////////////////////////// VLC //////////////// 
    





let fermer_calc = document.getElementById('fermer_calc');
let mainApp = document.getElementById('mainApp');

const vlc_instance = document.getElementById('vlc_instance');

function close(){
    vlc_instance.style.transition = '.2s opacity 0s';

   vlc_instance.style.transform = 'scale(.98)';
   vlc_instance.style.opacity = '.4';

   setTimeout(()=>{
        vlc_instance.style.display = 'none'
    }, 100)
}

function open(){
    vlc_instance.style.transition = '.2s opacity 0s';


   setTimeout(()=>{
   vlc_instance.style.transform = 'scale(1)';
   vlc_instance.style.opacity = '1';

}, 90)
        vlc_instance.style.display = 'block'

}




            const ci_width = vlc_instance.offsetWidth;
            const calc_header2 = document.getElementById('calc_header');
         
            function resize(){
            } 
     let underlined_letters = ["M","l", "A", "V", "t", "s","i", "H"]
            let span_opt = document.querySelectorAll('#topOptions span')
            for(let el in span_opt){
            
            try{
              

                if(span_opt[el].innerHTML.includes(underlined_letters[el])){
                    span_opt[el].innerHTML = span_opt[el].innerHTML.replace(underlined_letters[el], `<u>${underlined_letters[el]}</u>`) 
                }
            }catch(e){

            }
            }
            let currentVideo = document.getElementById('currentVideo');
            
            let playimg = document.querySelector('#playBtn img');

            let playBtn = document.getElementById('playBtn');

            //Manage time defilling 
            let exo = document.getElementById('exo');
            let exo2 = document.getElementById('exo2');
            function converter(numeric){
                let calc_min = (numeric / 60);
                calc_min = parseInt(calc_min);
                calc_min = (calc_min < 10)? '0' + calc_min:calc_min;

                let calc_sec = Math.ceil(numeric - (calc_min * 60))
                calc_sec = (calc_sec < 10)? '0' + calc_sec:calc_sec;
                    return([calc_sec, calc_min])



}

        // Repeat fonction
        let isLooped  = false ; 
    let repeat = document.getElementById('repeat')  ; 
    
    repeat.onclick = ()=>{
        if(isLooped){
            currentVideo.removeAttribute('loop') ;
            repeat.style.background =  'transparent'
            
        }else{
            currentVideo.setAttribute('loop' , 'loop')
             repeat.style.background =  'linear-gradient(to bottom,  rgb(231, 245, 253), rgb(172, 220, 247))'

        }
       
        isLooped =  ! isLooped
       
        
    }
    repeat.onmouseenter = ()=>{
        if( ! isLooped){

            repeat.style.background =  'linear-gradient(to bottom,  rgb(231, 245, 253), rgb(172, 220, 247))'
             }
       
 }
 repeat.onmouseout = ()=>{
    if( ! isLooped){
      
        repeat.style.background =  'transparent'
         }
   
}


        // Control defilling
            let dv111 = document.getElementById('dv111');
            let dv11 = document.getElementById('dv11');
            let displayLevel;
///////////////////////////////////////////////////////////////////////////////////////////
let defiling2 = false;
            dv11.addEventListener('mousedown', (e)=>{
                defiling2 = true
                if(defiling2){
                dv111.style.width = (e.offsetX)+ 'px';
                let currentTiming = e.offsetX * currentVideo.duration /( document.getElementsByTagName('body')[0].offsetWidth - 100 );
                currentVideo.currentTime = currentTiming
                exo.innerHTML = `${converter(currentVideo.currentTime)[1]}:${converter(currentVideo.currentTime)[0]}`;
                }
            })

            dv11.addEventListener('mousemove', (e)=>{
                if(defiling2){
                dv111.style.width = (e.offsetX)+ 'px';
                let currentTiming = e.offsetX * currentVideo.duration / ( document.getElementsByTagName('body')[0].offsetWidth - 100 ) ;
                currentVideo.currentTime = currentTiming
                exo.innerHTML = `${converter(currentVideo.currentTime)[1]}:${converter(currentVideo.currentTime)[0]}`;
                
                }
            })

            document.addEventListener('mouseup', (e)=>{
                defiling2 = false;
            })
/////////////////////////////////////////////////////////////////////////////////


            
            // Manage video progressing
            
                dv111.style.width = '2px';

            currentVideo.addEventListener('timeupdate', ()=>{
                let totalDefil = document.getElementsByTagName('body')[0].offsetWidth - 100
                
                displayLevel = (Math.ceil(currentVideo.currentTime * totalDefil / currentVideo.duration)) + 'px';


                
                dv111.style.width = displayLevel;
                
                exo.innerHTML = `${converter(currentVideo.currentTime)[1]}:${converter(currentVideo.currentTime)[0]}`
                exo2.innerHTML = `${converter(currentVideo.duration)[1]}:${converter(currentVideo.duration)[0]}`

              
            })







            document.addEventListener('keydown' , (event)=>{
                if( event.key == ' '){
                
                if(currentVideo.paused){
                    currentVideo.play()
                   playimg.src = 'Wallpaper/icons8-pause-90.png' 

                }else{
                   playimg.src = 'Wallpaper/icons8-play-96.png' 
                    

                    currentVideo.pause()

                
            }
        }
    }
            )

            playBtn.addEventListener('click', ()=>{
                if(currentVideo.paused){
                    currentVideo.play()
                   playimg.src = 'Wallpaper/icons8-pause-90.png' 

                }else{
                   playimg.src = 'Wallpaper/icons8-play-96.png' 
                    

                    currentVideo.pause()

                }
            })
            // Managing next and previous

            let listOfMusic = ["damso_moroze.mp4" ,"damso_fibonacci.mp4" , "damso_wolof.mp4"];
            let next = document.getElementById('next');
            let previous = document.getElementById('previous');
            let current_music = 0;

            next.addEventListener('click', ()=>{

                exo2.innerHTML = '00:00';
                currentVideo.currentTime = 0;

                switch(current_music){
                    case 0:
                     currentVideo.src = currentVideo.src.replace(listOfMusic[0], listOfMusic[1])
                     current_music += 1;
                     break;

                    case 1: 
                     currentVideo.src = currentVideo.src.replace(listOfMusic[1], listOfMusic[2])
                     current_music += 1;
                     break;

                    case 2: 
                     currentVideo.src = currentVideo.src.replace(listOfMusic[2], listOfMusic[0])
                     current_music = 0;
                     break;

                    default:
                    pass;
                    

                }
            })




            previous.addEventListener('click', ()=>{
                exo2.innerHTML = '00:00';
                currentVideo.currentTime = 0;

                
                switch(current_music){
                    case 0:
                     currentVideo.src = currentVideo.src.replace(listOfMusic[0], listOfMusic[2])
                     current_music = 2;
                     break;

                    case 1: 
                     currentVideo.src = currentVideo.src.replace(listOfMusic[1], listOfMusic[0])
                     current_music = 0;
                     break;

                    case 2: 
                     currentVideo.src = currentVideo.src.replace(listOfMusic[2], listOfMusic[1])
                     current_music = 1;
                     break;

                    default:
                    pass;
                    

                }
            })

            // Cool , now manage stop
            let stop = document.getElementById('stop');
            stop.addEventListener('click', ()=>{
                currentVideo.currentTime = 0;
                if(currentVideo.played){
                   playimg.src = 'Wallpaper/icons8-play-96.png' 
                    currentVideo.pause()
                }
            })
           // Volume Configuration
            //Level 1 : click
            let displayVolume = document.getElementById('display_volume')
            let volume2 = document.getElementById('volume2')
            let volume = document.getElementById('volume')
            
            let defilVolume = document.getElementById('defil_volume');
            let defiling = false;
            
            volume.addEventListener('click', (e)=>{
                volume2.style.width = (e.offsetX - 21 )+ 'px';
                displayVolume.innerHTML = Math.ceil(currentVideo.volume * 100) + '%'
                let actualVolume = e.offsetX / 120;
                try{
                currentVideo.volume = actualVolume;

                }catch{
                currentVideo.volume = 1;

                }
            })


            volume.addEventListener('mousedown', (e)=>{
                defiling = true

                volume2.style.width = (e.offsetX - 21 )+ 'px';
                
                let actualVolume = e.offsetX / 120;
                try{
                currentVideo.volume = actualVolume;

                }catch{
                currentVideo.volume = 1;

                }
            })

            volume.addEventListener('mousemove', (e)=>{
                if(defiling){
                volume2.style.width = (e.offsetX - 21 )+ 'px';
                
                let actualVolume = e.offsetX / 120;
                try{
                currentVideo.volume = actualVolume;

                }catch{
                currentVideo.volume = 1;

                }
                }
            })

            volume.addEventListener('mouseup', (e)=>{
                defiling = false;
                volume2.style.width = (e.offsetX - 21 )+ 'px';
                
                let actualVolume = e.offsetX / 120;
                try{
                currentVideo.volume = actualVolume;

                }catch{
                currentVideo.volume = 1;

                }
            })

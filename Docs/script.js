
// Remplir les options 
                    let media = document.getElementById('media') ;
                    const mediaExemp = [
    {
        "iconPresent": true,
        "iconSrc": "play.svg",
        "text": "Ouvrir un fichier...",
        "raccourci": "Ctrl+O",
        "isActivated": true , 
        "id" : "Open"
    },
    {
        "iconPresent": true,
        "iconSrc": "play.svg",
        "text": "Ouvrir plusieurs fichiers...",
        "raccourci": "Ctrl+Shift+O",
        "isActivated": true
    },
    {
        "iconPresent": true,
        "iconSrc": "folder.svg",
        "text": "Ouvrir un dossier...",
        "raccourci": "Ctrl+F",
        "isActivated": true
    },
    {
        "iconPresent": true,
        "iconSrc": "disc.svg",
        "text": "Ouvrir un disque...",
        "raccourci": "Ctrl+D",
        "isActivated": true
    },
    {
        "iconPresent": true,
        "iconSrc": "network.svg",
        "text": "Ouvrir un flux réseau...",
        "raccourci": "Ctrl+N",
        "isActivated": true
    },
    {
        "iconPresent": true,
        "iconSrc": "capture.svg",
        "text": "Ouvrir un périphérique de capture...",
        "raccourci": "Ctrl+C",
        "isActivated": true
    },
    {
        "iconPresent": false,
        "iconSrc": "iconNotPresent",
        "text": "Ouvrir un emplacement depuis le presse-papier",
        "raccourci": "Ctrl+V",
        "isActivated": true
    },
    {
        "iconPresent": false,
        "iconSrc": "iconNotPresent",
        "text": "Médias récents",
        "raccourci": null,
        "isActivated": true,
        "hasSubmenu": true
    },
    {
        "iconPresent": false,
        "iconSrc": "iconNotPresent",
        "text": "Enregistrer la liste de lecture...",
        "raccourci": "Ctrl+Y",
        "isActivated": true
    },
    {
        "iconPresent": false,
        "iconSrc": "iconNotPresent",
        "text": "Convertir / Enregistrer...",
        "raccourci": "Ctrl+R",
        "isActivated": true
    },
    {
        "iconPresent": true,
        "iconSrc": "wire.svg",
        "text": "Diffuser...",
        "raccourci": "Ctrl+S",
        "isActivated": true
    },
    {
        "iconPresent": false,
        "iconSrc": "iconNotPresent",
        "text": "Quitter à la fin de la liste de lecture",
        "raccourci": null,
        "isActivated": true
    },
    {
        "iconPresent": true,
        "iconSrc": "quit.svg",
        "text": "Quitter",
        "raccourci": "Ctrl+Q",
        "isActivated": true
    }
];


function selectFile() {

    // Création dynamique
    const input = document.createElement("input");

    input.type = "file";

    // Types autorisés (optionnel)
    input.accept = "*";

    // Quand un fichier est choisi
    input.onchange = (event) => {

        const file = event.target.files[0];

        if(file) {
            const videoURL = URL.createObjectURL(file);
            document.getElementById('currentVideo').src = videoURL;
            document.getElementById('currentVideo').play() ;
            currentVideo.currentTime = 0;
            dv111.style.width  = 0 ; 

                if(currentVideo.played){
                   playimg.src = 'Wallpaper/icons8-play-96.png' 
               
                }
        }
    };

    // Ouvre la fenêtre
    input.click();
}

document.addEventListener('keydown', function(event) {
    // Vérifier si Ctrl est enfoncé et si la touche est 'o' (ou 'O')
    if (event.ctrlKey && (event.key === 'o' || event.key === 'O')) {
        event.preventDefault();  // Empêche le navigateur d'ouvrir son dialogue
        selectFile()
    }
});

                    function ActOption(srcId, actived ){
                        document.getElementById(srcId).onclick = () =>{
                            actived.style.display = actived.style.display == 'none' ? 'flex'  :  'none' ;
                        }             
                    }
                    document.getElementsByTagName('body')[0].onclick = (event)=>{
                    if(event.target != document.getElementById('mediaAct')){
                            document.getElementById('media').style.display = 'none'
                    }
                    }
                    ActOption('mediaAct', document.getElementById('media') )

                    function options(exemplaire , space){
                        for(let el in exemplaire){
                            space.innerHTML += `
                                <span class="mediaItem" ${ exemplaire[el].id == 'Open' ? "onClick = 'selectFile()'"  :  ''}>
                                    <img src="Wallpaper/${exemplaire[el].iconSrc}" style='opacity  : ${exemplaire[el].iconPresent ? '1' : '0'}' alt="" class="mediaItemIcon">
                                    <span class="spacing" > </span>
                                    <span class="mediaItemLbl">${exemplaire[el].text}</span>
                                    <span class="mediaItemShort">${exemplaire[el].raccourci == null ? '' : exemplaire[el].raccourci}</span>
                    </span>
                            `
                        }
                    }
                    options(mediaExemp , media)


document.getElementsByTagName('body')[0].addEventListener('contextmenu' , (event)=>{
            event.preventDefault()
    })
    //////////////////////////// VLC //////////////// 
    




  
            
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
      //          if(){

        //        }
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

           
            let next = document.getElementById('next');
            let previous = document.getElementById('previous');
            let current_music = 0;

            next.addEventListener('click', ()=>{

                exo2.innerHTML = '00:00';
                currentVideo.currentTime = 0;

                
            })




            previous.addEventListener('click', ()=>{
                exo2.innerHTML = '00:00';
                currentVideo.currentTime = 0;

                
              

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

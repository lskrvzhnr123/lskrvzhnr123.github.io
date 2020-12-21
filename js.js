function navSlide() {
    const lines = document.querySelector(".lines");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    lines.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        lines.classList.toggle("toggle");
    });
    
}

navSlide();

	var video = document.querySelectorAll('video')
	video.forEach(play => play.addEventListener('click', () =>{
	play.classList.toggle('active');
	if(play.paused){
		play.play();
	} else{
		play.pause();
		play.currentTime = 0;
	}
}));

var qq = document.getElementsByClassName('QA');
var a;
var b = qq.length;
for(i=0; i<b; i++){
	qq[i].addEventListener('click', function(){
		this.classList.toggle('active');
		var drop = this.nextElementSibling;
		if(drop.style.maxHeight){
			drop.style.maxHeight = null;
		} else {
			drop.style.maxHeight = drop.scrollHeight + 'px'
		}
	})
}

const sr = ScrollReveal({
	origin: 'top',
	distance: '40px',
	duration: 2000,
	reset: false
});

sr.reveal('.box',{
	origin:'right', 
})

sr.reveal('.teach, .block, .adh2',{ 
})

sr.reveal('.about, .container-QA',{ 
})

sr.reveal('.video, .QA, .advantages',{ interval: 200
})


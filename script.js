
function darkModeEnable(){


    let toggle = document.querySelectorAll('.toggle');
    let moon = document.querySelectorAll('#moon');
    let sun = document.querySelectorAll('#sun');
    let darkMode = false;
    
    toggle.forEach((elements) => {
        elements.addEventListener('click', () => {
            if (!darkMode) {
                document.body.classList.add('dark-mode')
                moon.forEach((moonElem) => {
                    moonElem.style.display = "none";
                });
                sun.forEach((sunElem) => {
                    sunElem.style.display = "initial";
                });
                darkMode = true;
            } else {
                document.body.classList.remove('dark-mode')
                moon.forEach((moonElem) => {
                    moonElem.style.display = "initial";
                });
                sun.forEach((sunElem) => {
                    sunElem.style.display = "none";
                });
                darkMode = false;
    
            }
        })
    })
    
    }
    darkModeEnable();
    
    let openNav = document.querySelector('#open-navbar');
    let closeNav = document.querySelector('#cross-nav');
    let responsiveNav = document.querySelector('.responsive-navbar');
    openNav.addEventListener('click', () => {
        responsiveNav.style.right = "0%"
    })
    closeNav.addEventListener('click', () => {
        responsiveNav.style.right = "-100%"
    })   
window.addEventListener("load", () =>{
    // preload
    document.querySelector(".preloader").classList.add("fade-out");
    setTimeout(() =>{
        document.querySelector(".preloader").style.display = "none";
    }, 1000)
})



gsap.from(".txts", {
    scrollTrigger:{
        trigger:"#about-section",
        start:"top 5%",
        end :"20% 20%",
        scrub:4,
        markers:true,

    },
    opacity: 0,
    y: '40',
    autoAlpha: 1,
    stagger: .5,

  })


  




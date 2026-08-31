/*=========================================
    OLD VELVET CAFE
    script.js
    Part 1
=========================================*/

/*=========================================
    LOADER
=========================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});


/*=========================================
    STICKY NAVBAR
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        navbar.style.padding = "14px 8%";

        navbar.style.background = "rgba(248,244,236,.95)";

        navbar.style.boxShadow =
        "0 8px 25px rgba(0,0,0,.08)";

    }

    else{

        navbar.style.padding = "20px 8%";

        navbar.style.background =
        "rgba(248,244,236,.85)";

        navbar.style.boxShadow = "none";

    }

});


/*=========================================
    SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*=========================================
    ACTIVE NAVIGATION
=========================================*/

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top =
        section.offsetTop - 140;

        const height =
        section.offsetHeight;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(

            link.getAttribute("href") ===
            "#" + current

        ){

            link.classList.add("active");

        }

    });

});


/*=========================================
    MOBILE MENU
=========================================*/

const menuBtn =
document.querySelector(".menu-btn");

const navMenu =
document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navMenu.classList.toggle("show");

    });

}


/*=========================================
    CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        if(navMenu){

            navMenu.classList.remove("show");

        }

    });

});


/*=========================================
    FOOTER YEAR
=========================================*/

const year =
document.querySelector("#year");

if(year){

    year.textContent =
    new Date().getFullYear();

}


/*=========================================
    LOGO CLICK
=========================================*/

const logo =
document.querySelector(".logo");

if(logo){

    logo.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}


/*=========================================
    BUTTON RIPPLE EFFECT
=========================================*/

const buttons =
document.querySelectorAll(".btn-primary");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transition=".35s";

    });

});


/*=========================================
    END OF PART 1
=========================================*/
/*=========================================
    PART 2
    SCROLL EFFECTS
=========================================*/


/*=========================================
    BACK TO TOP BUTTON
=========================================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 500){

        topBtn.classList.add("show");

    }

    else{

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================================
    SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll",()=>{

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress =

        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


/*=========================================
    SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(

    ".about, .featured-menu, .signature, .why-us, .gallery, .testimonials, .contact"

);

function revealSections(){

    const windowHeight = window.innerHeight;

    reveals.forEach(section=>{

        const sectionTop =

        section.getBoundingClientRect().top;

        if(sectionTop < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealSections);

revealSections();


/*=========================================
    ADD REVEAL CLASS
=========================================*/

reveals.forEach(section=>{

    section.classList.add("reveal");

});


/*=========================================
    HERO FADE ON SCROLL
=========================================*/

const heroContent = document.querySelector(".hero-content");

window.addEventListener("scroll",()=>{

    let value = window.scrollY;

    if(heroContent){

        heroContent.style.opacity =

            1 - value / 500;

        heroContent.style.transform =

            `translateY(${value*0.2}px)`;

    }

});


/*=========================================
    FLOATING COFFEE ICON
=========================================*/

const hero = document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

    if(hero){

        const x =

        (window.innerWidth/2 - e.pageX)/40;

        const y =

        (window.innerHeight/2 - e.pageY)/40;

        hero.style.backgroundPosition =

        `${50+x}% ${50+y}%`;

    }

});


/*=========================================
    MENU CARDS STAGGER EFFECT
=========================================*/

const menuCards =

document.querySelectorAll(".menu-card");

menuCards.forEach((card,index)=>{

    card.style.animationDelay =

    `${index*0.15}s`;

});


/*=========================================
    WHY US STAGGER
=========================================*/

const whyCards =

document.querySelectorAll(".why-card");

whyCards.forEach((card,index)=>{

    card.style.animationDelay =

    `${index*0.2}s`;

});


/*=========================================
    TESTIMONIAL STAGGER
=========================================*/

const reviews =

document.querySelectorAll(".testimonial-card");

reviews.forEach((card,index)=>{

    card.style.animationDelay =

    `${index*0.25}s`;

});


/*=========================================
    GALLERY HOVER EFFECT
=========================================*/

const galleryImages =

document.querySelectorAll(".gallery-item");

galleryImages.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        item.style.transition=".4s";

    });

});


/*=========================================
    BUTTON HOVER SCALE
=========================================*/

document.querySelectorAll(

".btn-primary, .btn-secondary"

).forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});


/*=========================================
    NAVBAR SHADOW
=========================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY>30){

        navbar.classList.add("shadow");

    }

    else{

        navbar.classList.remove("shadow");

    }

});


/*=========================================
    END OF PART 2
=========================================*/ 
/*=========================================
    PART 3
    INTERACTIVE FEATURES
=========================================*/


/*=========================================
    GALLERY LIGHTBOX
=========================================*/

const galleryItems = document.querySelectorAll(".gallery-item img");

const lightbox = document.createElement("div");

lightbox.id = "lightbox";

document.body.appendChild(lightbox);

galleryItems.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.classList.add("active");

        const img = document.createElement("img");

        img.src = image.src;

        while(lightbox.firstChild){

            lightbox.removeChild(lightbox.firstChild);

        }

        lightbox.appendChild(img);

    });

});

lightbox.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});


/*=========================================
    MENU SEARCH
=========================================*/

const searchInput = document.querySelector("#menuSearch");

const menuCardsSearch = document.querySelectorAll(".menu-card");

if(searchInput){

    searchInput.addEventListener("keyup",()=>{

        const value = searchInput.value.toLowerCase();

        menuCardsSearch.forEach(card=>{

            const title =

            card.querySelector("h3").textContent.toLowerCase();

            if(title.includes(value)){

                card.style.display="block";

            }

            else{

                card.style.display="none";

            }

        });

    });

}


/*=========================================
    MENU FILTER
=========================================*/

const filterButtons =

document.querySelectorAll(".filter-btn");

if(filterButtons.length){

    filterButtons.forEach(button=>{

        button.addEventListener("click",()=>{

            filterButtons.forEach(btn=>{

                btn.classList.remove("active");

            });

            button.classList.add("active");

            const category =

            button.dataset.filter;

            menuCardsSearch.forEach(card=>{

                if(

                    category==="all" ||

                    card.dataset.category===category

                ){

                    card.style.display="block";

                }

                else{

                    card.style.display="none";

                }

            });

        });

    });

}


/*=========================================
    CONTACT FORM
=========================================*/

const contactForm =

document.querySelector(".contact-form form");

if(contactForm){

contactForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name =

    contactForm.querySelector('input[type="text"]');

    const email =

    contactForm.querySelector('input[type="email"]');

    const phone =

    contactForm.querySelector('input[type="tel"]');

    const message =

    contactForm.querySelector("textarea");

    if(

        name.value.trim()==="" ||

        email.value.trim()==="" ||

        message.value.trim()===""

    ){

        alert("Please fill all required fields.");

        return;

    }

    const emailRegex =

    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email.value)){

        alert("Please enter a valid email.");

        return;

    }

    showPopup("Thank you! Your message has been sent.");

    contactForm.reset();

});

}


/*=========================================
    SUCCESS POPUP
=========================================*/

function showPopup(message){

    const popup = document.createElement("div");

    popup.className="popup";

    popup.innerHTML=`

        <i class="fa-solid fa-circle-check"></i>

        <p>${message}</p>

    `;

    document.body.appendChild(popup);

    setTimeout(()=>{

        popup.classList.add("show");

    },100);

    setTimeout(()=>{

        popup.classList.remove("show");

        setTimeout(()=>{

            popup.remove();

        },400);

    },2500);

}


/*=========================================
    NEWSLETTER
=========================================*/

const newsletter =

document.querySelector(".newsletter form");

if(newsletter){

newsletter.addEventListener("submit",(e)=>{

    e.preventDefault();

    const email =

    newsletter.querySelector("input");

    const emailRegex =

    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailRegex.test(email.value)){

        showPopup("Subscribed Successfully!");

        newsletter.reset();

    }

    else{

        alert("Enter a valid email.");

    }

});

}


/*=========================================
    IMAGE LAZY LOADING
=========================================*/

const images =

document.querySelectorAll("img");

const observer =

new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.classList.add("loaded");

    }

});

});

images.forEach(img=>{

    observer.observe(img);

});


/*=========================================
    END OF PART 3
=========================================*/
/*=========================================
    PART 4
    FINAL ENHANCEMENTS
=========================================*/


/*=========================================
    COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 120;

            const updateCounter = () => {

                count += speed;

                if(count < target){

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(updateCounter);

                }

                else{

                    counter.innerText = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});


/*=========================================
    HERO TYPING EFFECT
=========================================*/

const typingElement = document.querySelector(".typing");

if(typingElement){

    const words = [

        "Fresh Coffee",

        "Fresh Bakery",

        "Cozy Rooftop",

        "Live Music",

        "Great Moments"

    ];

    let wordIndex = 0;

    let charIndex = 0;

    let deleting = false;

    function typeEffect(){

        const currentWord = words[wordIndex];

        if(!deleting){

            typingElement.textContent =

            currentWord.substring(0,charIndex++);

            if(charIndex > currentWord.length){

                deleting = true;

                setTimeout(typeEffect,1500);

                return;

            }

        }

        else{

            typingElement.textContent =

            currentWord.substring(0,charIndex--);

            if(charIndex < 0){

                deleting = false;

                wordIndex++;

                if(wordIndex >= words.length){

                    wordIndex = 0;

                }

            }

        }

        setTimeout(typeEffect,deleting ? 60 : 120);

    }

    typeEffect();

}


/*=========================================
    DARK MODE
=========================================*/

const darkToggle = document.querySelector(".dark-mode");

if(darkToggle){

    darkToggle.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

        localStorage.setItem(

            "theme",

            document.body.classList.contains("dark")

            ? "dark"

            : "light"

        );

    });

}

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

}


/*=========================================
    RESERVATION FORM
=========================================*/

const reservationForm =

document.querySelector(".reservation-form");

if(reservationForm){

reservationForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const inputs =

    reservationForm.querySelectorAll("input, select");

    let valid = true;

    inputs.forEach(input=>{

        if(input.value===""){

            valid = false;

            input.style.borderColor="#ff4d4d";

        }

        else{

            input.style.borderColor="#ddd";

        }

    });

    if(valid){

        showPopup("Table Reserved Successfully!");

        reservationForm.reset();

    }

});

}


/*=========================================
    FLOATING DECORATIVE ELEMENTS
=========================================*/

const floatingItems =

document.querySelectorAll(".floating");

window.addEventListener("mousemove",(e)=>{

    const x =

    (window.innerWidth/2 - e.clientX)/80;

    const y =

    (window.innerHeight/2 - e.clientY)/80;

    floatingItems.forEach(item=>{

        item.style.transform=

        `translate(${x}px,${y}px)`;

    });

});


/*=========================================
    IMAGE FADE-IN
=========================================*/

const allImages =

document.querySelectorAll("img");

const imageObserver =

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.style.opacity="1";

        entry.target.style.transform="scale(1)";

    }

});

});

allImages.forEach(img=>{

    img.style.opacity="0";

    img.style.transform="scale(.95)";

    img.style.transition=".7s";

    imageObserver.observe(img);

});


/*=========================================
    DISABLE RIGHT CLICK
    (Optional)
=========================================*/

// document.addEventListener("contextmenu",(e)=>{

//     e.preventDefault();

// });


/*=========================================
    PERFORMANCE
=========================================*/

window.addEventListener("pageshow",()=>{

    document.body.classList.add("loaded");

});


/*=========================================
    END OF SCRIPT
=========================================*/

console.log(

"%c☕ Old Velvet Cafe Loaded Successfully",

"color:#6F4E37;font-size:16px;font-weight:bold;"

);
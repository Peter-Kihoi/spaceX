const btn = document.querySelector("#menu-btn");
const overlay = document.querySelector("#overlay");
const menu = document.querySelector("#mobile-menu");
const counters = document.querySelectorAll(".counter");

let scrollStarted = false;

btn.addEventListener('click', function () {

    btn.classList.toggle('open');
    overlay.classList.toggle("overlay-show");
    document.body.classList.toggle("stop-scrolling");
    menu.classList.toggle("show-menu");

})

document.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 100 && !scrollStarted) {
        countUp(); 
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
})

function countUp() {
    counters.forEach((counter) => {
        counter.innerHTML = 0;

        const updateCounter = () => {

            //get count target
            const target = +counter.getAttribute('data-target');

            //get current count value
            const c = +counter.innerHTML;

            //create an increament
            const increament = target / 100;
        
            // if counter is less than the target add the increament

            if (c < target) {
                //round up and set the counter value

                counter.innerHTML = `${Math.ceil(c + increament)}`;

                setTimeout(updateCounter, 75);
            } else {
                counter.innerHTML = target;
            }
        }

        updateCounter()
    })
}

function reset() {
    counters.forEach((counter) => counter.innerHTML = '0');
}


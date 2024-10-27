import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

function initializeScrollTriggers() {
    const scrollTriggers = document.querySelectorAll('.nav-link, .scroll-button');
    scrollTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href') || this.getAttribute('data-target');

            gsap.to(window, {
                duration: 1,
                scrollTo: { y: targetId, offsetY: 50, autoKill: true },
                ease: "power2.inOut"
            });
        });
    });

    const externalButtons = document.querySelectorAll('.external-button');
    externalButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (isOpen) {
                toggleMenu();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initializeScrollTriggers();

    barba.init({
        sync: false,
        transitions: [{
            name: 'opacity-transition',
            leave(data) {
                console.log('Leave transition triggered');
                return gsap.to(data.current.container, {
                    opacity: 0,
                    duration: 0.5,
                    onComplete: () => {

                        data.current.container.remove();
                    }
                });
            },
            enter(data) {
                console.log('Enter transition triggered');
                return gsap.from(data.next.container, {
                    opacity: 0,
                    duration: 0.5
                });
            },
            afterEnter() {
                window.scrollTo(0, 0);
            }
        }],
        views: [{
            namespace: 'home',
            beforeEnter() {
                initializeScrollTriggers();
            }
        }, {
            namespace: 'contact',
            beforeEnter() {
                initializeScrollTriggers();
            }
        }]
    });
});

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Bubble() {
    useGSAP(() => {
         const container = document.querySelector(".bubble-container");
         const MAX_BUBBLES = 80;

         function createBubble() {
           const currentBubbles = container.querySelectorAll(".bubble").length;
           if (currentBubbles >= MAX_BUBBLES) return;

           const bubble = document.createElement("div");
           bubble.classList.add("bubble");

           const size = Math.random() * 40 + 10; // size 10–50px
           bubble.style.width = `${size}px`;
           bubble.style.height = `${size}px`;
           bubble.style.left = `${Math.random() * window.innerWidth}px`;

           container.appendChild(bubble);

           gsap.to(bubble, {
             y: window.innerHeight + 100, // fall down
             x: "+=" + (Math.random() * 100 - 50),
             duration: Math.random() * 5 + 4,
             ease: "power1.inOut",
             opacity: 0,
             onComplete: () => bubble.remove(),
           });
         }

         for (let i = 0; i < 60; i++) {
           // create 60 bubbles instantly
           setTimeout(() => createBubble(), i * 100); // small delay so they don't spawn all at once
         }

         // Keep creating more every second
         const interval = setInterval(() => {
           for (let i = 0; i < 10; i++) createBubble(); // 10 more every second
         }, 1000);

         return () => clearInterval(interval);
    });
  return <div className="bubble-container absolute inset-0 -z-10"></div>;
}
export default Bubble;

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export default function Outro() {
    useGSAP(()=>{
        gsap.set('.final-message', {marginTop: '-100vh', opacity: 0})
        let tl = gsap.timeline({
            scrollTrigger:{
                trigger: '.final-message', 
                start: 'top 30%', 
                end: 'top 10%', 
                scrub: 1
            }
        })
        tl.to('.final-message', {opacity: 0, duration: 1, ease: "power1.inOut"})
        tl.to('.final-message', {opacity:1 , duration: 3, ease: "power1.inOut"}, '<')

    })
  return (
    <section className="final-message">
      <div className="h-full col-center gap-10">
        <img src="/images/logo.webp" alt="logo" className="md:w-72 w-52" />

        <div className="text-wrapper">
          <h3 className="gradient-title">
            Coming <br /> May 26th <br /> 2026
          </h3>
        </div>

        <div>
          <img src="/images/ps-logo.svg" className="md:w-32 w-20" />
          <img src="/images/x-logo.svg" className="md:w-52 w-40" />
        </div>
      </div>
    </section>
  );
}

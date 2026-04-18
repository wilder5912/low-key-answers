import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sectionExperience from "@/assets/section-experience.jpg";

gsap.registerPlugin(ScrollTrigger);

const ParallaxBreak = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".pb-image", {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".pb-text > *", {
        opacity: 0,
        y: 40,
        duration: 1.4,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-[80vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0">
        <img
          src={sectionExperience}
          alt=""
          loading="lazy"
          width={1920}
          height={1080}
          className="pb-image w-full h-[130%] object-cover"
        />
        <div className="absolute inset-0 bg-background/65" />
      </div>

      <div className="pb-text relative z-10 text-center px-6 max-w-3xl">
        <span className="block text-primary text-2xl mb-8">✦</span>
        <p className="text-xs tracking-[0.6em] uppercase text-primary mb-6">Una Pausa</p>
        <p className="text-2xl md:text-4xl font-light italic text-foreground leading-[1.5] tracking-wide">
          "El verdadero lujo es el tiempo dedicado a lo esencial."
        </p>
      </div>
    </section>
  );
};

export default ParallaxBreak;

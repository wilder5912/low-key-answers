import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import luxuryBg from "@/assets/luxury-bg.jpg";

const Hero = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.from(".hero-bg", { scale: 1.15, opacity: 0, duration: 2.4 })
        .from(".hero-line", { scaleX: 0, duration: 1.4, transformOrigin: "center" }, "-=2")
        .from(".hero-eyebrow", { opacity: 0, y: 12, duration: 1.2 }, "-=1.1")
        .from(".hero-title-word", { opacity: 0, y: 60, duration: 1.6, stagger: 0.15 }, "-=1")
        .from(".hero-sub", { opacity: 0, y: 20, duration: 1.2 }, "-=1")
        .from(".hero-scroll", { opacity: 0, y: -10, duration: 1 }, "-=0.8");

      gsap.to(".hero-scroll-dot", {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: "sine.inOut",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden"
    >
      <div className="hero-bg absolute inset-0">
        <img
          src={luxuryBg}
          alt="Rivalo Macasé"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="flex items-center justify-center gap-6 mb-10">
          <span className="hero-line w-20 h-px bg-primary" />
          <p className="hero-eyebrow text-xs tracking-[0.7em] uppercase text-primary font-normal">
            Rivalo Macasé
          </p>
          <span className="hero-line w-20 h-px bg-primary" />
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light italic tracking-[0.02em] text-foreground leading-[1.05] overflow-hidden">
          <span className="inline-block overflow-hidden">
            <span className="hero-title-word inline-block">La</span>
          </span>{" "}
          <span className="inline-block overflow-hidden">
            <span className="hero-title-word inline-block">Experiencia</span>
          </span>
        </h1>

        <p className="hero-sub mt-10 text-base md:text-lg font-normal tracking-[0.08em] text-foreground/85 max-w-md mx-auto leading-relaxed">
          Donde cada detalle cuenta y cada momento es irrepetible
        </p>
      </div>

      <div className="hero-scroll absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="text-[10px] tracking-[0.5em] uppercase text-primary/70">Descubra</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent relative overflow-hidden">
          <span className="hero-scroll-dot absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

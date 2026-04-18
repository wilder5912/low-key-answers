import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IntroQuote = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".quote-word");
      gsap.from(words, {
        opacity: 0.15,
        duration: 1,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 1,
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const quote = "Más que una cena, una pausa en el tiempo donde la elegancia se vive en silencio.";
  const words = quote.split(" ");

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="block text-primary/40 text-3xl mb-10">✦</span>
        <p className="text-2xl md:text-4xl lg:text-5xl font-light italic leading-[1.4] tracking-wide text-foreground">
          {words.map((w, i) => (
            <span key={i} className="quote-word inline-block mr-[0.25em]">
              {w}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default IntroQuote;

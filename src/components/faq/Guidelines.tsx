import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sectionCraft from "@/assets/section-craft.jpg";

gsap.registerPlugin(ScrollTrigger);

const guidelines = [
  {
    number: "I",
    title: "Código de Vestimenta",
    subtitle: "Elegancia Discreta",
    description:
      "Sugerimos vestimenta formal o smart casual que complemente la atmósfera del espacio. Evite prendas deportivas o calzado informal.",
  },
  {
    number: "II",
    title: "Viva el Momento",
    subtitle: "Desconéctese para Conectar",
    description:
      "Le invitamos a silenciar su dispositivo durante la experiencia. Cada detalle fue diseñado para ser apreciado con todos los sentidos.",
  },
  {
    number: "III",
    title: "Su Opinión Importa",
    subtitle: "Comparta la Experiencia",
    description:
      "Si nuestra experiencia dejó huella en usted, una breve reseña nos ayuda a seguir creando momentos únicos.",
    cta: {
      label: "Dejar Reseña",
      url: "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID",
    },
  },
];

const Guidelines = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
      gsap.from(".g-header > *", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: { trigger: ".g-header", start: "top 80%" },
      });

      // Image parallax
      gsap.to(".g-image", {
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: ".g-image-wrap",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".g-image-wrap", {
        clipPath: "inset(100% 0 0 0)",
        duration: 1.8,
        ease: "expo.out",
        scrollTrigger: { trigger: ".g-image-wrap", start: "top 75%" },
      });

      // Items
      gsap.utils.toArray<HTMLElement>(".g-item").forEach((el) => {
        gsap.from(el.querySelectorAll(".g-anim"), {
          opacity: 0,
          y: 40,
          duration: 1.1,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
        gsap.from(el.querySelector(".g-divider"), {
          scaleX: 0,
          duration: 1.4,
          transformOrigin: "left center",
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="g-header text-center mb-24">
          <p className="text-xs tracking-[0.6em] uppercase text-primary mb-5 font-normal">
            Nuestro Protocolo
          </p>
          <h2 className="text-4xl md:text-6xl font-light italic text-foreground tracking-wide">
            Antes de su Visita
          </h2>
          <span className="block mx-auto mt-8 w-px h-16 bg-gradient-to-b from-primary/60 to-transparent" />
        </div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start">
          {/* Image */}
          <div className="g-image-wrap relative aspect-[3/4] overflow-hidden md:sticky md:top-24">
            <img
              src={sectionCraft}
              alt="El arte del detalle"
              loading="lazy"
              width={1920}
              height={1080}
              className="g-image w-full h-[115%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <p className="text-[10px] tracking-[0.5em] uppercase text-primary/80">El Arte del Detalle</p>
            </div>
          </div>

          {/* Items */}
          <div className="grid gap-0">
            {guidelines.map((item, i) => (
              <div key={i} className="g-item relative py-10 first:pt-0">
                <span className="g-divider absolute top-0 left-0 right-0 h-px bg-primary/20 first:hidden" />
                <span className="g-anim block text-5xl md:text-6xl font-light italic text-primary/30 mb-4">
                  {item.number}
                </span>
                <p className="g-anim text-xs tracking-[0.4em] uppercase text-primary/70 mb-3">
                  {item.subtitle}
                </p>
                <h3 className="g-anim text-2xl md:text-3xl font-light italic text-foreground mb-5 tracking-wide">
                  {item.title}
                </h3>
                <p className="g-anim text-base md:text-lg font-normal leading-[1.8] text-foreground/75 max-w-xl">
                  {item.description}
                </p>
                {item.cta && (
                  <a
                    href={item.cta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="g-anim inline-flex items-center gap-3 mt-8 px-8 py-3.5 border border-primary/40 text-xs tracking-[0.4em] uppercase text-primary hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-700"
                  >
                    {item.cta.label}
                    <span className="text-sm">→</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guidelines;

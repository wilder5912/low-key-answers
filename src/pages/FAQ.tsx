import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import luxuryBg from "@/assets/luxury-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: "¿Cómo puedo hacer una reservación?",
    answer:
      "Las reservaciones se realizan exclusivamente a través de nuestra línea privada o mediante invitación directa. Contacte a nuestro equipo de concierge para coordinar su experiencia.",
  },
  {
    question: "¿Ofrecen experiencias privadas?",
    answer:
      "Sí. Disponemos de salones exclusivos para eventos íntimos, cenas privadas y celebraciones selectas. Cada experiencia se diseña a medida según sus preferencias.",
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Solicitamos un aviso de cancelación con al menos 24 horas de anticipación. Las reservaciones no canceladas a tiempo podrán estar sujetas a un cargo.",
  },
  {
    question: "¿Tienen opciones para restricciones alimentarias?",
    answer:
      "Nuestro chef ejecutivo personaliza cada menú. Infórmenos con anticipación sobre cualquier alergia o preferencia dietética y crearemos una experiencia gastronómica adaptada a usted.",
  },
  {
    question: "¿Cómo funciona el programa de membresía?",
    answer:
      "Nuestro programa es solo por invitación. Los miembros acceden a eventos exclusivos, reservaciones prioritarias y experiencias curadas que no están disponibles al público general.",
  },
];

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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const guidelinesRef = useRef<HTMLElement>(null);
  const faqRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .from(".hero-line", {
          scaleX: 0,
          duration: 1.4,
          transformOrigin: "center",
        })
        .from(
          ".hero-eyebrow",
          { opacity: 0, y: 10, duration: 1 },
          "-=1"
        )
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 40,
            duration: 1.6,
            ease: "expo.out",
          },
          "-=0.7"
        )
        .from(
          ".hero-sub",
          { opacity: 0, y: 20, duration: 1.2 },
          "-=1"
        );

      // Guidelines reveal
      gsap.utils.toArray<HTMLElement>(".guideline-item").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      // Section headers
      gsap.utils.toArray<HTMLElement>(".section-header").forEach((el) => {
        gsap.from(el.children, {
          opacity: 0,
          y: 24,
          duration: 1.2,
          stagger: 0.15,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        });
      });

      // FAQ items
      gsap.utils.toArray<HTMLElement>(".faq-item").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.9,
          delay: i * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        });
      });

      // Parallax background
      gsap.to(".bg-parallax", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    const isOpen = openIndex === index;
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground relative overflow-hidden font-heading"
    >
      {/* Background Image */}
      <div className="fixed inset-0 z-0 bg-parallax">
        <img
          src={luxuryBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background" />
      </div>

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center px-6 sm:px-10 max-w-4xl mx-auto">
        {/* Hero */}
        <header
          ref={heroRef}
          className="text-center pt-28 pb-32 md:pt-36 md:pb-40"
        >
          <div className="flex items-center justify-center gap-6 mb-10">
            <span className="hero-line w-16 h-px bg-primary/50" />
            <p className="hero-eyebrow text-xs tracking-[0.7em] uppercase text-primary font-normal">
              Rivalo Macasé
            </p>
            <span className="hero-line w-16 h-px bg-primary/50" />
          </div>
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-light italic tracking-[0.02em] text-foreground leading-[1.1]">
            La Experiencia
          </h1>
          <p className="hero-sub mt-8 text-base md:text-lg font-normal tracking-[0.08em] text-foreground/80 max-w-md mx-auto leading-relaxed">
            Donde cada detalle cuenta y cada momento es irrepetible
          </p>
        </header>

        {/* Guidelines */}
        <section ref={guidelinesRef} className="w-full mb-32">
          <div className="section-header text-center mb-20">
            <p className="text-xs tracking-[0.6em] uppercase text-primary/80 mb-4 font-normal">
              Nuestro Protocolo
            </p>
            <p className="text-3xl md:text-4xl font-light italic text-foreground tracking-wide">
              Antes de su Visita
            </p>
          </div>

          <div className="grid gap-0">
            {guidelines.map((item, index) => (
              <div
                key={index}
                className="guideline-item group grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-12 border-t border-primary/15 last:border-b last:border-primary/15"
              >
                <div className="flex justify-end pt-1">
                  <span className="text-2xl md:text-3xl font-light italic text-primary/40 group-hover:text-primary transition-colors duration-700">
                    {item.number}
                  </span>
                </div>
                <div>
                  <p className="text-xs tracking-[0.4em] uppercase text-primary/70 mb-3 font-normal">
                    {item.subtitle}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-light italic text-foreground mb-5 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-lg font-normal leading-[1.8] text-foreground/75 max-w-xl">
                    {item.description}
                  </p>
                  {item.cta && (
                    <a
                      href={item.cta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 mt-8 px-7 py-3 border border-primary/40 text-xs tracking-[0.4em] uppercase text-primary hover:text-primary-foreground hover:bg-primary hover:border-primary transition-all duration-700 rounded-none"
                    >
                      {item.cta.label}
                      <span className="text-sm">→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ornamental divider */}
        <div className="flex items-center gap-4 mb-32">
          <span className="w-8 h-px bg-primary/25" />
          <span className="text-primary/40 text-lg">✦</span>
          <span className="w-8 h-px bg-primary/25" />
        </div>

        {/* FAQ Section */}
        <section ref={faqRef} className="w-full mb-32">
          <div className="section-header text-center mb-20">
            <p className="text-xs tracking-[0.6em] uppercase text-primary/80 mb-4 font-normal">
              Información
            </p>
            <p className="text-3xl md:text-4xl font-light italic text-foreground tracking-wide">
              Preguntas Frecuentes
            </p>
          </div>

          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="faq-item border-t border-primary/15 last:border-b last:border-primary/15"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between py-8 text-left group"
                  >
                    <span className="text-lg md:text-xl font-light italic tracking-wide text-foreground/85 group-hover:text-primary transition-colors duration-500">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary/60 transition-transform duration-500 flex-shrink-0 ml-8 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-700 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base md:text-lg font-normal leading-[1.8] text-foreground/70 pl-0 pr-12">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-8 h-px bg-primary/20" />
          <span className="text-primary/30 text-xs">✦</span>
          <span className="w-8 h-px bg-primary/20" />
        </div>
        <p className="text-xs tracking-[0.4em] text-foreground/50 italic">
          © 2025 Rivalo Macasé — Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};

export default FAQ;

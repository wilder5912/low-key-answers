import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const FaqList = () => {
  const ref = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-header > *", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: { trigger: ".faq-header", start: "top 80%" },
      });

      gsap.utils.toArray<HTMLElement>(".faq-row").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: i * 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative py-32 md:py-48 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="faq-header text-center mb-24">
          <p className="text-xs tracking-[0.6em] uppercase text-primary mb-5 font-normal">
            Información
          </p>
          <h2 className="text-4xl md:text-6xl font-light italic text-foreground tracking-wide">
            Preguntas Frecuentes
          </h2>
          <span className="block mx-auto mt-8 w-px h-16 bg-gradient-to-b from-primary/60 to-transparent" />
        </div>

        <div>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="faq-row border-t border-primary/15 last:border-b last:border-primary/15"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-8 text-left group"
                >
                  <span className="text-lg md:text-xl font-light italic tracking-wide text-foreground/90 group-hover:text-primary transition-colors duration-500 pr-6">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-500 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-700 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 pb-8"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-base md:text-lg font-normal leading-[1.8] text-foreground/75 pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqList;

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import smokeBg from "@/assets/smoke-bg.jpg";

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
    number: "01",
    title: "Código de Vestimenta",
    description:
      "Elegancia discreta. Sugerimos vestimenta formal o smart casual que complemente la atmósfera del espacio. Evite prendas deportivas o calzado informal.",
  },
  {
    number: "02",
    title: "Viva el Momento",
    description:
      "Le invitamos a silenciar su dispositivo durante la experiencia. Cada detalle fue diseñado para ser apreciado con todos los sentidos.",
  },
  {
    number: "03",
    title: "Su Opinión Importa",
    description:
      "Si nuestra experiencia dejó huella en usted, una breve reseña nos ayuda a seguir creando momentos únicos.",
    cta: {
      label: "Compartir Experiencia →",
      url: "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID",
    },
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src={smokeBg}
          alt=""
          className="w-full h-full object-cover opacity-20"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center px-6 py-24 md:py-32 max-w-3xl mx-auto">

        {/* Header */}
        <header className="text-center mb-24">
          <p className="text-[10px] tracking-[0.6em] uppercase text-muted-foreground mb-8">
            Rivalo Macasé
          </p>
          <h1 className="text-4xl md:text-6xl font-extralight tracking-[0.2em] text-foreground leading-tight">
            La Experiencia
          </h1>
        </header>

        {/* Guidelines */}
        <section className="w-full mb-28">
          <p className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground text-center mb-16">
            Antes de su Visita
          </p>

          <div className="grid gap-16 md:gap-20">
            {guidelines.map((item, index) => (
              <div key={index} className="flex gap-8">
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground/40 pt-1 font-light">
                  {item.number}
                </span>
                <div className="flex-1 border-t border-border/50 pt-6">
                  <h3 className="text-base md:text-lg font-extralight tracking-[0.1em] text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm font-light leading-[1.8] text-muted-foreground max-w-lg">
                    {item.description}
                  </p>
                  {item.cta && (
                    <a
                      href={item.cta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-6 text-[10px] tracking-[0.4em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-700"
                    >
                      {item.cta.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-8 h-px bg-border/50 mb-28" />

        {/* FAQ */}
        <section className="w-full">
          <p className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground text-center mb-16">
            Preguntas Frecuentes
          </p>

          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-t border-border/40 last:border-b last:border-border/40">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-7 text-left group"
                  >
                    <span className="text-sm font-light tracking-wide text-muted-foreground group-hover:text-foreground transition-colors duration-700">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-muted-foreground/50 transition-transform duration-700 flex-shrink-0 ml-6 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      isOpen ? "max-h-48 pb-7" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm font-light leading-[1.9] text-muted-foreground/70 pl-0 pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-12">
        <p className="text-[10px] tracking-[0.3em] text-muted-foreground/40">
          © 2025 Rivalo Macasé
        </p>
      </footer>
    </div>
  );
};

export default FAQ;

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import luxuryBg from "@/assets/luxury-bg.jpg";

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

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden font-heading">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src={luxuryBg}
          alt=""
          className="w-full h-full object-cover opacity-25"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
      </div>

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center px-6 sm:px-10 max-w-4xl mx-auto">

        {/* Hero */}
        <header className="text-center pt-28 pb-32 md:pt-36 md:pb-40 animate-fade-in">
          <div className="flex items-center justify-center gap-6 mb-10">
            <span className="w-16 h-px bg-primary/30" />
            <p className="text-[11px] tracking-[0.7em] uppercase text-primary/70">
              Rivalo Macasé
            </p>
            <span className="w-16 h-px bg-primary/30" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light italic tracking-[0.05em] text-foreground leading-[1.1]">
            La Experiencia
          </h1>
          <p className="mt-8 text-sm md:text-base font-light tracking-[0.15em] text-muted-foreground max-w-md mx-auto leading-relaxed">
            Donde cada detalle cuenta y cada momento es irrepetible
          </p>
        </header>

        {/* Guidelines */}
        <section className="w-full mb-32 animate-fade-in-delay-1">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-[0.6em] uppercase text-primary/50 mb-3">
              Nuestro Protocolo
            </p>
            <p className="text-2xl md:text-3xl font-light italic text-foreground tracking-wide">
              Antes de su Visita
            </p>
          </div>

          <div className="grid gap-0">
            {guidelines.map((item, index) => (
              <div
                key={index}
                className="group grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-10 border-t border-primary/10 last:border-b last:border-primary/10"
              >
                <div className="flex justify-end pt-1">
                  <span className="text-2xl md:text-3xl font-light italic text-primary/20 group-hover:text-primary/40 transition-colors duration-700">
                    {item.number}
                  </span>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.4em] uppercase text-primary/40 mb-2">
                    {item.subtitle}
                  </p>
                  <h3 className="text-xl md:text-2xl font-light italic text-foreground mb-4 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base font-light leading-[2] text-muted-foreground max-w-xl">
                    {item.description}
                  </p>
                  {item.cta && (
                    <a
                      href={item.cta.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 mt-6 px-6 py-2.5 border border-primary/20 text-[10px] tracking-[0.4em] uppercase text-primary/60 hover:text-primary hover:border-primary/40 transition-all duration-700 rounded-none"
                    >
                      {item.cta.label}
                      <span className="text-xs">→</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ornamental divider */}
        <div className="flex items-center gap-4 mb-32 animate-fade-in-delay-2">
          <span className="w-8 h-px bg-primary/15" />
          <span className="text-primary/20 text-lg">✦</span>
          <span className="w-8 h-px bg-primary/15" />
        </div>

        {/* FAQ Section */}
        <section className="w-full mb-32 animate-fade-in-delay-3">
          <div className="text-center mb-20">
            <p className="text-[10px] tracking-[0.6em] uppercase text-primary/50 mb-3">
              Información
            </p>
            <p className="text-2xl md:text-3xl font-light italic text-foreground tracking-wide">
              Preguntas Frecuentes
            </p>
          </div>

          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-t border-primary/10 last:border-b last:border-primary/10">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-8 text-left group"
                  >
                    <span className="text-base md:text-lg font-light italic tracking-wide text-muted-foreground group-hover:text-foreground transition-colors duration-700">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-primary/30 transition-transform duration-700 flex-shrink-0 ml-8 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      isOpen ? "max-h-48 pb-8" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm md:text-base font-light leading-[2] text-muted-foreground/70 pl-0 pr-12">
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
      <footer className="relative z-10 text-center py-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="w-8 h-px bg-primary/10" />
          <span className="text-primary/15 text-xs">✦</span>
          <span className="w-8 h-px bg-primary/10" />
        </div>
        <p className="text-[10px] tracking-[0.4em] text-muted-foreground/30 italic">
          © 2025 Rivalo Macasé — Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};

export default FAQ;

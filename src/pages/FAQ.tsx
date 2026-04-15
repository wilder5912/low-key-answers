import { useState } from "react";
import { ChevronDown, Shirt, Smartphone, Star } from "lucide-react";
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
    icon: Shirt,
    title: "Código de Vestimenta",
    description:
      "Vestimenta formal o smart casual. Sugerimos prendas elegantes que reflejen la exclusividad de la experiencia. No se permiten prendas deportivas ni calzado informal.",
  },
  {
    icon: Smartphone,
    title: "Desconéctese para Conectar",
    description:
      "Le invitamos a silenciar su dispositivo móvil durante su experiencia. Cada detalle ha sido diseñado para ser vivido con todos los sentidos — permítase disfrutarlo plenamente.",
  },
  {
    icon: Star,
    title: "Comparta su Experiencia",
    description:
      "Si nuestra experiencia dejó una impresión en usted, nos encantaría conocer su opinión. Su reseña nos ayuda a seguir creando momentos memorables.",
    cta: {
      label: "Dejar una Reseña",
      url: "https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID",
    },
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background smoke image */}
      <div className="fixed inset-0 z-0">
        <img
          src={smokeBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center px-6 py-20 md:py-28">
        {/* Header */}
        <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-4">
          Rivalo Macasé
        </p>
        <h1 className="text-3xl md:text-5xl font-extralight tracking-[0.15em] text-foreground mb-6">
          La Experiencia
        </h1>
        <div className="w-12 h-px bg-border mb-16" />

        {/* Guidelines Section */}
        <section className="w-full max-w-2xl mb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground text-center mb-12">
            Para una Experiencia Excepcional
          </p>

          <div className="space-y-10">
            {guidelines.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex gap-6 items-start group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-muted-foreground transition-colors duration-500">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-light tracking-[0.15em] text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm font-light leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                    {item.cta && (
                      <a
                        href={item.cta.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 text-xs tracking-[0.3em] uppercase text-muted-foreground border-b border-border pb-1 hover:text-foreground hover:border-muted-foreground transition-all duration-500"
                      >
                        {item.cta.label}
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Divider */}
        <div className="w-12 h-px bg-border mb-16" />

        {/* FAQ Section */}
        <section className="w-full max-w-2xl">
          <p className="text-xs tracking-[0.4em] uppercase text-muted-foreground text-center mb-12">
            Preguntas Frecuentes
          </p>

          <div className="space-y-0">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-border">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-6 text-left group"
                  >
                    <span className="text-sm md:text-base font-light tracking-wide text-secondary-foreground group-hover:text-foreground transition-colors duration-500">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform duration-500 flex-shrink-0 ml-4 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-48 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm font-light leading-relaxed text-muted-foreground pr-8">
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
      <footer className="relative z-10 text-center py-8">
        <p className="text-xs tracking-[0.2em] text-muted-foreground">
          © 2025 — Todos los derechos reservados
        </p>
      </footer>
    </div>
  );
};

export default FAQ;

import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import smokeBg from "@/assets/smoke-bg.jpg";

const faqs = [
  {
    question: "¿Cómo puedo hacer una reservación?",
    answer:
      "Las reservaciones se realizan exclusivamente a través de nuestra línea privada o mediante invitación directa. Contacte a nuestro equipo de concierge para coordinar su experiencia.",
  },
  {
    question: "¿Cuál es el código de vestimenta?",
    answer:
      "Mantenemos un estándar de elegancia discreta. Se espera vestimenta formal o smart casual. No se permiten prendas deportivas ni calzado informal.",
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

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 md:px-16">
        <Link
          to="/"
          className="text-sm tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
        >
          Inicio
        </Link>
      </nav>

      {/* Content */}
      <main className="relative z-10 flex flex-col items-center px-6 py-16 md:py-24">
        <h1 className="text-xs tracking-[0.5em] uppercase text-muted-foreground mb-4">
          Preguntas Frecuentes
        </h1>
        <p className="text-3xl md:text-5xl font-extralight tracking-[0.15em] text-foreground mb-20">
          FAQ
        </p>

        {/* Accordion */}
        <div className="w-full max-w-2xl space-y-0">
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

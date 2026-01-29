import { useEffect, useRef, useState } from "react";
import { Award, Users, Clock, Star } from 'lucide-react';

const stats = [
  { icon: Users, value: 11000, suffix: "+", decimals: 0, label: "Clientes Atendidos" },
  { icon: Clock, value: 20, suffix: "+", decimals: 0, label: "Anos de Experiência" },
  { icon: Award, value: 99.4, suffix: "%", decimals: 1, label: "Taxa de Sucesso" },
  { icon: Star, value: 4.9, suffix: "", decimals: 1, label: "Avaliação Média" },
];

function useCountUp(target, { duration = 1200, decimals = 0, startWhen = false } = {}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!startWhen) return;

    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = target * progress;
      setValue(decimals ? Number(current.toFixed(decimals)) : Math.floor(current));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, decimals, startWhen]);

  return value;
}

export const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="p-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl text-center lg:text-start font-bold mb-8">
              <span className="gradient-text">Sobre a TechFix</span>
            </h2>

            <div className="space-y-6 text-gray-300 text-center lg:text-start">
              <p className="text-lg leading-relaxed">
                Somos uma assistência técnica especializada em smartphones, com mais de 20 anos
                de experiência no mercado. Nossa missão é oferecer serviços de qualidade com
                rapidez e preços justos.
              </p>

              <p className="text-lg leading-relaxed">
                Contamos com técnicos certificados, damos sempre preferencia a peças originais ou
                da nossa linha premium, garantindo a durabilidade e performance do seu aparelho.
              </p>

              <p className="text-lg leading-relaxed">
                Nosso compromisso é com a satisfação do cliente, oferecendo garantia em
                todos os serviços e um atendimento personalizado.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-[var(--color-1)] rounded-full"></div>
                <span className="text-white">Técnicos certificados e experientes</span>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-[var(--color-1)] rounded-full"></div>
                <span className="text-white">Peças originais e premium de qualidade</span>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-[var(--color-1)] rounded-full"></div>
                <span className="text-white">Garantia em todos os serviços</span>
              </div>
              <div className="flex items-center space-x-3 justify-center lg:justify-start">
                <div className="w-2 h-2 bg-[var(--color-1)] rounded-full"></div>
                <span className="text-white">Atendimento rápido e eficiente</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              alt="Oficina moderna de reparo de celulares com equipamentos profissionais"
              className="w-full h-auto rounded-2xl glow-effect hover:img-animation transition-all duration-300"
              src="https://images.unsplash.com/photo-1588515603068-adb330f26e92" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {stats.map((stat, index) => {
            const n = useCountUp(stat.value, {
              duration: 1400,
              decimals: stat.decimals,
              startWhen: isVisible,
            });

            return (
              <div key={index} className="text-center glass-effect rounded-2xl p-6 hover:glow-effect transition-all duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--color-1)] rounded-full mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>

                <div className="text-3xl font-bold gradient-text mb-2">
                  {n}
                  {stat.suffix}
                </div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            );
          })}

        </div>
      </div>
    </section >
  );
};

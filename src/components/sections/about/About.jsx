
import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: '9000+', label: 'Clientes Atendidos' },
    { icon: Clock, number: '20+', label: 'Anos de Experiência' },
    { icon: Award, number: '99.4%', label: 'Taxa de Sucesso' },
    { icon: Star, number: '4.9', label: 'Avaliação Média' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              <span className="gradient-text">Sobre a TechFix</span>
            </h2>

            <div className="space-y-6 text-gray-300">
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
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--color-1)] rounded-full"></div>
                <span className="text-white">Técnicos certificados e experientes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--color-1)] rounded-full"></div>
                <span className="text-white">Peças originais e premium de qualidade</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--color-1)] rounded-full"></div>
                <span className="text-white">Garantia em todos os serviços</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[var(--color-1)] rounded-full"></div>
                <span className="text-white">Atendimento rápido e eficiente</span>
              </div>
            </div>
          </div>

          <div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              alt="Oficina moderna de reparo de celulares com equipamentos profissionais"
              className="w-full h-auto rounded-2xl glow-effect"
              src="https://images.unsplash.com/photo-1588515603068-adb330f26e92" />
          </div>
        </div>

        <div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center glass-effect rounded-2xl p-6"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-[var(--color-1)] rounded-full mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
};

export default About;

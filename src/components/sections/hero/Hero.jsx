import { Button } from '../../ui/button';
import { Phone, Shield, Zap } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="p-24 px-4 relative min-h-screen flex items-center">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6 text-center md:text-left">

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Reparo</span>{" "}
              <br />
              <span className="text-white">Profissional</span>{" "}
              <span className="gradient-text">de Celulares</span>{" "}
            </h1>

            <p className="text-xl text-gray-300">
              Especialistas em conserto de smartphones com garantia e qualidade.
              Diagnóstico gratuito e orçamento sem compromisso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-[var(--color-1)] hover:bg-[var(--color-2)] text-white pulse-glow"
              >
                <Phone className="mr-2 h-5 w-5" />
                Solicitar Orçamento
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[var(--color-1)] text-[var(--color-1)] hover:bg-[var(--color-1)] hover:text-white"
              >
                Ver Serviços
              </Button>
            </div>

            <div className="grid grid-cols-3 justify-items-center md:justify-items-start gap-2 mt-10 md:grid-cols-3">
              <div className="text-center">
                <Shield className="h-8 w-8 text-[var(--color-1)] mx-auto mb-2" />
                <p className="text-sm text-gray-300">Garantia</p>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-[var(--color-1)] mx-auto mb-2" />
                <p className="text-sm text-gray-300">Rapidez</p>
              </div>
              <div className="text-center">
                <Phone className="h-8 w-8 text-[var(--color-1)] mx-auto mb-2" />
                <p className="text-sm text-gray-300">Qualidade</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="floating-animation">
              <img
                alt="Técnico reparando smartphone com ferramentas profissionais"
                className="w-full h-auto rounded-2xl glow-effect"
                src="https://images.unsplash.com/photo-1658212662417-a2a76efe25df" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

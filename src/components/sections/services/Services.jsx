
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Battery, Shield, Wrench, Cpu, Camera } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Troca de Tela',
      description: 'Substituição de todos os tipo de display com garantia de qualidade.',
    },
    {
      icon: Battery,
      title: 'Troca de Bateria',
      description: 'Baterias originais e compatíveis para maior durabilidade.',
    },
    {
      icon: Camera,
      title: 'Reparo de Câmera',
      description: 'Conserto e substituição de câmeras frontais e traseiras.',
    },
    {
      icon: Cpu,
      title: 'Problemas de Software',
      description: 'Formatação, desbloqueio e instalação de sistemas.',
    },
    {
      icon: Shield,
      title: 'Resistência à Água',
      description: 'Limpeza e reparo de aparelhos com danos por líquidos.',
    },
    {
      icon: Wrench,
      title: 'Manutenção Geral',
      description: 'Limpeza interna, troca de conectores e soldas.',
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Nossos Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Oferecemos soluções completas para todos os tipos de problemas em smartphones
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all duration-300"
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[var(--color-1)] rounded-full mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-200 mb-6">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Garantia e Qualidade</h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Todos os nossos serviços incluem garantia de 90 dias utilizando peças de fornecedores da mais alta qualidade.
              Solicite um diagnóstico gratuito e orçamento sem compromisso.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
              <span className="font-bold">✓ Diagnóstico Gratuito</span>
              <span className='font-bold'>✓ Garantia de 90 dias</span>
              <span className="font-bold">✓ Peças Originais</span>
              <span className="font-bold">✓ Atendimento Rápido</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;


import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../../ui/button';
import { toast } from '../../ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    device: '',
    problem: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve para agendar seu atendimento.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      device: '',
      problem: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(48) 99999-9999',
      link: 'tel:+5511999999999'
    },
    {
      icon: Mail,
      title: 'E-mail',
      info: 'contato@techfix.com.br',
      link: 'mailto:contato@techfix.com.br'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Praia do Rosa, 13 - Santa Catarina, SC',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Horário',
      info: 'Seg-Sex: 8h-18h | Sáb: 8h-14h',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Entre em Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Solicite seu orçamento gratuito ou tire suas dúvidas conosco
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Informações de Contato</h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center space-x-4 glass-effect rounded-xl p-4 hover:glow-effect transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-1)] rounded-full flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-gray-300">{item.info}</p>
                  </div>
                </a>
              ))}
            </div>

            <div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12"
            >
              <img
                alt="Localização da loja TechFix no mapa"
                className="w-full h-64 object-cover rounded-2xl glow-effect"
                src="https://images.unsplash.com/photo-1649756797615-daf753c6f4f5" />
            </div>
          </div>

          <div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Solicitar Orçamento</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white mb-2">Nome *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--color-4)] border border-[var(--color-3)] rounded-lg text-white focus:outline-none focus:border-[var(--color-1)] transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Telefone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--color-4)] border border-[var(--color-3)] rounded-lg text-white focus:outline-none focus:border-[var(--color-1)] transition-colors"
                    placeholder="(48) 99999-9999"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--color-4)] border border-[var(--color-3)] rounded-lg text-white focus:outline-none focus:border-[var(--color-1)] transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Modelo do Aparelho</label>
                  <input
                    type="text"
                    name="device"
                    value={formData.device}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[var(--color-4)] border border-[var(--color-3)] rounded-lg text-white focus:outline-none focus:border-[var(--color-1)] transition-colors"
                    placeholder="Ex: iPhone 13, Galaxy S21"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white mb-2">Problema</label>
                <select
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[var(--color-4)] border border-[var(--color-3)] rounded-lg text-white focus:outline-none focus:border-[var(--color-1)] transition-colors"
                >
                  <option value="">Selecione o problema</option>
                  <option value="tela">Tela quebrada/trincada</option>
                  <option value="bateria">Problema na bateria</option>
                  <option value="camera">Câmera não funciona</option>
                  <option value="software">Problema de software</option>
                  <option value="agua">Dano por líquido</option>
                  <option value="outro">Outro problema</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-white mb-2">Mensagem</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[var(--color-4)] border border-[var(--color-3)] rounded-lg text-white focus:outline-none focus:border-[var(--color-1)] transition-colors resize-none"
                  placeholder="Descreva o problema em detalhes..."
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-[var(--color-1)] hover:bg-[var(--color-2)] text-white py-3 pulse-glow"
              >
                <Send className="mr-2 h-5 w-5" />
                Enviar Solicitação
              </Button>
            </form>
          </div>
        </div>
      </div >
    </section >
  );
};

export default Contact;

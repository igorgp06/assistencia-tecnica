
import React from 'react';
import { Smartphone, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    const socialLinks = [
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Facebook, href: '#', label: 'Facebook' },
        { icon: Twitter, href: '#', label: 'Twitter' }
    ];

    const quickLinks = [
        { name: 'Início', href: '#home' },
        { name: 'Serviços', href: '#services' },
        { name: 'Sobre', href: '#about' },
        { name: 'Contato', href: '#contact' }
    ];

    const services = [
        'Troca de Tela',
        'Troca de Bateria',
        'Reparo de Câmera',
        'Problemas de Software',
        'Resistência à Água',
        'Manutenção Geral'
    ];

    return (
        <footer className="bg-[var(--color-5)] border-t border-[var(--color-3)]">
            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center space-x-2 mb-6">
                            <Smartphone className="h-8 w-8 text-[var(--color-1)]" />
                            <span className="text-2xl font-bold gradient-text">TechFix</span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Assistência técnica especializada em smartphones com qualidade,
                            rapidez e garantia. Sua confiança é nossa prioridade.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.1 }}
                                    className="w-10 h-10 bg-[var(--color-3)] rounded-full flex items-center justify-center text-white hover:bg-[var(--color-1)] transition-colors"
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-6">Links Rápidos</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-[var(--color-1)] transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-6">Serviços</h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <span className="text-gray-300">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-6">Contato</h3>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-[var(--color-1)]" />
                                <span className="text-gray-300">(48) 99999-9999</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-[var(--color-1)]" />
                                <span className="text-gray-300">contato@techfix.com.br</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-5 w-5 text-[var(--color-1)] mt-1" />
                                <span className="text-gray-300">
                                    Praia do Rosa, 13<br />
                                    Santa Catarina, Brasil
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div
                    initial={{ opacity: 0, y: 30 }
                    }
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="border-t border-[var(--color-3)] mt-12 pt-8"
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            © 2025 <a href="https://igdeveloper.com.br" target='_blank'>Igor Gonçalves | DEV & igorgp06</a>. Todos os direitos reservados.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-[var(--color-1)] text-sm transition-colors">
                                Política de Privacidade
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[var(--color-1)] text-sm transition-colors">
                                Termos de Uso
                            </a>
                        </div>
                    </div>
                </div >
            </div >
        </footer >
    );
};

export default Footer;


import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { Button } from '../../ui/button';
import { Phone, Shield, Zap } from 'lucide-react';

const AnimatedSphere = () => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#A60311"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0}
      />
    </Sphere>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Reparo</span>
              <br />
              <span className="text-white">Profissional</span>
              <br />
              <span className="text-white">de Celulares</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Especialistas em conserto de smartphones com garantia e qualidade.
              Diagnóstico gratuito e orçamento sem compromisso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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

            <div className="grid grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Shield className="h-8 w-8 text-[var(--color-1)] mx-auto mb-2" />
                <p className="text-sm text-gray-300">Garantia</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Zap className="h-8 w-8 text-[var(--color-1)] mx-auto mb-2" />
                <p className="text-sm text-gray-300">Rapidez</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <Phone className="h-8 w-8 text-[var(--color-1)] mx-auto mb-2" />
                <p className="text-sm text-gray-300">Qualidade</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="floating-animation">
              <img
                alt="Técnico reparando smartphone com ferramentas profissionais"
                className="w-full h-auto rounded-2xl glow-effect"
                src="https://images.unsplash.com/photo-1658212662417-a2a76efe25df" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-[var(--color-1)] rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-[var(--color-2)] rounded-full opacity-10 blur-xl"></div>
    </section>
  );
};

export default Hero;

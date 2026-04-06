import React from 'react';
import { Container, Typography } from '@mui/material';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';
import abooutme from '../assets/images/aboutme.jpeg'

const About = () => {
  const { darkMode } = useTheme();

  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Typography
            variant="h2"
            className={`text-4xl md:text-6xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
          >
            About Me
          </Typography>
          <div className={`w-24 h-1 ${
            darkMode ? 'bg-purple-400' : 'bg-purple-600'
          } mx-auto rounded-full`}></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="px-4"
          >
            <img 
              src={abooutme} 
              alt="About Me" 
              className="w-full h-auto shadow-lg object-cover"
            />
          </motion.div>

          {/* Right Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pl-8 pr-4 mt-0 md:mt-0"
          >
            <Typography
              variant="h4"
              className={`mb-4 font-bold text-2xl ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              Passionate Frontend Developer
            </Typography>
            <Typography
              variant="body1"
              className={`text-lg leading-relaxed mb-8 text-justify ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Results-driven Front-End Engineer with 3+ years of experience delivering scalable, performant, and accessible web applications across eCommerce, logistics, and enterprise systems. Specialized in JavaScript (ES6+), React ecosystem, Shopify, and modern tooling. Strong knowledge of component architecture, state management, CI/CD workflows, and cross-browser compatibility. Demonstrated ability to transform complex UI/UX designs into maintainable and modular front-end codebases using TypeScript, Tailwind, and Next.js. Recently completed MSc in Cyber Security with added expertise in secure development practices and DevSecOps awareness.
            </Typography>
            <Typography
              variant="body1"
              className={`text-lg leading-relaxed text-justify ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              I am always looking for new opportunities to learn and grow. When I'm not coding, you can find me exploring new technologies, or enjoying a good cup of coffee while planning my new skills.
            </Typography>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
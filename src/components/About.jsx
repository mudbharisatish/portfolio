import React from 'react';
import { Container, Typography, Card, CardContent, Avatar } from '@mui/material';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';

const About = () => {
  const { darkMode } = useTheme();

  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <Container maxWidth="lg">
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

        <div className="row">
          <div className="col-lg-4 col-md-6 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Avatar
                sx={{
                  width: 200,
                  height: 200,
                  margin: '0 auto 2rem',
                  background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                }}
              >
                <Typography variant="h2">JD</Typography>
              </Avatar>
            </motion.div>
          </div>

          <div className="col-lg-8 col-md-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card
                sx={{
                  backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
                  backdropFilter: 'blur(10px)',
                  border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                }}
              >
                <CardContent className="p-8">
                  <Typography
                    variant="h4"
                    className={`mb-4 font-bold ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    Passionate Frontend Developer
                  </Typography>
                  <Typography
                    variant="body1"
                    className={`text-lg leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                   Results-driven Front-End Engineer with 3+ years of experience delivering scalable,
performant, and accessible web applications across eCommerce, logistics, and
enterprise systems. Specialized in JavaScript (ES6+), React ecosystem, Shopify, and
modern tooling. Strong knowledge of component architecture, state management,
CI/CD workflows, and cross-browser compatibility. Demonstrated ability to
transform complex UI/UX designs into maintainable and modular front-end
codebases using TypeScript, Tailwind, and Next.js. Recently completed MSc in Cyber
Security with added expertise in secure development practices and DevSecOps
awareness.
                  </Typography>
                  <Typography
                    variant="body1"
                    className={`text-lg leading-relaxed mt-4 ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    I am always looking for new opportunities to learn and grow.
                    When I'm not coding, you can find me exploring new technologies, or enjoying a good cup of coffee 
                    while planning my next project.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
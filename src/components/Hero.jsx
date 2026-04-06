import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import { ArrowDownward } from '@mui/icons-material';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/images/background.jpg';

const Hero = () => {
  const { darkMode } = useTheme();

  // Name typewriter
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Satish Mudbhari';

  // Roles typewriter
  const roles = [
    'Frontend Developer',
    'Software Engineer',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [roleCharIndex, setRoleCharIndex] = useState(0);

  // Typewriter effect for name
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Typewriter effect for roles
  useEffect(() => {
    if (roleCharIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setRoleText(roles[roleIndex].slice(0, roleCharIndex + 1));
        setRoleCharIndex(roleCharIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Wait, then move to next role
      const timeout = setTimeout(() => {
        setRoleCharIndex(0);
        setRoleText('');
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000); // 2s pause before switching
      return () => clearTimeout(timeout);
    }
  }, [roleCharIndex, roleIndex, roles]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Container maxWidth="xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              className={`text-5xl md:text-7xl font-bold mb-2 text-white`}
              style={{ minHeight: '120px' }}
            >
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br />
              {displayText}
              <span
                className={`animate-pulse ${
                  darkMode ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                |
              </span>
            </Typography>

            {/* Role Typewriter */}
            <Typography
              variant="h4"
              className={`text-5xl md:text-7xl font-bold mb-2 text-white`}
            >
              {roleText}
              <span
                className={`animate-pulse ${
                  darkMode ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                |
              </span>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Typography
              variant="h5"
              className={`mb-8 text-white`}
            >
              Hi, I am recently graduate and a software engineer with over 3 years of experience, specializing in Frontend development.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-x-4"
          >
            <Button
              variant="contained"
              size="large"
              onClick={scrollToAbout}
              sx={{
                background: '#000000',
                '&:hover': {
                  background: '#333333',
                },
                borderRadius: '30px',
                padding: '12px 30px',
                marginRight: '16px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.8)',
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              sx={{
                color: 'white',
                borderColor: 'white',
                borderRadius: '30px',
                padding: '12px 30px',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                },
              }}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDownward
                sx={{
                  fontSize: 40,
                  color: '#999999',
                  cursor: 'pointer',
                }}
                onClick={scrollToAbout}
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

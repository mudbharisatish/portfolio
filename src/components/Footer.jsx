import React from 'react';
import { Container, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Email } from '@mui/icons-material';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';

const Footer = () => {
  const { darkMode } = useTheme();

  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/mudbharisatish', label: 'GitHub' },
    { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/satish-mudbhari-07a5b21b7/', label: 'LinkedIn' },
    // { icon: <Twitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <Email />, url: 'mailto:satish@gmail.com', label: 'Email' },
  ];

  return (
    <footer className={`py-12 ${
      darkMode ? 'bg-gray-900 border-t border-gray-700' : 'bg-white border-t border-gray-200'
    }`}>
      <Container maxWidth="lg">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h5"
              className={`font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
            >
              Let's Connect
            </Typography>
            <Typography
              variant="body1"
              className={`mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Feel free to reach out for collaborations or just a friendly hello
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-4 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    color: darkMode ? 'white' : 'black',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                      color: 'white',
                    },
                  }}
                >
                  {link.icon}
                </IconButton>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`pt-6 border-t ${
              darkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <Typography
              variant="body2"
              className={darkMode ? 'text-gray-400' : 'text-gray-500'}
            >
              © {new Date().getFullYear()} satish
            </Typography>
          </motion.div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
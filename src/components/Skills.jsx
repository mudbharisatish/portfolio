import React from 'react';
import { Container, Typography, LinearProgress, Chip } from '@mui/material';
import { Group,Autorenew,Psychology, Speed, Smartphone, SyncAlt, ChatBubble, AutoStories } from '@mui/icons-material';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';

const Skills = () => {
  const { darkMode } = useTheme();

  const skills = [
    { name: 'React', level: 95 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML/CSS', level: 96 },
    { name: 'Node.js', level: 88 },
    { name: 'Python', level: 83 },
    { name: 'React-Native', level: 93 },
  ];

  const technologies = [
    'React', 'JavaScript','TypeScript','Next.js','Wordpress','Liquid (Shopify)', 'HTML5', 'CSS3','Redux','React Query','React Hook','React-Native','Bootstrap','SASS','Styled Component','ANT Design', 'Tailwind CSS',
    'Material UI', 'Node.js', 'Git', 'Github','Docker','Webpack','Babel','Postman','Eslint','Prettier','Burp Suite', 'Nmap','OWASP Top 10','Linux','Windows','Macos','SIEM Tools','Azure-900'
  ];

  const features = [
    {
      icon: <Group sx={{ fontSize: 40 }} />,
      title: 'Team Collaboration',
      description: 'Strengthened team collaboration by facilitating clear communication, sharing knowledge, and supporting peers, resulting in faster delivery and higher quality outcomes'
    },
    {
      icon: <Autorenew sx={{ fontSize: 40 }} />,
      title: 'Agile and Scrum',
      description: 'Experienced in applying Agile principles to deliver high-quality software through iterative development, continuous feedback, and cross-functional collaboration.'
    },
    {
      icon: <Psychology sx={{ fontSize: 40 }} />,
      title: 'Analytical Thinking',
      description: 'Ability to break down complex problems, identify patterns, and develop efficient, logical solutions to drive effective decision-making.'
    },
    {
      icon: <SyncAlt sx={{ fontSize: 40 }} />,
      title: 'Adaptability',
      description: 'Demonstrated ability to adjust quickly to new technologies, environments, and challenges, ensuring consistent performance in dynamic settings.'
    },
    {
      icon: <ChatBubble sx={{ fontSize: 40 }} />,
      title: 'Effective Communication',
      description: 'Skilled in conveying complex technical concepts clearly and concisely to diverse audiences. Adept at active listening, collaborating with cross-functional teams, and presenting ideas effectively in meetings, reports, and presentations.'
    },
    {
      icon: <AutoStories sx={{ fontSize: 40 }} />,
      title: 'Continuous Learning',
      description: 'Actively keeps up with emerging technologies and frameworks. Engages in online courses, hands-on projects, and workshops to enhance skills and deliver innovative solutions.'
    },
    
  ];

  return (
    <section id="skills" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
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
            Soft Skills
          </Typography>
          <div className={`w-24 h-1 ${
            darkMode ? 'bg-purple-400' : 'bg-purple-600'
          } mx-auto rounded-full`}></div>
        </motion.div>

        {/* Features Grid */}
        <div className="row mb-16">
          {features.map((feature, index) => (
            <div key={feature.title} className="col-lg-3 col-md-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`text-center p-6 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className={`${darkMode ? 'text-purple-400' : 'text-purple-600'} mb-4`}>
                  {feature.icon}
                </div>
                <Typography
                  variant="h6"
                  className={`font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  className={darkMode ? 'text-gray-300' : 'text-gray-600'}
                >
                  {feature.description}
                </Typography>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Skills Progress */}
        <div className="row mb-16">
          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h4"
                className={`font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}
              >
                Technical Skills
              </Typography>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-6"
                >
                  <div className="flex justify-between items-center mb-2">
                    <Typography
                      variant="h6"
                      className={darkMode ? 'text-white' : 'text-gray-800'}
                    >
                      {skill.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={darkMode ? 'text-gray-300' : 'text-gray-600'}
                    >
                      {skill.level}%
                    </Typography>
                  </div>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                        borderRadius: 4,
                      },
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="col-lg-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h4"
                className={`font-bold mb-6 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}
              >
                Technologies & Tools
              </Typography>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Chip
                      label={tech}
                      sx={{
                        background: darkMode ? 'linear-gradient(45deg, #6366f1, #8b5cf6)' : 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                        color: 'white',
                        fontWeight: 'bold',
                        '&:hover': {
                          background: darkMode ? 'linear-gradient(45deg, #4f46e5, #7c3aed)' : 'linear-gradient(45deg, #4f46e5, #7c3aed)',
                        },
                      }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
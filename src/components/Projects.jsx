import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Modal, Box, Chip } from '@mui/material';
import { GitHub, Launch, Close } from '@mui/icons-material';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';

const Projects = () => {
  const { darkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React, JavaScript, and Stripe integration.',
      longDescription: 'This is a full-featured e-commerce platform that includes user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and an admin dashboard. Built with React, JavaScript, Node.js, and MongoDB.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates.',
      longDescription: 'A comprehensive task management application that allows teams to collaborate in real-time. Features include project creation, task assignment, progress tracking, team chat, file sharing, and detailed analytics. Built with React, Socket.io, and PostgreSQL.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Socket.io', 'PostgreSQL', 'Express', 'JWT'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with beautiful data visualizations.',
      longDescription: 'An interactive weather dashboard that provides current weather conditions, forecasts, and historical data with beautiful charts and visualizations. Features location-based weather, weather maps, alerts, and detailed meteorological data.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'OpenWeather API', 'Chart.js'],
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media performance tracking.',
      longDescription: 'A comprehensive analytics dashboard that tracks social media performance across multiple platforms. Features include engagement metrics, follower growth analysis, content performance insights, competitor analysis, and automated reporting.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Python', 'Django', 'PostgreSQL', 'Chart.js'],
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with animations.',
      longDescription: 'This very portfolio website you are viewing! Built with React, JavaScript, Material UI, Tailwind CSS, and Framer Motion. Features include dark/light mode, smooth animations, responsive design, and modern UI components.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'JavaScript', 'Material UI', 'Tailwind CSS', 'Framer Motion'],
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'AI Chat Application',
      description: 'Real-time chat application with AI-powered responses.',
      longDescription: 'An innovative chat application that integrates AI to provide intelligent responses and assistance. Features include real-time messaging, AI chatbots, natural language processing, conversation history, and multi-language support.',
      image: 'https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'OpenAI API', 'Socket.io', 'Node.js', 'Redis'],
      github: '#',
      demo: '#'
    },
  ];

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '90%', md: '80%' },
    maxWidth: '800px',
    bgcolor: darkMode ? '#1a1a1a' : 'background.paper',
    border: 'none',
    borderRadius: '16px',
    boxShadow: 24,
    p: 0,
    maxHeight: '90vh',
    overflow: 'auto',
  };

  return (
    <section id="projects" className={`py-20 ${
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
            Featured Projects
          </Typography>
          <div className={`w-24 h-1 ${
            darkMode ? 'bg-purple-400' : 'bg-purple-600'
          } mx-auto rounded-full`}></div>
        </motion.div>

        <div className="row">
          {projects.map((project, index) => (
            <div key={project.id} className="col-lg-4 col-md-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'white',
                    backdropFilter: 'blur(10px)',
                    border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: darkMode ? '0 20px 40px rgba(255, 255, 255, 0.1)' : '0 20px 40px rgba(0, 0, 0, 0.15)',
                    },
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{ height: 200, objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      className={`font-bold mb-2 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      className={`mb-4 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}
                    >
                      {project.description}
                    </Typography>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                            color: 'white',
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                      {project.technologies.length > 3 && (
                        <Chip
                          label={`+${project.technologies.length - 3}`}
                          size="small"
                          sx={{
                            backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                            color: darkMode ? 'white' : 'black',
                            fontSize: '0.75rem',
                          }}
                        />
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="small"
                        startIcon={<GitHub />}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                        sx={{
                          color: darkMode ? 'white' : 'black',
                          borderColor: darkMode ? 'white' : 'black',
                          '&:hover': {
                            backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                          },
                        }}
                      >
                        Code
                      </Button>
                      <Button
                        size="small"
                        startIcon={<Launch />}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.demo, '_blank');
                        }}
                        sx={{
                          background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                          color: 'white',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
                          },
                        }}
                      >
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <Modal
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          aria-labelledby="project-modal-title"
          aria-describedby="project-modal-description"
        >
          <Box sx={modalStyle}>
            {selectedProject && (
              <>
                <div className="relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <Button
                    onClick={() => setSelectedProject(null)}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      minWidth: 40,
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      },
                    }}
                  >
                    <Close />
                  </Button>
                </div>
                <div className="p-6">
                  <Typography
                    id="project-modal-title"
                    variant="h4"
                    component="h2"
                    className={`font-bold mb-4 ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    {selectedProject.title}
                  </Typography>
                  <Typography
                    id="project-modal-description"
                    variant="body1"
                    className={`mb-6 leading-relaxed ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {selectedProject.longDescription}
                  </Typography>
                  <div className="mb-6">
                    <Typography
                      variant="h6"
                      className={`font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-800'
                      }`}
                    >
                      Technologies Used
                    </Typography>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          sx={{
                            background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                            color: 'white',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outlined"
                      startIcon={<GitHub />}
                      onClick={() => window.open(selectedProject.github, '_blank')}
                      sx={{
                        color: darkMode ? 'white' : 'black',
                        borderColor: darkMode ? 'white' : 'black',
                        '&:hover': {
                          borderColor: darkMode ? 'white' : 'black',
                          backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                        },
                      }}
                    >
                      View Code
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<Launch />}
                      onClick={() => window.open(selectedProject.demo, '_blank')}
                      sx={{
                        background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </section>
  );
};

export default Projects;
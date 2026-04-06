import React, { useState } from 'react';
import { Container, Typography, Card, CardContent, CardMedia, Button, Modal, Box, Chip } from '@mui/material';
import { GitHub, Launch, Close } from '@mui/icons-material';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';
import impexo from '../assets/images/impexo.png';
import cherd from '../assets/images/cherd.png';
import yellowExpress from '../assets/images/yellowExpress.png';

const Projects = () => {
  const { darkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Learning Management System',
      description: 'Production-ready LMS with React/Redux frontend and PHP/MySQL backend, featuring custom WordPress marketing site and AI-powered support chatbot.',
      longDescription: 'A full-scale learning management system serving students, instructors, and administrators with seamless, responsive experiences. Built with React and Redux on the frontend connected to RESTful PHP APIs on the backend powered by optimized MySQL schemas. Engineered a custom WordPress marketing site with bespoke themes and reusable component architecture, enabling non-technical users to manage dynamic course catalogs, instructor profiles, pricing tiers, and landing pages. Implemented feature-rich functionality including course CRUD operations, secure authentication, payment processing, real-time progress tracking, discussion forums, and gradebook management. Integrated third-party services (payment gateways, video streaming, email/SMS providers) into clean API endpoints. Set up CI/CD workflows with GitHub Actions for automated build, test, and deployment. Developed an internal AI-powered support chatbot for admin assistance and utilized GitHub Copilot to generate optimized PHP repository methods. Architected reusable React components with Redux state management and designed high-performance MySQL indexes to handle significant read/write traffic while reducing query latency.',
      image: "https://www.shutterstock.com/image-vector/no-photo-blank-image-icon-260nw-1955339317.jpg",
      technologies: ['PHP', 'WordPress', 'React', 'SQL(MySQL)', 'Redux', 'Tailwind', 'CI/CD','Claude'],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Walnex (E-commerce Platform with seamless AI chatbot)',
      description: 'AI-powered eCommerce shoe platform with intelligent chatbots, personalized recommendations, and seamless shopping experience.',
      longDescription: 'Walnex is a sophisticated e-commerce shoe marketplace designed to deliver a frictionless shopping journey enhanced by artificial intelligence. Built with a React frontend and Python/Django backend, the platform integrates an intelligent AI-powered chatbot that provides real-time customer support, product recommendations, and personalized shopping assistance. Features include dynamic product catalog management with advanced filtering and search capabilities, secure user authentication and profile management, real-time inventory tracking, and smooth checkout workflows. The chatbot leverages natural language processing to understand customer queries and provide intelligent responses, driving conversion rates and reducing support overhead. Deployed on Firebase for scalability and reliability, the platform is fully responsive and optimized for all devices. The backend architecture uses Django for robust API endpoints, while the frontend employs React with Tailwind CSS for a modern, accessible UI. Integrated payment processing, order management, and customer analytics dashboards empower administrators to make data-driven business decisions.',
      image: 'https://www.shutterstock.com/image-vector/no-photo-blank-image-icon-260nw-1955339317.jpg',
      technologies: ['React', 'Python','Django', 'Material UI', 'PostgreSQL', 'Express', 'JWT'],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Impexo',
      description: 'Global logistics management platform with automated quote management, freight operations, and comprehensive CRM for freight forwarders.',
      longDescription: 'Impexo is a comprehensive software solution designed for logistics businesses operating globally across air, road, rail, and ocean freight sectors. Built as a fully digital platform, Impexo streamlines complex freight operations by automating quote management, rate negotiations, and job tracking while eliminating reliance on spreadsheets and manual record-keeping. Key features include intelligent freight quote and rate management with automated price comparisons, streamlined operation workflows for sales and operations teams, customer and vendor portals for self-service ordering, integrated customer relationship management (CRM) to classify customers by patterns and behavior, comprehensive financial controls with margin tracking and invoice automation, advanced reporting and analytics dashboards for performance insights, and employee management with granular role-based permissions. The platform enables real-time tracking of shipment data, automated notifications and alerts across multiple channels (email, SMS, mobile app push), contract management capabilities, and organizational performance fact sheets. Deployed with mobile app availability on iOS and Android, Impexo delivers operational simplification for medium to large-scale logistics companies by reducing operational costs, maximizing revenue, and accelerating business growth through digital transformation.',
      image: impexo,
      technologies: [ 'React', 'Java' ,'GoogleMap Api','React-Native', 'Redux','Bootsrap','Tailwind' ],
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'CEHRD (Center for Education and Human Resource Development)',
      description: 'Nepal\'s premier government digital learning portal with 50+ courses, expert instructors, and self-paced certifications for all students.',
      longDescription: 'CEHRD (Center for Education and Human Resource Development) developed the Sikai Chautari digital learning platform Nepal\'s official and only authentic government learning portal. Built to democratize quality education across the nation, this comprehensive platform serves over 12,000 active users including 10,000+ teachers and 260 students with access to 53+ carefully curated courses. The platform features expert instructors, diversified and interactive learning materials, self-paced study options with certification programs, and 24/7 multilingual support. Key capabilities include curriculum-aligned digital textbooks and reading materials accessible through powerful search and category filtering, interactive video tutorials with step-by-step guidance, comprehensive PDF resources for offline study, real-time progress tracking dashboards, interactive quizzes and engagement tools to reinforce learning, and granular permission systems for administrators, instructors, and students. The portal is fully responsive and optimized for mobile devices with dedicated iOS and Android applications, enabling "learn from anywhere anytime" access. Built as a free government initiative provided at no cost to all students, the platform emphasizes accessibility and inclusivity. Technical implementation includes scalable backend architecture, secure user authentication, role-based access controls, efficient resource management for large-scale content delivery, and integration with official government educational departments and curriculum frameworks.',
      image: cherd,
      technologies: ['React','Typescript','React-Native', 'Java', 'PostgreSQL','Bootsrap', 'Material UI'],
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Yellow Express',
      description: 'On-demand courier, moving, and delivery platform enabling same-day logistics at $1/minute and $1/mile with professional operators.',
      longDescription: 'Yellow Express platform modernizes on-demand logistics for the digital age, building on the company\'s 1926 heritage of reliable courier and moving services. The comprehensive platform enables customers to send, move, and deliver just about anything on-demand with flexible pricing of $1/minute and $1/mile, with express dispatch available in as little as 30 minutes. The platform is built as a responsive, mobile-first application allowing customers to schedule courier services (express courier, same-day delivery, specialty concierge), arrange moving services (studio/1-bedroom, large furniture, any size), and coordinate last-mile logistics for retailers and online marketplace sellers (Facebook Marketplace, eBay, Gumtree pickups, appliance and store deliveries). Key features include real-time booking system with instant dispatch capability, professional operator management with owner-operators ensuring quality service, advanced logistics tracking and status updates, specialty vehicle fleet management with vehicles featuring up to 381 cubic feet cargo space and 4010 lbs payload capacity, comprehensive safety and equipment (moving blankets, dollies, straps, boxes, mattress covers), and customer dashboard for managing shipments. The platform emphasizes reliability, professionalism, and fully-equipped service teams to handle jobs of all sizes. Deployed with mobile app availability and real-time GPS tracking, Yellow Express successfully reconnects the classic moving and courier experience with modern on-demand technology.',
      image:yellowExpress,
      technologies: ['React', 'Redux-Saga', 'SASS', 'ANT Design', 'Flutter','Node.js'],
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'HR- Utility',
      description: 'Comprehensive HR Management System with employee database, time tracking, payroll processing, recruitment, performance management, and analytics.',
      longDescription: 'HR-Utility is a full-featured Human Resource Management System (HRMS) designed to streamline all aspects of organizational people management and workforce administration. The platform consolidates core HR functions into a single, integrated solution that empowers HR teams and employees alike. Key modules include a centralized employee database with comprehensive personal, job history, and salary information management; digital employee profiles with secure document storage for contracts, certifications, and credentials; intelligent organizational charts and reporting structure visualization. The attendance and timekeeping system supports manual and biometric clock-in/clock-out tracking, automated timesheet generation, leave and absence management with configurable policies, and intelligent shift scheduling and rostering. Advanced payroll processing automates salary calculations, bonus and deduction management, tax compliance handling, and instant payslip generation with customizable formats. The integrated Applicant Tracking System (ATS) streamlines recruitment with job posting management, candidate pipeline tracking, interview scheduling, feedback collection, and digital onboarding workflows. Performance management features include comprehensive performance reviews and appraisals, goal setting with KPI and OKR alignment, 360-degree feedback mechanisms, and continuous performance tracking. Learning and development capabilities encompass training program management, integrated Learning Management System (LMS), skill tracking and certification management, and personalized career development planning. Robust analytics and reporting provide workforce analytics dashboards, custom report generation, data-driven insights on retention and diversity, and predictive analytics for informed decision-making. Security is paramount with encrypted data storage, role-based access controls, complete audit trails, and compliance record-keeping. Employee engagement features include pulse surveys and feedback tools, internal communication and announcement systems, recognition and rewards programs, and engagement tracking. The platform integrates seamlessly with accounting, ERP, and CRM systems via APIs, supports workflow automation for approvals and notifications, and is cloud-based with full mobile compatibility.',
      image: 'https://www.shutterstock.com/image-vector/no-photo-blank-image-icon-260nw-1955339317.jpg',
      technologies: ['React', 'PHP','TypeScript', 'Redux', 'React Query'],
      github: '#',
      demo: '#'
    },
    {
      id: 7,
      title: 'VRTMS (Vehicle Registration and Transportation Management System)',
      description: 'Comprehensive vehicle registration and management platform with digital ownership tracking, tax compliance, and government integration.',
      longDescription: 'VRTMS (Vehicle Registration and Transportation Management System) is a comprehensive digital platform designed to streamline vehicle registration, ownership management, and transportation compliance across government and public sectors. The core vehicle registration module enables efficient registration of new vehicles with unique registration numbers, comprehensive storage of vehicle details (make, model, engine number, VIN, color), and automated issuance of digital registration certificates. The owner information management system maintains detailed owner profiles including name, address, and identity proof documentation, supports linking vehicles to owners, and handles complex ownership records for leasing and corporate fleet vehicles. Advanced ownership transfer capabilities record vehicle sales transitions, maintain historical ownership records, generate transfer certificates, and ensure full audit trails for compliance. Taxation and fee management automates road tax calculations, processes registration fees and penalties, and provides integrated online payment options for streamlined transactions. Powerful search and verification functionality enables vehicle lookups by registration number or VIN, provides instant ownership and registration status verification, and supports law enforcement inquiries and public background checks. Intelligent notification and alert systems send automated reminders for tax renewal, MOT inspections, and insurance updates, notify vehicle owners about penalties or expired registrations, and support multi-channel communication via email and SMS. Advanced reporting and analytics generate detailed vehicle registration reports, track trends across vehicle types and registrations, and provide actionable insights for government planning and policy development. Robust security and access control implements role-based permissions for administrators, staff, and public users, enforces data encryption and secure storage, and protects against unauthorized access through multi-layer security. Online services integration provides web portals for vehicle registration and renewal, integrates seamlessly with insurance and MOT databases, and supports full mobile app functionality. Digital document management stores and retrieves digital copies of registration documents, manages ID proofs and insurance certificates, and enables efficient verification workflows. The platform emphasizes scalability, compliance, and user accessibility with cloud-based deployment, mobile-first design, and comprehensive audit logging for regulatory requirements.',
      image: 'https://www.shutterstock.com/image-vector/no-photo-blank-image-icon-260nw-1955339317.jpg',
      technologies: ['React', 'TypeScript', 'Redux', 'React Query'],
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
            Featured Projects
          </Typography>
          <div className={`w-24 h-1 ${
            darkMode ? 'bg-purple-400' : 'bg-purple-600'
          } mx-auto rounded-full`}></div>
        </motion.div>

        <div className="row">
          {projects.map((project, index) => (
            <div key={project.id} className="col-lg-6 col-md-6 col-sm-6 mb-8">
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
                      {project?.technologies?.slice(0, 3).map((tech) => (
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
                      {project?.technologies?.length > 3 && (
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
                        disabled
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
                        disabled
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
                      disabled
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
                      disabled
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
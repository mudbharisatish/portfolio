import React from 'react';
import { Container, Typography, TextField, Button, Card, CardContent, Alert } from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';

const schema = yup.object().shape({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Please enter a valid email'),
  subject: yup.string().required('Subject is required').min(5, 'Subject must be at least 5 characters'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

const Contact = () => {
  const serviceId='service_q01uljo';
    const templateId='template_1d3vgu7';
    const publicKey='Tl-PNLgLrg_cp3BcC';
  const { darkMode } = useTheme();
  const [showSuccess, setShowSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    emailjs.send(serviceId,templateId,data,publicKey).then((response)=>{
      console.log('Email Sent Successfully',response)
      console.log('Form submitted:', data);
      reset();
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
    }).catch((error)=>{
      console.log('Error sending emial:',error)
    })
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: 30 }} />,
      title: 'Email',
      content: 'satishm1525@gmail.com',
      link: 'mailto:satishm1525@gmail.com'
    },
    {
      icon: <Phone sx={{ fontSize: 30 }} />,
      title: 'Phone',
      content: '+447587401590',
      link: 'tel:+447587401590'
    },
    {
      icon: <LocationOn sx={{ fontSize: 30 }} />,
      title: 'Location',
      content: 'London, United Kingdom',
      link: '#'
    },
  ];

  return (
    <section id="contact" className={`py-20 ${
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
            Get In Touch
          </Typography>
          <div className={`w-24 h-1 ${
            darkMode ? 'bg-purple-400' : 'bg-purple-600'
          } mx-auto rounded-full`}></div>
          <Typography
            variant="h6"
            className={`mt-4 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Let's connect or discuss new technologies!
          </Typography>
        </motion.div>

        <div className="row">
          {/* Contact Information */}
          <div className="col-lg-4 col-md-12 mb-8">
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
                Contact Information
              </Typography>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <Card
                      sx={{
                        backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'white',
                        backdropFilter: 'blur(10px)',
                        border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                        cursor: info.link !== '#' ? 'pointer' : 'default',
                      }}
                      onClick={() => info.link !== '#' && window.open(info.link)}
                    >
                      <CardContent className="flex items-center p-4">
                        <div className={`mr-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                          {info.icon}
                        </div>
                        <div>
                          <Typography
                            variant="h6"
                            className={`font-bold ${
                              darkMode ? 'text-white' : 'text-gray-800'
                            }`}
                          >
                            {info.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            className={darkMode ? 'text-gray-300' : 'text-gray-600'}
                          >
                            {info.content}
                          </Typography>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8 col-md-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card
                sx={{
                  backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.05)' : 'white',
                  backdropFilter: 'blur(10px)',
                  border: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
                }}
              >
                <CardContent className="p-8">
                  <Typography
                    variant="h4"
                    className={`font-bold mb-6 ${
                      darkMode ? 'text-white' : 'text-gray-800'
                    }`}
                  >
                    Send Message
                  </Typography>

                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6"
                    >
                      <Alert severity="success">
                        Thank you! Your message has been sent successfully.
                      </Alert>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <TextField
                          fullWidth
                          label="Your Name"
                          variant="outlined"
                          {...register('name')}
                          error={!!errors.name}
                          helperText={errors.name?.message}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#6366f1',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                            },
                            '& .MuiInputBase-input': {
                              color: darkMode ? 'white' : 'black',
                            },
                          }}
                        />
                      </div>
                      <div className="col-md-6">
                        <TextField
                          fullWidth
                          label="Your Email"
                          variant="outlined"
                          {...register('email')}
                          error={!!errors.email}
                          helperText={errors.email?.message}
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '& fieldset': {
                                borderColor: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                              },
                              '&:hover fieldset': {
                                borderColor: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#6366f1',
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                            },
                            '& .MuiInputBase-input': {
                              color: darkMode ? 'white' : 'black',
                            },
                          }}
                        />
                      </div>
                    </div>

                    <div className="mb-2">
                    <TextField
                      fullWidth
                     
                      label="Subject"
                      variant="outlined"
                      {...register('subject')}
                      error={!!errors.subject}
                      helperText={errors.subject?.message}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#6366f1',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                        },
                        '& .MuiInputBase-input': {
                          color: darkMode ? 'white' : 'black',
                        },
                      }}
                    />
                    </div>

                    <div className="mb-2">
                    <TextField
                      fullWidth
                      label="Your Message"
                      variant="outlined"
                      multiline
                      rows={6}
                      {...register('message')}
                      error={!!errors.message}
                      helperText={errors.message?.message}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: darkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)',
                          },
                          '&:hover fieldset': {
                            borderColor: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#6366f1',
                          },
                        },
                        '& .MuiInputLabel-root': {
                          color: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
                        },
                        '& .MuiInputBase-input': {
                          color: darkMode ? 'white' : 'black',
                        },
                      }}
                    />
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        endIcon={<Send />}
                        sx={{
                          background: 'linear-gradient(45deg, #6366f1, #8b5cf6)',
                          borderRadius: '30px',
                          padding: '12px 30px',
                          fontSize: '1.1rem',
                          '&:hover': {
                            background: 'linear-gradient(45deg, #4f46e5, #7c3aed)',
                          },
                        }}
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';

const Navigation = () => {
  const { darkMode } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Education', 'Experience', 'Contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem key={item} onClick={() => scrollToSection(item)}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: darkMode ? 'rgba(18, 18, 18, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: darkMode ? '0 2px 10px rgba(255, 255, 255, 0.1)' : '0 2px 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: darkMode ? 'white' : 'black' }}>
            Portfolio
          </Typography>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  onClick={() => scrollToSection(item)}
                  sx={{
                    color: darkMode ? 'white' : 'black',
                    '&:hover': {
                      backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    },
                  }}
                >
                  {item}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <IconButton
            edge="start"
            onClick={() => setMobileOpen(true)}
            sx={{ ml: 2, display: { md: 'none' }, color: darkMode ? 'white' : 'black' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: darkMode ? '#121212' : 'white',
            color: darkMode ? 'white' : 'black',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
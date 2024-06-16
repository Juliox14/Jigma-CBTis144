"use client";
import { useState } from "react";
import { Divider, Button } from "@nextui-org/react";
import { IconButton, Drawer, Typography, Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { FlyoutLink } from "./FlyoutLink";
import axios from "axios";

export default function Header() {

    const drawerWidth = 240;
    const navItems = ['Inicio', 'Acerca de nosotros', 'Contacto'];

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Typography variant="h6" sx={{ my: 2 }}>
            Menú
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

      const cerrarSesion = async () => {
        try{
            const response = await axios.post('/api/logout');
            console.log(response);
            window.location.href = '/login';
        }
        catch(error){
            console.error(error);
        }
    }; 

    return(
        <header>
            <section className="bg-[#0C231E] h-12">
                <article className="h-full flex justify-center items-center lg:justify-normal lg:gap-6 lg:ml-32">
                    <h1 className="text-white font-semibold lg:text-lg">CBTis 144</h1>
                    <div className="w-auto h-full py-2">
                        <Divider orientation="vertical" className="bg-white mx-2" />
                    </div>
                    <h2 className="text-white text-base">José Emilio Grajales Moguel</h2>
                </article>
            </section>
            <nav className="relative h-16 bg-[#13322B] flex">
                <ul className="hidden lg:w-full lg:h-full lg:flex lg:items-center lg:justify-center gap-10 lg:gap-20">
                    <li>
                    <FlyoutLink href="/" FlyoutColor="bg-white"> 
                        <span className="text-white">Inicio</span>
                    </FlyoutLink>
                    </li>
                    <li>
                    <FlyoutLink href="/" FlyoutColor="bg-white"> 
                        <span className="text-white">Acerca de nosotros</span>
                    </FlyoutLink>
                    </li>
                    <li>
                    <FlyoutLink href="/" FlyoutColor="bg-white"> 
                        <span className="text-white">Contacto</span>
                    </FlyoutLink>
                    </li>
                </ul>

                <div className="w-full h-full flex items-center justify-center lg:hidden">
                    <IconButton
                        className="text-white lg:hidden"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>

                <div className="hidden lg:block lg:absolute lg:w-[1em] lg:h-full lg:right-36 lg:py-2">
                    <Divider orientation="vertical" className="bg-white mx-2" />
                </div>
                
                <div className="hidden lg:absolute lg:w-[8em] lg:h-full lg:flex lg:items-center lg:justify-center lg:right-2">
                    <Button className="bg-[#1d4b3f] text-white" onClick={cerrarSesion}>
                        Cerrar sesión
                    </Button>
                </div>

                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    >
                    {drawer}
                </Drawer>
            </nav>
        </header>
    );

}
import { useState } from 'react';
import "./MainPage.scss";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InstagramIcon from '@mui/icons-material/Instagram'; // Import InstagramIcon from MUI icons
import FacebookIcon from '@mui/icons-material/Facebook'; // Import FacebookIcon from MUI icons
import TwitterIcon from '@mui/icons-material/Twitter'; // Import TwitterIcon from MUI icons
import LinkedInIcon from '@mui/icons-material/LinkedIn'; // Import LinkedInIcon from MUI icons
import GmailIcon from '@mui/icons-material/Email'; // Import GmailIcon from MUI icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // Import WhatsAppIcon from MUI icons
import TelegramIcon from '@mui/icons-material/Telegram'; // Import TelegramIcon from MUI icons
import { Button, IconButton } from '@mui/material'; // Import Button component from MUI
import AddIcon from '@mui/icons-material/Add'; // Import AddIcon from MUI icons
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const drawerWidth = 230;

const MainPage = () => {
    const socialMedia = [
        { name: "Instagram", icon: <InstagramIcon /> },
        { name: "Facebook", icon: <FacebookIcon /> },
        { name: "Twitter", icon: <TwitterIcon /> },
        { name: "LinkedIn", icon: <LinkedInIcon /> },
        { name: "Gmail", icon: <GmailIcon /> },
        { name: "WhatsApp", icon: <WhatsAppIcon /> },
        { name: "Telegram", icon: <TelegramIcon /> },
    ];

    const [selectedSocialMedia, setSelectedSocialMedia] = useState<string>(""); // State for selected social media
    const [open, setOpen] = useState(false); // State for drawer open/close

    const toggleDrawer = () => {
        setOpen(!open); // Toggle drawer open/close state
    };

    return (
        <Box className="main-page-wrapper">
            <Box
                className={`drawer ${open ? 'open' : 'closed'}`}
            >
                <Box className="drawer-header">
                    <IconButton aria-label="add social media" onClick={toggleDrawer}>
                    {open ? <CloseIcon /> : <KeyboardArrowRightIcon />}
                </IconButton>
                    <p>{open ? "Social Media" : ""}</p>
                </Box>
                <Divider />
                <List>
                    {socialMedia.map((social) => (
                        <ListItem key={social.name} disablePadding onClick={() => setSelectedSocialMedia(social.name)}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        background: '#897eff',
                                        padding:1,
                                        borderRadius: "5px" // Icon color
                                    }}
                                >
                                    {social.icon}
                                </ListItemIcon>
                                <ListItemText primary={social.name} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <Box sx={{ p: 2 }} className="add-button-wrapper">

                    {open ?
                        <Button variant="outlined" sx={{ minWidth: "40px" }} fullWidth={true} startIcon={<AddIcon />}>
                            {open ? "Add Social Media" : ""}
                        </Button> :
                        <IconButton aria-label="add social media" onClick={() => console.log("add button clicked")} sx={{ padding: "3px", border: "2px solid rgba( 137, 126, 255, 0.4 )", borderRadius: 2}}>
                            <AddIcon/>
                        </IconButton>
                    }
                </Box>
            </Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {selectedSocialMedia ? (
                    <div>
                        <Typography variant="h4">{selectedSocialMedia} Statistics</Typography>
                        <Typography paragraph>Followers: 12345</Typography>
                        <Typography paragraph>Posts: 678</Typography>
                        <Typography paragraph>Likes: 91011</Typography>
                    </div>
                ) : (
                    <div>
                        <Typography variant="h4">Select a social media platform to view statistics</Typography>
                    </div>
                )}
            </Box>
        </Box>
    );
};

export default MainPage;

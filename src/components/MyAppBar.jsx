import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';

export default function MyAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Mi Tienda
                    </Typography>
                    <Stack direction='row'>
                        <Button color='inherit'>Inicio</Button>
                        <Button color='inherit'>Blog</Button>
                        <Button color='inherit'>Contacto</Button>
                    </Stack>
                    <Button
                        sx={{
                            margin: '0 20px'
                        }}
                        color="inherit"
                        variant='outlined'
                    >
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
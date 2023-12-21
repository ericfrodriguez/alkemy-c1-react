import { Box } from "@mui/material";

function Footer() {

    return (
        <Box sx={{
            minHeight: 70,
            bgcolor: 'tomato',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            Derechos Reservados Alkemy
        </Box>
    )
}

export default Footer;
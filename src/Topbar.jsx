import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "./theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./styles.css"
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';

import "./topBar.css"


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    // <Box display="flex" justifyContent="space-between" p={2}>
    //   {/* SEARCH BAR */}
    //  <Box
    //     display="flex"
    //     backgroundColor={colors.primary[100]}
    //     borderRadius="3px"
    //   >


    //   </Box> 

    //   {/* ICONS */}
    //   <Box display="flex" mrarginRight="50px">
     
    //   </Box>
    // </Box>



<Box sx={{ flexGrow: 1 }}
 backgroundColor={"red"}
 className='nav-container'
>
<AppBar position="static">
  <Toolbar>
  <Link   className='link' to='quickSort'> <div  color= {`${colors.primary[500]}`} >quick</div></Link>
  <Link  className='link' to='heapSort'> heap </Link>
  <Link className='link' to='mergeSort'> merge</Link>
  <Link  className='link' to='selectionSort'>selection</Link>
  <Link  className='link' to='bubbleSort'>bubble</Link>
  <Link className='link' to='insertionSort'>insertion</Link>
   
    <IconButton sx={{"ml":"45vw"}} id="toggleMode" onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon sx={{"color" :"white"}} />
          )}
        </IconButton>
  </Toolbar>
</AppBar>
</Box>



  );
};

export default Topbar;






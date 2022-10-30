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
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
     <Box
        display="flex"
        backgroundColor={colors.primary[100]}
        borderRadius="3px"
      >
  <Link  className='link' to='quickSort'> <div  color= {`${colors.primary[100]}`} >quick sort</div></Link>
  <Link  className='link' to='heapSort'> heap </Link>
  <Link className='link' to='mergeSort'> merge</Link>
  <Link  className='link' to='selectionSort'>selection</Link>
  <Link  className='link' to='bubbleSort'>bubble</Link>
  <Link className='link' to='insertionSort'>insertion</Link>

      </Box> 

      {/* ICONS */}
      <Box display="flex" mrarginRight="50px">
        <IconButton id="toggleMode" onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;

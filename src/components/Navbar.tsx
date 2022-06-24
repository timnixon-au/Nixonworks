import { AppBar, Box } from "@mui/material"
import Image from "next/image"
import logo from "../../public/assets/images/logoLight.svg"

export const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar color="transparent" position={"sticky"} sx={{justifyContent:"center", padding:"10px"}}>
            <Image src={logo} width="50" height="20"/>
        </AppBar>
      </Box>
    )
  }
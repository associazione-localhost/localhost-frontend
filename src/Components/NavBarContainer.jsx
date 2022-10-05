import react from "react";
import AppBar from '@mui/material/AppBar';
import NavBarContent from "./NavBarContent";

const styles={
    app_bar_styling:{
        width:"100%",
        height:"70px",
        background:"#00ff37",
        display:"flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: "4px solid rgb(30 30 30)",
        opacity:1
    },
    logo_image_styling:{
        width:"400px",
        marginLeft:"50px"
    }
}

class NavBarContainer extends react.Component{
    
    render(){
        return(<div>
            <AppBar style={styles.app_bar_styling} position="static">
                <div>
                    <img src="e7030e21ee768856b41068287bd704fb.png" alt="logo_image" style={styles.logo_image_styling}/>
                </div>
                <NavBarContent/>
            </AppBar>
        </div>)
    }
}

export default NavBarContainer;
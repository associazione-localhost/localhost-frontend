import React,{Component} from "react";
import { slide as Menu } from 'react-burger-menu'
import { SECTIONS_BORDER_STYLE } from "../Constants";
//styles 
import '../Themes/NavMenu.css'

const styles = {
    main_container_styling:{
        width:"100%",
        height:"100px",
        display:"flex",
        alignItems:"center",
        position: "fixed",
        borderBottom: SECTIONS_BORDER_STYLE,
        borderTop: SECTIONS_BORDER_STYLE,
        background: "#CEEDC7",
        zIndex:"100"
    },
    logo_styling:{
        height:"60px",
        marginLeft:"70px"
    }
}
class NavMenu extends Component{
    render(){
        return(
            <div>
                <Menu>
                    <p id="home">Home</p>
                    <p id="about">About</p>
                    <p id="contact">Contact</p>
                    <p id="Settings">Settings</p>
                </Menu>
                <div style={styles.main_container_styling}>
                    <img
                        style={styles.logo_styling} 
                        src="/MainLogo.png" 
                        alt="image_main_logo" 
                    />
                </div>
            </div>
            
            
        )
    }
}

export default NavMenu;
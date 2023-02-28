import React,{Component} from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import { SECTIONS_BORDER_STYLE } from "../Constants";

const styles = {
    container_styling:{
        height:"100%",
        display:"flex",
        marginTop:"100px",
        width: "100%",
        background: "#FFD4B2",
        justifyContent: "space-between",
        borderBottom:SECTIONS_BORDER_STYLE
    },
    content_styling:{
        minWidth:"30%",
        borderRight: SECTIONS_BORDER_STYLE,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center"
    },
    text_container_styling:{
        textAlign: "start",
        paddingLeft: "20%",
        paddingRight:"10%",
        fontSize: "1.25rem",
        lineHeight: "2",
        fontFamily: "'Courier New', monospace"
    },
    image_styling:{
        maxHeight:"100vh",
        minHeight:"600px"
    }
}

class Home extends Component{
    render(){
        return(    
            <div style={styles.container_styling}>
                <div style={styles.content_styling}>
                    <div style={{
                        position: "inherit",
                        width: "100%"
                    }}>
                        <Slide direction="left">
                            <div style={
                                Object.assign({},styles.text_container_styling,
                                    {
                                        fontSize: "2.5rem",
                                        fontWeight: "bold",
                                    }
                                )}>
                                ABOUT US
                            </div>
                        </Slide>
                        <Zoom>
                            <div style={styles.text_container_styling}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Ut libero neque, facilisis a commodo quis, sodales non quam. 
                                Duis congue justo ac augue mattis ornare. 
                            </div>
                        </Zoom>   
                    </div>
                </div>
                <img 
                    style={styles.image_styling}
                    src="/homePage.png" 
                    alt="image team building reaching your goals" 
                />
            </div>
        )
    }
}

export default Home;
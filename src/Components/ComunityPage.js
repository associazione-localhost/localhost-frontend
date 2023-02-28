import React,{Component} from "react";
import { Fade, Slide } from "react-awesome-reveal";

const CARD_TEXT_PADDING = 20;
const CARDS_COLORS=[ "#91b5ff","#CEEDC7","#FFF6BD","#FFD4B2"]

const CARDS_CONTENT = [
    {
        title:"CARD_1",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin libero sed molestie scelerisque. In viverra odio id libero tristique luctus. Pellentesque pretium vel est non aliquam. Pellentesque hendrerit pulvinar maximus."
    },
    {
        title:"CARD_2",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin libero sed molestie scelerisque. In viverra odio id libero tristique luctus. Pellentesque pretium vel est non aliquam. Pellentesque hendrerit pulvinar maximus."
    },
    {
        title:"CARD_3",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin libero sed molestie scelerisque. In viverra odio id libero tristique luctus. Pellentesque pretium vel est non aliquam. Pellentesque hendrerit pulvinar maximus."
    },
    {
        title:"CARD_4",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin libero sed molestie scelerisque. In viverra odio id libero tristique luctus. Pellentesque pretium vel est non aliquam. Pellentesque hendrerit pulvinar maximus."
    }
]

const styles={
    container_styling:{
        minHeight:"100vh",
        display: "flex",
        flexDirection: "column",
        height:"100%",
        position:"relative",
        background:"#bcc8ff",
    },
    section_title_styling:{
        marginTop: "100px",
        fontSize: "2.5rem",
        lineHeight: "2",
        fontFamily: "'Courier New', monospace",
        fontWeight: "bold"
    },
    card_container_styling:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"50px"
    },
    card_styling:{
        minHeight: "250px",
        margin: "10px",
        boxShadow: "-6px 6px 0px 0px",
        borderRadius: "3%"
    },
    inner_card_styling:{
        height:"250px",
        border:"3px solid",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "2%",
        width:"300px"
    },
    card_title_styling:{
        padding:`${CARD_TEXT_PADDING}px`,
        fontWeight: "700",
        fontFamily: "Montserrat, sans-serif"
    },
    card_content_styling:{
        height: "100%",
        width: `calc(100% - ${CARD_TEXT_PADDING*2}px)`
    },
    background_container_styling:{    
        backgroundColor: "#fdfeb4",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffd5b2' fill-opacity='1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        height: "100%"
    }
}

class ComunityPage extends Component{

    _renderCards=()=>{
        let cards = [];
        for(let index in CARDS_CONTENT){
            let direction = index %2 === 0 ?"up":"down"
            cards.push(
                <Slide direction={direction} damping={2}>
                    <div style={styles.card_styling}>
                        <div style={Object.assign({},styles.inner_card_styling,{
                                background:CARDS_COLORS[index]
                            })
                        }>
                            <div style={styles.card_title_styling}>
                                {CARDS_CONTENT[index].title}
                            </div>
                            <div style={styles.card_content_styling}>
                                {CARDS_CONTENT[index].text}
                            </div>
                        </div>
                    </div>
                </Slide>
            )
        }

        return cards
    }

    render(){
        return(
            <div style={styles.container_styling}>
                <div style={{height:"30%",zIndex: "2"}}>
                    <Slide direction="down" delay={200}>
                        <div style={styles.section_title_styling}>
                            <Fade delay={1000} duration={2000}>
                                OUR COMUNITY AND OUR GOALS
                            </Fade>
                        </div>
                    </Slide>
                    
                    <div style={styles.card_container_styling}>
                        {this._renderCards()}
                    </div>
                </div>
                    <div style={{
                        height: "50%",
                        position: "absolute",
                        width: "100%",
                        bottom: "0",
                        borderTop: "4px solid black"
                    }}>
                        {<div
                            style={styles.background_container_styling}                             
                        />}
                    </div>                
            </div>
        )
    }
}

export default ComunityPage;
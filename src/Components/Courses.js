import React,{Component} from "react";
import { SECTIONS_BORDER_STYLE, COURSES } from "../Constants";

const styles={
    container_styling:{
        minHeight:"100vh",
        display: "flex",
        flexDirection: "column",
        height:"100%",
        positions:"relative",
        background:"#feffb5",
        borderTop:SECTIONS_BORDER_STYLE
    },
    card_container_styling:{
        marginLeft: "10%",
        marginRight: "10%",
        maxWidth: "30%",    
        border: "1px solid",
        borderRadius: "2%",
        boxShadow: "-5px 5px 0 2px",
        padding: "20px",
        transform: "rotate(5deg)"
    }
}

class Courser extends Component{
    _renderCourseCards = () => {
        const courses = COURSES[0].cards;
        let cards = [];
        for(let i = 0;i < courses.length;i+=2){
            let containerMargin = i === 0 ? {marginTop:"10%",marginBottom:"5%"} : i+1 === courses.length ? {marginTop:"5%",marginBottom:"10%"}:{marginTop:"10%",marginBottom:"10%"}   

            cards.push(
                <div style={Object.assign({},{display:"flex"},containerMargin)}>
                    <div style={styles.card_container_styling}>
                        <div>
                            {courses[i].description}
                        </div>
                            <div>
                                <ol>
                                    {courses[i].content_list.map((item) => <li>{item}</li>)} 
                                </ol>
                            </div>
                    </div>
                    <div style={styles.card_container_styling}>
                        <div>
                            {courses[i+1].description}
                        </div>
                        <div>
                            <ol>
                                {courses[i+1].content_list.map((item) => <li>{item}</li>)} 
                            </ol>
                        </div>
                    </div>
                </div>
                
            )
        }
        return cards;
    }

    _renderCourseContent = () => {
        
    }
    
    render(){
        return(
            <div style={styles.container_styling}>
                <div>
                    16 Weeks Web Development Course
                </div>
                <div style={{border:"2px solid"}}>
                    <div style={{background:"red"}}>
                        {this._renderCourseCards()}
                    </div>  
                </div>

            </div>
        )
    }
}

export default Courser;
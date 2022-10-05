import react from "react";

const styles = {
    container_styling:{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        float: "left",
        left: "100%",
        transform: "translate(-100%)",
        background: "rgb(0,255,55)",
        border: "4px solid rgb(0,0,0)",
        borderRadius: "25px 0px 0px 50px",
        height: "230px",
        borderRightWidth: "0px",
        boxShadow: "-2px -1px 9px 0px",
        top:"120px"
    },
    logos_container_styling:{
        marginTop: "8px",
        marginLeft: "5px"
        
    },
    logo_styling:{
        width:"50px",
        margin:"2px 5px",
        boxShadow: "3px 3px 5px rgb(0, 255, 55)",
        borderRadius: "10px",
        cursor:"pointer"
    },
    back_arrow_styling:{
        width: '40px',
        margin: "2px 5px 2px 14px",
        cursor:"pointer"
    }
}

const IMAGE_LOGOS = [
    {path: "instagram_pixel_logo_icon_181922.png",alt: "instagram logo"},
    {path: "linkedin_pixel_logo_icon_181925.png",alt: "linkedin logo"},
    {path: "facebook_pixel_logo_icon_181920.png",alt: "facebook logo"}
]

class SideContainer extends react.Component{
    constructor(props){
        super(props)
        this.state = {
            isContactsOpen:true
        }
    }

    _handleOnBackArrowClick=()=>{
        this.setState({
            isContactsOpen:!this.state.isContactsOpen
        })
    }

    _handleOnLogoMouseEnter = (e) => {
        let brightness = e.target.id === "arrow"? 1.1 : 1.8  
        Object.assign(e.target.style,{filter: `brightness(${brightness})`});
    }

    _handleOnLogoMouseLeave = (e) => {
        Object.assign(e.target.style,{filter: "brightness(1)"});
    }
    

    _renderLogosImage=()=>{
        let logos = [];
        for(let i=0;i<IMAGE_LOGOS.length;i++){
            logos.push(
                <img 
                    key = {i}
                    style={styles.logo_styling} 
                    src={IMAGE_LOGOS[i].path}
                    alt={IMAGE_LOGOS[i].alt}
                    onMouseEnter = {this._handleOnLogoMouseEnter}
                    onMouseLeave = {this._handleOnLogoMouseLeave}
                />
            )
        }
        return logos;
    }

    render(){
        const{
            isContactsOpen
        }=this.state;

        let containerStyle = isContactsOpen ? styles.container_styling:Object.assign({},styles.container_styling,{height:"50px"});

        return(
            <div style={containerStyle}>

                {isContactsOpen?
                    <div style={styles.logos_container_styling}>
                        {this._renderLogosImage()}
                        <img 
                            id="arrow"
                            style={styles.back_arrow_styling} 
                            src="back_arrow.png"
                            alt="close logos menu arrow"
                            onClick={this._handleOnBackArrowClick}
                            onMouseEnter = {this._handleOnLogoMouseEnter}
                            onMouseLeave = {this._handleOnLogoMouseLeave}
                        />
                    </div>
                :
                    <div>
                        <img 
                            id="arrow"
                            style={styles.back_arrow_styling} 
                            src="back_arrow.png"
                            alt="close logos menu arrow"
                            onClick={this._handleOnBackArrowClick}
                            onMouseEnter = {this._handleOnLogoMouseEnter}
                            onMouseLeave = {this._handleOnLogoMouseLeave}
                        />
                    </div>
                }
            </div>
        )
    }
}
export default SideContainer;
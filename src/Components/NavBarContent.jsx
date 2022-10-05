import react from "react";

const styles = {
    main_container_styling:{
        width: "100%",
        display: "flex",
        flexDirection: "column-reverse",
        alignContent: "flex-end",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        marginRight:"150px"
    },
    link_styling:{
        width:"45px",
        margin: "0px 20px 0px 20px",
        cursor:"pointer"
    }
}

class NavBarContent extends react.Component{
    
    _handleOnOver = (e) => {
        Object.assign(e.target.style,{width:`${e.target.width + 20}px`,margin: "0px 10px 0px 10px",});
    }

    _handleOnLeave = (e) =>{
        Object.assign(e.target.style,{width:`${e.target.width - 20}px`,margin: "0px 20px 0px 20px",});
    }

    render(){
        return<div style={styles.main_container_styling}>
            <div>
                <img 
                    src="fa77d2d5f5a603855bad923258f7c4b2.png" 
                    alt="link_image_home" 
                    style={styles.link_styling}
                    onMouseEnter={this._handleOnOver}
                    onMouseLeave = {this._handleOnLeave}
                />
                <img 
                    src="34b78896d1b12dbb8a6a3bd0fb117308.png" 
                    alt="link_image_home" 
                    style={Object.assign({},styles.link_styling, {width:"94px"})}
                    onMouseEnter={this._handleOnOver}
                    onMouseLeave = {this._handleOnLeave}
                />
                <img 
                    src="b466ea56110ff12eb0411097115249ba.png" 
                    alt="link_image_home" 
                    style={Object.assign({},styles.link_styling, {width:"79px"})}
                    onMouseEnter={this._handleOnOver}
                    onMouseLeave = {this._handleOnLeave}
                />
                <img 
                    src="bd30df71fef7389cec4d04251695db1f.png" 
                    alt="link_image_home" 
                    style={Object.assign({},styles.link_styling, {width:"79px"})}
                    onMouseEnter={this._handleOnOver}
                    onMouseLeave = {this._handleOnLeave}
                />
                <img 
                    src="6461e39505b7343069b3fe7fa95a7071.png" 
                    alt="link_image_home" 
                    style={Object.assign({},styles.link_styling, {width:"89px"})}
                    onMouseEnter = {this._handleOnOver}
                    onMouseLeave = {this._handleOnLeave}
                />
            </div>
        </div>
        
    }
}

export default NavBarContent;
import React,{Component} from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import styles from './styles/colorBoxStyles.js';
import { withStyles } from '@material-ui/styles';

// const styles={
//         ColorBox :{
//                 width: "20%",
//                 height: props=>(props.showLink?"25%":"50%"),
//                 margin: "0 auto",
//                 display: "inline-block",
//                 position: "relative",
//                 cursor: "pointer",
//                 marginBottom: "-0.3px",
//                 "&:hover button":{
//                         opacity:1,
//                 }
//             },

//             copyText:{
//                 color:props=>chroma(props.background).luminance()>=0.7?"black":"white"
//             },

//         colorName:{
//                 color:props=>chroma(props.background).luminance()>=0.7?"black":"white"
//         },
//         seeMore:{
//         color:props=>chroma(props.background).luminance()>=0.7?"black":"white",
//         background: "rgba(255,255,255,0.3)",
//         position: "absolute",
//         border: "none",
//         right: "0px",
//         bottom: "0px",
//         width: "60px",
//         height: "30px",
//         textAlign: "center",
//         lineHeight: "30px",
//         },
//         copyButton:{
//                 color:props=>chroma(props.background).luminance()>=0.7?"black":"white",
//                 width: "100px",
//     height:"30px",
//     position: "absolute",
//     display: "inline-block",
//     top:"50%",
//     left:"50%",
//     marginLeft: "-50px",
//     marginTop: "-15px",
//     textAlign: "center",
//     outline: "none",
//     background: "rgba(255,255,255,0.3)",
//     fontSize: "1rem",
//     lineHeight: "30px",
//     textTransform: "uppercase",
//     border: "none",
//     opacity: 0,
//         },
//         boxContent:{
//                 position: "absolute",
//     width: "100%",
//     left: "0px",
//     bottom: "0px",
//     padding: "10px",
//     color: "black",
//     letterSpacing: "1px",
//     textTransform: "uppercase",
//     fontSize: "12px",
//         },
//         copyOverlay:{
//                 opacity: "0",
//                 zIndex:"0",
//                 width:"100%",
//                 height:"100%",
//                 transition: "transform 0.6s ease-in-out",
//                 transform: "scale(0.1)",
//         },
//         showOverlay:{
//                 opacity: "1",
//     transform: "scale(50)",
//     zIndex: "10",
//     position: "absolute",
//         },
//         copyMessage:{
//                 position: "fixed",
//     left:"0",
//     right:"0",
//     top:"0",
//     bottom: "0",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     transform: "scale(0.1)",
//     opacity: "0",
//     color: "white",
//     "& h1":{
//         fontWeight: "400",
//     textShadow: "1px 2px black",
//     background: "rgba(255,255,255,0.2)",
//     width: "100%",
//     textAlign: "center",
//     marginBottom: "0",
//     padding: "1 rem",
//     },
//     "& p":{
//         fontSize:" 2 rem",
//         fontWeight: "100",
//     }
// },
// showMessage:{
//         opacity: "1",
//     transform: "scale(1)",
//     zIndex: "25",
//     transition: "all 0.4s ease-in-out",
//     transitionDelay: "0.3s",
// }


// };





class ColorBox extends Component{

        constructor(props){

            super(props);


            this.state={copied:false};

            this.changeOnCopy=this.changeOnCopy.bind(this);

        }

        changeOnCopy(){

                this.setState({copied:true},()=>{
                        setTimeout(()=>this.setState({copied:false}),1500);
                });

        }

        render(){
                const {name,background,id,paletteId,showLink,classes} =this.props;
                const {copied}=this.state;
               
            return(
                    <CopyToClipboard text={background} onCopy={this.changeOnCopy}>
                                 <div style={{background:background}} className={classes.ColorBox}>
                                                {/* //className={`${classes.copyOverlay} ${ copied && classes.showOverlay}`} */}
                                        <div style={{background}} className={      classNames(classes.copyOverlay,{[classes.showOverlay]:copied})} /> 
                                        <div className={  classNames(classes.copyMessage,{[classes.showMessage]:copied})}>
                                                <h1>copied</h1>
                                                <div >
                                                <p className={classes.copyText}>{this.props.background}</p>
                                                </div>
                                             
                                        </div>

                                  

                           

                                <div className={classes.boxContent}>
                                        <span className={classes.colorName}>{name}</span>

                                </div>

                                <button className={classes.copyButton}>Copy</button>

                           
                           {showLink && (
                           <Link to={`/palette/${paletteId}/${id}`} onClick={e=>e.stopPropagation()}>
                           <span className={classes.seeMore}>More</span>
                           </Link>
                           )}
                                </div>
                    </CopyToClipboard>
                   
            );
        }

}

export default withStyles(styles)(ColorBox);
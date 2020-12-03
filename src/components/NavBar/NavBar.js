import React, { useState } from 'react'
import "./style.css"
import * as Fa from 'react-icons/fa';
import * as Ai from 'react-icons/ai';
import { Link } from 'react-scroll';
import * as LinkA from "react-router-dom"
import * as Gr from 'react-icons/gr';
import * as Ri from 'react-icons/ri';
import {IoMdArrowDropup} from 'react-icons/io';


//import * as LinkS   from 'react-scroll';
import { animateScroll as Scroll } from 'react-scroll';
import ScrollToTop from "react-scroll-up";

const NavBar = () => {

    const [navmobail, setnavmobail] = useState(false);


    
    return (
        <div>
            <div className={navmobail ? " active_navmobil" : "navbar_mobail"}>
                 <div className="content_navmobail">
            <img src={window.location.origin + '/img/logo.png'} className="logo_img log" alt="logo" />
             <div className="sadeytxt" alt="logo">
                                المحاسب القانوني والمستشار المالي
                                <p style={{fontFamily:"'Aref Ruqaa', serif",fontSize:30,color:"rgb(255 195 26)",marginBottom:0}}>سعدي محبوُبة</p>
            </div>
            <h4 className="txt_content_navmobail">  <Link onClick={()=>setnavmobail(false)} style={{color:'black',display:"flex",justifyContent:"space-between"}}    activeClass="active" to="home" spy={true} smooth={true} duration={1000}>الرئيسية<Ai.AiFillHome  style={{marginRight:5,color:'black'}}/></Link></h4>
                <h4 className="txt_content_navmobail">  <Link onClick={()=>setnavmobail(false)}  style={{color:'black',display:"flex",justifyContent:"space-between"}}    activeClass="active" to="kadamat" spy={true} smooth={true} duration={1000}> الخدمات<Gr.GrServices  style={{marginRight:5,color:'black'}}/></Link></h4>
            <h4 className="txt_content_navmobail">
                  <Link onClick={()=>setnavmobail(false)} style={{color:'black',display:"flex",justifyContent:"space-between"}}    activeClass="active" to="who_are" spy={true} smooth={true} duration={1000}>من نحن<Ri.RiContactsBook2Fill  style={{marginRight:5,color:'black'}}/></Link>
                </h4>
            <h4 className="txt_content_navmobail">
                 <Link onClick={()=>setnavmobail(false)} style={{color:'black',display:"flex",justifyContent:"space-between"}}    activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>التواصل معنا<Ai.AiFillContacts  style={{marginRight:5,color:'black'}}/></Link>
                </h4>
            <h4 className="txt_content_navmobail txt_login" >
                 <LinkA.Link style={{color:'black',display:"flex",justifyContent:"space-between"}}     to="/login">تسجيل الدخول  <Fa.FaUserCircle  style={{marginRight:5,color:'black'}}/></LinkA.Link>
               </h4>
             
            </div>
                <div className="close_navmobail" onClick={()=>setnavmobail(!navmobail)}>X</div>
             </div>

            <div className="nav_mobail">
                <Ai.AiOutlineMenu size={30} style={{ color: "#fff", cursor: "pointer" }} onClick={()=>setnavmobail(true)}/>
               
                <img src={window.location.origin + '/img/logo.png'} className="logo_img" alt="logo" />

                 <div className="sadeytxt" alt="logo">
                                المحاسب القانوني والمستشار المالي
                                <p style={{fontFamily:"'Aref Ruqaa', serif",fontSize:30,color:"rgb(255 195 26)",marginBottom:0}}>سعدي محبوُبة</p>
                  </div>
               
            </div>
           
        <nav >
           
            <div className="nav">
                <div className="container">
                        {/*top header */}

                     <div className="nav_top">
                    <div className="content_elemnt_right">
                      <a href="/">وقت الدوام : السبت الى الخميس من ساعة 8 صباحا الى 10 مساءً</a>
                    </div>
                    <div className="content_elemnt_left">
                        <a href="/"><Fa.FaFacebookF /></a>
                        <a href="/"><Fa.FaWhatsapp /></a>
                        <a href="/"><Fa.FaViber /></a>
                    </div>
                    </div>

                  
                </div>
                
            </div>
    {/*header main*/}
            <div className="nav_header">
                <div className="container">
                    <div className="header_main">
                       
                        <div style={{textAlign:"center",fontSize:15}}>
                                المحاسب القانوني والمستشار المالي
                                <p style={{fontFamily:"'Aref Ruqaa', serif",fontSize:30,color:"rgb(255 195 26)",marginBottom:0}}>سعدي محبوُبة</p>
                        </div>
                        
                        <div className="header_main_right">
                            <div className="header_main_phone">
                            <h5 >رقم الهاتف: 964+<br/></h5>
                            <h5>07809944088<br/>07601666366</h5>
                            </div>
                            <div className="header_main_address">
                            <h5>العنوان:<br/></h5>
                            <h5>العراق-النجف الاشرف<br/> شارع سلام جامعة (شارع ابو حكمة) مجاور ماسي مول</h5>
                            </div>
                          
                            
                        </div>
                        <div className="header_main_left">
                            <div className="header_main_logo">
                              
                                
                                <img src={window.location.origin +'/img/logo.png'} className="logo_img" alt="logo"/> 
                               
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            {/*nav header */}
            <div className="header_navbar">
                <div className="container">
                    <div className="header_navbar_main">
                        <div className="header_navbar_right">
                        <Link activeClass="active" to="home" spy={true} smooth={true} duration={1000}>الرئيسية</Link>
                        <Link activeClass="active" to="who_are" spy={true} smooth={true} duration={1000}>من نحن</Link>
                        <Link activeClass="active" to="kadamat" spy={true} smooth={true} duration={1000}>الخدمات</Link>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000}>التواصل معنا</Link>
                        </div>
                        <div className="header_navbar_left">
                        <LinkA.Link  to="/login">تسجيل الدخول  <Fa.FaUserCircle style={{marginRight:5}}/></LinkA.Link>
                           
                        </div>
                      
                    </div>
                   
                </div>
            </div>

            </nav>
    
            
            <ScrollToTop style={{ background: "rgb(0, 63, 119)", width: 50, height: 50, borderRadius: '50%', color: "#fff", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: 700 ,flexDirection:"column",zIndex:5125555}} showUnder={160}>
                <IoMdArrowDropup />
  <span > UP</span>
</ScrollToTop>
            
            </div>
    )
}

export default NavBar

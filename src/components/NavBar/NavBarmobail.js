import React, { useState } from 'react'
import "./style.css"
import * as Fa from 'react-icons/fa';
import * as Ai from 'react-icons/ai';
import * as Gr from 'react-icons/gr';
import * as Ri from 'react-icons/ri';

import { Link } from 'react-router-dom';

const NavBarmobail = ({navmobailfrom}) => {
    
        const [navmobail, setnavmobail] = useState(navmobailfrom);


    return (
       
                    <div className={navmobail ? " active_navmobil" : "navbar_mobail"}>
            
                    

       
</div>
          
    )
}

export default NavBarmobail

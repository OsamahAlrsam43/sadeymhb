import React, { useEffect, useState } from "react";
import { actiontype } from "../../reducer/Reducer";
import { useStateValue } from "../../reducer/StateProvider";

const Confirm = () => {

      const [{ showalert,alertdi }, dispatch] = useStateValue();
    const [showalertc, setshowalert] = useState(showalert);


    useEffect(() => {
        setshowalert(showalert)
    }, [showalert])

    const setokbrn = () => {
          dispatch({
      type: actiontype.SET_ALERTDI
     
          })
           setshowalert(false)
    }

    const setnobrn = () => {
          dispatch({
      type: actiontype.SET_ALERTDI,
      items: false,
          })
        
           dispatch({
      type: actiontype.SET_SHOWALERT,
      items: false,
          })

        setshowalert(false)
    }

    return (
        <div>
             {showalertc &&
       
       
    <div className="alert_confirm">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{cursor:"pointer"}} onClick={()=>setshowalert(false)}>X</div>
        <div>حذف</div>
      </div>

      <h1>هل انت متاكد من حذف هذا الملف ..؟</h1>
      <div
        style={{ display: "flex", justifyContent: "space-between", width: 0 }}
      >
        <button className="btn btn-primary mr-3" onClick={setokbrn}>نعم</button>
        <button className="btn btn-danger mr-3" onClick={setnobrn}>لا</button>
      </div>
        </div>
        }
</div>
  );
};

export default Confirm;

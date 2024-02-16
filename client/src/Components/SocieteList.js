import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_societe } from '../Redux/actions';
import Societecard from './Societecard';


function SocieteList () {

    const dispatch= useDispatch()
    const societe = useSelector((state) => state.societe);
  useEffect(()=>{
      dispatch(get_societe())
  },[])

  societe &&
    console.log(societe);  
   
    return ( 
        <div style={{border: '1px solid #ddd', borderRadius: '8px',
    padding: '20px',
    margin: '20px',
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.5)',
    boxSizing:'',
      background: '#eaecef'
    }}>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap"  }} >

  {
 societe  && 
 societe.map((elm)=> <Societecard  elm = {elm}/>)
}  

</div>
      
    </div>
     );
}

export default SocieteList ;
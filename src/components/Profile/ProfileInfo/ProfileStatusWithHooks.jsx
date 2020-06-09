import React from 'react';
import classes from './ProfileInfo.module.css';
import { useState } from 'react';
import { useEffect } from 'react';


const ProfileStatusWithHooks = (props) => {

   let [editMode, setEditMode] = useState(false);
   let [status, setStatus] = useState(props.status);

   useEffect(()=> {
      setStatus(props.status)
   },[props.status])
   
   const activateEditMode = () => {
      setEditMode(true);
   }

   const deactivateEditeMode = () => {
      setEditMode(false);
      props.updateStatus(status);
   }

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
   }

   return (
      <div>
         {!editMode &&
            <div>
               <b>Status: </b> <span onDoubleClick={activateEditMode}  >{props.status || "----"} yo</span>
            </div>
         }
         {editMode &&
            <div>
               <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditeMode} 
               value={status}/>
            </div>
         }
      </div>
   )
}

export default ProfileStatusWithHooks;
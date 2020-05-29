import React from 'react';

class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      status: this.props.status
   }

   activateEditeMode = () => {
      this.setState({
         editMode: true
      })  
   }
   deactivateEditeMode = () => {
      this.setState({
         editMode: false
      }) ;
      this.props.updateStatus(this.state.status); 
   }

   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value
      }) ;
   }

   componentDidUpdate (prevProps, prevState) {
      if(prevProps.status !== this.props.status){
         this.setState({
            status: this.props.status
         })
      }
   }

   render() {
      return (
         <div>
            {!this.state.editMode &&
               <div>
                  <span onDoubleClick={this.activateEditeMode}>{this.props.status || "----"}</span>
               </div>
            }
            {this.state.editMode &&
               <div>
                  <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditeMode} 
                  value={this.state.status} />
               </div>
            }
         </div>
      )
   }
}

export default ProfileStatus;
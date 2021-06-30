import React from 'react';
import '/styles.scss';
import BellIcon from 'react-bell-icon'; 

export default class Notifications extends React.Component{

    constructor(props){
        super(props);
        this.close = this.close.bind(this);
    }

    close(Id){
        document.getElementById(Id).style.display = "none";
    }

    render(){
        return(
            <div id = "notPop" className = "notification" onClick={() =>this.close("notPop")}>
                Document Status has been updated. Please check below <BellIcon width='40' className = "fa-bell" active={true} animate={true} />
            </div>
        );
    }
}
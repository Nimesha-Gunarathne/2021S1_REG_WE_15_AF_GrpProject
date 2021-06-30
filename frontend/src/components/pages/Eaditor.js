import React,{Component} from "react";
import '../Eaditor.css';
import axios from "axios";

class Editor extends Component{

    constructor(props){
        super(props);
        this.state={
            Pendingconference:[],
            Approvedconference:[],
            Doneconference:[],
            Rejectconference:[],
            DeleteApprovedConference:[],
            Approvedstatus:'Approved',
            Donestatus:'Done',
            Pendingstatus:'pending',
            Rejectstatus:'Reject'

        }
    }

    onApprovedstatus(e,conID){
        //check the alrady approved conference

        axios.get('http://localhost:8070/conference/getApprovedConference')
        .then(response => {
            // this.setState({ Approvedconference:response.data.data });
            console.log("Approved ",response.data.data.length);

            if(response.data.data.length==0){
                let UpdateDetails = {
                    status: this.state.Approvedstatus           
                }
                console.log("data", conID)
                axios.put(`http://localhost:8070/conference/updateStatus/${conID}`,UpdateDetails)       
                .then(response =>{
                    alert('Data successfully Updated!');
                    window.location.reload();
                    console.log("response", response)
                })
                .catch(error =>{
                    console.log(error.message)
                    alert(error.message);
                })
            }
            else{
                var txt;
                var r = window.confirm("Delete already approved conference ?");
                if (r == true) {

                    {this.state.Approvedconference.length>0 && this.state.Approvedconference.map((item) => (
                        
                        txt = item._id
                        
                         ))}
                         let UpdateDetails = {
                            status: this.state.Donestatus           
                        }
                         axios.put(`http://localhost:8070/conference/updateStatus/${txt}`,UpdateDetails)
                         window.location.reload();

                } else {
                    window.location.reload();
                }
                //alert("Delete already approved conference?");
            }
        })


        /////////////////////
       
    }

    onDonestatus(e,conID){
        let UpdateDetails = {
            status: this.state.Donestatus           
        }
        console.log("data", conID)
        axios.put(`http://localhost:8070/conference/updateStatus/${conID}`,UpdateDetails)       
        .then(response =>{
            alert('Data successfully Updated!');
            window.location.reload();
            console.log("response", response)
        })
        .catch(error =>{
            console.log(error.message)
            alert(error.message);
        })
    }

    onPendingstatus(e,conID){
        let UpdateDetails = {
            status: this.state.Pendingstatus           
        }
        console.log("data", conID)
        axios.put(`http://localhost:8070/conference/updateStatus/${conID}`,UpdateDetails)       
        .then(response =>{
            alert('Data successfully Updated!');
            window.location.reload();
            console.log("response", response)
        })
        .catch(error =>{
            console.log(error.message)
            alert(error.message);
        })
    }

    onRejectstatus(e,conID){
        let UpdateDetails = {
            status: this.state.Rejectstatus           
        }
        console.log("data", conID)
        axios.put(`http://localhost:8070/conference/updateStatus/${conID}`,UpdateDetails)       
        .then(response =>{
            alert('Data successfully Updated!');
            window.location.reload();
            console.log("response", response)
        })
        .catch(error =>{
            console.log(error.message)
            alert(error.message);
        })
    }

    componentDidMount(){
        axios.get('http://localhost:8070/conference/getPendingConference')
        .then(response => {
            this.setState({ Pendingconference:response.data.data });
        })

        axios.get('http://localhost:8070/conference/getApprovedConference')
        .then(response => {
            this.setState({ Approvedconference:response.data.data });
        })

        axios.get('http://localhost:8070/conference/getDoneConference')
        .then(response => {
            this.setState({ Doneconference:response.data.data });
        })

        axios.get('http://localhost:8070/conference/getRejectConference')
        .then(response => {
            this.setState({ Rejectconference:response.data.data });
        })
    }

    
    render(){
        return(
            <div className="wrapper">
            <h1>Pending Conference</h1>
            <div className="team">
              
              {this.state.Pendingconference.length>0 && this.state.Pendingconference.map((item,index) => (

                <div className="team_member" key={index}>
                    <div className="team_img">
                        <img src="https://www.enigmatixmedia.com/public/pics/demo.png" alt="Team_image" />
                    </div>
                    <h4>Title</h4>
                    <h3>{item.title}</h3>

                    <p className="date">Date</p>
                    <p className="role">{item.date}</p>

                    <p className="des">Descrition</p>
                    <p>{item.description}</p>

                    <p className="keyn">Keynote Speaker</p>
                    <p className="role"> <div/>{item.keynoteSpeaker}</p>

                    <p className="gen">Gender</p>
                    <p className="role">{item.gender}</p>

                    <p className="gen">Status</p>
                    <p className="role">{item.status}</p>

                    <button class="but" onClick={e => this.onApprovedstatus(e,item._id)}>Approve</button>
                    <button class="but button3" onClick={e => this.onRejectstatus(e,item._id)}>Reject</button>

                    </div>
                    
                       
              ))}
              
            </div> 
            <h1>Approved Conference</h1>           
            <div className="team">
              
              {this.state.Approvedconference.length>0 && this.state.Approvedconference.map((item,index) => (

                <div className="team_member" key={index}>
                    <div className="team_img">
                        <img src="https://www.enigmatixmedia.com/public/pics/demo.png" alt="Team_image" />
                    </div>
                    <h4>Title</h4>
                    <h3>{item.title}</h3>

                    <p className="date">Date</p>
                    <p className="role">{item.date}</p>

                    <p className="des">Descrition</p>
                    <p>{item.description}</p>

                    <p className="keyn">Keynote Speaker</p>
                    <p className="role"> <div/>{item.keynoteSpeaker}</p>

                    <p className="gen">Gender</p>
                    <p className="role">{item.gender}</p>

                    <p className="gen">Status</p>
                    <p className="role">{item.status}</p>

                    <button class="but" onClick={e => this.onDonestatus(e,item._id)}>Done</button>
                    <button class="but button2" onClick={e => this.onPendingstatus(e,item._id)}>Pending</button>
                    <button class="but button3" onClick={e => this.onRejectstatus(e,item._id)}>Reject</button>

                    </div>
                    
                       
              ))}
              
            </div>


             <h1>Done Conference</h1>
            <div className="team">
              
              {this.state.Doneconference.length>0 && this.state.Doneconference.map((item,index) => (

                <div className="team_member" key={index}>
                    <div className="team_img">
                        <img src="https://www.enigmatixmedia.com/public/pics/demo.png" alt="Team_image" />
                    </div>
                    <h4>Title</h4>
                    <h3>{item.title}</h3>

                    <p className="date">Date</p>
                    <p className="role">{item.date}</p>

                    <p className="des">Descrition</p>
                    <p>{item.description}</p>

                    <p className="keyn">Keynote Speaker</p>
                    <p className="role"> <div/>{item.keynoteSpeaker}</p>

                    <p className="gen">Gender</p>
                    <p className="role">{item.gender}</p>

                    <p className="gen">Status</p>
                    <p className="role">{item.status}</p>

                   
                    <button class="but button3" onClick={e => this.onRejectstatus(e,item._id)}>Delete</button>

                    </div>
                    
                       
              ))}
              
            </div>

            <h1>Reject Conference</h1>
            <div className="team">
              
              {this.state.Rejectconference.length>0 && this.state.Rejectconference.map((item,index) => (

                <div className="team_member" key={index}>
                    <div className="team_img">
                        <img src="https://www.enigmatixmedia.com/public/pics/demo.png" alt="Team_image" />
                    </div>
                    <h4>Title</h4>
                    <h3>{item.title}</h3>

                    <p className="date">Date</p>
                    <p className="role">{item.date}</p>

                    <p className="des">Descrition</p>
                    <p>{item.description}</p>

                    <p className="keyn">Keynote Speaker</p>
                    <p className="role"> <div/>{item.keynoteSpeaker}</p>

                    <p className="gen">Gender</p>
                    <p className="role">{item.gender}</p>

                    <p className="gen">Status</p>
                    <p className="role">{item.status}</p>

                   
                    <button class="but button3" onClick={e => this.onRejectstatus(e,item._id)}>Delete</button>

                    </div>
                    
                       
              ))}
              
            </div>


            
          </div>
        )
    }

}

export default Editor;
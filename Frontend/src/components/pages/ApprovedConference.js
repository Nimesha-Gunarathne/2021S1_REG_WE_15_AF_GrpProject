import React,{Component} from "react";
import axios from "axios";
import '../ApprovedConference.css'

class ApprovedConference extends Component{
    constructor(props){
        super(props);
        this.state={
            Approvedconference:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:8070/conference/getApprovedConference')
        .then(response => {
            this.setState({ Approvedconference:response.data.data });
        })
    }

    render(){
        return (
            <section id="hero" style={{backgroundImage: 'url(./img/hero-bg.png)'}}>
                <div className="ontoptitle">Approved Conference</div>
            <div className="hero container">
                
            {this.state.Approvedconference.length > 0 && this.state.Approvedconference.map((item,index)=> (
            
            <div key={index}>
                            <h1>{item.title} <span /></h1>
                            <h2>{item.description} <span /></h2>
                            <h3>Date: {item.date} <span /></h3>
                            <h4>keynote Speaker: {item.keynoteSpeaker} <span /></h4>
                            <h5>Gender: {item.gender} <span /></h5>

            
              </div>
            ))}  
            </div>
          </section>
        )
    }
}

export default ApprovedConference;
import React, { Component } from "react";
import '../Register.css';
import Select from "react-select";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from '../Navbar';
import checkConferenceDetails from '../../../Test/checkConferenceDetails';

const initialState = {
  title: '',
  description: '',
  date: '',
  keynoteSpeaker: "",
  gender: '',
  status: 'pending'
}

const keynoteoptions = [
  { value: "John", label: "John" },
  { value: "Smith", label: "Smith" },
  { value: "Jenny", label: "Jenny" },
  { value: "Woosh", label: "Woosh" }
]
const Genderoptions = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Prefer not to say", label: "Prefer not to say" }
]

class CreateConference extends Component {


  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onkeynoteOptionSelected = this.onkeynoteOptionSelected.bind(this);
    this.onGenderOptionSelected = this.onGenderOptionSelected.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
    this.state = initialState;
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onkeynoteOptionSelected(e) {
    this.state.keynoteSpeaker = e.label;
  }
  onGenderOptionSelected(e) {
    this.state.gender = e.label;
  }

  onSubmit(e) {
    e.preventDefault(); //when click on submit button then after stop refreash page

    let conferenceDetails = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date,
      keynoteSpeaker: this.state.keynoteSpeaker,
      gender: this.state.gender,
      status: this.state.status
    }

    console.log("Data", conferenceDetails);
    var test = checkConferenceDetails(conferenceDetails);
    if (test == "success") {

      axios.post('http://localhost:8070/conference/create', conferenceDetails)
        .then(response => {
          alert('Data successfully inserted!');
        })
        .catch(error => {
          console.log(error.message)
          alert(error.message);
        })
    } else {
      console.log("Invalid data set to be passed via axios");
    }
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="mmm">

          <meta charSet="UTF-8" />
          <link rel="stylesheet" href="style.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <div className="container_re">
            <div className="title">Add Conference</div>
            <div className="content">

              <form onSubmit={this.onSubmit}>


                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Title</span>
                    <input type="text" id="coursetName" name="title" value={this.state.title} onChange={this.onChange} required />
                  </div>

                  <div className="input-box">
                    <span className="details">Description</span>
                    <textarea type="text" id="coursetName" name="description" value={this.state.description} onChange={this.onChange} required />
                  </div>

                  <div className="input-box">
                    <span className="details">Date</span>
                    <input type="date" id="coursetName" name="date" value={this.state.date} onChange={this.onChange} required />
                  </div>


                  <div className="input-box">
                    <span className="details">Select keynote speaker</span>
                    <Select
                      options={keynoteoptions}
                      onChange={this.onkeynoteOptionSelected}

                    />
                  </div>


                  <div className="input-box">
                    <span className="details">Gender</span>
                    <Select
                      options={Genderoptions}
                      onChange={this.onGenderOptionSelected}
                    />
                  </div>
                </div>

                <div className="button">
                  <input type="submit" defaultValue="Register" />
                </div>
              </form>
            </div>
          </div>

        </div>
      </>

    );
  }
}

export default CreateConference;

import React from "react";
import HeroSection2 from "components/HeroSection2";
import { useRouter } from 'next/router'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

class FormPage extends React.Component {
  static async getInitialProps({query}) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_NO_CODE_ENDPOINT}?tableName=${query.id}`)
    const images = await res.json();
    let mindData = [];
    for(let i=0; i< images.records.length; i++){
      mindData.push({
        type: images.records[i].fields.Type.toLowerCase(),
        question: images.records[i].fields.Question,
        label: images.records[i].fields.Label,
      });
    }
    return { query, questionData: mindData }
  }

  constructor(props) {
    super();
    this.state = {
      formData: {},
      showMessage: false,
      showMessageText: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleSubmit(event){
    let _this = this;
      event.preventDefault();
      const formData = this.state.formData;
      const keys = Object.keys(formData);
      const Obj = {};
      for(let i=0; i < keys.length; i++){
        const keyss = keys[i];
        const valuess = formData[keyss];
        Obj[keyss] = valuess
      } 
      axios({
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_NO_CODE_ENDPOINT}?tableName=${this.props.query.id}Response`,
        data: [Obj]
      }).then(function (response) {
        _this.setState({
          showMessage: true,
          showMessageText: response.status=== 200 ? "Your Form is saved, Thank you! 🚀" : "oops something went wrong please try again"
        })
      })
  }

  handleChange = (e) => {
    const formAll = this.state.formData;
    formAll[e.target.name] = e.target.value.trim();
    this.setState({
      formData: formAll
    })
  };

  render() {
    const questions = [];
    const formData = <Form.Group controlId="formBasicEmail">${questions}</Form.Group>
    for(let i=0; i < this.props.questionData.length; i++){
      questions.push(<div key={i}>
                        <Form.Label>{this.props.questionData[i].question}</Form.Label>
                        {this.props.questionData[i].type === "textarea" ? <Form.Control as="textarea" name={this.props.questionData[i].label} rows="3" onChange={this.handleChange} /> :
                        <Form.Control type="text" placeholder={this.props.questionData[i].label} name={this.props.questionData[i].label} onChange={this.handleChange} />}
                        <br/><br/>
                      </div>)
    }

    return (
      <>
      <HeroSection2
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title={this.props.query.id}
      subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!"
    />
    <div className="container">
      {this.state.showMessage && <Alert key={"s"} variant={"info"} >
          {this.state.showMessageText}
      </Alert>}
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          {questions}
        </Form.Group>
        <Button type="submit" block> Submit Form </Button>
      </Form>
    </div>
    </>
    )
  }
}

export default FormPage;

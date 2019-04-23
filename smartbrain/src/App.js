import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './ImageLinkForm/ImageLinkForm';
import Rank from './Rank/Rank';
import FaceRecognition from './FaceRecognition/FaceRecognition'
import './App.css';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Signin from './Signin/Signin';

const app = new Clarifai.App({
  apiKey: '8bc7647e27db4ce4bfd8fec9dcea0896'
});

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'nsignin'
    }
  }

/*  componentDidMount() {
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(console.log)
  }*/

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)
    console.log(width, height)
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    // console.log(box)
    this.setState({box: box});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input });

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    // .then(box => console.log(box))
    .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }


  render() {
    return (
      <div className="App">
        <Navigation onRouteChange= {this.onRouteChange}/>
        { this.state.route === 'signin'
          ?<Signin onRouteChange={this.onRouteChange} />
          : <div>
              <Logo />
             <Particles className='particles'
                    params={particlesOptions} />
             <Rank />
            <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
            </div>
            }
      </div>
    );
  }
}

export default App;
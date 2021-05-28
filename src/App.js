import logo from './logo.svg';
import './App.css';
import Mew2 from './MEW2.jpg'
import './Styl.css'


function App() {
  return (
    <div className="App">
     
      
     <div style={{border:'solid 1px black',maxWidth:'100vw'}}>

<h1 className="title red">Your name here</h1>

<br />

<img src= {Mew2} />

<br />

<img src= './PIKA.jpg' />

</div>

<video width={320}  height={240} controls > 

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;

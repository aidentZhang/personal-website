import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectList from './project_list'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ textAlign: 'left' }}>
          Aiden Zhang <br />
          <span className="red-playfair">carnegie mellon university</span> <br />
          🚧under construction🚧

        </p>
      </header>
      <section>
        <p>
          this website is overengineered
          <br /> <br />
          cloudfront → api gateway → lambda → dynamodb <br />
          <p>↳s3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>     
          
        </p>
        <div className="wrapper">
          <div className="content">
            <p>
          - Serveless Design <br />
          - Fast access anywhere<br />
          - API Gateway authentication <br />
          - Scaling based on demand <br />
          - No exposed API keys <br /></p>
          </div>
        </div>
        <p>
          <br /> Cloudfront serves the built react code from an S3 bucket. The code then calls an API gateway<br />
          to a Lambda function. The Lambda function fetches my list of projects from dynamodb and react<br />
          displays the name, description, and link dynamically. The entire thing runs on AWS for free.
        </p>
      </section>
        <p>
        </p> 
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
        <p style={{ fontSize: "24px" }}>Projects</p>
          <ProjectList />
        </div>
        <section>
        <p style={{ fontSize: "24px" }}>about me</p>
        Carnegie Mellon University student studying Mechanical Engineering but dreaming of Electrical and Computer Engineering. <br />
        I do a bit of everything, from ML to thermal/aero simulation and everything in between. <br /> <br /> <br />
        </section>
      <p className = "App-foot">🚧under construction🚧</p>
    </div>
  );
}

export default App;

import React, { Component } from 'react';

const Hello = (props) => {
  return (
    <h1>Meet The <i>{props.name}</i></h1>
  )
}

class Welcome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Meet The { this.props.name }</h1>;
  }
}

function App() {
  const name = 'StarGazers'
  return (
    <div className="container">
      <article>
        <hgroup>

          <Welcome name="All The Devs"/>
          <Hello name="All The coders"/>
          <Hello name="All The Aliens"/>

          <img src="images/group.svg" alt="StarGazers Group" />
          <h1>Meet the <i style={{ color: "SteelBlue" }}>{name}</i></h1>
          <p>Members of an <b>intergalactic alliance</b><br />
            paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
          <button className="outline" onClick={() => alert('Hi there')}>Click Me</button>
        </hgroup>
      </article>
    </div>
  )
}
export default App

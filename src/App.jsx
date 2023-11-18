function App() {
  const name = "All The Devs"
  return (
    <div className="container">
      <article>
        <hgroup>
          <img src="../images/aneirin.png" />
          <h1>Meet <span style={{color:"steelblue"}}>{name}</span></h1>
          <p>Members of an <b>intergalactic alliance</b> paving the way for peace and benevolence among all species. They are known for their enthusiasm for science, for their love of fun, and their dedication to education.</p>
        <button className="outline" onClick={()=>alert()}>Click Me</button>
        </hgroup>
      </article>

    </div>

  )
}
export default App

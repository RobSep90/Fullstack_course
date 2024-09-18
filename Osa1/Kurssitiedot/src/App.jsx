
const Header=(props)=> {
  return (
  <div>
    <h1>{props.course}</h1>
  </div>
)
}


const Total=(props) =>{
  return(
    <div>
    <p>Tehtävien lukumäärä {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
      </div>
  )
}



const Content = (props) => {
  const Part = (props) => {
    return (
      <>
        <p>
          {props.parts.name} {props.parts.exercises}
        </p>
      </>
    )
  }
  return (
    <>
      <Part parts = {props.parts[0]}/>
      <Part parts = {props.parts[1]}/>
      <Part parts = {props.parts[2]}/>
    </>
  )
}




const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

 
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />   
      <br></br>   
       <Total parts={course.parts} />
    </div>
  )
}

export default App

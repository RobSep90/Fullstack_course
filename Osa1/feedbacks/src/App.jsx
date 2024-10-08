import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const StatisticLine =(props) =>(
  <p>{props.text} {props.value}</p>  
)
const Statistics = (props) =>{
  const { good, bad, all } = props
if (props.all === 0)
{
  return(
<StatisticLine text= "No Feedbacks given!"/>
  )
}
  return(
  <table>
    <tbody>
    <StatisticLine text="Good" value={props.good}/>
    <StatisticLine text="Bad" value={props.bad}/>
    <StatisticLine text="Neutral" value={props.neutral}/>
    <StatisticLine text="Positive" value={props.positive}/>
    <StatisticLine text="All" value={props.all}/>
    <StatisticLine text="Average" value={(props.good-props.bad)/props.all}/>
   </tbody>
  </table>
)
}

const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setall] = useState(0)
  const positive=good/all*100+("%")

  const handleGood = () => {
    const newGood=(good+1)
    setGood(newGood)
    setall(newGood+bad+neutral)
    
  }  

  const handleBad = () => {
    const newBad=(bad+1)
    setBad(newBad)
    setall(good+newBad+neutral)
    
  }

  const handleNeutral = () => {
    const newNeutral=(neutral+1)
    setNeutral(newNeutral)
    setall(good+bad+newNeutral)
        
  }
  

  return (
    <div>
      <h1>Give feedback</h1>      
      <Button handleClick={() => handleGood(good+1)} text="good" />
      <Button handleClick={() => handleBad(bad+1)} text="bad" />
      <Button handleClick={() => handleNeutral(neutral+1)} text="neutral" />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} positive={positive}/>

    </div>
  )
}

export default App

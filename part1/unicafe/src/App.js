import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statisticline = ({text, value}) => (
<tr>
  <td>{text}</td>
  <td>{value}</td>  
</tr>
)

const Statistics = ({good, neutral, bad}) => {

  const total = good + neutral + bad;
  const average = (good-bad)/total;
  const positive = `${(good/total)*100} %`;

  return total > 0 ? (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <Statisticline text='good' value={good}/>
          <Statisticline text='neutral' value={neutral}/>
          <Statisticline text='bad' value={bad}/>
          <Statisticline text='total' value={total}/>
          <Statisticline text='average' value={average}/>
          <Statisticline text='positttive' value={positive}/>
        </tbody>
      </table>
    </div>
  ) : (
    <p>No feedback given</p>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increment = (state, setState) => () => setState(state + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increment(good, setGood)}text='good'/>
      <Button onClick={increment(neutral, setNeutral)} text='neutral'/>
      <Button onClick={increment(bad, setBad)} text='bad'/> 
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
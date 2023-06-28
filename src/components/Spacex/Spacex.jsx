import './Spacex.css'

export default function Spacex(props) {
  const { data } = props

  return (
    <div id='spacex-container'>
      <h2>Crew</h2>
      {data.crew?.map((crew, index) => (
        <div key={index} className='crew-card'>
          <div className='crew-image'></div>
          <div className='crew-info'>
            <span className='crew-name'>{`Name: ${crew.crew}`}</span>
            <span className='crew-role'>{`Role: ${crew.role}`}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

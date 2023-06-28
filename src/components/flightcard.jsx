import './flightcard.css';

export default function Flightcard() {
  return (
    <div className="flight-card">
      <div className="flight-image">

      </div>
      <div className="flight-info">
        <span className='flight-number'>Flight number: Mission Name &#40;Launch Year&#41;</span>
        <span id='flight-details'>Details: Lorem ipsum dolor sit amet</span>
      </div>
    </div>
  )
}

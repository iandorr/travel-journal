import icn_location from '../assets/img/icon-location.png'

const Card = (props) => {
  return (
    <div className="card">
      <div
        className='card--img' 
        style={{
          backgroundImage: `url(${props.imageUrl})`
      }}/>
      <div className='card--info'>
        <div className="card--location">
          <img src={icn_location} className="card--location-img" />
          <span className="card--location-country">{props.location}</span>
          <a href={props.googleMapsUrl} className="card--location-google-maps-link">View on Google Maps</a>
        </div>
        <div className="card--title">{props.title}</div>
        <div className="card--dates">{props.startDate} {props.endDate}</div>
        <div className="card--desc">{props.description}</div>
      </div>
    </div>
  )
}

export default Card
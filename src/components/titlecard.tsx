import image from './../assets/familycooking.png';

export default function TitleCard({} : {}) {
  
  return <div className="title-card">
    <img src={ image } alt="placeholder" />
    <div className='title-card-overlay'> 
      <h1> Nestlé SmartCook </h1>  
    </div>
  </div>
}
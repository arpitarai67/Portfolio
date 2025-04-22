import '../styles/HeroSection.css'

function HeroSection({
  greeting,
  name,
  title,
  email,
  phone,
  image,
  
}) {
  return(
    <section className='hero-section'>
      <div className="details">
        <div className="desc">
          {greeting && <h3>{greeting}</h3>}
          <hr/>
          {name && <h1>{name}</h1>}
          {title && <p>{title}</p>}

          {email && (
            <div className="email">
              <i className="fas fa-envelope-square"></i>&nbsp;{email}
            </div>
          )}
          {phone && (
            <div className="contact">
              <i className="fas fa-phone-square-alt"></i>&nbsp;{phone}
            </div>
          )}
        </div>
        {image && (
          <div className="picture">
            <img src={image} alt="hero" />
          </div>
        )}
      </div>

    </section>
  )

}

export default HeroSection


import React from 'react'
import './Home.css'
import Product from './Product'

function Home () {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />
      <div className='home__row'>
        <Product
          id='1234567'
          title='The Lean Startup: How Today Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses'
          price={11.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg'
        />
        <Product
          id='1234567'
          title='Newly Launched Fire-Boltt Ring 3 Bluetooth Calling 1.8" Biggest Display Smartwatch, 118 Sports Modes, Voice Assistance, SpO2, Heart Rate Monitoring, in Built Calculator & Games'
          price={11.96}
          rating={5}
          image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='1234567'
          title='Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Blue)'
          price={11.96}
          rating={5}
          image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24'
        />
        <Product
          id='1234567'
          title='The Lean Startup: How Today\"S\" Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses'
          price={11.96}
          rating={5}
          image='https://m.media-amazon.com/images/I/61BLikx-rOL._SY879_.jpg'
        />
        <Product
          id='1234567'
          title='Apple iPhone 13 Pro Max (256GB) - Sierra Blue'
          price={11.96}
          rating={5}
          image='https://m.media-amazon.com/images/I/61i8Vjb17SL._SX679_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
           id='1234567'
           title='OnePlus 138.7 cm (55 inches) U Series 4K LED Smart Android TV 55U1S (Black)'
           price={11.96}
           rating={5}
           image='https://m.media-amazon.com/images/I/61eTK1VEP0S._SX522_.jpg'
        />
      </div>
    </div>
  ) //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhEZ36Olce81guYzhkhU3insPA4NAWtZHAfD4IF-942RPLV6GbcJJKSPA3f9P_LUEJ4nI&usqp=CAU
}

export default Home

import './Destination.css'
import React, { useState } from 'react'
import moon from '../assets/destination/image-moon.png'
import mars from '../assets/destination/image-mars.png'
import europa from '../assets/destination/image-europa.png'
import titan from '../assets/destination/image-titan.png'
 
 function Destination() {
  let [currentDestination, setDestination] = useState(0);
  return (
    <div className='destination'>
     <nav id="navBar">
      <div>
     <svg  id="icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
     </div>
     <div id="titles">
      <span >00Home</span>
     <span>01Destination</span>
     <span>02Crew</span>
     <span>03Technology</span>
     </div>
      </nav>
      <div id="pick">
          <h2 id="number">01</h2>
      <h2>PICK YOUR DESTINATION</h2>
      </div>
     
      <div id="main2">
      <ul className="destinations-navigation">
            <li className='destinations-navigation-item'><button className={currentDestination === 0 ? "current": ""} onClick={() => setDestination(0)}>Moon</button></li>
            <li className='destinations-navigation-item'><button className={currentDestination === 1 ? "current": ""} onClick={() => setDestination(1)}>Mars</button></li>
            <li className='destinations-navigation-item'><button className={currentDestination === 2 ? "current": ""} onClick={() => setDestination(2)}>Europa</button></li>
            <li className='destinations-navigation-item'><button className={currentDestination === 3 ? "current": ""} onClick={() => setDestination(3)}>Titan</button></li>
        </ul>
        <div className='destinations'>
            {/** Destination */}
            <div className={currentDestination === 0 ? "show destination" : "hide destination"}>
                <div className='destination-image'>
                    <img src={moon} alt="" />
                </div>
                <div className='destination-description'>
                    <h1 className='destination-title'>MOON</h1>
                    <div className='destination-para'>
                        <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                    </div>
                    <div className='destination-numbers'>
                        <div className='destination-distance'>
                            <small>AVG. DISTANCE</small>
                            <p>384, 400 KM</p>
                        </div>
                        <div className='destination-travel-time'>
                            <small>EST. TRAVEL TIME</small>
                            <p>3 DAYS</p>
                        </div>
                    </div>
                </div>
            </div>
            {/** End destination */}
            {/** Destination */}
            <div className={currentDestination === 1 ? "show destination" : "hide destination"}>
                <div className='destination-image'>
                    <img src={mars} alt="" />
                </div>
                <div className='destination-description'>
                    <h1 className='destination-title'>MARS</h1>
                    <div className='destination-para'>
                        <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                    </div>
                    <div className='destination-numbers'>
                        <div className='destination-distance'>
                            <small>AVG. DISTANCE</small>
                            <p>225 MIL. KM</p>
                        </div>
                        <div className='destination-travel-time'>
                            <small>EST. TRAVEL TIME</small>
                            <p>9 MONTHS</p>
                        </div>
                    </div>
                </div>
            </div>
            {/** End destination */}
            {/** Destination */}
            <div className={currentDestination === 2 ? "show destination" : "hide destination"}>
                <div className='destination-image'>
                    <img src={europa} alt="" />
                </div>
                <div className='destination-description'>
                    <h1 className='destination-title'>EUROPA</h1>
                    <div className='destination-para'>
                        <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                    </div>
                    <div className='destination-numbers'>
                        <div className='destination-distance'>
                            <small>AVG. DISTANCE</small>
                            <p>628 MIL. KM</p>
                        </div>
                        <div className='destination-travel-time'>
                            <small>EST. TRAVEL TIME</small>
                            <p>3 YEARS</p>
                        </div>
                    </div>
                </div>
            </div>
            {/** End destination */}
            {/** Destination */}
            <div className={currentDestination === 3 ? "show destination" : "hide destination"}>
                <div className='destination-image'>
                    <img src={titan} alt="" />
                </div>
                <div className='destination-description'>
                    <h1 className='destination-title'>TITAN</h1>
                    <div className='destination-para'>
                        <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                    </div>
                    <div className='destination-numbers'>
                        <div className='destination-distance'>
                            <small>AVG. DISTANCE</small>
                            <p>1.6 BIL. KM</p>
                        </div>
                        <div className='destination-travel-time'>
                            <small>EST. TRAVEL TIME</small>
                            <p>7 YEARS</p>
                        </div>
                    </div>
                </div>
            </div>
            {/** End destination */}
        </div>
      </div>
    </div>
  )
}
export default Destination;

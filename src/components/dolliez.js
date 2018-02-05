import React from 'react'
import '../styles/dolliez.scss'
import dalai from './dalai.jpg';
import dollyp from './dolly-p.jpg';
import dollys from './dolly-s.jpg';
import dali from './dali.jpg';

class Dolliez extends React.Component {
  render() {

    return (
      <div className="section">

        <div id="circle-orbit-container">

          <h1>FOUR DOLLIES</h1>
          <div id="inner-inner-orbit">
            <div className="inner-inner-orbit-circles">
              <img src={dalai} />
            </div>
          </div>


          <div id="inner-orbit">
            <div className="inner-orbit-cirlces">
              <img src={dollyp} />
            </div>
          </div>

          <div id="middle-orbit">
            <div className="middle-orbit-cirlces">
                <img src={dollys} />
            </div>
          </div>

          <div id="outer-orbit">
            <div className="outer-orbit-cirlces">
                <img src={dali} />
            </div>
          </div>

        </div>
      </div>
    )
  }
}


export default Dolliez

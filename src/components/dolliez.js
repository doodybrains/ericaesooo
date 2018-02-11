import React from 'react'
import '../styles/dolliez.scss'
import dalai from './dalai.jpg';
import dollyp from './dolly-p.jpg';
import dollys from './dolly-s.jpg';
import dali from './dali.jpg';

class Dolliez extends React.Component {
  render() {

    return (
      <div className="section dolly-wrapper">

        <div id="circle-orbit-container">

          <h1>FOUR DOLLIES</h1>
          <div className="orbit" id="inner-inner-orbit">
            <div className="inner-inner-orbit-circles">
              <div className="image-wrapper"><img src={dalai} /></div>
            </div>
          </div>


          <div className="orbit" id="inner-orbit">
            <div className="inner-orbit-cirlces">
              <div className="image-wrapper"><img src={dollyp} /></div>
            </div>
          </div>

          <div className="orbit" id="middle-orbit">
            <div className="middle-orbit-cirlces">
                <div className="image-wrapper"><img src={dollys} /></div>
            </div>
          </div>

          <div className="orbit" id="outer-orbit">
            <div className="outer-orbit-cirlces">
                <div className="image-wrapper"><img src={dali} /></div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}


export default Dolliez

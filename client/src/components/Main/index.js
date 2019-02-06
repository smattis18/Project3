import React from 'react';
import Waveform from '../Test';
import "./style.css";

function Main(props) {
    return(
      <main>
        <div className="container-fluid">
          <div className="row mt-5">
            <div className="col-2">
              <div className="jumbotron-fluid">
                <h5 className="column-hdr">Tracks</h5>
              <div className="dropdown">
                <button className="dropdown-toggle" type="button" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Lead Guitar
                </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Track 1</a>
                <a className="dropdown-item" href="#">Track 2</a>
                <a className="dropdown-item" href="#">Track 3</a>
              </div>
              </div>
              <div className="dropdown">
                <button className="dropdown-toggle" type="button" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Rhythm Guitar
                </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Track 1</a>
                <a className="dropdown-item" href="#">Track 2</a>
                <a className="dropdown-item" href="#">Track 3</a>
              </div>
              </div>
              <div className="dropdown">
                <button className="dropdown-toggle" type="button" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Bass Guitar
                </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Track 1</a>
                <a className="dropdown-item" href="#">Track 2</a>
                <a className="dropdown-item" href="#">Track 3</a>
              </div>
              </div>
              <div className="dropdown">
                <button className="dropdown-toggle" type="button" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Drums
                </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Track 1</a>
                <a className="dropdown-item" href="#">Track 2</a>
                <a className="dropdown-item" href="#">Track 3</a>
              </div>
              </div>
              <div className="dropdown">
                <button className="dropdown-toggle" type="button" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Keyboards/Synth
                </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Track 1</a>
                <a className="dropdown-item" href="#">Track 2</a>
                <a className="dropdown-item" href="#">Track 3</a>
              </div>
              </div>
              <div className="dropdown">
                <button className="dropdown-toggle" type="button" id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Vocals
                </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#">Track 1</a>
                <a className="dropdown-item" href="#">Track 2</a>
                <a className="dropdown-item" href="#">Track 3</a>
              </div>
              </div>
              </div>
            </div>
            <div className="col-8">
              <div className="jumbotron">
              <div clasName='parent-component'><Waveform src={'https://firebasestorage.googleapis.com/v0/b/mf-test-bafa6.appspot.com/o/poppunklead2.mp3?alt=media&token=ce9dede6-5f64-49c6-8549-125fea2fdd62'} /></div>
              </div>
            </div>
            <div className="col-2">
              <div className="jumbotron-fluid">
                <h5 className="column-hdr">Options</h5>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
}

export default Main;
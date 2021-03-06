import React from 'react';
import Horizontal from '../Horizontal';
import "./style.css";

function Scrubber(props) {
    return(
      <main>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <table className="table-sm table-borderless mx-auto" id="controls">
                <tbody>
                  <tr>
                    <td colSpan="3">
                      <Horizontal />
                    </td>
                  </tr> 
                  <tr>
                    <td className="panel">
                      <button className="panel-btn"><i className="fa fa-backward"></i></button>
                    </td>
                    <td className="panel">
                      <button className="panel-btn"><i className="fa fa-play"></i></button>
                    </td>
                    <td className="panel">
                      <button className="panel-btn"><i className="fa fa-forward"></i></button>
                    </td>
                    </tr>
                </tbody>
              </table>
            </div>
            </div>
          </div>
        <div className="col-2"></div>
      </main>
    )

}

export default Scrubber;
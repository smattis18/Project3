import React from 'react';
import "./style.css";

function Header(props) {
    return(
      <header>
        <div className="container-fluid">
        <div className="row">
          <div className="col-2" id="column1">
          <table className="table-sm table-borderless mx-auto">
            <tbody>
              <tr>
                <td><i className="fa fa-user-circle-o" /></td>
              </tr>
              <tr>
                <td className="py-0">
                  <strong>Avatar</strong>
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          <div className="col-10" id="column2">
            <strong>&#119070; Music Faker</strong>
          </div>
        </div>
        </div>
      </header>
    )
}

export default Header;
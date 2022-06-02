import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PannelMemberSidenav from "../../../layouts/sidenavpannelmember";
import "./pannelMemberHome.css";

export default function PannelMemberHome() {
  return (
    <>
      <PannelMemberSidenav />
      <div class="content">
        <div class="container">
          <center>
            <h1>Presentations Evaluation</h1>
            <p>Pannel - Member</p>
            <button type="button" class="presentation">
              Download Marking Scheme
            </button>
            <div class="col">
              <table
                style={{ width: "90%", height: "100%", marginTop: "4%" }}
                class="table"
              >
                <thead class="thead-dark">
                  <tr style={{ textAlign: "center" }}>
                    <th scope="col">#</th>
                    <th scope="col">Group Name</th>
                    <th scope="col">Topic</th>
                    <th scope="col">Presentation</th>
                  </tr>
                </thead>
                <br />
                <tbody style={{ textAlign: "center" }}>
                  <tr>
                    <th scope="row">1</th>
                    <td>REG 2022/14</td>
                    <td>Artificial Interligence</td>
                    <td>
                      <button type="button" class="download">
                        Download
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>REG 2022/14</td>
                    <td>Artificial Interligence</td>
                    <td>
                      <button type="button" class="download">
                        Download
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>REG 2022/14</td>
                    <td>Artificial Interligence</td>
                    <td>
                      <button type="button" class="download">
                        Download
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>REG 2022/14</td>
                    <td>Artificial Interligence</td>
                    <td>
                      <button type="button" class="download">
                        Download
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
            </div>
          </center>
        </div>
      </div>
    </>
  );
}

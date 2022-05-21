import React, {useContext} from "react";
import './landingPagestyle.css';
import {Link} from 'react-router-dom';
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import AuthContext from "../context/AuthContext";

export default function LandingPage(){
  const { loggedIn } = useContext(AuthContext);

  const redirectPage = ()=>{
    if(loggedIn === null){
      window.location = '/login'
    }else if(loggedIn.role === 'owner'){
      window.location = '/homeowner'
    }else {
      window.location = '/homeclient'
    }

  }

    return (
        <>
    <head>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Landing Page</title>
  </head>
  <body>
    <main>
      <Header/>
      <img src="https://i.postimg.cc/BbrzhpXf/services-left-dec.png" alt="" class="shape" />
        <div class="showcase-area">
          <div class="container">
            <div class="left">
              <div class="big-title">
                <h1>Welcome To SLIIT</h1>
                <h1>Start Research Project Now.</h1>
              </div>
              <p class="text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!
              </p>
              <div class="cta">

               <Link><button onClick={redirectPage} class="btn2">Get started</button></Link>

              </div>
            </div>

            <div class="right">
              <img src="https://i.postimg.cc/3xFysm8k/mobile-app.gif" />
            </div>
              <row></row>
          </div>
        </div>
    </main>
    <Footer/>
    <script src="https://kit.fontawesome.com/a81368914c.js"></script>
    <script src="./app.js"></script>
  </body>
  </>
    )
}
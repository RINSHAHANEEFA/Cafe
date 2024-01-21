import React from 'react'
import Layout from '../components/Layout'
import { Link } from "react-router-dom";
import Banner from '../images/Banner.jpg'
import  './Home.css';


const Home = () => {
  return (
    <>
      <Layout>
        <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
          <div className="headerContainer">
            <h1 className='heading'> Cafe</h1>
            <p className='para'>Best Cafe A Round Here</p>
            <Link to="/menu">
              <button >ORDER HERE</button>
            </Link>
          </div>
        </div>
      </Layout>

    </>
  )
}

export default Home
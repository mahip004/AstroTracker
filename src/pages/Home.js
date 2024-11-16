import React from 'react'

import '../stylesheets/Home.css'

import Header from '../components/Header'
//import Footer from '../components/Footer'
import BlogContainer from '../components/BlogContainer'
import NavBar from '../components/NavBar'
import { Highlights } from "../components/Highlights.js";
import { highlightsData, aboutUsData } from "../components/data";
import AboutUs from "../components/AboutUs";

function Home() {

  const data = [
    {
      id:'1',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id:'2',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id:'3',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id:'4',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id:'5',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    },
    {
      id:'6',
      title: 'Saturn\'s Rings',
      desc: 'How long will Saturn\'s Rings last before they disappear?',
      author: 'author'
    }
  ];

  return (
    <main>
      <Header />
      <NavBar />

      <div className='blog-box'>
        <BlogContainer data={data} />
      </div>
       {/* About Us Section */}
      <AboutUs data={aboutUsData} />
       {/* Highlights section */}
       <Highlights data={highlightsData} />
      
    </main>
  )
}

export default Home

import React from 'react'
import { FaBackward, FaForward, FaHeart, FaPause, FaPlay,FaDownload,  FaVolumeUp, FaVolumeMute } from 'react-icons/fa'
import Header from '../../head/Header'
import Footer from '../../landing page/footer section/Footer'
import Section5 from '../../landing page/contact-us section/Section5'
import style from './beat.module.css'
import Axios from 'axios'

function Beats() {

  // beatUploads =()=>{
  //   Axios.get('https://localhost:27017/musics.beats').then( res =>{
  //     console.log(res.data)
  //   })
  // }


  return (
    <div>
        <Header/>
        <div>
          <div className={style.playbox}>
          <div className={style.playdetails}>
            <div><p>playing</p><h3>Scarymeat Beat</h3><small>Dj Slurs</small></div>
            <div className={style.btns}>
              <FaBackward/>
              <FaPause/>
              <FaForward/>
            </div>
          </div>
          <div className={style.playcontrols}>
            <input type="range" />
            <FaVolumeUp/>
            <FaVolumeMute/>
          </div>
          </div>
          <div className={style.playlist}>
            <ul className='container'>
              
              <div className={style.songsheader}>
                <header>Free Beats</header>
                <p>Play all</p>
              </div>
              <li>
                <div className={style.btns}>
                  <FaPlay/>
                  <FaHeart/>
                </div>
                <p>Rap beat</p>
                
                <small>3:15</small><FaDownload/>
              </li>
            </ul>
          </div>
        </div>
        <Section5/>
        <Footer/>
    </div>
  )
}

export default Beats

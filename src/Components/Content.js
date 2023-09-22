import React from 'react'
import '../Styles/Content.css'
import pic from '../Images/profile.png'
import headerData from '../Data/ContentData.js';
const Content = () => {
  return (
    <div className='outer'>
        <div className="left">
            <div className="content">
                <div className="text1">{headerData.text1}</div>
                <div className="text2">{headerData.text2a}<span>{headerData.text2b}</span><br />{headerData.text2c}</div>
                <div className="text31">{headerData.text3a}<br />{headerData.text3b}</div>
            </div>
            <div className="actions">
                <button className='getbtn'>Get In Touch</button>
            </div>
        </div>
        <div className="right">
            <img className='photo' src={pic} alt="pic" />
        </div>
    </div>
  )
}

export default Content

import React from 'react'
import './Jobs.css'
import Jobs_1 from '../../assets/program-1.jpg'
import Jobs_2 from '../../assets/program-2.png'
import Jobs_3 from '../../assets/program-3.jpg'
import Jobs_icon_1 from '../../assets/program-icon-1.png'
import Jobs_icon_2 from '../../assets/program-icon-2.png'
import Jobs_icon_3 from '../../assets/program-icon-3.png'


const jobs = () => {
  return (
    <div className='Jobs'>
        <div className='Job'>
            <img src={Jobs_1} alt="" />
            <div className="caption">
                <img src={Jobs_icon_1} alt="" />
                <p>Backend Jobs</p>
            </div>
        </div>
        <div className='Job'>
            <img src={Jobs_2} alt="" />
            <div className="caption">
                <img src={Jobs_icon_2} alt="" />
                <p>Frontend Jobs</p>
            </div>
        </div>
        <div className='Job'>
            <img src={Jobs_3} alt="" />
            <div className="caption">
                <img src={Jobs_icon_3} alt="" />
                <p>Fullstack Jobs</p>
            </div>
        </div>
    </div>
  )
}

export default jobs
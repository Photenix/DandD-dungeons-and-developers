import React from 'react'
import '../styles/sass/Misiones.scss'
import p_icon from '../assets/people.svg'
import star from '../assets/star.svg'
import { useNavigate } from 'react-router-dom'

function CardMisiones() {
  return (
    <div className='main-card'>
      <div className='card-img'>

      </div>
      <p className='card-description'>
        Knowledge of earth and world geography
      </p>
      <div className='card-statistics'>
        <div className='part-1'>
          <img className='icon-people' src={p_icon} alt="" />
          <span className='people-number'>190&nbsp;</span>
          <span className='people-name'>Students</span>
          <img className='icon-people' src={star} alt="" />
          <span className='calification'>4.9</span>
        </div>

        <span className='price'>$128</span>

      </div>
    </div>
  )
}

export default CardMisiones
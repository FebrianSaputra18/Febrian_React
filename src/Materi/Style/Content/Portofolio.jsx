import React from 'react'
import luffy  from '../../../Images/luffy.jpeg'
import './content.scss'
const Portofolio = () => {
  return (
    <div>
      <div className="bio">
        <div className="img">
            <img src={luffy} alt="ava" />
        </div>
        <div className="line"></div>
        <div className="dataBio">
            <p>Name : Febrian D Saputra</p>
            <p>Age : 24</p>
            <p>City : East Blue</p>
            <p>Position : Captain</p>
            <p>Devil Fruits : Ope Ope no Mi Nika</p>
            <p>Hobi : Eat, Fight</p>
        </div>
      </div>
    </div>
  )
}

export default Portofolio

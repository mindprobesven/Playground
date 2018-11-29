import React from 'react'

const Menu = ({ value, handleChange, options }) => (
  <div>
    <h3>{value}</h3>
    <select value={value} onChange={(e) => handleChange(e.target.value)}>
      {
        options.map(option => <option key={option}>{option}</option>)
      }
    </select>
  </div>
)

export default Menu
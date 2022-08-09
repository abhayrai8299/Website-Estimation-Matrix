import React from 'react'

const calculation = ({total,reviewSum}) => {
  console.log(total);
  return (
    <div>
      <h3>Calculations</h3>
      <span className='heading'>Total Implementation Efforts(In Hrs):{total}</span>
      <span className='heading'>Total Implementation Efforts(In Days):{total/8}</span><br />
      <span className='heading'>Review Effort(In Hrs):{0.1*reviewSum}</span>
      <span className='heading'>Review Effort(In Days):{0.1*reviewSum/8}</span><br />
      <span className='heading'>Total(In Hrs):{total+0.1*reviewSum}</span>
      <span className='heading'>Total(In Days):{total/8+0.1*reviewSum/8}</span><br />

      <span className='heading' >Hours investing in Active Development[Per Day](In Hrs):6</span>
      <span className='heading' >Hours investing in Active Development[Per Day](In Days):30</span><br />


      <span className='heading'>Final Delivery(In working days):{((total+0.1*reviewSum)/6).toFixed(2)}</span>
      <span className='heading'>Final Delivery(In working weeks):{((total+0.1*reviewSum)/30).toFixed(2)}</span>


    </div>
  )
}

export default calculation
import React from 'react'
import Trigger from './Trigger'
import { usePage } from '../../contexts/Dashboardcontext'
import Video from './Video'
import Prediction from './Prediction'

function Main() {
  const {currentpage} = usePage()
  return (
      <div className='h-screen  w-5/6 bg-gray-100'>
         {currentpage === 'home' && <Trigger/>}
            {currentpage === 'model' && <div>Model Comming Soon </div>}
            {currentpage === 'predictions' && <Prediction/>}
            {currentpage === 'videos' && <Video/>}
            {currentpage === 'api' && <div>API  Soon</div>}
    </div>
  )
}

export default Main
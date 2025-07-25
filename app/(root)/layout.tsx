import React, { ReactNode } from 'react'

const Rootlayout = ({childern } : {childern : ReactNode}) => {
  return (
    <div>{childern}</div>
  )
}

export default Rootlayout
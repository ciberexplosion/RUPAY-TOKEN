import React, { useEffect, useState } from 'react'

import Context from './context'
import { Farm } from './types'

const Farms: React.FC = ({ children }) => {
  const [farms, setFarms] = useState<Farm[]>([])
  useEffect(() => {
    setFarms([
      {
        name: 'Marine Fields',
        depositToken: 'LINK',
        depositTokenAddress: '',
        earnToken: 'YAM',
        earnTokenAddress: '',
        icon: '🔗',
        id: 'marine-fields',
      },
    ])
  }, [setFarms])
  return (
    <Context.Provider value={{ farms }}>
      {children}
    </Context.Provider>
  )
}

export default Farms
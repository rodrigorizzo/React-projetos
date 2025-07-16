import { useState } from 'react'
import Card from './Card'


function App() {

  return (<>
    <h1 className="font-bold underline">Teste</h1>
    <div className='grid grid-cols-3 gap-1'>

      <Card titulo="Sei lá" texto="FDsafjksdfhiauherfiwehiu"/>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div></>
  )
}

export default App

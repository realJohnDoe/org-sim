import { useState } from 'react'
import './App.css'
import OrganizationGraph from './simulation/visualization'
import { initializeOrganizationalState } from './simulation/state'

function App() {
  const [orgSize, setOrgSize] = useState(10)
  const [directReports, setDirectReports] = useState(3)
  const orgState = initializeOrganizationalState(orgSize, 2, directReports)

  return (
    <>
      <h1>Organizational Simulation</h1>
      <div style={{ marginTop: '20px', width: '100%' }}>
        <h2>Organizational Structure</h2>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="orgSizeSlider">Organization Size: {orgSize}</label>
          <input
            id="orgSizeSlider"
            type="range"
            min="5"
            max="50"
            value={orgSize}
            onChange={(e) => setOrgSize(parseInt(e.target.value))}
            style={{ width: '300px', marginLeft: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="directReportsSlider">Direct Reports per Manager: {directReports}</label>
          <input
            id="directReportsSlider"
            type="range"
            min="2"
            max="5"
            value={directReports}
            onChange={(e) => setDirectReports(parseInt(e.target.value))}
            style={{ width: '300px', marginLeft: '10px' }}
          />
        </div>
        <OrganizationGraph state={orgState} />
      </div>
    </>
  )
}

export default App

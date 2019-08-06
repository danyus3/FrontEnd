import React, { useState, useEffect, lazy, Suspense } from 'react'
import ToolBar from './ToolBar'
// import Captions from './Captions'
import './index.css'
const Captions = lazy(() => import('./Captions'))

export default function Transcription({ captions, setReadyToEdit, setCurrTime, reLoadCaption }) {
  const [results, setResults] = useState([])
  return (
    <div className="trans-container">
      <ToolBar 
        captions={captions}
        setResults={setResults}
        canReset={results.length > 0}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <Captions 
          results={results}
          captions={captions} 
          setCurrTime={setCurrTime}
          reLoadCaption={reLoadCaption}
          setReadyToEdit={setReadyToEdit} 
        />
      </Suspense>
    </div>
  )
}
import React from 'react'
import ErrorBoundary from './component/ErrorBoundary'
import Main from './component/Main'

function App() {
  return (
    <ErrorBoundary>
       <Main></Main>
    </ErrorBoundary>
   
  )
}

export default App

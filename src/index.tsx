import * as React from 'react'
import './styles.scss'

// const { useState, useEffect } = React

const Counter: React.FC<{
  count: number
  className: string
}> = ({ count, className }) => (
  <div className={`counter ${className}`}>
    <p
      key={count}
      className={`counter__count ${className ? className + '__count' : ''}`}
    >
      {count}
    </p>
  </div>
)

export type ICounterProps = {
  className?: string
}

const App: React.FC<ICounterProps> = ({ className = '' }) => {
  
  const [count, setCount] = React.useState<number>(0);

  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (count > 99) {
  //       // setCount(0);
  //     }
  //     setCount(count + 1)
  //   }, 1000)

  //   return () => clearInterval(interval)
  // }, [count])

  return (
    <div>
      <Counter className={className} count={count} />
      <button onClick={() => {setCount(count+1)}}>Add</button>
    </div>
  )
}

export default App
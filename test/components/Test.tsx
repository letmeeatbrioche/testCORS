'use client'
import React, { useState } from 'react'

type Props = {}

const Test = (props: Props) => {
  const [data, setData] = useState('');

  const res = fetch(`http://localhost:3001/api/`, {
    method: "GET",
    cache: "no-store",
  })
  .then(res => {
    console.log('res:', res);
    return res.json();
  })
  .then(data => {
    console.log('data:', data);
    setData(data.message);
  })

  return (
    <>
      <div>Test</div>
      <div>DATA: {data}</div>
    </>
  )
}

export default Test
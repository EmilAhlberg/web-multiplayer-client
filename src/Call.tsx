import * as React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

const fetchData = async (): Promise => {
  const data = await axios
    .get('http://localhost:8000')
    .then(res => {
      return res.data
    })
  console.log('cb')
  return data
}

const Call = (): JSX.Element => {
  const { status } = useQuery(['serverdata'], fetchData)

  return (
        <>
            <div>
                {status}
            </div>
        </>
  )
}

export default Call

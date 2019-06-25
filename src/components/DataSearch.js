import React, { useState, useEffect } from 'react'
import axios from 'axios'



export default function DataSearch() {

  axios.defaults.headers.Authorization = 'Bearer AAAAAAAAAAAAAAAAAAAAADut%2FAAAAAAAFOTLDe7HJmnPDGmkwt6tBqSxJFY%3DBCpRCExWuMlu7LvsJa0dBZIdChVh1XYbW7yLqE62yHtBy388gR'

  const [dataResults, setDataResults] = useState();

  useEffect(() => {
    axios.post('https://api.twitter.com/1.1/tweets/search/30day/Analytics.json',
      {
        "query": "from:realDonaldTrump lang:en",
        "maxResults": 100,
        "fromDate": "201906010000",
        "toDate": "201906180000"

      }).then(resp => {
        setDataResults(resp.data)
        console.log(resp.data)
      })
  })

  return (
    <>
    </>

  )

}
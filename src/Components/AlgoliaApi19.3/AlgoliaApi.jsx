import React, { useState, useEffect } from 'react'
import axios from 'axios'

function AlgoliaApi() {

  const [searchTerm, setSearchTerm] = useState("hooks");
  const [term, setTerm] = useState("hooks");
  const [results, setResults] = useState([]);
  const [err, setErr] = useState("");
  const [showLoader, setShowLosder] = useState(false);

  const getResults = async () => {
    try {
      setShowLosder(true);
      const { data } = await axios.get(`https://hn.algolia.com/api/v1/search?query=${searchTerm}`);
      setResults(data.hits.map(d => { return { title: d.title, url: d.url } }));
      setShowLosder(false);
    } catch (error) {
      console.log(error);
      setErr("An error occurred could not get results.");
      setShowLosder(false);
    }
  }

  useEffect(() => {
    getResults();
  }, [searchTerm]);

  const handleInput = (e) => {
    setTerm(e.currentTarget.value);
  }

  const onSearch = () => {
    setErr("");
    setSearchTerm(term);
  }

  const GetLinks = () => {
    return (
      <ul>
        {results.map((r, i) => <li key={i}><a href={r.url}>{r.title}</a></li>)}
      </ul>
    )
  }

  return (
    <div style={{ width: "500px", margin: "20px auto" }}>
      <h1>Algolia Search</h1>
      <input type="text" value={term} onChange={handleInput} />
      <input type="button" value="Search" onClick={onSearch} />
      {showLoader ? <p>Loading....</p> : err.length > 0 ? <p>{err}</p> : <GetLinks />}
    </div>
  )
}

export default AlgoliaApi

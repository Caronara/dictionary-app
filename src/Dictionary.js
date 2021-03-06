import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
import { TextField } from "@mui/material";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState([]);
  let [response, setResponse] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
    setResponse(null);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleError(response) {
    setResponse(response.response.data.message);
    setResults(null);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse).catch(handleError);

    const pexelsApiKey =
      "563492ad6f91700001000001630079229f934d9d86322f7c272401fe";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <div className="question">What word do you want to look up?</div>
        <form onSubmit={search}>
          <TextField
            type="search"
            autoFocus
            label="Search for a word"
            autoComplete="off"
            color="primary"
            onChange={handleKeywordChange}
          />
        </form>
      </section>
      {results !== null ? <Results results={results} /> : null}
      {response !== null ? <section>{response}</section> : null}
      {photos.length > 0 ? <Photos photos={photos} /> : null}
    </div>
  );
}

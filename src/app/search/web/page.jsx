import React from 'react'

export default async function WebSearchPage() {

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=joggle`
  );

  const data = await response.json();

  const results = data.items;

  return (
    <>{results && results.map((result)=><h1 key={result.title}>{result.title}</h1>)}</>
  )
}

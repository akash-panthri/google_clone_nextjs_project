import Link from 'next/link'
import Parser from "html-react-parser";

export default function WebSearchResults({resultsData}) {
  return (
    <div className='w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52'> <p className="text-gray-600 text-sm mb-5 mt-3">
    About {resultsData.searchInformation?.formattedTotalResults} results (
    {resultsData.searchInformation?.formattedSearchTime} seconds)
  </p>
  {resultsData.items?.map((result) => (
        <div className="" key={result.link}>
          <div className="">
            <Link className="" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className=""
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p>{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
  </div>
  )
}

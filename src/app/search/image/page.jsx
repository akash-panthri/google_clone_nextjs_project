// "use client"

import { Suspense } from 'react';
// import { useSearchParams } from 'next/navigation';
import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";
import Loading from './loading';

export default async function ImageSearchPage({searchParams}) {
  // const [results, setResults] = useState(null);
  // const [searchParams] = useSearchParams();
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
    );

  if (!response) {
    console.log(response);
    throw new Error("Something went wrong");
  }
  const data = await response.json();


  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found</h1>
        <p className="text-lg">
          Try searching for something else or go back to the homepage{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }

//   useEffect(() => {
//     const startIndex = searchParams.get('start') || "1";
//     const fetchImages = async () => {
//       try {
//         const response = await fetch(
//           `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.get(   
// 'searchTerm')}&searchType=image&start=${startIndex}`
//         );

//         if (!response.ok) {
//           throw new Error("Something went wrong");
//         }

//         const data = await response.json();   

//         setResults(data.items); // Update results state
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchImages();
//   }, [searchParams]);
  return (
    <>
      <Suspense fallback={<Loading />}>

      {results &&   <ImageSearchResults resultData={data} />}
      </Suspense>
    </>
  );
}

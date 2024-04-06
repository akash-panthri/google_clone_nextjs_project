
import Link from 'next/link';
export default function ImageSearchResults({resultData}) {
  return (
    <div className="">
    <div className="">
      {resultData.items.map((result) => (
        <div key={result.link} className="">
          <div className="group">
            <Link href={result.image.contextLink}>
              <img
                src={result.link}
                alt={result.title}
               
              />
            </Link>
            <Link href={result.image.contextLink}>
              <h2>
                {result.title}
              </h2>
            </Link>
            <Link href={result.image.contextLink}>
              <p>
                {result.displayLink}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>

  </div>
  )
}

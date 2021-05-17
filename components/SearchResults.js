import PaginationButtons from "../components/PaginationButtons";

function SearchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-10 mt-3">
        About {results.searchInformation.formattedTotalResults} results (
        {results.searchInformation.formattedSearchTime}
        seconds)
      </p>
      {results.items?.map(result => (
        <div key={result.link} className="max-w-xl mb-8 pb-10 border-b">
          <div className="group cursor-pointer mb-2">
            <div className="text-sm text-gray-800">{result.formattedUrl}</div>
            <a href={result.link}>
              <h2
                className="truncate text-xl text-blue-800 font-medium
              group-hover:underline"
              >
                {result.title}
              </h2>
            </a>
          </div>
          <p className="text-gray-800 line-clamp-2">{result.snippet}</p>
        </div>
      ))}

      <PaginationButtons />
    </div>
  );
}

export default SearchResults;


interface ISearchButtonProps {
    onClick: () => void
}

const SearchButton = ({ onClick }: ISearchButtonProps) => {
  return (
    <button className="px-20 py-2 w-full sm:max-w-[188px] flex justify-center items-center bg-secondary text-white rounded-3xl h-[44px] hover:bg-secondary/80" onClick={onClick}>
        Search
    </button>
  )
}

export default SearchButton
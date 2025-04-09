
import { FaSearch } from "react-icons/fa"

interface ISearchInputProps {
    cityInputValue: string
    handleCityValueOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SearchInput = ({ cityInputValue, handleCityValueOnChange }: ISearchInputProps) => {

    return (
        <div className="flex relative w-full sm:max-w-[330px]">
            <FaSearch className="text-black absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5"/>
            <input className="h-[44px] rounded-3xl pl-4 pr-12 w-full  text-black" type="text" placeholder="Enter a city..." value={cityInputValue} onChange={handleCityValueOnChange} />  
        </div>
    )
}
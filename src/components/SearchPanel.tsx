import SearchButton from './SearchButton';
import { SearchInput } from './SearchInput';
interface ISearchPanelProps {
  searchOnClick: () => void;
  cityInputValue: string;
  handleCityValueOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchPanel = ({
  searchOnClick,
  cityInputValue,
  handleCityValueOnChange,
}: ISearchPanelProps) => {
  return (
    <div className="flex flex-col w-full sm:flex-row items-center gap-4">
      <SearchInput
        cityInputValue={cityInputValue}
        handleCityValueOnChange={handleCityValueOnChange}
      />
      <SearchButton onClick={searchOnClick} />
    </div>
  );
};

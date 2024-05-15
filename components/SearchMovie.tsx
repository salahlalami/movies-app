import { Input } from "antd";

const SearchMovie = ({ handleChange }: { handleChange: (e: any) => void }) => {
  return (
    <Input
      defaultValue={"Pokemon"}
      onChange={handleChange}
      style={{ width: 200 }}
    />
  );
};

export default SearchMovie;

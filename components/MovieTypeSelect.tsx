import { Select } from "antd";

const MovieTypeSelect = ({
  handleChange,
}: {
  handleChange: (value: string) => void;
}) => {
  return (
    <Select
      className="actionSelect"
      onChange={handleChange}
      placeholder="Select Movie Type"
      style={{ width: "100%" }}
    >
      <Select.Option>All</Select.Option>
      <Select.Option value={"movie"}>Movie</Select.Option>
      <Select.Option value={"series"}>Series</Select.Option>
      <Select.Option value={"episode"}>Episode</Select.Option>
    </Select>
  );
};

export default MovieTypeSelect;

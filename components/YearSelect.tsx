import { Select } from "antd";

function generateArrayOfYears() {
  const max = new Date().getFullYear();
  const min = 1901;
  const years = [];
  for (let i = max; i >= min; i--) {
    years.push({ label: i, value: i });
  }
  return years;
}

const yearsArray = generateArrayOfYears();

const YearSelect = ({
  handleChange,
}: {
  handleChange: (value: number | null) => void;
}) => {
  return (
    <Select
      options={yearsArray}
      onChange={handleChange}
      placeholder="Select Year"
      style={{ width: 120 }}
    />
  );
};

export default YearSelect;

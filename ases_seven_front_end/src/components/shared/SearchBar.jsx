import { Input } from "@material-tailwind/react";
export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <Input
      type="text"
      className="md:w-1/3 px-3 py-1 rounded-md border-stone-600"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

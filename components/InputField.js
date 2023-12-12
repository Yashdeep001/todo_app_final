const InputField = ({
  label,
  type,
  id,
  placeholder,
  multiline,
  value,
  onTextChange,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          value={value}
          onChange={(e) => {
            onTextChange(e.target.value);
          }}
        />
      ) : (
        <input
          type={type}
          name={id}
          id={id}
          value={value}
          onChange={(e) => {
            onTextChange(e.target.value);
          }}
          placeholder={placeholder}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          required=""
        />
      )}
    </div>
  );
};
export default InputField;

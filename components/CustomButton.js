const CustomButton = ({ onClick, text }) => {
  return (
    <button
      type="submit"
      className="flex-1 text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
export default CustomButton;

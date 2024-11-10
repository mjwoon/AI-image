import PropTypes from "prop-types";

const FormField = ({
  labelName = '',
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
         rounded-lg focus:ring-[#4648ff] focus:border-[#4648ff] outline-none block w-full p-3"
      />
    </div>
  );
};

FormField.propTypes = {
  labelName: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 문자열 또는 숫자 허용
  handleChange: PropTypes.func.isRequired,
  isSurpriseMe: PropTypes.bool,
  handleSurpriseMe: PropTypes.func,
};

export default FormField;

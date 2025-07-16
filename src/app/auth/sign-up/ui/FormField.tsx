import { useState } from "react";
import { FormFieldProps } from "../types";
import { AlertCircle, Eye, EyeOff } from "lucide-react";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="mb-5">
      <div className="relative">
        <input
          id={name}
          type={inputType}
          placeholder={placeholder}
          autoComplete={showPassword ? "off" : "current-password"}
          {...register(name, { valueAsNumber })}
          className={`peer w-full rounded-lg border px-4 py-3 pr-10 text-sm bg-white dark:bg-neutral-800 dark:text-neutral-100 placeholder-gray-400 dark:placeholder-neutral-500 transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 dark:focus:ring-indigo-400 ${
            error
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 dark:border-neutral-700"
          }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 focus:outline-none"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}

        {!isPassword && error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <AlertCircle className="size-4 text-red-500" />
          </div>
        )}
      </div>

      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-400">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormField;

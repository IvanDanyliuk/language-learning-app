import React from "react";
import clsx from "clsx";

type OAuthButtonProps = {
  provider: "Google" | "Facebook" | "X";
  onClick?: () => void;
};

const providerStyles = {
  Google: {
    icon: "/google-logo.png",
    textColor: "text-gray-700 group-hover:text-blue-600",
  },
  Facebook: {
    icon: "/facebook-logo.webp",
    textColor: "text-gray-700 group-hover:text-blue-600",
  },
  X: {
    icon: "/x-logo.webp",
    textColor: "text-gray-700 group-hover:text-blue-600",
  },
};

export const OAuthButton: React.FC<OAuthButtonProps> = ({
  provider,
  onClick,
}) => {
  const { icon, textColor } = providerStyles[provider];

  return (
    <button
      onClick={onClick}
      className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
    >
      <div className="relative flex items-center space-x-4 justify-center">
        {icon && (
          <img
            src={icon}
            alt={`${provider} logo`}
            className="absolute left-0 w-5"
          />
        )}
        <span
          className={clsx(
            "block w-max font-semibold tracking-wide text-sm sm:text-base transition duration-300 dark:text-white",
            textColor
          )}
        >
          Continue with {provider}
        </span>
      </div>
    </button>
  );
};

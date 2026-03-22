import React from "react";

type paragraphProps = {
  children: React.ReactNode;
  extraClass?: string;
  pType?: "small" | "regular" | "large";
  fontStyle?:
    | "font-prompt-regular"
    | "font-prompt-semibold"
    | "font-prompt-bold"
    | "font-prompt-medium";
  textColor?: string;
  align?: "text-left" | "text-center" | "text-right";
};

const GenericParagraph = ({
  children,
  extraClass,
  pType = "regular",
  fontStyle = "font-prompt-medium",
  textColor = "text-white",
  align = "text-left",
}: paragraphProps) => {
  let fontClass = `p_${pType}`;

  switch (pType) {
    case "small":
      fontClass = `p_${pType}`;
    case "regular":
      fontClass = `p_${pType}`;
    case "large":
      fontClass = `p_${pType}`;

    default:
      fontClass = `p_${pType}`;
  }

  return (
    <p
      className={`${fontStyle} ${extraClass} ${fontClass} ${textColor} ${align}`}
    >
      {children}
    </p>
  );
};

export default GenericParagraph;

import React from "react";

type heading1Props = {
  children: React.ReactNode;
  extraClass?: string;
  headingType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontStyle?: string;
  textColor?: string;
};

const GenericHeading = ({
  children,
  extraClass,
  headingType = "h1",
  fontStyle = "font-inter",
  textColor = "text-black",
}: heading1Props) => {
  //create switch case for h1, h2, h3, h4, h5, h6

  switch (headingType) {
    case "h1": {
      return (
        <h1 className={`heading1 ${extraClass} ${fontStyle} ${textColor}`}>
          {children}
        </h1>
      );
    }
    case "h2": {
      return (
        <h2 className={`heading2 ${extraClass} ${fontStyle} ${textColor}`}>
          {children}
        </h2>
      );
    }
    case "h3": {
      return (
        <h3 className={`heading3 ${extraClass} ${fontStyle} ${textColor}`}>
          {children}
        </h3>
      );
    }
    case "h4": {
      return (
        <h4 className={`heading4 ${extraClass} ${fontStyle} ${textColor}`}>
          {children}
        </h4>
      );
    }
    case "h5": {
      return (
        <h4 className={`heading5 ${extraClass} ${fontStyle} ${textColor}`}>
          {children}
        </h4>
      );
    }
    case "h6": {
      return (
        <h6 className={`heading6 ${extraClass} ${fontStyle} ${textColor}`}>
          {children}
        </h6>
      );
    }
    default: {
      return (
        <h1 className={`heading1 ${extraClass} ${fontStyle} ${textColor}`}>
          {children}
        </h1>
      );
    }
  }
};

export default GenericHeading;

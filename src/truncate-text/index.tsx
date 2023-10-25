import { Mark, Text, TextProps, Tooltip } from "@chakra-ui/react";
import { useEffect, useRef, useState, useMemo } from "react";

export interface TruncateTextProps extends TextProps {
  text: string;
  ellipses?: string;
  displayTextAs?: "showMore" | "tooltip";
  showMoreText?: string;
  showLessText?: string;
}

export const TruncateText = ({
  text,
  ellipses = "...",
  displayTextAs = "tooltip",
  showMoreText = "Show more",
  showLessText = "Show less",
  ...props
}: TruncateTextProps) => {
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [showMoreEnabled, setShowMoreEnabled] = useState(false);
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    const calculateTextWidth = (text: string) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (context && textRef.current) {
        context.font = window.getComputedStyle(textRef.current).font;
        return context?.measureText(text).width;
      }
    };

    let start = 0;
    let end = text.length;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      const currentText = text.substring(0, mid) + ellipses;

      if (
        textRef.current &&
        (calculateTextWidth(currentText) as number) <
          textRef.current.offsetWidth
      ) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    const truncatedText = text.substring(0, start - 1) + ellipses;
    setDisplayText(truncatedText);
  }, [text]);

  const isTruncated = useMemo(() => {
    return text !== displayText;
  }, [text, displayText]);

  if (isTruncated) {
    if (displayTextAs === "showMore") {
      return (
        <Text {...props} ref={textRef}>
          {showMoreEnabled ? text : displayText}{" "}
          <Mark
            onClick={() => setShowMoreEnabled(!showMoreEnabled)}
            color="cyan.500"
            cursor="pointer"
          >
            {showMoreEnabled ? showLessText : showMoreText}
          </Mark>
        </Text>
      );
    }

    if (displayTextAs === "tooltip") {
      return (
        <Tooltip label={text} fontSize="md">
          <Text {...props} ref={textRef}>
            {displayText}
          </Text>
        </Tooltip>
      );
    }
  }

  return (
    <Text {...props} ref={textRef}>
      {displayText}
    </Text>
  );
};

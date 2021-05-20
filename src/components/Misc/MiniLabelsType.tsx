import { Center, chakra, Image } from "@chakra-ui/react";
import React from "react";
import annotation from "../../icons/annotation.svg";
import boolean from "../../icons/boolean.svg";
import date from "../../icons/date.svg";
import text from "../../icons/text.svg";
import { Label } from "../../types/label";
const LABEL_TYPE_ICON_MAPPER = {
  text: text,
  number: boolean,
  date: date,
};
export const MiniLabelsType = chakra(
  ({ className, label }: { className?: any; label: Label }) => {
    if (label.is_annotation) {
      // Annotation Render
      return (
        <Center
          className={className}
          bg="babyBlueEyes.dark"
          borderRadius="base"
          h="20px"
          w="20px"
        >
          <Image alt="annotation" src={annotation} />
        </Center>
      );
    }
    return (
      <Center
        className={className}
        borderColor="babyBlueEyes.dark"
        borderWidth={1}
        borderRadius="base"
        h="20px"
        w="20px"
      >
        <Image
          alt="annotation"
          src={LABEL_TYPE_ICON_MAPPER[label.label_type]}
        />
      </Center>
    );
  }
);

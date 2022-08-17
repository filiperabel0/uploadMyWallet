import React from "react";

import { Container } from "./styles";

interface iSelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[],
}

const SelectInput: React.FC<iSelectInputProps> = ({ options }) => {
  return (
    <Container>
      <select>
        {
          options.map(option => (
            <option value={option.value}>{option.label}</option>
        ))
        }
      </select>
    </Container>
  );
};

export default SelectInput;

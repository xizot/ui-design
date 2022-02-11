import { FormControl } from '@mui/material';
import React from 'react';
import { SelectLabel, SelectWrapper } from './CustomSelect.elements';

function CustomSelect({ label, options, defaultValue, onChange, ...props }) {
  return (
    <FormControl {...props}>
      <SelectLabel variant="standard" htmlFor="uncontrolled-native">
        {label}
      </SelectLabel>
      <SelectWrapper
        defaultValue={defaultValue}
        onChange={onChange}
        inputProps={{
          id: 'uncontrolled-native',
        }}>
        {options.map((item, idx) => (
          <option key={idx} value={item.value}>
            {item.label}
          </option>
        ))}
      </SelectWrapper>
    </FormControl>
  );
}

export default CustomSelect;

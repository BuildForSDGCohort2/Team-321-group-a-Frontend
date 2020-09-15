import React from 'react';
import {Form } from 'semantic-ui-react';

export const RenderFieldSelect = (field) => (
    <Form.Select
      {...field.input}
      label={field.label}
      options={field.options}
      placeholder={field.placeholder}
      fluid
      onChange={(e, { value }) => field.input.onChange(value)}
    />
  );
  
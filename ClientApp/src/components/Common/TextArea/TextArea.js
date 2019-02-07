import React from "react";
import { Form, TextArea as Text } from "semantic-ui-react";

const TextArea = props => {
  return (
    <Form>
      <Text
        className={props.className}
        placeholder={props.placeholder}
        onBlur={props.onBlur}
        value={props.value}
        onChange={props.onChange}
      />
    </Form>
  );
};

export { TextArea };

import { useState } from 'react';

export default function Section(props) {
  const [count, setCount] = useState(0);
  const { name } = props;

  return <>{props.children}</>;
}

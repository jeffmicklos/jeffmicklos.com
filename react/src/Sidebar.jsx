import { Children } from 'react';

export default function Sidebar({ children }) {
  return (
    <ul className="top-0 sticky hidden md:block h-max">
      {Children.map(children, (child) => (
        <li className="opacity-40 hover:opacity-100 transition duration-800">
          {child}
        </li>
      ))}
    </ul>
  );
}

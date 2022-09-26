// functional arrow component with typescript that render a dive with the text 'Hello World'
import type { ReactElement } from 'react';

export default function HelloWorld(): ReactElement {
  return <div className='text-3xl font-bold underline'>Hello World</div>;
}

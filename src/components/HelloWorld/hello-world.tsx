import Image from 'next/future/image';
import type { ReactElement } from 'react';

export interface HelloWorldProps {
  message?: string;
}
export function HelloWorld({ message = 'Hello world !' }: HelloWorldProps): ReactElement {
  return (
    <>
      <Image
        alt='cat'
        src='/cat.jpg'
        width={400}
        height={400}
      />
      <h1 className='text-3xl font-bold underline'>{message}</h1>
    </>
  );
}

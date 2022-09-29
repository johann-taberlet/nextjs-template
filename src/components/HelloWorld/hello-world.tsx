import type { ReactElement } from 'react';

export function HelloWorld(): ReactElement {
  return (
    <div className='underline'>
      Hello World
      <input
        className='flex-1 block w-full border-gray-300 rounded-none rounded-r-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
        id='company-website'
        name='company-website'
        placeholder='www.example.com'
        type='text'
      />
    </div>
  );
}

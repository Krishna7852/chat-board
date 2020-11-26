import * as React from 'react';

interface ISearchProps {}

export const Search: React.FunctionComponent<ISearchProps> = (props) => {
  return (
    <div className="relative flex">
      <span className="absolute inset-y-0 flex items-center">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full h-7 w-12 transition duration-500 ease-in-out text-white focus:outline-none"
        >
          <svg
            className="w-4 h-4 stroke-current"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </span>
      <input
        type="text"
        placeholder="Search..."
        className="w-full focus:outline-none focus:placeholder-gray-100 text-white text-xxs placeholder-gray-100 pl-12 bg-gray-200  bg-opacity-40 rounded-full py-2"
      />
    </div>
  );
};

import * as React from 'react';
import { Photo } from '..';

interface IProfileDetailProps {}

export const ProfileDetail: React.FunctionComponent<IProfileDetailProps> = (
  props
) => {
  return (
    <>
      <div className="h-full w-48 border-l hidden md:block">
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
          <p className="capitalize text-xxs opacity-70">math thomson</p>
        </div>
        <div className="text-right px-4">...</div>
        <div className="flex justify-center">
          <Photo />
        </div>
        <div className=" text-center pb-8 border-b">
          <h1 className="font-semibold text-md opacity-70 pt-4">
            Anderson Vanhron
          </h1>
          <p className="text-xs opacity-30">Cap town , RSA</p>
        </div>
        {[
          {
            title: 'Nickname',
            description: 'Krish',
          },
          {
            title: 'Tel',
            description: '072 143 9920',
          },
          {
            title: 'Date of birth',
            description: 'July 12, 1988',
          },
          {
            title: 'Gender',
            description: 'Male',
          },
          {
            title: 'Language',
            description: 'English',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="flex justify-between mx-4 py-2 border-b"
          >
            <p className="font-semibold text-xxs opacity-70">{item.title} :</p>
            <p className="text-xxs opacity-50">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

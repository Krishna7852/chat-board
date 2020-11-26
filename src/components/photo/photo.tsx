import * as React from 'react';

interface IPhotoProps {}

export const Photo: React.FunctionComponent<IPhotoProps> = (props) => {
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
        alt=""
        className="w-13 h-13 rounded-full"
      ></img>
    </>
  );
};

import * as React from 'react';
import { Photo, Search } from '..';

interface IFriendListProps {}

export const FriendList: React.FunctionComponent<IFriendListProps> = (
  props
) => {
  return (
    <>
      <div className="flex flex-col w-64 h-full p-4 -mr-4 bg-black bg-opacity-90 hidden md:block">
        <div className="flex flex-row items-center">
          <div className="ml-auto w-full border-b border-gray-600 pb-4">
            <Search />
          </div>
        </div>
        <div className="mt-2">
          <div className="flex flex-col -mx-4">
            {[
              {
                id: 1,
                name: 'Krishna Bhamare',
                message: 'Done by me..👍:)',
                time: '5 min',
                isOnline: false,
              },
              {
                id: 2,
                name: 'Anderson Vanhron',
                message: `Thanks for your message David. I thought I'm alone with this issue. Please, 👍 the issue to support it :)`,
                time: '10 min',
                isOnline: true,
              },
              {
                id: 3,
                name: 'Mace windu',
                message: 'Protect the sanetor at all cost',
                time: '2 min',
                isOnline: false,
              },
              {
                id: 4,
                name: 'Shoun Gardener',
                message: 'Sound perfect ..👍',
                time: '30 min',
                isOnline: false,
              },
            ].map((item) => (
              <div
                key={item.id}
                className={`relative flex flex-row items-center p-4 ${
                  item.isOnline ? 'border-l-4 border-blue-700' : ''
                }`}
              >
                {!item.isOnline && (
                  <div className="absolute text-md text-white right-0 top-0 mr-4 mt-2">
                    ...
                  </div>
                )}
                <div className="flex items-center justify-center h-10 w-10 flex-shrink-0">
                  <Photo />
                </div>
                <div className="flex flex-col flex-grow ml-3">
                  <div className="text-sm font-medium text-left text-white flex items-center">
                    {item.name}

                    {item.isOnline && (
                      <div className="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
                    )}
                  </div>
                  <div className="text-xs truncate w-32 text-white opacity-75">
                    {item.message}
                  </div>
                </div>
                {!item.isOnline && (
                  <div className="flex-shrink-0 ml-2 self-end mb-1">
                    <span className="flex items-center justify-center text-white text-xxs rounded-full">
                      {item.time}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

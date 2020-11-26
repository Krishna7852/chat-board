import * as React from 'react';

interface ISubMenuProps {}

export const SubMenu: React.FunctionComponent<ISubMenuProps> = (props) => {
  return (
    <>
      <div
        className="h-full bg-black w-44 pb-6 hidden md:block"
        style={{ minWidth: '11rem' }}
      >
        <h1 className="font-semibold text-white text-xl leading-tight px-4 py-6 truncate">
          Inbox
        </h1>

        {/* Section 1 */}
        <div className="mb-8 border-b mx-4 border-gray-600">
          {[
            {
              label: 'All messges',
              code: 'ALL_MESSAGES',
              count: 21,
              isActive: false,
            },
            {
              label: 'Unread',
              code: 'UN_READ',
              count: 89,
              isActive: true,
            },
            {
              label: 'Important',
              code: 'IMPORTANT',
              count: 6,
              isActive: false,
            },
            {
              label: 'Draft',
              code: 'DRAFT',
              count: 27,
              isActive: false,
            },
          ].map(
            (item: {
              label: string;
              isActive: boolean;
              count: number;
              code: string;
            }) => (
              <div
                key={item.code}
                className={`text-xxs font-semibold pr-4 my-6 text-white flex justify-between items-center ${
                  item.isActive
                    ? 'bg-white bg-opacity-20 rounded-xl p-2 w-full'
                    : 'opacity-60'
                }`}
              >
                <div>{item.label}</div>
                <div className="text-xxs">{item.count}</div>
              </div>
            )
          )}
        </div>
        {/* Sction 2 */}
        <div className="mb-8 border-b mx-4 border-gray-600">
          {[
            {
              label: 'Team',
              code: 'TEAM',
              count: 4,
              isActive: false,
            },
            {
              label: 'Group',
              code: 'GROUP',
              count: 3,
              isActive: false,
            },
            {
              label: 'Channel',
              code: 'CHANNEL',
              count: 18,
              isActive: false,
            },
            {
              label: 'Location',
              code: 'LOCATION',
              count: null,
              isActive: false,
            },
            {
              label: 'Media',
              code: 'MEDIA',
              count: 120,
              isActive: false,
            },
          ].map(
            (item: {
              label: string;
              isActive: boolean;
              count: any;
              code: string;
            }) => (
              <div
                key={item.code}
                className="text-xxs font-semibold pr-4 my-6 text-white flex justify-between items-center"
              >
                <div className="opacity-60">{item.label}</div>
                <div className="text-xxs">{item.count}</div>
              </div>
            )
          )}
        </div>

        {/* Sction 3 */}
        <div className="mb-8 mx-4">
          {[
            {
              label: 'Help',
              code: 'HELP',
              count: null,
              isActive: false,
            },
            {
              label: 'Setting',
              code: 'SETTING',
              count: null,
              isActive: false,
            },
          ].map((item: { label: string; isActive: boolean; code: string }) => (
            <div
              key={item.code}
              className="text-xxs font-semibold pr-4 my-6 text-white flex justify-between items-center"
            >
              <div className="opacity-60">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

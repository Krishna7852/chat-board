// @flow
import * as React from 'react';
import {
  FriendList,
  SubMenu,
  ChartBoard,
  ProfileDetail,
} from '../../components';
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <div className="h-full flex">
      <SubMenu />
      <FriendList />
      <ChartBoard />
      <ProfileDetail />
    </div>
  );
};

export default Home;

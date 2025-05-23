
import { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import FeaturedRoommate from './FeaturedRoommate';
import Loading from './Loading';
import MySlider from './MySlider';

const Home = () => {
  const {loading}=use(AuthContext)
  if(loading){
    return <Loading></Loading>
}
    return (
        <div>
            <MySlider></MySlider>
            <FeaturedRoommate></FeaturedRoommate>
        </div>
    );
};

export default Home;
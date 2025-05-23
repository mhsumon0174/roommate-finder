
import { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import FeaturedRoommate from './FeaturedRoommate';
import Loading from './Loading';
import MySlider from './MySlider';
import ExtraSectionOne from './ExtraSectionOne';

const Home = () => {
  const {loading}=use(AuthContext)
  if(loading){
    return <Loading></Loading>
}
    return (
        <div>
            <MySlider></MySlider>
            <FeaturedRoommate></FeaturedRoommate>
            <ExtraSectionOne></ExtraSectionOne>
        </div>
    );
};

export default Home;
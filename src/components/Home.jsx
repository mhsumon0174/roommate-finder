
import { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import FeaturedRoommate from './FeaturedRoommate';
import Loading from './Loading';
import MySlider from './MySlider';
import ExtraSectionOne from './ExtraSectionOne';
import ExtraSectionTwo from './ExtraSectionTwo';

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
            <ExtraSectionTwo></ExtraSectionTwo>
        </div>
    );
};

export default Home;
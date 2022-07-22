import { Route, Switch } from 'react-router-dom';

import AboutScreen from '../../pages/about-screen';
import ArtgalleryScreen from '../../pages/artgallery-screen';
import ContactScreen from '../../pages/contact-screen';
import FishScreen from '../../pages/fish-screen';
import FishesPage from '../../pages/fishes-screen/fishesIndex';
import HomeScreen from '../../pages/home-screen';
import MathScreen from '../../pages/math-screen';
import React from "react";
import RewardScreen from '../../pages/reward-screen';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/about'} component={AboutScreen} />
            <Route exact path={'/contact'} component={ContactScreen} />
            <Route exact path={'/artgallery'} component={ArtgalleryScreen} />
            <Route exact path={'/fish'} component={FishScreen} />
            <Route exact path={'/fishes'} component={FishesPage}/>
            <Route exact path={'/math'} component={MathScreen} />
            <Route exact path={'/rewards'} component={RewardScreen} />
        </Switch>
    );
}

export default AppRouter;

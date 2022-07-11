import AboutScreen from '../../pages/about-screen';
import ArtgalleryScreen from '../../pages/artgallery-screen';
import AstronomyScreen from '../../pages/astronomy-screen';
import ContactScreen from '../../pages/contact-screen';
import HomeScreen from '../../pages/home-screen';
import MathScreen from '../../pages/math-screen';
import React from "react";
import RewardScreen from '../../pages/reward-screen';
import { Route, Switch } from "react-router-dom";


const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={HomeScreen} />
            <Route exact path={'/about'} component={AboutScreen} />
            <Route exact path={'/contact'} component={ContactScreen} />
            <Route exact path={'/artgallery'} component={ArtgalleryScreen} />
            <Route exact path={'/astronomy'} component={AstronomyScreen} />
            <Route exact path={'/math'} component={MathScreen} />
            <Route exact path={'/reward'} component={RewardScreen} />
        </Switch>
    );
}

export default AppRouter;

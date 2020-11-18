import React, {useEffect, useState, Suspense, lazy}  from 'react';
import axios from 'axios';
import {
    Route,
    Switch
} from "react-router-dom";

import bonuseraRoutes from './versions/bonusera';
import defaultRoutes from './versions/default';
import NavBar from '../NavBar';

function RouterConfig() {
    const [version, setVersion] = useState(null)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/version').then(res => {
            setVersion(res.data.version)
            setLoading(false);
      })
    }, []);

    function getRoutes() {
        switch(version) {
            case "bonusera" :
                return bonuseraRoutes;
            case "default" :
                return defaultRoutes;
            default :
                return null;
        }
    }

    return (<>
            <Suspense fallback={<div>Loading...</div>}>
            <NavBar routes={(getRoutes() || []).map(route => ({key: route.navKey, to: route.path}))}/>
            <Switch>
                <>
                    {loading? <div>Loading</div> : (getRoutes() || []).map(route =>
                        <Route key={route.routeKey} exact={route.exact} path={route.path} component={route.component} />
                    )}
                </>
            </Switch>
            </Suspense>
            </>
    )
  }

export default RouterConfig;
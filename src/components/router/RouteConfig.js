import React, {useEffect, useState}  from 'react';
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
            <NavBar routes={getRoutes()}/>
            <Switch>
            {loading? <div>Loading</div> : (getRoutes() || []).map(route =>
                <Route {...route} />
            )}
            </Switch>
            </>
    )
  }

export default RouterConfig;
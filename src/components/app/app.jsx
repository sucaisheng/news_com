import React, {Component} from 'react';
import {Route, Link, Switch, Redirect } from 'react-router-dom';
import {Segment, Menu} from 'semantic-ui-react';

import News from '../header/news';
import Sports from '../header/sports';
import Yule from '../header/yule';
import Denglu from '../login/denglu';
import Zhuche from '../login/zhuche';



export default class App extends Component {
    render(){
        return(
            <div>
                <Segment><h1>新闻大事件</h1></Segment>
                <Menu>
                    <Menu.Item>
                        <Link to="/header/news" style={{color:'blue'}} ><div>News</div></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/header/sports" style={{color:'blue'}} ><div>Sports</div></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/header/yule" style={{color:'blue'}} ><div>Yule</div></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/login/denglu" style={{color:'blue'}} ><div>Denglu</div></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/login/zhuche" style={{color:'blue'}} ><div>Zhuche</div></Link>
                    </Menu.Item>
                </Menu>
                <div>
                    <Switch>
                        <Route path="/header/news" component={News} />
                        <Route path="/header/sports" component={Sports} />
                        <Route path="/header/yule" component={Yule} />
                        <Route path="/login/denglu" component={Denglu} />
                        <Route path="/login/zhuche" component={Zhuche} />
                        <Redirect to="/header/news" />
                    </Switch>
                </div>
            </div>
        )
    }
}
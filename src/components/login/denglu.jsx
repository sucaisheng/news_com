import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'

import Zhuche from './zhuche';

export default class Denglu extends Component{

    state = {
        userName:'',
        userPassword:'',
        history: require("history").createHashHistory
    }

    handUserName = (event) => {
        const userName = event.target.value;
        this.setState({userName});
    }

    handUserPassword = (event) => {
        const userPassword = event.target.value;
        this.setState({userPassword});
    }

    denglu = ()=>{
        const user = {userName:this.state.userName, userPassword:this.state.userPassword};
        console.log(user);
        fetch('http://localhost:8080/denglu',{
            method:'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body:JSON.stringify(user)
        }).then(res => res.json()).then(data => {
            if(data===1)
            {
                alert("欢迎登陆！");
                this.state.history().goBack();
            } else {
                alert("密码或账户名错误，请重新输入！");
            } 
        })
    }

    render(){

        const {userName, userPassword} = this.state;

        return(
            <div>
               <div>
                用户名：<input type="text" value={userName} placeholder="请输入账户:" onChange={this.handUserName} /><br/>
                密码：<input type="password" value={userPassword} placeholder="请输入密码:" onChange={this.handUserPassword} /><br/>
                <input type="submit" value="登陆" onClick={this.denglu} /><br/>
                <Link to="/login/zhuche" >注册</Link><br/>
               </div>
               <Route path="/login/zhuche" Component={Zhuche} />
            </div>
        )
    }
}
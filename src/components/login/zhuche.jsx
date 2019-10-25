import React, { Component } from 'react';
// import axios from 'axios';

export default class Zhuche extends Component{
    
    state = {
        userName:'',
        userPassword:'',
        history: require("history").createHashHistory
    }

    handUserName = (event) =>{
        const userName = event.target.value;
        this.setState({userName});
    }

    handUserPassword = (event) => {
        const userPassword = event.target.value;
        this.setState({userPassword});
    }

    register = () => {
        var user = {userName:this.state.userName,userPassword:this.state.userPassword};
            fetch('http://localhost:8080/zhuche', {
                method : 'POST',
                headers: {'Content-Type': 'application/json; charset=utf-8'},
                body : JSON.stringify(user)
            }).then((res) => res.json()).then(data =>{
                console.log(data);
                this.state.history().goBack();
            })
            
    }

    quxiao = () => {
        this.state.history().goBack();
    }

    render(){

        const {userName, userPassword} = this.state

        return(
            <div>
                用户名：<input type="text" value={userName} placeholder="请输入账户:" onChange={this.handUserName} /><br/>
                密码：<input type="password" value={userPassword} placeholder="请输入密码:" onChange={this.handUserPassword} /><br/>
                <input type="submit" value="注册" onClick={this.register} /><br/>
                <input type="submit" value="取消注册" onClick={this.quxiao} /><br/>
            </div>
        )
    }
}
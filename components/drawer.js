import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import SideMenu from './sidemenu';
import {Actions, DefaultRenderer, ActionConst} from 'react-native-router-flux';

class MyDrawer extends Component {
    render(){
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={()=>ActionConst.REPLACE}
                onClose={()=>ActionConst.REPLACE}
                type="displace"
                content={<SideMenu />}
                tapToClose={true}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan={true}
                tweenHandler={(ratio) => ({
                 main: { opacity:Math.max(0.54,1-ratio) }
            })}>
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}

export default MyDrawer;

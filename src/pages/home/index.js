import React, { Component } from 'react'
import './index.less'
import { TabBar, NavBar, Icon } from 'antd-mobile'
import HomeItem from './components/homeItem/index'
import TagItem from './components/tagItem/index'
import SearchItem from './components/searchItem/index'

function TabbarItem(props) {
    if (props.currentKty === 'home') {
        return <HomeItem listData={props.listData} {...props} />
    } else if (props.currentKty === 'tag') {
        return (
            <TagItem
                isShowTags={props.isShowTags}
                hideTags={props.hideTags}
                {...props}
            />
        )
    } else {
        return <SearchItem {...props} />
    }
}

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultAction: 'home',
            navBarTitle: '首页',
            isShowTags: false,
            components: [
                {
                    label: '首页',
                    key: 'home',
                    defIcon: require('../../images/svgs/home-default.svg'),
                    atvIcon: require('../../images/svgs/home-active.svg'),
                },
                {
                    label: '标签归档',
                    key: 'tag',
                    defIcon: require('../../images/svgs/tag-default.svg'),
                    atvIcon: require('../../images/svgs/tag-active.svg'),
                },
                {
                    label: '搜索',
                    key: 'search',
                    defIcon: require('../../images/svgs/search-default.svg'),
                    atvIcon: require('../../images/svgs/search-active.svg'),
                },
            ],
            listData: [],
        }
    }

    render() {
        return (
            <div className="home-layout">
                <NavBar
                    rightContent={[
                        this.state.defaultAction === 'tag' && (
                            <Icon
                                key="1"
                                type="ellipsis"
                                onClick={this.checkTag.bind(this)}
                            />
                        ),
                    ]}
                >
                    {this.state.navBarTitle}
                </NavBar>
                <div className="home-tabbar">
                    <TabBar>
                        {this.state.components.map((item) => {
                            return (
                                <TabBar.Item
                                    title={item.label}
                                    key={item.key}
                                    icon={{ uri: item.defIcon }}
                                    selectedIcon={{ uri: item.atvIcon }}
                                    selected={
                                        this.state.defaultAction === item.key
                                    }
                                    onPress={() => {
                                        this.setState({
                                            defaultAction: item.key,
                                            navBarTitle: item.label,
                                        })
                                    }}
                                >
                                    <TabbarItem
                                        currentKty={item.key}
                                        isShowTags={this.state.isShowTags}
                                        {...this.props}
                                        hideTags={this.hideTags.bind(this)}
                                    />
                                </TabBar.Item>
                            )
                        })}
                    </TabBar>
                </div>
            </div>
        )
    }

    checkTag() {
        console.log('checkTag')
        this.setState({
            isShowTags: !this.state.isShowTags,
        })
    }

    hideTags() {
        this.setState({
            isShowTags: false,
        })
    }
}

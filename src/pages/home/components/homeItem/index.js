import React, { Component } from 'react'
import TopTag from '../../../../componemts/topTag/index'
import ListItem from '../../../../componemts/listItem/index'
import apis from '../../../../apis/index'
import loading from '../../../../utils/loading'
import './index.less'

export default class HomeItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listData: [],
        }
    }

    componentDidMount() {
        loading(async () => {
            if (this.state.listData.length === 0) {
                let res = await apis.getNewData()
                this.setState({
                    listData: res.data,
                })
            } else {
                return false
            }
        })
    }

    render() {
        return (
            <div className="home-item">
                <TopTag text="最新发布" type="home" />
                {this.state.listData.length > 0 && (
                    <div className="padding">
                        {this.state.listData.map((item, index) => {
                            return (
                                <ListItem
                                    key={index}
                                    title={item.title}
                                    time={item.createTime}
                                    tag={item.className}
                                    {...this.props}
                                    goDetail={this.goDetail.bind(this, item.id)}
                                />
                            )
                        })}
                    </div>
                )}
                {this.state.listData.length === 0 && <div className="no-value">暂无数据</div>}
            </div>
        )
    }

    goDetail(id) {
        this.props.history.push({ pathname: '/detail', state: { id } })
    }
}

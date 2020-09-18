import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile'
import ListItem from '../../../../componemts/listItem/index'
import apis from '../../../../apis/index'
import loading from '../../../../utils/loading'

export default class SearchItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postList: [],
            putData: {
                pageNum: 1,
                pageSize: 10,
                keyCode: null,
            },
        }
    }
    render() {
        return (
            <div>
                <SearchBar
                    placeholder="搜索关键字"
                    onSubmit={this.submit.bind(this)}
                    onClear={this.submit.bind(this)}
                />
                <div className="padding">
                    {this.state.postList.map((item, index) => {
                        return (
                            <ListItem
                                key={index}
                                title={item.title}
                                time={item.createTime}
                                tag={item.className}
                                goDetail={this.goDetail.bind(this, item.id)}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }

    submit(val) {
        let data = this.state.putData
        data.keyCode = val
        this.setState({
            putData: data,
        })
        this.getData()
    }

    getData() {
        loading(async () => {
            let res = await apis.getPostDataByKeycode(this.state.putData)
            console.log(res)
            this.setState({
                postList: res.data,
            })
        })
    }

    goDetail(id) {
        this.props.history.push({ pathname: '/detail', state: { id } })
    }
}

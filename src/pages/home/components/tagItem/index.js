import React, { Component } from 'react'
import TopTag from '../../../../componemts/topTag/index'
import ListItem from '../../../../componemts/listItem/index'
import apis from '../../../../apis/index'
import loading from '../../../../utils/loading'
import './index.less'

export default class TagItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            putData: {
                pageNum: 1,
                pageSize: 10,
                classId: null,
            },
            currentTags: '全部',
            tagList: [{ className: '全部' }],
            postList: [],
        }
    }

    componentDidMount() {
        loading(async () => {
            let tagRes = await apis.getClassData()
            this.setState({
                tagList: [...this.state.tagList, ...tagRes.data],
            })
            this.getData()
        })
    }

    render() {
        return (
            <div className="big-box">
                <div
                    className={`tags-item ${
                        this.props.isShowTags && 'tags-item-active'
                    }`}
                    onClick={this.props.hideTags}
                >
                    <div
                        className={`tags-list ${
                            this.props.isShowTags && 'tags-list-active'
                        }`}
                        onClick={(e) => {
                            e.stopPropagation()
                        }}
                    >
                        {this.state.tagList.map((item, index) => {
                            return (
                                <div
                                    className="tag-box"
                                    key={index}
                                    onClick={this.onSelectPost.bind(this, item)}
                                >
                                    {item.className}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <TopTag text={this.state.currentTags} type="tag" />
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

    async getData() {
        let postRes = await apis.getPostDataByKeycode(this.state.putData)
        this.setState({
            postList: postRes.data,
        })
    }

    onSelectPost(item) {
        let data = this.state.putData
        data.classId = item.classId || null
        this.setState({
            putData: data,
            currentTags: item.className,
        })
        this.getData()
        this.props.hideTags()
    }

    goDetail(id) {
        this.props.history.push({ pathname: '/detail', state: { id } })
    }
}

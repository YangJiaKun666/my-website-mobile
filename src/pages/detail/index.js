import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
import TopTag from '../../componemts/topTag/index'
import apis from '../../apis/index'
import loading from '../../utils/loading'

export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.location.state.id,
            detali: {},
        }
    }

    componentDidMount() {
        loading(async () => {
            let res = await apis.getPostDetail({ id: this.state.id })
            console.log(res)
            this.setState({
                detali: res.data,
            })
        })
    }

    render() {
        return (
            <div>
                <NavBar>详情</NavBar>
                <TopTag type="detail" text={this.state.detali.title} />
                <div
                    className="padding detail"
                    dangerouslySetInnerHTML={{ __html: this.state.detali.decs }}
                ></div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'
import TopTag from '../../componemts/topTag/index'
import SelectImg from './components/selectImg/index'
import apis from '../../apis/index'
import loading from '../../utils/loading'

export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.location.state.id,
            imgUrl: '',
            show: false,
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
        window.addEventListener('click', this.clickImg.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.clickImg.bind(this))
    }

    clickImg(event) {
        let attr = event.target.getAttribute('src')
        if (!event.target.className && attr) {
            this.setState({
                show: true,
                imgUrl: attr,
            })
        }
    }

    render() {
        return (
            <div className="detail-box">
                <NavBar
                    leftContent={
                        <Icon
                            size="md"
                            type="left"
                            onClick={() => {
                                this.props.history.go(-1)
                            }}
                        />
                    }
                >
                    详情
                </NavBar>
                <div className="detail-content">
                    <TopTag type="detail" text={this.state.detali.title} />
                    <div
                        className="padding detail"
                        dangerouslySetInnerHTML={{
                            __html: this.state.detali.decs,
                        }}
                    ></div>
                </div>
                <SelectImg
                    imgUrl={this.state.imgUrl}
                    show={this.state.show}
                    hideImg={this.hideImg.bind(this)}
                />
            </div>
        )
    }

    hideImg() {
        this.setState({
            show: false,
        })
    }
}

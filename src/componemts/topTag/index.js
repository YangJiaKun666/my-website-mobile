import React from 'react'
import './index.less'

export default function TopTag({ text, type }) {
    const homeImg = require('../../images/phone.png')
    const tagsImg = require('../../images/tags.png')
    const detailImg = require('../../images/detail.png')
    return (
        <div className="tag-top">
            <img
                className="tag-img"
                src={
                        type === 'tag'
                        ? tagsImg
                        : type === 'detail'
                        ? detailImg
                        : homeImg
                }
                alt="手机"
            />
            <div className="tag-text">{text}</div>
        </div>
    )
}

import React from 'react'
import './index.less'

export default function SelectImg({ imgUrl, show, hideImg }) {
    if (show) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
    }
    return (
        <div onClick={hideImg} className={`img-box ${show && 'show-img'}`}>
            <img src={imgUrl} alt="详情图片" />
        </div>
    )
}

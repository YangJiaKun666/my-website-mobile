import React from 'react'
import './index.less'

function getTime(date) {
    date = new Date(date)
    let Y = date.getFullYear()
    let M =
        date.getMonth() + 1 < 10
            ? '0' + (date.getMonth() + 1)
            : date.getMonth() + 1
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    return `${Y}-${M}-${D}`
}

export default function ListItem({ title, time, tag, goDetail }) {
    return (
        <div className="list-item" onClick={goDetail}>
            <div className="item-title">{title}</div>
            <div className="item-info">
                <div className="item-time">{getTime(time)}</div>
                <div className="item-tags">{tag}</div>
            </div>
        </div>
    )
}

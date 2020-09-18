import { Toast } from 'antd-mobile'

async function loading(callBack) {
    Toast.loading('正在获取数据', 0)
    try {
        return await callBack().then(() => {
            Toast.hide()
        })
    } catch (error) {
        Toast.hide()
        Toast.offline('网络出错啦')
    }
}

export default loading

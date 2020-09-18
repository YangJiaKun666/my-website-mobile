import { get } from './axios'
export default {
	// 获取分类
	getClassData: async () => {
		let res = await get('/tags/getClassIfication')
		return res
	},
	// 获取最x新十条数据
	getNewData: async () => {
		let res = await get('/posts/getArticle')
		return res
	},
	// 获取满足条件的数据
	getPostDataByKeycode: async data => {
		let res = await get('/posts/getArticleByKeycode', data)
		return res
	},
	getPostDetail: async data => {
		let res = await get('/postDetail/getArticleDetail', data)
		return res
	}
}

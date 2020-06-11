import { observable, action } from 'mobx'
import moment from 'moment'
import axios from '@/services'
import _ from 'lodash'

class Store {
    @observable topic = ''

    @observable weiboContent = []

    @observable originData = {}

    @observable originAllData = []

    days = (moment('2020-1-11').valueOf() - moment('2020-1-9').valueOf()) / (3600 * 24 * 1000)

    @action initData = () => {
        const promiseArr = []
        for(let i = 0; i < this.days; i++) {
            ((i) => {
                const date = moment('2020/1/9').add(i, 'days').format('YYYY-M-D')
                promiseArr.push(
                    axios(`weibo_processed_json/${date}.json`).then(res => {
                        this.originData[date] = res
                    })
                )
            })(i)
        }
        Promise.all(promiseArr).then(() => {
            this.originAllData = _.chain(this.originData)
                .values()
                .flattenDeep()
                .value()
            console.log(this.originAllData);
            
        })
    }

    @action updateContent = (topic) => {
        this.topic = topic
        this.weiboContent = _.chain(this.originAllData)
            .find(d => d.topic.includes(topic))
            .map((d, k) => ({
                type: k,
                value: d,
            }))
            .value()

    }
}

export default new Store()
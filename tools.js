const moment = require('moment')

const tools = {
  req_Info: (req) => {
    const reqTimestamp = moment().valueOf()
    const reqDateTime = moment(reqTimestamp).format('YYYY-MM-DD HH:mm:ss')
    const method = req.method
    const url = req.originalUrl
    const reqResult = `${reqDateTime} | ${method} from ${url}`
    return [reqResult, reqTimestamp]
  },
  res_info: (res, reqTimestamp) => {
    const method = res.req.method
    const url = res.req.originalUrl
    const resTimestamp = moment().valueOf()
    const resDataTime = moment(resTimestamp).format('YYYY-MM-DD HH:mm:ss')
    const req_to_res_time = resTimestamp - reqTimestamp
    return `${resDataTime} | ${method} form ${url} | total time: ${req_to_res_time}ms`
  }
}

module.exports = tools
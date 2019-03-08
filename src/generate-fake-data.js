import faker from "faker";
import randomColor from "randomcolor";
import moment from "moment";
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from "constants";

const dateFormat = 'YYYY-MM-DDTHH:mm:ss'


const schedules = [
  {
    schedule_name: 'schedule_name_001',
    playlist_name: 'playlist_name_001',
    available_date_from: '2019-03-01',
    available_date_to: '2019-03-03',
    available_time_from: '08:00:00',
    available_time_to: '20:00:00',
  },
  {
    schedule_name: 'schedule_name_002',
    playlist_name: 'playlist_name_002',
    available_date_from: '2019-03-02',
    available_date_to: '2019-03-19',
    available_time_from: '',
    available_time_to: '',
  },
  {
    schedule_name: 'schedule_name_003',
    playlist_name: 'playlist_name_003',
    available_date_from: '2019-02-28',
    available_date_to: '2019-03-07',
    available_time_from: '19:00:00',
    available_time_to: '22:00:00',
  },
  {
    schedule_name: 'schedule_name_004',
    playlist_name: 'playlist_name_004',
    available_date_from: '2019-03-06',
    available_date_to: '2019-03-10',
    available_time_from: '',
    available_time_to: '',
  },
  {
    schedule_name: 'schedule_name_005',
    playlist_name: 'playlist_name_005',
    available_date_from: '2019-03-06',
    available_date_to: '',
    available_time_from: '14:00:00',
    available_time_to: '16:00:00',
  },
]


const timeline = (value) =>{ return value} // { return Math.floor(value.valueOf() / 10000000) * 10000000;  }


export default function(showStartDate='2019-03-02', showEndDate='2019-03-10') {
  let groups = [];
  for (let i = 0; i < schedules.length; i++) {
    groups.push({
      id: `${i}`,
      title: schedules[i].playlist_name,
      rightTitle: schedules[i].schedule_name,
      rightTitleKey: 'rightTitle',
      tip: 'additional information',
      bgColor: '#f00'
    });
  }

  let scheduleTimes = []

  schedules.forEach( (schedule, index) => {
    let { available_date_from, available_date_to, available_time_from, available_time_to } = schedule

    // 期間なしの場合、処理しやすい為、終了日付が大きな値で固定
    available_date_to = available_date_to || '2030-01-01'

    // 開始時間は大きな方、終了時間は小さい方
    available_date_from = available_date_from < showStartDate ? showStartDate : available_date_from
    available_date_to  = available_date_to < showEndDate ? available_date_to : showEndDate

    console.log("  ")
    console.log("--> index: " + index + " available_date_from: " + available_date_from + " available_date_to: " + available_date_to + " available_time_from: " + available_time_from + " available_time_to: " + available_time_to)

    if( ! (available_time_from && available_time_to) ) {
      // 時刻設定なし

      const startTime = moment(available_date_from)
      const endTime = moment(available_date_to).add(1, 'day')
      
      let times = []
      times.push([timeline(startTime), timeline(endTime)])
      scheduleTimes.push(times)

    } else {
      // 時刻設定あり
      let times = []
      let startDate = moment(available_date_from)

      while( startDate.isSameOrBefore(moment(available_date_to)) ) {

        console.log("moment(available_date_to):"  + moment(available_date_to).format())

        const day = startDate.format('YYYY-MM-DD')
        const startTime = moment(`${day} ${available_time_from}`)
        const endTime = moment(`${day} ${available_time_to}`)

        times.push([timeline(startTime), timeline(endTime)])

        // 日付 + 1day
        startDate = startDate.add(1, 'day')
      }

      scheduleTimes.push(times)
    }

  })

  console.log(scheduleTimes)
  

  const splitData = splitTime(scheduleTimes)


  // 連続の白い部分を接続する
  console.log("-----------------------連続の白い部分を接続する ")

  const connectReducer = (accumulator, currentValue) => {
    let target = []
    if (!Array.isArray(accumulator)) {
      target.push(accumulator)
    } else {
      target = accumulator
    }

    let lastItem = target.pop()
    console.log("")
    console.log("--------------------" + lastItem.group + "   " + currentValue.group)
    console.log("lastItem    : " + JSON.stringify(lastItem))
    console.log("currentValue: " + JSON.stringify(currentValue))


    if(lastItem.group == currentValue.group 
      && lastItem.color == currentValue.color && lastItem.color == "white" 
      && lastItem.end.isSame(currentValue.start)) 
    {
      const newItem = {...lastItem, start: lastItem.start, end: currentValue.end}
      target.push(newItem)
      console.log("---connect: " + JSON.stringify(newItem))
    } else {
      target.push(lastItem)
      target.push(currentValue)
    }

    return target
  }

  const data = splitData.reduce(connectReducer)
  console.log(data)



  // {id: "0", group: "2", title: "time_0", start: 1550770000000, end: 1550790921150, …}
  let items = []

  data.forEach( (time, i ) => {

    items.push({
        id: `${i}`, 
        group: time.group, 
        title: `${time.start.format()}--${time.end.format()}`, 
        start: time.start, // Math.floor(time.start.valueOf() / 10000000) * 10000000, 
        end:   time.end,  // Math.floor(time.end.valueOf() / 10000000) * 10000000,
        itemProps: {
          "data-tip": faker.hacker.phrase()
        },
        bgColor:  time.color == "blue" ? "#a8c9ff" : "#eee",
      })
      
  })

  console.log(items)
  // 

  

  return {groups, items}
}


const splitTime = (scheduleTimes) => {

  let objectTimes = scheduleTimes.map( (times, index) => {

    return times.map(time => {
      return {
        group: index,
        start: time[0],
        end: time[1],
        // formatedStart: time[0].format(),
        // formatedEnd: time[1].format(),
        color: 'blue'
      }
    })

  })


  console.log("objectTimes")
  console.log(objectTimes)

  const itemTimes = objectTimes.flat()


  const reducer = (accumulator, currentValue) => {

    let target = []
    if (!Array.isArray(accumulator)) {
      target.push(accumulator)
    } else {
      target = accumulator
    }
    
    console.log("")
    console.log("-------> target: ")
    console.log(target)
    console.log("-------> currentValue: ")
    console.log(JSON.stringify(currentValue))


    let result = []

    target.forEach( item => {
      // currentValue.start
      // currentValue.end

      if(item.color == 'blue' && item.group != currentValue.group)  {

          // item          --------
          // currentValue       -----------
          if (currentValue.start.isAfter(item.start) && currentValue.start.isBefore(item.end)
            && currentValue.end.isAfter(item.end)
          ) {
            result.push({...item, end: currentValue.start, color: 'blue'})
            result.push({...item, start: currentValue.start, color: 'white'})
            // 
            // result.push(currentValue)
          }

          // item            ------------------------
          // currentValue          -----------
          if (currentValue.start.isAfter(item.start) && currentValue.end.isBefore(item.end) 
            && currentValue.end.isBefore(item.end)
          ) {
            result.push({...item, end: currentValue.start, color: 'blue'})
            result.push({...item, start: currentValue.start, end: currentValue.end, color: 'white'})
            result.push({...item, start: currentValue.end, color: 'blue'})
            //
            // result.push(currentValue)
          }

          // item               -----------
          // currentValue  ------------------------
          if (currentValue.start.isBefore(item.start) && currentValue.end.isAfter(item.end)) {
            result.push({...item, color: 'white'})

            // result.push(currentValue)
          }


          // item                  ------------
          // currentValue    -----------
          if (currentValue.end.isAfter(item.start) && currentValue.end.isBefore(item.end)
            && currentValue.start.isBefore(item.start)
          ) {
            result.push({...item, end: currentValue.end, color: 'white'})
            result.push({...item, start: currentValue.end, color: 'blue'})
            // 
            // result.push(currentValue)
          }

          // item         ------------
          // currentValue                -----------
          if (currentValue.start.isAfter(item.end)) {
            result.push(item)

            // result.push(currentValue)
          }

          // item                         ------------
          // currentValue  -----------
          if (currentValue.end.isBefore(item.start)) {
            result.push(item)

            // result.push(currentValue)
          }

      } else {
        result.push(item)
      }
      

      

    })

    result.push(currentValue)

    return result
  }


  const splitData = itemTimes.reduce(reducer)
  
  console.log("")
  console.log("---> reduce result: ")
  console.log(splitData)
  
  return splitData
}

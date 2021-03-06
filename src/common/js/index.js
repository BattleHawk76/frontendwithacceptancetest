/* 各封装函数 */

export function timeZero(val) {
    return val < 10 ? `0${val}` : val;
}

export function filterAttr(obj, flag) {
    let newObj = {};
    flag = flag ? flag : [];
    Object.keys(obj).forEach((key) => {
        if (key.indexOf('__') !== -1 || flag.indexOf(key) !== -1) return;
        newObj[key] = obj[key];
        if (typeof obj[key] === 'object' && obj[key] && !(obj[key] instanceof Array)) {
            newObj[key] = filterAttr(obj[key], flag)
        }
    });
    return newObj;
}

/* 时间格式化 */
export function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000
        date = new Date(time)
    }
    if (date == null || date == undefined) {
        return ""
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    /*
      replace() 第二个参数为匿名函数时：
        (a, b, c, d) => {}
        a: 被匹配字段
        b: 替换后字段(括号内匹配字段)
        c: 匹配位置
        d: 被匹配原字符串
        例： {y}-----y-------0--------- {y}-{m}-{d} {h}:{i}:{s}
    */
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}

//位置信息转换
export function formatFunc(data) {
    if (data.categoryEnum != undefined) {
        if (data.categoryEnum == 0) {
            return `单警柜${data.locationInfo.frameNumber}-${data.locationInfo.section}(${data.cabinetUserName})`
        } else if (data.categoryEnum == 1) {
            return `公共柜(${data.locationInfo.frameNumber}-${data.locationInfo.section})`
        } else if (data.categoryEnum == 2) {
            return `备用柜(${data.locationInfo.frameNumber}-${data.locationInfo.section})`
        } else {
            return `${data.locationInfo.frameNumber}架/${data.locationInfo.surface}面/${data.locationInfo.section}节/${data.locationInfo.floor}层`
        }
        
    } else {
        let surface = 'A'
        if (data.surface == 1) surface = 'B'
        else {
            surface = 'A'
        }
        if (data.surface != null && data.floor != null) {
            return data.frameNumber ?
                `${data.frameNumber}架/${surface}面/${data.section}节/${data.floor}层` :
                `${data.category}(${data.cabinetNumber})`
        } else {
            if (data.category == '单警柜') {
                return `单警柜${data.cabinetNumber}(${data.name})`
            } else {
                return data.frameNumber ?
                    `${data.frameNumber}架/${data.section}节` :
                    `${data.category}(${data.cabinetNumber})`
            }

        }
    }
}

//只供装备实体列表使用
export function formatFuncOrder(data) {
    if(data.policeCabinet!=null){
        if (data.policeCabinet.category == 0) {
            return `单警柜${data.policeCabinet.cabinetNumber}(${data.policeCabinet.singleCabinetUser.name})`
        } else if (data.policeCabinet.category == 1) {
            return `公共柜(${data.policeCabinet.cabinetNumber})`
        } else if (data.policeCabinet.category == 2) {
            return `备用柜(${data.policeCabinet.cabinetNumber})`
        } 
    }else {
        let surface = 'A'
        if(data.location.surface!=undefined){
            if (data.location.surface == 1) surface = 'B'
            else {
                surface = 'A'
            }
        }
       
        if (data.location.surface != null && data.location.floor != null) {
            return data.location.frameNumber ?
                `${data.location.frameNumber}架/${surface}面/${data.location.section}节/${data.location.floor}层` :
                `${data.location.category}(${data.location.cabinetNumber})`
        } else {
            if (data.location.category == '单警柜') {
                return `单警柜${data.location.cabinetNumber}(${data.location.name})`
            } else {
                return data.location.frameNumber ?
                    `${data.location.frameNumber}架/${data.location.section}节` :
                    `${data.location.category}(${data.location.cabinetNumber})`
            }

        }
    }
}

// 架体格式化
export function filterFrame(data) {
    return `${data.number}架/${data.surface}面/${data.section}节/${data.floor}层`
}

// 时间戳转天数
export function stampToNow(time, cFormat) {
    if (isNaN(time)) {
        console.error("时间格式有误");
        return 'timeError';
    }
    let timeStamp = (Date.now() - +time) / 1000,
        dateObj = {
            mounth: Math.floor(timeStamp / (60 * 60 * 24 * 30)),
            day: Math.floor(timeStamp / (60 * 60 * 24)),
            hour: Math.floor(timeStamp / (60 * 60)),
            minute: Math.floor(timeStamp / 60)
        };
    if (dateObj.mounth >= 12) {
        return parseTime(+time, cFormat);
    } else if (dateObj.mounth >= 1) {
        return dateObj.mounth + "个月前";
    } else if (dateObj.day >= 1) {
        return dateObj.day + "天前";
    } else if (dateObj.hour >= 1) {
        return dateObj.hour + "个小时前";
    } else if (dateObj.minute >= 1) {
        return dateObj.minute + "分钟前";
    } else {
        return "刚刚"
    }
}

// 时间戳转距今间隔(供组件使用)
export function interval(time) {
    if (isNaN(time)) {
        console.error("时间格式有误");
        return 'timeError';
    }
    let timeStamp = (+time - Date.now()) / 24 / 3600 / 1000;
    return timeStamp < 1 ? '0天' : timeStamp < 2 ? '1天' : timeStamp < 3 ? '2天' : '3天';
}

export function searchFormat() {
    let searchIndex = location.hash.indexOf('?') + 1;
    let search = location.hash.slice(searchIndex);
    let arr = search.split('&');
    let list = {};
    arr.forEach((item) => {
        let listArr = item.split('=');
        list[listArr[0]] = listArr[1];
    });
    return list;
}

/*根据报废单的category生成enumContent*/
export function transScrapCategory(data) {
    switch (data.category) {
        case 0: {
            data.categoryContent = '维修报废'
            break
        }
        case 1: {
            data.categoryContent = '到期报废'
            break
        }
        case 2: {
            data.categoryContent = '盘点报废'
            break
        }
        case 3: {
            data.categoryContent = '常规报废'
            break
        }
    }
}
import request from "common/js/request"

export function getDeviceConfig() { // 获取设备配置信息
    return request({
        url: '/environment/device-config',
        method: 'GET'
    }, false)
}

/* 充电 */
export function chargeStatus(params) { // 充电台状态查询
    return request({
        url: '/charge/status',
        method: 'GET',
        params
    }, false)
}
export function chargeInfo(params) { // 充电台充电装备信息
    return request({
        url: '/charge/info',
        method: 'GET',
        params
    }, false)
}
export function chargeSwitch(params, tipState) { // 充电台开关
    return request({
        url: '/charge/switch',
        method: 'POST',
        params
    }, tipState)
}

/* 除湿机 */
export function allDehumidifierStatus() { // 除湿机状态
    return request({
        url: '/dehumidifier/status-all',
        method: 'GET'
    }, false)
}
export function dehumidifierSwitch(params, tipState) { // 除湿机开关
    return request({
        url: '/dehumidifier/switch',
        method: 'GET',
        params
    }, tipState)
}
/* 灯光 */
export function lightQuery() { // 灯光状态
    return request({
        url: '/light/query',
        method: 'GET'
    }, false)
}
export function lightSwitch(params) { // 灯光控制
    return request({
        url: '/light/switch',
        method: 'POST',
        params
    }, true)
}
export function allLightSwitch(params, tipState) { // 灯光一键控制
    return request({
        url: '/light/switch-all',
        method: 'POST',
        params
    }, tipState)
}
/* 烟雾 */
export function smokeQuery() { // 获取烟雾浓度
    return request({
        url: '/environment/smoke-query',
        method: 'GET'
    }, false)
}
export function smokeThreshold() { // 获取烟雾阈值
    return request({
        url: '/environment/smoke-threshold',
        method: 'GET'
    }, false)
}
export function setSmokeThreshold(params, tipState) {
    return request({
        url: '/environment/smoke-threshold',
        method: 'POST',
        params
    }, tipState)
}
/* 空调 */
export function allAirControlStatus() { // 所有空调状态
    return request({
        url: '/air-conditioner/status-all',
        method: 'GET'
    }, false)
}
export function airControlSwitch(params) { // 空调控制
    return request({
        url: '/air-conditioner/switch',
        method: 'POST',
        params
    }, true)
}
/* 环境 */
export function humitureQuery() { // 温湿度查询
    return request({
        method: 'GET',
        url: '/environment/humiture-query',
    }, false)
}
export function temperatureThreshold() { // 温度阈值信息
    return request({
        url: '/environment/temperature-threshold',
        method: 'GET'
    }, false)
}
export function temperatureHistoryDay() { // 天温度历史记录
    return request({
        url: '/environment/temperature-day-history',
        method: 'GET'
    }, false)
    
}
export function temperatureHistoryMonth(params) { // 月温度历史记录
    return request({
        url: '/environment/temperature-month-history',
        method: 'GET',
        params
    }, false)
}
export function temperatureHistory() { // 30天温度历史记录
    return request({
        url: '/environment/temperature-30day-history',
        method: 'GET'
    }, false)
}
export function humidityHistoryDay() { // 天湿度历史记录
    return request({
        url: '/environment/humidity-day-history',
        method: 'GET'
    }, false)
}
export function humidityHistoryMonth(params) { // 月湿度历史记录
    return request({
        url: '/environment/humidity-month-history',
        method: 'GET',
        params
    }, false)
}
export function humidityHistory() { // 30天湿度历史记录
    return request({
        url: '/environment/humidity-30day-history',
        method: 'GET'
    }, false)
}
export function setTemperatureThreshold(params, tipState) {
    return request({
        url: '/environment/temperature-threshold',
        method: 'POST',
        params
    }, tipState)
}
export function humidityThreshold() { // 湿度阈值信息
    return request({
        url: '/environment/humidity-threshold',
        method: 'GET'
    }, false)
}
export function setHumidityThreshold(params, tipState) {
    return request({
        url: '/environment/humidity-threshold',
        method: 'POST',
        params
    }, tipState)
}
export function salutatory() { // 欢迎屏
    return request({
        url: '/exhibition/salutatory',
        method: 'GET'
    }, false)
}
export function modifySalutatory(data, tipState) { // 编辑欢迎屏
    return request({
        url: '/exhibition/salutatory',
        method: 'PUT',
        data
    }, tipState)
}
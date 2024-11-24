// 创建一个包含完整时间信息的 data 对象
const data = {
  year: 0,
  month: 0,
  day: 0,
  weekday: '',
  hours: 0,
  minutes: 0,
  seconds: 0,
  updateTime: function() {
    const now = new Date(); // 获取当前时间
    this.year = now.getFullYear();
    this.month = now.getMonth() + 1; // 月份从 0 开始，需要加 1
    this.day = now.getDate();
    this.weekday = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][now.getDay()]; // 获取星期
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
},
  displayTime: function() {
    this.updateTime(); // 更新时间
    const activityReminder = this.minutes === 20 || this.minutes === 50 ? "站起来活动一下吧！" : "";
    document.getElementById('clock').textContent = `${this.year}年${this.month}月${this.day}日 ${this.weekday} ${this.hours}:${this.minutes}:${this.seconds} ${activityReminder}`;
  }
};

// 每秒更新一次时间并显示
function updateClock() {
  data.displayTime(); // 显示时间
}

// 初次加载时更新一次时钟
updateClock();
// 每秒更新时钟
setInterval(updateClock, 1000); // 以秒为单位更新
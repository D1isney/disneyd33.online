// main-top-right 时间
setInterval(function(){
  var time = new Date();
  var year = time.getFullYear();  //获取年份
  var month = time.getMonth()+1;  //获取月份
  var day = time.getDate();   //获取日期
  var hour = checkTime(time.getHours());   //获取时
  var minute = checkTime(time.getMinutes());  //获取分
  var second = checkTime(time.getSeconds());  //获取秒
  /****当时、分、秒、小于10时，则添加0****/
  function checkTime(i){
    if(i<10) return "0"+i;
    return i;
  }

  var box = document.getElementById("show_time");
  box.innerHTML = year+"年"+month+"月"+day+"日  "+hour+":"+minute +":"+second;
},0);




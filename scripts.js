function my_clock() {
    const currentDate = new Date()

    const sys_hrs =currentDate.getHours()
    document.getElementById('hrs').innerHTML = sys_hrs
    document.getElementById('mnt').innerHTML = String(currentDate.getMinutes()).padStart(2, '0')
    document.getElementById('sec').innerHTML =String(currentDate.getSeconds()).padStart(2, '0')

    let wish;
    if(sys_hrs >= 0 && sys_hrs <= 12)
        wish = 'Good Morning'
    else if(sys_hrs > 12 && sys_hrs <= 16)
        wish = 'Good Afternoon'
    else
        wish = 'Good Evening'
    document.getElementById('wishing').innerHTML = `Hello, ${wish}!`

    let week_day;
    switch(currentDate.getDay()) {
        case 0: week_day = 'Sunday'
                break
        case 1: week_day = 'Monday'
                break
        case 2: week_day = 'Tuesday'
                break
        case 3: week_day = 'Wednesday'
                break
        case 4: week_day = 'Thursday'
                break
        case 5: week_day = 'Friday'
                break
        case 6: week_day = 'Saturday'
                break       
    }
    document.getElementById('weekDay').innerHTML = week_day


   // console.log(currentDate.getDay())

   let arr=["January","February","March","April","May","June","July","August","September","October","November","December"]

   document.getElementById('month').innerHTML=arr[currentDate.getMonth()];
   document.getElementById('date').innerHTML=currentDate.getDate();
   document.getElementById('year').innerHTML=currentDate.getFullYear();
   console.log(currentDate.getDate());

   let op;
   if(sys_hrs>=0 && sys_hrs<12)
        op='AM'
   else
        op='PM'
document.getElementById('ampm').innerHTML=op

let display_hrs=String(sys_hrs)
 if(sys_hrs>12)
   display_hrs=String(sys_hrs-12);
 display_hrs=display_hrs.padStart(2,'0');
   
 
 document.getElementById('hrs').innerHTML=display_hrs
}



setInterval(my_clock, 1000)
//connect js with the css element
//....queryselector
//make the seconds
// we need to find the seconds
//settimout every second
//we give the seconds value to that div
//somehow rotate the div with the second value




const seconds = document.querySelector('.second-hand')
const minutes = document.querySelector('.minutes-hand')

const hours = document.querySelector('.hour-hand')




setInterval(() => {
    const date = new Date();
    
    const second = date.getSeconds()
    const minute = date.getMinutes()
    const hour = date.getHours()
    const minutesDegree = ((minutes /60) *360);
    // Console.log(minutesDegree)


      seconds.style.transform= `rotate(${second/60 * 360}deg)`
      minutes.style.transform= `rotate(${minute/60 * 360}deg)`
      hours.style.transform= `rotate(${hour/60 * 360}deg)`


    
}, 1000);















// make the minutes
//make the hours
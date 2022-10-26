const hour = document.querySelector("#hours");
        const minute = document.querySelector("#minute");
        const seconds = document.querySelector("#seconds")
        const amorpm = document.querySelector("#amorpm");

        
        function newTime (){
            let date = new Date ()
            // console.log(date)
            let hourSpan = date.getHours() % 24;
            hourSpan = ("0" + hourSpan).slice(-2)
            let minuteSpan = date.getMinutes();
            minuteSpan =("0" + minuteSpan).slice(-2)
            let secondsSpan = date.getSeconds();
            secondsSpan =("0" + secondsSpan).slice(-2)


            // console.log(secondsSpan)

           hour.innerText = hourSpan
           minute.innerText = minuteSpan
           seconds.innerText = secondsSpan

           let amorpmSpan

           
           amorpmSpan = hourSpan >= 0 && hourSpan <=11 ? "AM" : "PM" 
            amorpm.innerText = amorpmSpan;
            
        }
        setInterval(newTime, 1000)
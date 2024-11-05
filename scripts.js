function resetStopwatch() {
            clearInterval(interval);
            startTime = 0;
            elapsed = 0;
            running = false;
            document.getElementById("display").textContent = "00:00:00";
            document.getElementById("laps").innerHTML = "";
        }
        
        function recordLap() {
            if (running) {
                const lapTime = document.getElementById("display").textContent;
                const lapItem = document.createElement("li");
                lapItem.textContent = lapTime;
                document.getElementById("laps").appendChild(lapItem);
            }
        }
        
        function updateDisplay() {
            elapsed = Date.now() - startTime;
            let minutes = Math.floor((elapsed / (1000 * 60)) % 60);
            let seconds = Math.floor((elapsed / 1000) % 60);
            let milliseconds = Math.floor((elapsed % 1000) / 10);
        
            minutes = (minutes < 10) ? "0" + minutes : minutes;
            seconds = (seconds < 10) ? "0" + seconds : seconds;
            milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
        
            document.getElementById("display").textContent = `${minutes}:${seconds}:${milliseconds}`;
        }
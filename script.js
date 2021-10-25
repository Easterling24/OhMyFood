
let stop = document.getElementById('rest1')

stop.addEventListener('click', handleStop)

function handleStop(e){
    alert('event stopped')
     e.stopPropagation()
}
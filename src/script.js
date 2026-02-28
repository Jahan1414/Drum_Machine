const displayStrings = {
  'Q': 'Heater 1',
  'W': 'Heater 2',
  'E': 'Heater 3',
  'A': 'Heater 4',
  'S': 'Clap',
  'D': 'Open HH',
  'Z': 'Kick-n-Hat',
  'X': 'Kick',
  'C': 'Closed HH'
};

function playAudio(key) {
  const audio = document.getElementById(key)
  if (audio) {
    audio.currentTime = 0
    audio.play().catch(error => {
      console.log('Audio playback failed:', error)
    })

    const display = document.getElementById('display')
    display.innerText = displayStrings[key]

    const pad = audio.parentElement;
    pad.style.backgroundColor = '#ffaa00'
    setTimeout(() => {
      pad.style.backgroundColor = '';
    }, 100)
  }
}

document.querySelectorAll('.drum-pad').forEach(pad => {
  pad.addEventListener('click', function() {
    const key = this.textContent.trim()
    playAudio(key)
  })
})

document.addEventListener('keydown',function(event) {
  const key = event.key.toUpperCase()
  const validKeys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']

  if (validKeys.includes(key)) {
    event.preventDefault()
    playAudio(key)
  }
})
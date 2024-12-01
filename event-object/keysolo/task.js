class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerId = null;

    this.reset();

    this.registerEvents();
  }

  reset() {
    clearInterval(this.timerId);
    this.timer()
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {

    document.addEventListener('keyup', (event) => {
      const sumbol = this.currentSymbol.textContent.toLocaleLowerCase();
      const eventSumbol = event.key.toLocaleLowerCase();
      
      if (eventSumbol === sumbol) {
        this.success();
      } else {
        this.fail();
      }
    });
  };
    
  timer() {
    const time = Array.from(document.querySelectorAll('.symbol')).length;

    const startTimer = () => {
      let currentTime = time;

      this.timerId = setInterval(() => {
        document.querySelector('.status__time').textContent = currentTime;
        currentTime--;
  
        if(currentTime < 0) {
          this.fail();
        }
      }, 1000);
    }

    startTimer();
  };

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
    clearInterval(this.timerId);
    this.timer();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
    clearInterval(this.timerId);
    this.timer();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))


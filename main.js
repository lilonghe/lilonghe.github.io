function registerLangSwitch() {
  const zh = "zh-CN",
      en = "en-US";
  const lang = localStorage.getItem('lang') || navigator.language.toLowerCase();
  const html = document.documentElement;

  if (lang && lang.includes("zh")) {
    html.setAttribute("lang", zh);
  } else {
    html.setAttribute("lang", en);
  }

  document
    .querySelector(".lang-switcher")
    ?.addEventListener("click", function (e) {
      if (html.getAttribute("lang") === zh) {
        html.setAttribute("lang", en);
      } else {
        html.setAttribute("lang", zh);
      }
      localStorage.setItem('lang', html.getAttribute("lang"))
    });
}

function openProfile(path) {
  window.open(path);
}

function initAnimation() {
  const MIN_SPEED = 0.5;
  const MAX_SPEED = 2;

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  class Blob {
    constructor(el) {
      this.el = el;
      const boundingRect = this.el.getBoundingClientRect();
      this.size = boundingRect.width;
      // 隨機初始位置
      this.initialX = randomNumber(0, window.innerWidth - this.size);
      this.initialY = randomNumber(0, window.innerHeight - this.size);
      this.el.style.top = `${this.initialY}px`;
      this.el.style.left = `${this.initialX}px`;
      // 速度
      this.vx =
        randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
      this.vy =
        randomNumber(MIN_SPEED, MAX_SPEED) * (Math.random() > 0.5 ? 1 : -1);
      this.x = this.initialX;
      this.y = this.initialY;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x >= window.innerWidth - this.size) {
        this.x = window.innerWidth - this.size;
        this.vx *= -1;
      }
      if (this.y >= window.innerHeight - this.size) {
        this.y = window.innerHeight - this.size;
        this.vy *= -1;
      }
      if (this.x <= 0) {
        this.x = 0;
        this.vx *= -1;
      }
      if (this.y <= 0) {
        this.y = 0;
        this.vy *= -1;
      }

      this.el.style.transform = `translate(${this.x - this.initialX}px, ${
        this.y - this.initialY
      }px)`;
    }
  }

  function initBlobs() {
    const blobEls = document.querySelectorAll(".blob");
    const blobs = Array.from(blobEls).map((blobEl) => new Blob(blobEl));

    function update() {
      requestAnimationFrame(update);
      blobs.forEach((blob) => blob.update());
    }
    requestAnimationFrame(update);
  }

  initBlobs();
}

window.addEventListener('load', () => {
  initAnimation();

  registerLangSwitch();

  {
    const div = document.createElement('div')
    div.className = 'solar-term'
    const solar = ["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"];

    const contentDiv = document.createElement('div')
    contentDiv.className = 'solar-term-content'

    const eleList = solar.map(item => `<span>${item}</span>`).join('');
    contentDiv.innerHTML = eleList + eleList;

    div.appendChild(contentDiv)
    document.body.append(div)
  }

  {
    const div = document.createElement('div')
    div.id = 'beian'
    div.className = 'lang-zh'
    div.innerHTML = `<a href="https://beian.miit.gov.cn" target="_blank"
      >皖ICP备16001167号-1</a
    >
    <a href="https://www.beian.gov.cn" target="_blank"
      >皖公网安备34132202000116号</a
    >`
    document.body.append(div)
  }
})

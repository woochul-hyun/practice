class Accordion {
  constructor(options) {
    // 기본 옵션과 사용자 지정 옵션을 병합
    this.config = Accordion.mergeConfig(options);
    this.$accordion = document.querySelector(this.config.selector);

    Accordion.subOpen();

    this.$menu = document.querySelector('.menu');
    this.$accordion.onclick = this.changeMenu.bind(this);

    // do something!
  }

  static mergeConfig(options) {
    // 기본 옵션
    const config = {
      selector: '#accordion',
      multi: true
    };

    return { ...config, ...options };
  }

  static subOpen() {
    const $subMenu = document.querySelectorAll(
      '.accordion li.active .submenu'
    );
    document.querySelectorAll('.accordion .submenu').forEach((item) => {
      item.style.height = 0;
    });

    $subMenu.forEach((item) => {
      item.style.height = `${item.scrollHeight}px`;
    });
  }

  changeMenu(e) {
    if (e.target.nodeName !== 'DIV') return;
    if (!this.config.multi) {
      [...this.$accordion.children].forEach((item) => {
        if (e.target.parentNode === item) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    } else {
      [...this.$accordion.children].forEach((item) => {
        if (e.target.parentNode === item) {
          item.classList.toggle('active');
        }
      });
    }

    Accordion.subOpen();
  }

  // do something!
}

window.onload = function () {
  const accordion = new Accordion({ multi: true });
  // const accordion = new Accordion();
};

class Tab {
  constructor(tabsData) {
    this.tabsData = tabsData;
    this.renderTabs();
    this.$tabs = document.querySelector('.tabs');

    this.$tab = document.querySelector('.tab');

    this.$tabs.onclick = this.tabChange.bind(this);

    // active 클래스가 지정된 tab 요소와 같은 인덱스의 tab-content 요소만 표시

    // tab 클릭 이벤트 핸들러 등록
  }

  // tabsData 객체를 기반으로 tab-group 요소를 생성
  renderTabs() {
    const html = `
        <ul class="tab-group">
        ${this.tabsData
    .map(
      tab => `<li class="tab${tab.active ? ' active' : ''}">
            <i class="icon ${tab.iconClass}"></i>${tab.title}
          </li>`
    )
    .join('')}
        </ul>
        <div class="tab-content-group">
        ${this.tabsData
    .map(tab => `<div class="tab-content">${tab.content}</div>`)
    .join('')}
        </div>`;

    document.querySelector('.tabs').insertAdjacentHTML('beforeend', html);
    this.display();
  }

  display() {
    const $tabContentGroup = document.querySelector('.tab-content-group');
    this.tabsData.forEach((item, index) => {
      if (!item.active) {
        $tabContentGroup.children[index].style.display = 'none';
      } else {
        $tabContentGroup.children[index].style.display = 'block';
      }
    });
  }

  tabChange(e) {
    const $tabGroup = document.querySelector('.tab-group');
    if (e.target.nodeName !== 'LI') return;
    this.tabsData.forEach((item) => {
      item.active ? (item.active = false) : item;
    });

    [...$tabGroup.children].forEach((item, index) => {
      if (item === e.target) {
        this.tabsData[index].active = true;
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    this.display();
  }

  // do something!
}

window.onload = function () {
  const tab = new Tab([
    {
      title: 'HTML',
      active: true,
      iconClass: 'fab fa-html5',
      content: `<strong>HTML(HyperText Markup Language)</strong> is the most basic building block of the Web.
          It describes and defines the content of a webpage along with the basic layout of the webpage.
          Other technologies besides HTML are generally used to describe a web page's
          appearance/presentation(CSS) or functionality/ behavior(JavaScript).`
    },
    {
      title: 'CSS',
      active: false,
      iconClass: 'fab fa-css3',
      content: `<strong>Cascading Style Sheets(CSS)</strong> is a stylesheet language used to describe
          the presentation of a document written in HTML or XML (including XML dialects
          such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen,
          on paper, in speech, or on other media.`
    },
    {
      title: 'JavaScript',
      active: false,
      iconClass: 'fab fa-js-square',
      content: `<strong>JavaScript(JS)</strong> is a lightweight interpreted or JIT-compiled programming
          language with first-class functions. While it is most well-known as the scripting
          language for Web pages, many non-browser environments also use it, such as Node.js,
          Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm,
          dynamic language, supporting object-oriented, imperative, and declarative
          (e.g. functional programming) styles.`
    }
  ]);
};

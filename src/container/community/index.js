import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Коммьюніті')

page.append(title)

//-------------------------------------------------------

const TAB_LIST = [
  { text: 'База знань', isActive: false },
  { text: 'Інформація', isActive: true },
]

const createTabs = () => {
  const tabs = createElement('div', 'tabs')

  TAB_LIST.forEach((elem) => {
    const tab = createElement(
      'div',
      elem.isActive
        ? 'tabs__item tabs__item--active'
        : 'tabs__item',
      elem.text,
    )
    tabs.append(tab)
  })
  return tabs
}

const tabs = createTabs()

page.append(tabs)

//-------------------------------------------------------

const COMMUNITY_IMAGE = {
  width: 343,
  height: 160,
  src: '/img/community.png',
}

const community_image = () => {
  const img = createElement('img')

  Object.entries(COMMUNITY_IMAGE).forEach(
    ([key, value]) => {
      img[key] = value
    },
  )

  return img
}

const image = community_image()

page.append(image)

//-------------------------------------------------------

const title2 = createElement(
  'h2',
  'title2',
  'Що таке база знань?',
)

page.append(title2)

//-------------------------------------------------------

const community_info = createElement(
  'p',
  'community__info',
  `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и
	знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся
	результатом решения предыдущих задач.`,
)

page.append(community_info)

//-------------------------------------------------------

const community_button = createElement(
  'button',
  'community__button',
  `Перейти до ком'юніті у Телеграм`,
)

page.append(community_button)

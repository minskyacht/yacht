import reward from './images/reward.svg'
import wheel from './images/wheel.svg'
import people from './images/people.svg'
import education from './images/education.jpeg'
import room from './images/room.jpg'
import giftCertificate from './images/gift_certificate.jpeg'
import regattas from './images/regattas.jpeg'
import stroll from './images/stroll.jpeg'
import photoshoot from './images/photoshoot.jpeg'
import birthday from './images/birthday.jpg.jpeg'
import date from './images/date.jpg'
import teamBuilding from './images/team_building.png'
import wedding from './images/wedding.jpg'
import yachtPrice from './images/yacht_price.jpeg'
import masterClass from './images/master_class.png'
import individualTraining from './images/individual_training.jpg'
import photoshootPrice from './images/photoshoot_price.png'

export const HEADER_TITLES=['Подарочные сертификаты','Аренда яхты с капитаном','Фотосессия на яхте'];

export const INFO_DATA=[
    {title:'Премиальный сервис и забота о каждом клиенте',image:reward},
    {title:'Опытный капитан обеспечит комфорт и безопасность',image:wheel},
    {title:'Сотни довольных клиентов рекомендуют нас друзьям',image:people}
];

export const SERVICE_DATA=[
    {title:'Прогулка на яхте',image:stroll},
    {title:'Фотосессии',image:photoshoot},
    {title:'Регаты',image:regattas},
    {title:'Подарочные сертификаты',image:giftCertificate},
    {title:'Уютная каюта',image:room},
    {title:'Обучение',image:education},
    {title:'День рождения',image:birthday},
    {title:'Романтическое свидание',image:date},
    {title:'Предложение',image:wedding},
    {title:'Тимбилдинг',image:teamBuilding},
]

export const slidesToShow = 3;

export const PRICE_DATA=[
    {title:'Прогулка на яхте',image:yachtPrice,isGiftCertificate:false,price:'170',duration:'1 час'},
    {title:'Фотоссесия на воде',image:photoshootPrice,isGiftCertificate:false,price:'170',duration:'1 час'},
    {title:'Мастер-класс',image:masterClass,isGiftCertificate:true,price:'350',duration:'2 часа'},
    {title:'Индивидуальное обучение',image:individualTraining,isGiftCertificate:true,price:'750',duration:'6 занятий'},
]

export const DEVICES={
    desktop:'desktop',
    tablet:'tablet',
    desktopSmall:'desktop_small',
    phone:'phone'
}

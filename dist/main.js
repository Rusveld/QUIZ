(()=>{"use strict";const a=[{author:"Павел Федотов",name:"Сватовство майора",year:"1852",imageNum:"0"},{author:"Эдгар Дега",name:"Голубые танцовщицы",year:"1897",imageNum:"1"},{author:"Веронезе",name:"Пир в доме Левия",year:"1563",imageNum:"2"},{author:"Илья Репин",name:"Иван Грозный и сын его Иван",year:"1885",imageNum:"3"},{author:"Константин Маковский",name:"Портрет графини Софьи",year:"1890",imageNum:"4"},{author:"Василий Перов",name:"Приезд гувернантки в купеческий дом",year:"1866",imageNum:"5"},{author:"Микеланджело",name:"Сотворение Адама",year:"1511",imageNum:"6"},{author:"Пьер Огюст Ренуар",name:"Прогулка в Булонском лесу",year:"1873",imageNum:"7"},{author:"Ян Вермеер",name:"Хозяйка и служанка",year:"1667",imageNum:"8"},{author:"Василий Поленов",name:"Московский дворик",year:"1877",imageNum:"9"},{author:"Фёдор Васильев",name:"Мокрый луг",year:"1872",imageNum:"10"},{author:"Илья Репин",name:"Проводы новобранца",year:"1879",imageNum:"11"},{author:"Веронезе",name:"Марс и Венера",year:"1560",imageNum:"12"},{author:"Виктор Васнецов",name:"Аленушка",year:"1881",imageNum:"13"},{author:"Клод Лоррен",name:"Отплытие святой Урсулы",year:"1614",imageNum:"14"},{author:"Илья Репин",name:"Вечорници",year:"1881",imageNum:"15"},{author:"Жан Фрагонар",name:"Качели",year:"1767",imageNum:"16"},{author:"Архип Куинджи",name:"Берёзовая роща",year:"1879",imageNum:"17"},{author:"Пабло Пикассо",name:"Герника",year:"1937",imageNum:"18"},{author:"Поль Гоген",name:"Откуда мы пришли? Кто мы? Куда мы идём?",year:"1898",imageNum:"19"},{author:"Бартоломео Мурильо",name:"Мадонна с четками",year:"1655",imageNum:"20"},{author:"Питер Брейгель",name:"Фламандские пословицы",year:"1559",imageNum:"21"},{author:"Ян ван Эйк",name:"Портрет четы Арнольфини",year:"1434",imageNum:"22"},{author:"Питер Брейгель",name:"Избиение младенцев",year:"1567",imageNum:"23"},{author:"Константин Маковский",name:"Дети, бегущие от грозы",year:"1872",imageNum:"24"},{author:"Рембрандт",name:"Даная",year:"1647",imageNum:"25"},{author:"Рафаэль",name:"Мадонна в кресле",year:"1514",imageNum:"26"},{author:"Василий Суриков",name:"Взятие снежного городка",year:"1891",imageNum:"27"},{author:"Иван Шишкин",name:"Ручей в берёзовом лесу",year:"1883",imageNum:"28"},{author:"Василий Суриков",name:"Покорение Сибири Ермаком Тимофеевичем",year:"1895",imageNum:"29"},{author:"Владимир Боровиковский",name:"Портрет Лопухиной",year:"1797",imageNum:"30"},{author:"Рене Магритт",name:"Сын человеческий",year:"1964",imageNum:"31"},{author:"Веласкес",name:"Венера с зеркалом",year:"1651",imageNum:"32"},{author:"Иван Богданов",name:"За расчётом",year:"1890",imageNum:"33"},{author:"Рембрандт",name:"Христос и грешница",year:"1644",imageNum:"34"},{author:"Джон Уильям Уотерхаус",name:"Волшебница Шалот",year:"1888",imageNum:"35"},{author:"Пьер Огюст Ренуар",name:"Большие купальщицы",year:"1887",imageNum:"36"},{author:"Бартоломео Мурильо",name:"Мальчик с собакой",year:"1650",imageNum:"37"},{author:"Василий Перов",name:"Тройка",year:"1866",imageNum:"38"},{author:"Николай Богданов-Бельский",name:"Устный счёт",year:"1895",imageNum:"39"},{author:"Виктор Васнецов",name:"Три царевны подземного царства",year:"1884",imageNum:"40"},{author:"Анри Матисс",name:"Танец",year:"1910",imageNum:"41"},{author:"Эдвард Мунк",name:"Мадонна",year:"1894",imageNum:"42"},{author:"Марк Шагал",name:"Прогулка",year:"1918",imageNum:"43"},{author:"Василий Перов",name:"Сельский крестный ход на Пасхе",year:"1861",imageNum:"44"},{author:"Иероним Босх",name:"Страшный суд",year:"1504",imageNum:"45"},{author:"Карл Лемох",name:"Варька",year:"1893",imageNum:"46"},{author:"Жан Фрагонар",name:"Поцелуй украдкой",year:"1788",imageNum:"47"},{author:"Франсуа Буше",name:"Венера, утешающая Амура",year:"1751",imageNum:"48"},{author:"Иван Шишкин",name:"Корабельная роща",year:"1898",imageNum:"49"},{author:"Густав Климт",name:"Золотая Адель",year:"1907",imageNum:"50"},{author:"Виктор Васнецов",name:"Богатыри",year:"1898",imageNum:"51"},{author:"Вильгельм фон Каульбах",name:"Разрушение Иерусалима",year:"1846",imageNum:"52"},{author:"Веронезе",name:"Брак в Кане Галилейской",year:"1562",imageNum:"53"},{author:"Андрей Рублев",name:"Троица",year:"1411",imageNum:"54"},{author:"Василий Суриков",name:"Утро стрелецкой казни",year:"1881",imageNum:"55"},{author:"Тициан",name:"Вакханалия",year:"1526",imageNum:"56"},{author:"Веласкес",name:"Вилла Медичи в Риме. Полдень",year:"1630",imageNum:"57"},{author:"Эдуард Мане",name:"Ланч на траве",year:"1863",imageNum:"58"},{author:"Сальвадор Дали",name:"Постоянство памяти",year:"1931",imageNum:"59"},{author:"Пьер Огюст Ренуар",name:"Две девушки",year:"1892",imageNum:"60"},{author:"Александр Маковский",name:"Надоела",year:"1897",imageNum:"61"},{author:"Веласкес",name:"Менины",year:"1656",imageNum:"62"},{author:"Антонис ван Дейк",name:"Самсон и Далила",year:"1628",imageNum:"63"},{author:"Пабло Пикассо",name:"Девочка на шаре",year:"1905",imageNum:"64"},{author:"Джованни Беллини",name:"Пир богов",year:"1514",imageNum:"65"},{author:"Леонардо да Винчи",name:"Дама с горностаем",year:"1490",imageNum:"66"},{author:"Веласкес",name:"Бахус",year:"1628",imageNum:"67"},{author:"Бартоломео Мурильо",name:"Непорочное зачатие",year:"1678",imageNum:"68"},{author:"Теодор Жерико",name:'Плот "Медузы"',year:"1819",imageNum:"69"},{author:"Иван Шишкин",name:"Утро в сосновом лесу",year:"1889",imageNum:"70"},{author:"Жан Этьен Лиотар",name:"Шоколадница",year:"1745",imageNum:"71"},{author:"Рембрандт",name:"Автопортрет с Саскией",year:"1635",imageNum:"72"},{author:"Илья Репин",name:"Крестный ход",year:"1883",imageNum:"73"},{author:"Алексей Венецианов",name:"Спящий пастушок",year:"1826",imageNum:"74"},{author:"Иван Богданов",name:"Новичок",year:"1893",imageNum:"75"},{author:"Анри де Тулуз-Лотрек",name:"Угол Мулен де ла Галет",year:"1892",imageNum:"76"},{author:"Тициан",name:"Кающаяся Марина Магдалина",year:"1565",imageNum:"77"},{author:"Веласкес",name:"Инфанта Маргарита",year:"1654",imageNum:"78"},{author:"Тициан",name:"Динарий Кесаря",year:"1516",imageNum:"79"},{author:"Карл Брюллов",name:"Всадница",year:"1832",imageNum:"80"},{author:"Василий Верещагин",name:"Апофеоз войны",year:"1817",imageNum:"81"},{author:"Леонардо да Винчи",name:"Благовещение",year:"1475",imageNum:"82"},{author:"Алексей Саврасов",name:"Грачи прилетели",year:"1871",imageNum:"83"},{author:"Тициан",name:"Любовь земная и Любовь небесная",year:"1516",imageNum:"84"},{author:"Жан Батист Грёз",name:"Деревенская помолвка",year:"1761",imageNum:"85"},{author:"Пабло Пикассо",name:"Авиньонские девицы",year:"1907",imageNum:"86"},{author:"Илья Репин",name:"Бурлаки на Волге",year:"1873",imageNum:"87"},{author:"Михаил Нестеров",name:"Видение отроку Варфоломею",year:"1890",imageNum:"88"},{author:"Рафаэль",name:"Мадонна Бельведерская",year:"1506",imageNum:"89"},{author:"Василий тропинин",name:"Девушка с горшком роз",year:"1850",imageNum:"90"},{author:"Караваджо",name:"Лютнист",year:"1596",imageNum:"91"},{author:"Василий Перов",name:"Охотники на привале",year:"1871",imageNum:"92"},{author:"Леонардо да Винчи",name:"Тайная вечеря",year:"1498",imageNum:"93"},{author:"Жан Батист Грёз",name:"Избалованное дитя",year:"1765",imageNum:"94"},{author:"Адольф Вильям Бугро",name:"Волна",year:"1896",imageNum:"95"},{author:"Кузьма Петров-Водкин",name:"Купание красного коня",year:"1912",imageNum:"96"},{author:"Густав Климт",name:"Поцелуй",year:"1908",imageNum:"97"},{author:"Иван Шишкин",name:"Рожь",year:"1878",imageNum:"98"},{author:"Жан-Леон Жером",name:"Бой гладиаторов",year:"1872",imageNum:"99"},{author:"Василий Суриков",name:"Боярыня Морозова",year:"1887",imageNum:"100"},{author:"Исаак Левитан",name:"Над вечным покоем",year:"1894",imageNum:"101"},{author:"Гейнсборо",name:"Дама в голубом",year:"1780",imageNum:"102"},{author:"Алексей Венецианов",name:"На пашне. Весна",year:"1820",imageNum:"103"},{author:"Тициан",name:"Саломея",year:"1515",imageNum:"104"},{author:"Василий Кандинский",name:"Композиция VIII",year:"1923",imageNum:"105"},{author:"Василий Поленов",name:"В парке",year:"1874",imageNum:"106"},{author:"Луи Лагрене",name:"Марс и Венера",year:"1770",imageNum:"107"},{author:"Сальвадор Дали",name:"Сон, вызванный полётом пчелы вокруг граната, за секунду до пробуждения",year:"1944",imageNum:"108"},{author:"Ян Вермеер",name:"Девушка с жемчужной серёжкой",year:"1665",imageNum:"109"},{author:"Анри Руссо",name:"Спящая цыганка",year:"1897",imageNum:"110"},{author:"Василий Поленов",name:"Переправа через реку",year:"1872",imageNum:"111"},{author:"Эдвард Мунк",name:"Крик",year:"1893",imageNum:"112"},{author:"Карл Брюллов",name:"Последний день Помпеи",year:"1833",imageNum:"113"},{author:"Илья Репин",name:"Летний пейзаж",year:"1879",imageNum:"114"},{author:"Ян Вермеер",name:"Молочница",year:"1660",imageNum:"115"},{author:"Иван Айвазовский",name:"Девятый вал",year:"1850",imageNum:"116"},{author:"Винсент ван Гог",name:"Подсолнухи",year:"1888",imageNum:"117"},{author:"Валентин Серов",name:"Девочка с персиками",year:"1887",imageNum:"118"},{author:"Караваджо",name:"Обращение Савла",year:"1601",imageNum:"119"},{author:"Альбрехт Дюрер",name:"Праздник венков из роз",year:"1506",imageNum:"120"},{author:"Эль Греко",name:"Изгнание торгующих из храма",year:"1600",imageNum:"121"},{author:"Илья Репин",name:"Приготовление к экзамену",year:"1864",imageNum:"122"},{author:"Исаак Левитан",name:"Март",year:"1895",imageNum:"123"},{author:"Адольф Вильям Бугро",name:"Девушка и Амур",year:"1880",imageNum:"124"},{author:"Леонардо да Винчи",name:"Мадонна Литта",year:"1491",imageNum:"125"},{author:"Казимир Малевич",name:"Черный квадрат",year:"1915",imageNum:"126"},{author:"Эль Греко",name:"Апостолы Петр и Павел",year:"1592",imageNum:"127"},{author:"Виктор Васнецов",name:"Витязь на распутье",year:"1878",imageNum:"128"},{author:"Константин Маковский",name:"Боярский свадебный пир",year:"1883",imageNum:"129"},{author:"Эжен Делакруа",name:"Свобода, ведущая народ",year:"1830",imageNum:"130"},{author:"Василий Поленов",name:"Бабушкин сад",year:"1878",imageNum:"131"},{author:"Анри Матисс",name:"Семейный портрет",year:"1911",imageNum:"132"},{author:"Константин Маковский",name:"Гадание",year:"1890",imageNum:"133"},{author:"Пьер Огюст Ренуар",name:"Мост в Шату",year:"1875",imageNum:"134"},{author:"Сандро Боттичелли",name:"Весна",year:"1482",imageNum:"135"},{author:"Пьер Огюст Ренуар",name:"Зонтики",year:"1886",imageNum:"136"},{author:"Гюстав Курбе",name:"Мастерская художника",year:"1855",imageNum:"137"},{author:"Василий Поленов",name:"Деревня Окулова гора",year:"1860",imageNum:"138"},{author:"Константин Маковский",name:"Перемещение ковра Мухаммеда из Мекки в Каир",year:"1875",imageNum:"139"},{author:"Пьер Огюст Ренуар",name:"Бал в Мулен де ла Галетт",year:"1876",imageNum:"140"},{author:"Иван Крамской",name:"Неизвестная",year:"1883",imageNum:"141"},{author:"Веласкес",name:"Кузница вулкана",year:"1630",imageNum:"142"},{author:"Илья Репин",name:"Запорожцы",year:"1891",imageNum:"143"},{author:"Рафаэль",name:"Дама с единорогом",year:"1506",imageNum:"144"},{author:"Александр Иванов",name:"Явление Христа народу",year:"1857",imageNum:"145"},{author:"Эдуард Мане",name:"Женщина с кувшином",year:"1858",imageNum:"146"},{author:"Тициан",name:"Конный портрет Карла V",year:"1548",imageNum:"147"},{author:"Пьер Огюст Ренуар",name:"Завтрак гребцов",year:"1881",imageNum:"148"},{author:"Карл Брюллов",name:"Итальянский полдень",year:"1827",imageNum:"149"},{author:"Виктор Васнецов",name:"Царь Иван Васильевич Грозный",year:"1896",imageNum:"150"},{author:"Питер Брейгель",name:"Охотники на снегу",year:"1565",imageNum:"151"},{author:"Виктор Васнецов",name:"Ковер-самолёт",year:"1880",imageNum:"152"},{author:"Марк Шагал",name:"Я и деревня",year:"1911",imageNum:"153"},{author:"Леонардо да Винчи",name:"Мона Лиза",year:"1505",imageNum:"154"},{author:"Франческо Баккьякка",name:"Мадонна с младенцем",year:"1520",imageNum:"155"},{author:"Жак-Луи Давид",name:"Клятва Горациев",year:"1784",imageNum:"156"},{author:"Альбрехт Дюрер",name:"Адам и Ева",year:"1507",imageNum:"157"},{author:"Бартоломео Мурильо",name:"Явление и дар Богородицы",year:"1655",imageNum:"158"},{author:"Василий Перов",name:"Птицелов",year:"1870",imageNum:"159"},{author:"Караваджо",name:"Отдых на пути в Египет",year:"1596",imageNum:"160"},{author:"Франциско Гоя",name:"Расстрел повстанцев",year:"1808",imageNum:"161"},{author:"Рафаэль",name:"Триумф Галатеи",year:"1512",imageNum:"162"},{author:"Михаил Врубель",name:"Демон сидящий",year:"1890",imageNum:"163"},{author:"Винсент ван Гог",name:"Ирисы",year:"1889",imageNum:"164"},{author:"Поль Деларош",name:"Казнь Джейн Грей",year:"1833",imageNum:"165"},{author:"Джон Констебл",name:"Вид на собор в Солсбери из епископского сада",year:"1823",imageNum:"166"},{author:"Винсент ван Гог",name:"Звёздная ночь",year:"1889",imageNum:"167"},{author:"Франсуа Буше",name:"Четыре сезона - Весна",year:"1755",imageNum:"168"},{author:"Рафаэль",name:"Мадонна с розой",year:"1518",imageNum:"169"},{author:"Василий Тропинин",name:"Кружевница",year:"1823",imageNum:"170"},{author:"Рембрандт",name:"Пир Вальтасара",year:"1635",imageNum:"171"},{author:"Василий Суриков",name:"Переход Суворова через Альпы",year:"1899",imageNum:"172"},{author:"Исаак Левитан",name:"Золотая осень",year:"1895",imageNum:"173"},{author:"Архип Куинджи",name:"На острове Валааме",year:"1873",imageNum:"174"},{author:"Веласкес",name:"Сдача Бреды",year:"1635",imageNum:"175"},{author:"Илья Репин",name:"Не ждали",year:"1888",imageNum:"176"},{author:"Франсуа Буше",name:"Купание Дианы",year:"1742",imageNum:"177"},{author:"Марианна Верёвкина",name:"Муравейник",year:"1916",imageNum:"178"},{author:"Пьер Огюст Ренуар",name:"Портрет Жанны Самари",year:"1877",imageNum:"179"},{author:"Илья Репин",name:"Садко",year:"1876",imageNum:"180"},{author:"Архип Куинджи",name:"Лунная ночь на Днепре",year:"1880",imageNum:"181"},{author:"Веласкес",name:"Поклонение волхвов",year:"1619",imageNum:"182"},{author:"Николай Богданов-Бельский",name:"У дверей школы",year:"1897",imageNum:"183"},{author:"Иероним Босх",name:"Сад земных наслаждений",year:"1510",imageNum:"184"},{author:"Корреджо",name:"Даная",year:"1530",imageNum:"185"},{author:"Питер Пауль Рубенс",name:"Похищение дочерей Левкиппа",year:"1618",imageNum:"186"},{author:"Жан Энгр",name:"Большая одалиска",year:"1814",imageNum:"187"},{author:"Рафаэль",name:"Сикстинская Мадонна",year:"1520",imageNum:"188"},{author:"Рембрандт",name:"Похищение Европы",year:"1632",imageNum:"189"},{author:"Питер Пауль Рубенс",name:"Похищение Орфии Бореем",year:"1615",imageNum:"190"},{author:"Архип Куинджи",name:"Украинская ночь",year:"1876",imageNum:"191"},{author:"Эдгар Дега",name:"Танцовщицы у станка",year:"1877",imageNum:"192"},{author:"Алексей Венецианов",name:"На жатве. Лето",year:"1827",imageNum:"193"},{author:"Пьер Огюст Ренуар",name:"Две сестры",year:"1881",imageNum:"194"},{author:"Рембрандт",name:"Ночной дозор",year:"1642",imageNum:"195"},{author:"Эдуар Мане",name:"Бар в «Фоли-Бержер»",year:"1882",imageNum:"196"},{author:"Никола Пуссен",name:"Пейзаж с Полифемом",year:"1649",imageNum:"197"},{author:"Питер Брейгель",name:"Притча о слепых",year:"1568",imageNum:"198"},{author:"Виктор Васнецов",name:"Иван-царевич на Сером Волке",year:"1888",imageNum:"199"},{author:"Сандро Боттичелли",name:"Рождение Венеры",year:"1486",imageNum:"200"},{author:"Леонардо да Винчи",name:"Мадонна в скалах",year:"1486",imageNum:"201"},{author:"Аксели Галлен-Каллела",name:"Любовники",year:"1916",imageNum:"202"},{author:"Винсент Ван Гог",name:"Автопортрет с перевязанным ухом",year:"1889",imageNum:"203"},{author:"Клод Моне",name:"Впечатление. Восходящее солнце",year:"1882",imageNum:"204"},{author:"Рембрандт",name:"Возвращение блудного сына",year:"1662",imageNum:"205"},{author:"Караваджо",name:"Больной вакх",year:"1593",imageNum:"206"},{author:"Иван Айвазовский",name:"Лунная дорожка",year:"1886",imageNum:"207"},{author:"Винсент Ван Гог",name:"Пшеничное поле с кипарисами",year:"1889",imageNum:"208"},{author:"Аксели Галлен-Каллела",name:"Мальчик и ворона",year:"1884",imageNum:"209"},{author:"Ян Вермеер",name:"Астроном",year:"1668",imageNum:"210"},{author:"Питер Пауль Рубенс",name:"Союз Земли и Воды",year:"1618",imageNum:"211"},{author:"Клод Моне",name:"Стог сена в Живерни",year:"1886",imageNum:"212"},{author:"Жан Фрагонар",name:"Задвижка",year:"1777",imageNum:"213"},{author:"Марианна Верёвкина",name:"Осень, школа",year:"1907",imageNum:"214"},{author:"Винсент Ван Гог",name:"Ночное кафе в Арле",year:"1888",imageNum:"215"},{author:"Клод Моне",name:"Пруд с кувшинками",year:"1899",imageNum:"216"},{author:"Иван Айвазовский",name:"Буря",year:"1868",imageNum:"217"},{author:"Ян Вермеер",name:"Кружевница",year:"1671",imageNum:"218"},{author:"Карл Брюллов",name:"Автопортрет",year:"1848",imageNum:"219"},{author:"Питер Брейгель",name:"Вавилонская башня",year:"1563",imageNum:"220"},{author:"Поль Гоген",name:"Кафе в Арле",year:"1888",imageNum:"221"},{author:"Иван Шишкин",name:"Сосновый бор",year:"1895",imageNum:"222"},{author:"Клод Моне",name:"Завтрак на траве",year:"1865",imageNum:"223"},{author:"Рафаэль",name:"Святой Георгий и дракон",year:"1506",imageNum:"224"},{author:"Пабло Пикассо",name:"Любительница абсента",year:"1901",imageNum:"225"},{author:"Эдгар Дега",name:"Перед репетицией",year:"1880",imageNum:"226"},{author:"Николай Рерих",name:"Помни!",year:"1924",imageNum:"227"},{author:"Илья Репин",name:"Стрекоза",year:"1884",imageNum:"228"},{author:"Клод Моне",name:"Мост Ватерлоо, туман",year:"1903",imageNum:"229"},{author:"Исаак Левитан",name:"Весна – большая вода",year:"1897",imageNum:"230"},{author:"Аксели Галлен-Каллела",name:"Первый урок",year:"1889",imageNum:"231"},{author:"Иван Айвазовский",name:"Буря на море",year:"1873",imageNum:"232"},{author:"Эдгар Дега",name:"Балетный класс",year:"1874",imageNum:"233"},{author:"Николай Рерих",name:"Горная обитель",year:"1933",imageNum:"234"},{author:"Леонардо да Винчи",name:"Святая Анна с Мадонной",year:"1510",imageNum:"235"},{author:"Эль Греко",name:"Мальчик, зажигающий свечу",year:"1572",imageNum:"236"},{author:"Пабло Пикассо",name:"Дружба",year:"1908",imageNum:"237"},{author:"Аксели Галлен-Каллела",name:"Девушка на ветру",year:"1893",imageNum:"238"},{author:"Иван Айвазовский",name:"Волна",year:"1889",imageNum:"239"},{author:"Эжен Делакруа",name:"Автопортрет",year:"1837",imageNum:"240"}];var e,t,r=document.querySelector(".main-content"),m=document.querySelector(".main-title"),i=document.querySelector(".home-page"),n=document.querySelector(".home-page2"),o=document.querySelector(".cat"),u=document.querySelector(".cat2"),s=[],c=0;function g(){c=0,r.style.overflowY="scroll",r.innerHTML='\n    <div class="categories">\n    <div class="category-item artist-quiz">\n        \n        <h2>Artist quiz</h2>\n    </div>\n    <div class="category-item picture-quiz">\n        \n        <h2>Picture quiz</h2>\n    </div>\n   \n    \n</div>\n    '}function l(){t=null,r.style.overflowY="scroll",s=[],c=0,r.innerHTML='\n    <div class="small-categories-list-artists">\n    <div class="small-category-item-artists small-category-item-artists0" id="0">\n        <div class="score-artist score-artist0">'.concat(localStorage.getItem(0)?localStorage.getItem(0):0,'/10</div>\n        <img width="400px" height="auto" src="./assets/img/0.jpg" alt="картина">\n        <h2>Portrait</h2>\n    </div>\n\n\n    <div class="small-category-item-artists small-category-item-artists1" id="1">\n        <div class="score-artist score-artist1">').concat(localStorage.getItem(1)?localStorage.getItem(1):0,'/10</div>   \n        <img width="400px" height="auto" src="./assets/img/10.jpg" alt="картина">\n        <h2>Landscape</h2>\n    </div>\n\n\n    <div class="small-category-item-artists small-category-item-artists2" id="2">\n    <div class="score-artist score-artist2">').concat(localStorage.getItem(2)?localStorage.getItem(2):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/20.jpg" alt="картина">\n        <h2>Still Life</h2>\n    </div>\n\n    <div class="small-category-item-artists small-category-item-artists3" id="3">\n    <div class="score-artist score-artist3">').concat(localStorage.getItem(3)?localStorage.getItem(3):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/30.jpg" alt="картина">\n        <h2>Graphic</h2>\n    </div>\n\n    <div class="small-category-item-artists small-category-item-artists4" id="4">\n    <div class="score-artist score-artist4">').concat(localStorage.getItem(4)?localStorage.getItem(4):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/40.jpg" alt="картина">\n        <h2>Antique</h2>\n    </div>\n\n    <div class="small-category-item-artists small-category-item-artists5" id="5">\n    <div class="score-artist score-artist5">').concat(localStorage.getItem(5)?localStorage.getItem(5):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/50.jpg" alt="картина">\n        <h2>Avant-Garde</h2>\n    </div>\n\n    <div class="small-category-item-artists small-category-item-artists6" id="6">\n    <div class="score-artist score-artist6">').concat(localStorage.getItem(6)?localStorage.getItem(6):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/60.jpg" alt="картина">\n        <h2>Renaissance</h2>\n    </div>\n\n    <div class="small-category-item-artists small-category-item-artists7" id="7">\n    <div class="score-artist score-artist7">').concat(localStorage.getItem(7)?localStorage.getItem(7):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/70.jpg" alt="картина">\n        <h2>Surrealism</h2>\n    </div>\n\n    <div class="small-category-item-artists small-category-item-artists8" id="8">\n    <div class="score-artist score-artist8">').concat(localStorage.getItem(8)?localStorage.getItem(8):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/80.jpg" alt="картина">\n        <h2>Kitsch</h2>\n    </div>\n\n    <div class="small-category-item-artists small-category-item-artists9" id="9">\n    <div class="score-artist score-artist9">').concat(localStorage.getItem(9)?localStorage.getItem(9):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/90.jpg" alt="картина">\n        <h2>Minimalism</h2>\n    </div>\n\n    <div class="small-category-item-artists small-category-item-artists10" id="10">\n    <div class="score-artist score-artist10">').concat(localStorage.getItem(10)?localStorage.getItem(10):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/100.jpg" alt="картина">\n        <h2>Avangerd</h2>\n    </div>\n\n    <div class="small-category-item-artists small-category-item-artists11" id="11">\n    <div class="score-artist score-artist11">').concat(localStorage.getItem(11)?localStorage.getItem(11):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/110.jpg" alt="картина">\n        <h2>Industrial</h2>\n    </div>\n</div>\n    ');for(var a=0;a<12;a++){var e=document.querySelector(".small-category-item-artists".concat(a));-1!=e.outerHTML.indexOf("0/10")?e.style.filter="grayscale(80%)":(e.style.filter="0",e.innerHTML+='\n            <div class="category-score category-score'.concat(a,'">\n                <div>\n                    <p>\n                        Score\n                    </p>\n                </div>\n            </div>\n            '))}}function h(e){if(r.scrollTop=0,r.style.overflowY="hidden",s)for(var t=Number(e);t<Number(e)+10;t++)s.push(t);var m=s[0];s.shift();var i=[{value:a[m].author,key:!0},{value:a[m+1].author,key:!1},{value:a[m+2].author,key:!1},{value:a[m+3].author,key:!1}];return i.sort((function(){return Math.random()-.5})),r.innerHTML='\n    <div class="quizy-question-artists">\n    <h2>КТО АВТОР ДАННОЙ КАРТИНЫ?</h2>\n    <img width="400px" height="auto" src="./assets/img/'.concat(m,'.jpg" alt="картина">\n    <div class="answers-artists">\n        <div class="answer-item-artists answer-item-artists1">').concat(i[0].value,'</div>\n        <div class="answer-item-artists answer-item-artists2">').concat(i[1].value,'</div>\n        <div class="answer-item-artists answer-item-artists3">').concat(i[2].value,'</div>\n        <div class="answer-item-artists answer-item-artists4">').concat(i[3].value,'</div>\n    </div>\n    </div>\n    <div class="popup">\n            <img width="400px" height="auto" src="./assets/img/').concat(m,'.jpg" alt="картина">\n            <h3> ').concat(a[m].author,"</h3>\n            <h3>").concat(a[m].name,"</h3>\n            <h3>").concat(a[m].year,'</h3>\n            <button class="next-btn">Далее</button>\n        </div>\n    '),i}function y(){r.innerHTML='\n    <div class="final">\n            <p>Your Score</p>\n            <p>'.concat(c,'/10</p>\n            <button class = "categore-btn">Menu</button>\n    </div>\n    ')}function d(){r.scrollTo(0,0),t=null,r.style.overflowY="scroll",s=[],c=0,r.innerHTML='\n    <div class="small-categories-list-pictures">\n    <div class="small-category-item-pictures small-category-item-pictures12" id="0">\n        <div class="score-pictures score-pictures0">'.concat(localStorage.getItem(12)?localStorage.getItem(12):0,'/10</div>\n        <img width="400px" height="auto" src="./assets/img/120.jpg" alt="картина">\n        <h2>Portrait</h2>\n    </div>\n\n\n    <div class="small-category-item-pictures small-category-item-pictures13" id="1">\n        <div class="score-pictures score-pictures1">').concat(localStorage.getItem(13)?localStorage.getItem(13):0,'/10</div>   \n        <img width="400px" height="auto" src="./assets/img/130.jpg" alt="картина">\n        <h2>Landscape</h2>\n    </div>\n\n\n    <div class="small-category-item-pictures small-category-item-pictures14" id="2">\n    <div class="score-pictures score-pictures2">').concat(localStorage.getItem(14)?localStorage.getItem(14):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/140.jpg" alt="картина">\n        <h2>Still Life</h2>\n    </div>\n\n    <div class="small-category-item-pictures small-category-item-pictures15" id="3">\n    <div class="score-pictures score-pictures3">').concat(localStorage.getItem(15)?localStorage.getItem(16):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/150.jpg" alt="картина">\n        <h2>Graphic</h2>\n    </div>\n\n    <div class="small-category-item-pictures small-category-item-pictures16" id="4">\n    <div class="score-pictures score-pictures4">').concat(localStorage.getItem(16)?localStorage.getItem(16):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/160.jpg" alt="картина">\n        <h2>Antique</h2>\n    </div>\n\n    <div class="small-category-item-pictures small-category-item-pictures17" id="5">\n    <div class="score-pictures score-pictures5">').concat(localStorage.getItem(17)?localStorage.getItem(17):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/170.jpg" alt="картина">\n        <h2>Avant-Garde</h2>\n    </div>\n\n    <div class="small-category-item-pictures small-category-item-pictures18" id="6">\n    <div class="score-pictures score-pictures6">').concat(localStorage.getItem(18)?localStorage.getItem(18):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/180.jpg" alt="картина">\n        <h2>Renaissance</h2>\n    </div>\n\n    <div class="small-category-item-pictures small-category-item-pictures19" id="7">\n    <div class="score-pictures score-pictures7">').concat(localStorage.getItem(19)?localStorage.getItem(19):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/190.jpg" alt="картина">\n        <h2>Surrealism</h2>\n    </div>\n\n    <div class="small-category-item-pictures small-category-item-pictures20" id="8">\n    <div class="score-pictures score-pictures8">').concat(localStorage.getItem(20)?localStorage.getItem(20):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/200.jpg" alt="картина">\n        <h2>Kitsch</h2>\n    </div>\n\n    <div class="small-category-item-pictures small-category-item-pictures21" id="9">\n    <div class="score-pictures score-pictures9">').concat(localStorage.getItem(21)?localStorage.getItem(21):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/210.jpg" alt="картина">\n        <h2>Minimalism</h2>\n    </div>\n\n    <div class="small-category-item-pictures small-category-item-pictures22" id="10">\n    <div class="score-pictures score-pictures10">').concat(localStorage.getItem(22)?localStorage.getItem(22):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/220.jpg" alt="картина">\n        <h2>Avangerd</h2>\n    </div>\n\n    <div class="small-category-item-pictures small-category-item-pictures23" id="11">\n    <div class="score-pictures score-pictures11">').concat(localStorage.getItem(23)?localStorage.getItem(23):0,'/10</div>  \n        <img width="400px" height="auto" src="./assets/img/230.jpg" alt="картина">\n        <h2>Industrial</h2>\n    </div>\n</div>\n    ');for(var a=12;a<24;a++){var e=document.querySelector(".small-category-item-pictures".concat(a));-1!=e.outerHTML.indexOf("0/10")?e.style.filter="grayscale(80%)":(e.style.filter="0",e.innerHTML+='\n            <div class="category-score category-score'.concat(a,'">\n                <div>\n                    <p>\n                        Score\n                    </p>\n                </div>\n            </div>\n            '))}}function N(e){if(r.scrollTop=0,r.style.overflowY="hidden",s)for(var t=Number(e);t<Number(e)+10;t++)s.push(t);var m=s[0];s.shift();var i=[{value:"./assets/img/".concat(m,".jpg"),key:!0},{value:"./assets/img/".concat(m+1,".jpg"),key:!1},{value:"./assets/img/".concat(m+2,".jpg"),key:!1},{value:"./assets/img/".concat(m+3,".jpg"),key:!1}];return i.sort((function(){return Math.random()-.5})),r.innerHTML='\n    <div class="quizy-question-pictures">\n            <h2>КАКУЮ КАРТИНУ НАПИСАЛ </h2>\n            <h2>'.concat(a[m].author,'?</h2>\n            \n            <div class="answers-pictures">\n                <div class="answer-item-pictures answer-item-pictures1">\n                    <img width="400px" height="auto" src="').concat(i[0].value,'" alt="картина">\n                </div>\n                <div class="answer-item-pictures answer-item-pictures2">\n                    <img width="400px" height="auto" src="').concat(i[1].value,'" alt="картина">\n                </div>\n                <div class="answer-item-pictures answer-item-pictures3">\n                    <img width="400px" height="auto" src="').concat(i[2].value,'" alt="картина">\n                </div>\n                <div class="answer-item-pictures answer-item-pictures4">\n                    <img width="400px" height="auto" src="').concat(i[3].value,'" alt="картина">\n                </div>\n            </div>\n            </div>\n            <div class="popup2">\n                    <img width="400px" height="auto" src="./assets/img/').concat(m,'.jpg" alt="картина">\n                    <h3> ').concat(a[m].author,"</h3>\n                    <h3>").concat(a[m].name,"</h3>\n                    <h3>").concat(a[m].year,'</h3>\n                    <button class="next-btn2">Далее</button>\n                </div>\n    \n    '),i}function v(a){r.innerHTML='\n    <div class="score-container">\n            \n        </div>\n    ';for(var e=document.querySelector(".score-container"),t=10*a;t<11+10*a;t++){e.innerHTML+='\n        <div class="score-container-item score-container-item'.concat(t,'">\n                <img width="400px" height="auto" src="./assets/img/').concat(t,'.jpg" alt="картинка">\n            </div>\n        ');var m=document.querySelector(".score-container-item".concat(t));localStorage.getItem("score-item".concat(t))?m.style.filter="0":m.style.filter="grayscale(100%)"}}m.addEventListener("click",(function(){g()})),i.addEventListener("click",(function(){g()})),n.addEventListener("click",(function(){g()})),o.addEventListener("click",(function(){t<12?l():d()})),u.addEventListener("click",(function(){t<12?l():d()})),g(),r.addEventListener("click",(function(a){a.target.closest(".artist-quiz")&&l(),a.target.closest(".picture-quiz")&&d();for(var m=0;m<12;m++)a.target.closest(".small-category-item-artists".concat(m))&&(m>0?(t=m,e=h(Number("".concat(m,"0")))):(t=m,e=h(m))),a.target.closest(".small-category-item-pictures".concat(m+11))&&(t=m+11,e=N(Number("".concat(m+11,"0"))));for(var i=function(t){if(a.target.closest(".answer-item-artists".concat(t))){var r=document.querySelector(".answer-item-artists".concat(t)),m=document.querySelector(".popup");if(e[t-1].key){var i=m.outerHTML.substr(m.outerHTML.indexOf("img/")+4,3);i.includes(".")&&(i=m.outerHTML.substr(m.outerHTML.indexOf("img/")+4,2)),i.includes(".")&&(i=m.outerHTML.substr(m.outerHTML.indexOf("img/")+4,1)),localStorage.setItem("score-item".concat(Number(i)),!0),r.style.backgroundColor="rgba(3, 134, 62, 0.432)"}else r.style.backgroundColor="rgba(206, 36, 36, 0.384)";setTimeout((function(){e[t-1].key?(c++,m.style.background="linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(5,54,0,1) 100%)",m.style.visibility="visible",m.style.bottom="0"):(m.style.background="linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(54,0,5,1) 100%)",m.style.visibility="visible",m.style.bottom="0")}),750)}if(a.target.closest(".answer-item-pictures".concat(t))){var n=document.querySelector(".answer-item-pictures".concat(t)),o=document.querySelector(".popup2");if(e[Number(t)-1].key){var u=o.outerHTML.substr(o.outerHTML.indexOf("img/")+4,3);u.includes(".")&&(u=o.outerHTML.substr(o.outerHTML.indexOf("img/")+4,2)),u.includes(".")&&(u=o.outerHTML.substr(o.outerHTML.indexOf("img/")+4,1)),localStorage.setItem("score-item".concat(Number(u)),!0),n.style.backgroundColor="rgba(3, 134, 62, 0.432)"}else n.style.backgroundColor="rgba(206, 36, 36, 0.384)";setTimeout((function(){e[t-1].key?(c++,o.style.background="linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(5,54,0,1) 100%)",o.style.visibility="visible",o.style.bottom="0"):(o.style.background="linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(54,0,5,1) 100%)",o.style.visibility="visible",o.style.bottom="0")}),750)}},n=1;n<5;n++)i(n);a.target.closest(".next-btn")&&(s[0]?e=h():y()),a.target.closest(".next-btn2")&&(s[0]?e=N():y()),a.target.closest(".final")&&(localStorage.setItem("".concat(t),JSON.stringify(c)),g());for(var o=0;o<24;o++)a.target.closest(".category-score".concat(o))&&(r.style.overflowY="scroll",v(o));a.target.closest(".settings")}))})();
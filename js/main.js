/*把code写到#code和style标签里*/
function writeCode(prefix, code, fn){
  let domCode = document.querySelector('#code')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
    styleTag.innerHTML = prefix +  code.substring(0, n)
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 50)
}
function writeMarkdown(markdown, fn){
  let domPaper = document.querySelector('#paper>.content')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop = domPaper.scrollHeight
    if (n >= markdown.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 25)
}

var text1 = `/* 
 * Тест кейс #1 Создание портфолио
 * Предусловие:
 * Использовать входные данные:Имя -"Gregory" фамилия-"Presman"
 * Шаги воспроизведения:
 */

*{
  transition: all 1s;
}
/* 1.Запустить настройку параметров портфолио =>

*/
#code{
  background: rgb(40,44,52);
  color:white;
  border: 1px solid #aaa;
  padding: 16px;
}


/* 2.Настроить CSS параметры */

.token.selector{ color: #690; }
.token.property{ color: gold; }
.token.function{ color: pink; }
.token.punctuation{ color: white; }

/* 3.Добавить градиенты */

#code{
  animation: breath 0.5s infinite alternate-reverse;
}

/* 4.Создать портфолио в отдельном окне */

/* 5.Настроить чистый белый лист */

#code-wrapper{
  width: 50%; left: 0; position: fixed; 
  height: 100%;
}

#paper > .content {
 display: block;
}

/* Ожидамеый результат
* Создается  портфолио,черными буквами на белом фоне,в правой половине экрана.

`

var text2 = `
/* Пост условие: 
* Увеличить шрифт текста



`
var md = `

# Портфолио: Presman Gregory
 * QA Engineer\Тестировщик
 * Web,Mobile,Desktop

# Обо мне

- Готов к работе, которая предполагает постоянное взаимодействие с другими командами для достижения общей цели.
 Умение работать с документацией большого объема.

# Опыт работы
Специалист по тестированию
Август 2020 — По настоящее время (2 года и 8 месяцев)

Выполняю задачи:

Написание тестовой документации
Чтение логов
Заведение, анализ, проверка дефектов
Оценка задач
Анализ спецификаций/user story  и разработка тест-кейсов на их основе
Анализ и валидация дефектов, корректное оформление дефектов в баг-трекинговой системе

# Профессиональные навыки:

Опыт тестирования более 1 года
Опыт тестирования мобильных приложений более 6 месяцев
Понимание основных процессов тестирования
Уверенный опыт в тестировании REST/API
Знание методологий тестирования, владение техникой тест-дизайна
Умение работать с инструментами: Jira, Android Studio, Эмуляторы, Git, Kibana, Postman, Charles
Умение работать с  JSON/XML, SQL (на уровне join, вложенных запросов)
Опыт работы с системами непрерывной интеграции Jenkins, GitLab CI
Понимание ключевых аспектов цикла разработки ПО
Выстраивание и управление процессом контроля качества;
Проведение функционального и кросс-браузерного тестирования веб и мобильных приложений;
Составление документации по тестированию (чек-листы, тест-планы, тестовые сценарии);
Тестирование бизнес-логики
Взаимодействие с программистами по вопросам разработки системы;
Проведение функционального, регрессионного, интеграционного и смоук тестировании
Ручное тестирование мобильных приложений iOS / Android;
Умение работать с не задокументированными системами.


# Стек:

MySQL • Git • Docker • Apache JMeter • Grafana • Cypress • HTML • CSS • Postman • Linux


# Контактные данные:

* e-mail: forichf@gmail.com
* habr: https://career.habr.com/testkeeper
* Telegram:@triplex10
`
let text3 = `
/*
* e-mail: forichf@gmail.com
* habr: https://career.habr.com/testkeeper
* Telegram:@triplex10
*/
`

writeCode('', text1, ()=>{ // writeCode call the function
  createPaper(() => {
    writeMarkdown(md, ()=> {
      writeCode(text1, text2, ()=>{
        convertMarkdownToHtml(()=>{
          writeCode(text1 + text2, text3, ()=> {
            console.log('完成')
          })
        })
      })
    })
  })
})




function createPaper(fn){
  var paper = document.createElement('div') 
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn && fn.call()
}

function convertMarkdownToHtml(fn){
  var div = document.createElement('div')  
  div.className = 'html markdown-body'
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector('#paper > .content')
  markdownContainer.replaceWith(div)
  fn && fn.call()
}

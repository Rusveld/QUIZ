import './reset.css'
import './style.css'
import images from './images.js'


const mainContent = document.querySelector(".main-content")
const mainTitle = document.querySelector(".main-title")
const home = document.querySelector('.home-page')
const home2 = document.querySelector('.home-page2')
const cat = document.querySelector('.cat')
const cat2 = document.querySelector('.cat2')






let arrForQuiz = [];
let answerContainer;
let globalQuizCouner = 0;
let categoryState;




function renderMainPage(){
    globalQuizCouner = 0;
    mainContent.style.overflowY = 'scroll'
    mainContent.innerHTML = `
    <div class="categories">
    <div class="category-item artist-quiz">
        
        <h2>Artist quiz</h2>
    </div>
    <div class="category-item picture-quiz">
        
        <h2>Picture quiz</h2>
    </div>
   
    
</div>
    `
}
function renderSmallCategoryesArtist(){
    categoryState = null;
    mainContent.style.overflowY = 'scroll'
    arrForQuiz = []
    globalQuizCouner = 0;
    mainContent.innerHTML = `
    <div class="small-categories-list-artists">
    <div class="small-category-item-artists small-category-item-artists0" id="0">
        <div class="score-artist score-artist0">${localStorage.getItem(0)?localStorage.getItem(0):0}/10</div>
        <img width="400px" height="auto" src="./assets/img/0.jpg" alt="картина">
        <h2>Portrait</h2>
    </div>


    <div class="small-category-item-artists small-category-item-artists1" id="1">
        <div class="score-artist score-artist1">${localStorage.getItem(1)?localStorage.getItem(1):0}/10</div>   
        <img width="400px" height="auto" src="./assets/img/10.jpg" alt="картина">
        <h2>Landscape</h2>
    </div>


    <div class="small-category-item-artists small-category-item-artists2" id="2">
    <div class="score-artist score-artist2">${localStorage.getItem(2)?localStorage.getItem(2):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/20.jpg" alt="картина">
        <h2>Still Life</h2>
    </div>

    <div class="small-category-item-artists small-category-item-artists3" id="3">
    <div class="score-artist score-artist3">${localStorage.getItem(3)?localStorage.getItem(3):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/30.jpg" alt="картина">
        <h2>Graphic</h2>
    </div>

    <div class="small-category-item-artists small-category-item-artists4" id="4">
    <div class="score-artist score-artist4">${localStorage.getItem(4)?localStorage.getItem(4):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/40.jpg" alt="картина">
        <h2>Antique</h2>
    </div>

    <div class="small-category-item-artists small-category-item-artists5" id="5">
    <div class="score-artist score-artist5">${localStorage.getItem(5)?localStorage.getItem(5):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/50.jpg" alt="картина">
        <h2>Avant-Garde</h2>
    </div>

    <div class="small-category-item-artists small-category-item-artists6" id="6">
    <div class="score-artist score-artist6">${localStorage.getItem(6)?localStorage.getItem(6):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/60.jpg" alt="картина">
        <h2>Renaissance</h2>
    </div>

    <div class="small-category-item-artists small-category-item-artists7" id="7">
    <div class="score-artist score-artist7">${localStorage.getItem(7)?localStorage.getItem(7):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/70.jpg" alt="картина">
        <h2>Surrealism</h2>
    </div>

    <div class="small-category-item-artists small-category-item-artists8" id="8">
    <div class="score-artist score-artist8">${localStorage.getItem(8)?localStorage.getItem(8):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/80.jpg" alt="картина">
        <h2>Kitsch</h2>
    </div>

    <div class="small-category-item-artists small-category-item-artists9" id="9">
    <div class="score-artist score-artist9">${localStorage.getItem(9)?localStorage.getItem(9):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/90.jpg" alt="картина">
        <h2>Minimalism</h2>
    </div>

    <div class="small-category-item-artists small-category-item-artists10" id="10">
    <div class="score-artist score-artist10">${localStorage.getItem(10)?localStorage.getItem(10):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/100.jpg" alt="картина">
        <h2>Avangerd</h2>
    </div>

    <div class="small-category-item-artists small-category-item-artists11" id="11">
    <div class="score-artist score-artist11">${localStorage.getItem(11)?localStorage.getItem(11):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/110.jpg" alt="картина">
        <h2>Industrial</h2>
    </div>
</div>
    `
    
  
    for(let i = 0; i < 12; i++){
        const filter = document.querySelector(`.small-category-item-artists${i}`)
        
        let str = filter.outerHTML
 
        if(str.indexOf('0/10') != -1){
            
            filter.style.filter = 'grayscale(80%)'
        }else{
            filter.style.filter = '0'
            filter.innerHTML += `
            <div class="category-score category-score${i}">
                <div>
                    <p>
                        Score
                    </p>
                </div>
            </div>
            `
        }
    }
}


function renderSmallCategoryesArtistQuiz(index){
    mainContent.scrollTop = 0;
    mainContent.style.overflowY = 'hidden'
   
    if(arrForQuiz){
        for(let i = Number(index); i<(Number(index)+10); i++){
        arrForQuiz.push(i)
       
    }}
   
    
    
    let ind = arrForQuiz[0]
   
    arrForQuiz.shift()

    const answerObj = [
        {
            value : images[ind].author,
            key : true
        },
        {
            value : images[ind + 1].author,
            key : false
        },
        {
            value : images[ind + 2].author,
            key : false
        },
        {
            value : images[ind + 3].author,
            key : false
        }
    ]

    answerObj.sort(() => Math.random() - 0.5)

    mainContent.innerHTML = `
    <div class="quizy-question-artists">
    <h2>КТО АВТОР ДАННОЙ КАРТИНЫ?</h2>
    <img width="400px" height="auto" src="./assets/img/${ind}.jpg" alt="картина">
    <div class="answers-artists">
        <div class="answer-item-artists answer-item-artists1">${answerObj[0].value}</div>
        <div class="answer-item-artists answer-item-artists2">${answerObj[1].value}</div>
        <div class="answer-item-artists answer-item-artists3">${answerObj[2].value}</div>
        <div class="answer-item-artists answer-item-artists4">${answerObj[3].value}</div>
    </div>
    </div>
    <div class="popup">
            <img width="400px" height="auto" src="./assets/img/${ind}.jpg" alt="картина">
            <h3> ${images[ind].author}</h3>
            <h3>${images[ind].name}</h3>
            <h3>${images[ind].year}</h3>
            <button class="next-btn">Далее</button>
        </div>
    `
    
    return answerObj;
}


function finalQuizReasalts(){
    mainContent.innerHTML = `
    <div class="final">
            <p>Your Score</p>
            <p>${globalQuizCouner}/10</p>
            <button class = "categore-btn">Menu</button>
    </div>
    `
}


function renderSmallCategoryesPictures(){
    mainContent.scrollTo(0, 0)
    categoryState = null;
    mainContent.style.overflowY = 'scroll'
    arrForQuiz = []
    globalQuizCouner = 0;
    mainContent.innerHTML = `
    <div class="small-categories-list-pictures">
    <div class="small-category-item-pictures small-category-item-pictures12" id="0">
        <div class="score-pictures score-pictures0">${localStorage.getItem(12)?localStorage.getItem(12):0}/10</div>
        <img width="400px" height="auto" src="./assets/img/120.jpg" alt="картина">
        <h2>Portrait</h2>
    </div>


    <div class="small-category-item-pictures small-category-item-pictures13" id="1">
        <div class="score-pictures score-pictures1">${localStorage.getItem(13)?localStorage.getItem(13):0}/10</div>   
        <img width="400px" height="auto" src="./assets/img/130.jpg" alt="картина">
        <h2>Landscape</h2>
    </div>


    <div class="small-category-item-pictures small-category-item-pictures14" id="2">
    <div class="score-pictures score-pictures2">${localStorage.getItem(14)?localStorage.getItem(14):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/140.jpg" alt="картина">
        <h2>Still Life</h2>
    </div>

    <div class="small-category-item-pictures small-category-item-pictures15" id="3">
    <div class="score-pictures score-pictures3">${localStorage.getItem(15)?localStorage.getItem(16):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/150.jpg" alt="картина">
        <h2>Graphic</h2>
    </div>

    <div class="small-category-item-pictures small-category-item-pictures16" id="4">
    <div class="score-pictures score-pictures4">${localStorage.getItem(16)?localStorage.getItem(16):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/160.jpg" alt="картина">
        <h2>Antique</h2>
    </div>

    <div class="small-category-item-pictures small-category-item-pictures17" id="5">
    <div class="score-pictures score-pictures5">${localStorage.getItem(17)?localStorage.getItem(17):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/170.jpg" alt="картина">
        <h2>Avant-Garde</h2>
    </div>

    <div class="small-category-item-pictures small-category-item-pictures18" id="6">
    <div class="score-pictures score-pictures6">${localStorage.getItem(18)?localStorage.getItem(18):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/180.jpg" alt="картина">
        <h2>Renaissance</h2>
    </div>

    <div class="small-category-item-pictures small-category-item-pictures19" id="7">
    <div class="score-pictures score-pictures7">${localStorage.getItem(19)?localStorage.getItem(19):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/190.jpg" alt="картина">
        <h2>Surrealism</h2>
    </div>

    <div class="small-category-item-pictures small-category-item-pictures20" id="8">
    <div class="score-pictures score-pictures8">${localStorage.getItem(20)?localStorage.getItem(20):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/200.jpg" alt="картина">
        <h2>Kitsch</h2>
    </div>

    <div class="small-category-item-pictures small-category-item-pictures21" id="9">
    <div class="score-pictures score-pictures9">${localStorage.getItem(21)?localStorage.getItem(21):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/210.jpg" alt="картина">
        <h2>Minimalism</h2>
    </div>

    <div class="small-category-item-pictures small-category-item-pictures22" id="10">
    <div class="score-pictures score-pictures10">${localStorage.getItem(22)?localStorage.getItem(22):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/220.jpg" alt="картина">
        <h2>Avangerd</h2>
    </div>

    <div class="small-category-item-pictures small-category-item-pictures23" id="11">
    <div class="score-pictures score-pictures11">${localStorage.getItem(23)?localStorage.getItem(23):0}/10</div>  
        <img width="400px" height="auto" src="./assets/img/230.jpg" alt="картина">
        <h2>Industrial</h2>
    </div>
</div>
    `
    
  
    for(let i = 12; i < 24; i++){
        const filter = document.querySelector(`.small-category-item-pictures${i}`)
        
        let str = filter.outerHTML
     
        if(str.indexOf('0/10') != -1){
            
            filter.style.filter = 'grayscale(80%)'
        }else{
            filter.style.filter = '0'
            filter.innerHTML += `
            <div class="category-score category-score${i}">
                <div>
                    <p>
                        Score
                    </p>
                </div>
            </div>
            `
        }
    }
}


function renderSmallCategoryesPicturesQuiz(index){
    
    mainContent.scrollTop = 0;
    mainContent.style.overflowY = 'hidden'
   
    if(arrForQuiz){
        for(let i = Number(index); i<(Number(index)+10); i++){
        arrForQuiz.push(i)
       
    }}
    
    
    
    let ind = arrForQuiz[0]
    
    arrForQuiz.shift()

    const answerObj = [
        {
            value : `./assets/img/${ind}.jpg`,
            key : true
        },
        {
            value : `./assets/img/${ind+1}.jpg`,
            key : false
        },
        {
            value : `./assets/img/${ind+2}.jpg`,
            key : false
        },
        {
            value : `./assets/img/${ind+3}.jpg`,
            key : false
        }
    ]

    answerObj.sort(() => Math.random() - 0.5)
    mainContent.innerHTML = `
    <div class="quizy-question-pictures">
            <h2>КАКУЮ КАРТИНУ НАПИСАЛ </h2>
            <h2>${images[ind].author}?</h2>
            
            <div class="answers-pictures">
                <div class="answer-item-pictures answer-item-pictures1">
                    <img width="400px" height="auto" src="${answerObj[0].value}" alt="картина">
                </div>
                <div class="answer-item-pictures answer-item-pictures2">
                    <img width="400px" height="auto" src="${answerObj[1].value}" alt="картина">
                </div>
                <div class="answer-item-pictures answer-item-pictures3">
                    <img width="400px" height="auto" src="${answerObj[2].value}" alt="картина">
                </div>
                <div class="answer-item-pictures answer-item-pictures4">
                    <img width="400px" height="auto" src="${answerObj[3].value}" alt="картина">
                </div>
            </div>
            </div>
            <div class="popup2">
                    <img width="400px" height="auto" src="./assets/img/${ind}.jpg" alt="картина">
                    <h3> ${images[ind].author}</h3>
                    <h3>${images[ind].name}</h3>
                    <h3>${images[ind].year}</h3>
                    <button class="next-btn2">Далее</button>
                </div>
    
    `
    return answerObj;
 
}

function renderScorePage(index){
    mainContent.innerHTML = `
    <div class="score-container">
            
        </div>
    `


    const scoreContainer = document.querySelector('.score-container')
    for(let i = + (index*10); i<11 + (index*10); i++){
        scoreContainer.innerHTML += `
        <div class="score-container-item score-container-item${i}">
                <img width="400px" height="auto" src="./assets/img/${i}.jpg" alt="картинка">
            </div>
        `
        const scoreItem = document.querySelector(`.score-container-item${i}`)
        if(localStorage.getItem(`score-item${i}` ) ){
            scoreItem.style.filter = '0'            
        }else{
            scoreItem.style.filter = 'grayscale(100%)' 
        }
    }
}
mainTitle.addEventListener("click", ()=>{
    renderMainPage()
})

home.addEventListener("click", ()=>{
    renderMainPage()
})
home2.addEventListener("click", ()=>{
    renderMainPage()
})
cat.addEventListener("click", ()=>{
    if(categoryState < 12){
        renderSmallCategoryesArtist()
    }else{
        renderSmallCategoryesPictures()
    }
})
cat2.addEventListener("click", ()=>{
    if(categoryState < 12){
        renderSmallCategoryesArtist()
    }else{
        renderSmallCategoryesPictures()
    }
})
renderMainPage()


mainContent.addEventListener('click', (event)=>{   
    
    if(event.target.closest(".artist-quiz")){
        renderSmallCategoryesArtist()
        
    }
    if(event.target.closest(".picture-quiz")){
        renderSmallCategoryesPictures()
        
    }
    
    for(let i = 0; i<12;i++){
        
        if(event.target.closest(`.small-category-item-artists${i}`)){
         
            if(i>0){
                categoryState = i
                answerContainer = renderSmallCategoryesArtistQuiz(Number(`${i}0`))
                
            }else{
                categoryState = i
                answerContainer = renderSmallCategoryesArtistQuiz(i)
                
            }
            
        }
        if(event.target.closest(`.small-category-item-pictures${i+11}`)){  
                categoryState = i+11
                answerContainer = renderSmallCategoryesPicturesQuiz(Number(`${i+11}0`))          
        }

    }
    
    
    for(let i = 1; i<5;i++){
        if(event.target.closest(`.answer-item-artists${i}`)){

            const answer  = document.querySelector(`.answer-item-artists${i}`)
            const popup = document.querySelector('.popup')
            
            if(answerContainer[i-1].key){    
                
                let resalting = popup.outerHTML.substr(popup.outerHTML.indexOf('img/')+4, 3)
                if(resalting.includes('.')){
                    resalting = popup.outerHTML.substr(popup.outerHTML.indexOf('img/')+4, 2)
                }
                if(resalting.includes('.')){
                    resalting = popup.outerHTML.substr(popup.outerHTML.indexOf('img/')+4, 1)
                }
             
                localStorage.setItem(`score-item${Number(resalting)}`,true)
                answer.style.backgroundColor = 'rgba(3, 134, 62, 0.432)'            

            }else{                
                answer.style.backgroundColor = 'rgba(206, 36, 36, 0.384)'               
            } 

            setTimeout(() => {
             if(answerContainer[i-1].key){
                globalQuizCouner++
                popup.style.background = 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(5,54,0,1) 100%)'
                popup.style.visibility = 'visible'
                popup.style.bottom = '0'
                

            }else{
                popup.style.background = 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(54,0,5,1) 100%)'
                popup.style.visibility = 'visible'
                popup.style.bottom = '0'
            }   
            }, 750);
            
            
        } 
        if(event.target.closest(`.answer-item-pictures${i}`)){
 
            const answer  = document.querySelector(`.answer-item-pictures${i}`)
            const popup = document.querySelector('.popup2')
            
            if(answerContainer[Number(i)-1].key){
                
                
                let resalting = popup.outerHTML.substr(popup.outerHTML.indexOf('img/')+4, 3)
                if(resalting.includes('.')){
                    resalting = popup.outerHTML.substr(popup.outerHTML.indexOf('img/')+4, 2)
                }
                if(resalting.includes('.')){
                    resalting = popup.outerHTML.substr(popup.outerHTML.indexOf('img/')+4, 1)
                }
             
                localStorage.setItem(`score-item${Number(resalting)}`,true)
                
                
                answer.style.backgroundColor = 'rgba(3, 134, 62, 0.432)'            

            }else{                
                answer.style.backgroundColor = 'rgba(206, 36, 36, 0.384)'               
            } 

            setTimeout(() => {
             if(answerContainer[i-1].key){
                globalQuizCouner++
                popup.style.background = 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(5,54,0,1) 100%)'
                popup.style.visibility = 'visible'
                popup.style.bottom = '0'
                

            }else{
                popup.style.background = 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(54,0,5,1) 100%)'
                popup.style.visibility = 'visible'
                popup.style.bottom = '0'
            }   
            }, 750);
            
            
        } 
    }

    if(event.target.closest(".next-btn")){
        if(!arrForQuiz[0]){
            finalQuizReasalts()
        }else{
        answerContainer = renderSmallCategoryesArtistQuiz()  
        }
    }
    if(event.target.closest(".next-btn2")){
        if(!arrForQuiz[0]){
            finalQuizReasalts()
        }else{
        answerContainer = renderSmallCategoryesPicturesQuiz()  
        }
    }
    if(event.target.closest(".final")){     
            localStorage.setItem(`${categoryState}`, JSON.stringify(globalQuizCouner))
      
            renderMainPage()
            }
    for(let i = 0; i<24;i++){
        if(event.target.closest(`.category-score${i}`)){
            mainContent.style.overflowY = 'scroll'
            renderScorePage(i)
        }
    }       
    
    if(event.target.closest(".settings")){     
      
        }
})


var dataArr=[
    {
        "id":"1",
        "question":"Q1. who is the first prime minister of india?",
        "answer":"Neheru",
        "options":["Abdul kalam","Modi","Neheru","Indira Gandhi"]
    },
    {
        "id":"2",
        "question":"Q2. who is the president of india?",
        "answer":"Abdul kalam",
        "options":["Abdul kalam","Modi","Neheru","Indira Gandhi"]
    },
    {
        "id":"3",
        "question":"Q3. who is the first lady prime minister of india?",
        "answer":"Indira Gandhi",
        "options":["Abdul kalam","Modi","Neheru","Indira Gandhi"]
    },
    {
        "id":"4",
        "question":"Q4. who is the current prime minister of india?",
        "answer":"Modi",
        "options":["Abdul kalam","Modi","Neheru","Indira Gandhi"]
    }
]

localStorage.setItem("data-list",JSON.stringify(dataArr));
var dataList=JSON.parse(localStorage.getItem("data-list"))
localStorage.removeItem("inputs")
function createQuestions(obj){
    var mainDiv=document.createElement('div');
    mainDiv.className='main-div';
    mainDiv.id=obj.id
    var question=document.createElement('h3');
    question.className='question';
    question.innerHTML=obj.question
    var optionsLen=obj.options
    mainDiv.appendChild(question);
    for(var j=0; j<optionsLen.length; j++){
        var labelDiv=document.createElement('div')
        labelDiv.className='label-div'
        var labels=document.createElement('label')
        labels.className="labels"
        labelDiv.appendChild(labels);
        var inputs=document.createElement('input')
        inputs.type="radio"
        inputs.name="question"+(obj.id);

        labels.appendChild(inputs);
        var innerText=document.createTextNode(obj.options[j]);
        labels.appendChild(innerText);
        inputs.value=obj.options[j];
        var arr=[]
        inputs.onclick=function(e){
            var arr=JSON.parse(localStorage.getItem("inputs"))
            if(arr===null){
                arr=[]
            }
            var id=Number(mainDiv.id);
            arr[id-1]=(e.target.value)
            localStorage.setItem("inputs",JSON.stringify(arr))
            if(arr!==null){
                var arr=JSON.parse(localStorage.getItem("inputs"))
                localStorage.removeItem("inputs")
                    arr[id-1]=e.target.value
                console.log(arr)
                localStorage.setItem("inputs",JSON.stringify(arr))
            }   
               
                  
            
           
        }
        
        
        mainDiv.appendChild(labelDiv);
       
    }
    console.log(mainDiv)
    return mainDiv;
}

var form=document.getElementById('form');
var btn=document.getElementById('btn');
for(var i=0; i<dataList.length; i++){
    
    form.insertBefore(createQuestions(dataList[i]),btn)
}
var submitDiv=document.getElementById('submit-div')
var submitMarksDiv=document.getElementById('submit-marks-div')
var marks=document.getElementById('marks')
form.onsubmit=function(e){
    e.preventDefault()
    var arrayA=JSON.parse(localStorage.getItem("inputs"))
    var num=0

    
    if(arrayA!==null){
        for(var i=0; i<dataList.length;i++){
        
            if(dataList[i].answer===arrayA[i]){
               
                ++num
            }
         }
    submitDiv.style.display='flex'
    submitMarksDiv.style.display='flex'
    marks.innerText=num+"/4"
    }
    else if(arrayA==null){
        submitDiv.style.display='flex'
        submitMarksDiv.style.display='flex'
        marks.innerText="0/4"
    }
}









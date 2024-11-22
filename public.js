





              
    let userName = " : اسم المستخدم";
    let qNumber = ": عدد الأسئلة"
    let Alnatigah = " النتيجة "
    let qe1 = ' من هو النبي الذي دعى ربه فقال: \n "ربي اجعلني مقيم الصلاة ومن ذريتي..." ؟'
    let O = "correct.mp3";
    let X = "incorrect.mp3";
    
    // finesh //
    let storedData = localStorage.getItem('userData')
    
    
    let userNameData = JSON.parse(storedData).userName;
    let questionData = JSON.parse(storedData).question;
    
    
    let storedQ = localStorage.getItem('questionData')
    let qsn = JSON.parse(storedQ).True;
    
    
    let storedQs = localStorage.getItem('questionsData');
    let QsData = storedQs ? JSON.parse(storedQs) : []; 
 
    
    // العلامة النهائية(نسبة مئوية)
    let TheResult = (qsn / questionData) * 100;
    
    function Basmah(){
    window.location ="https://kunaiu.com/post/3856518"
}

     // لحفظ البيانات الخاصة بإيم المستخدم
    // userDataSive(userData) //
    function userDataSive(Data){
        localStorage.setItem('userData', JSON.stringify(Data));
    }
    
    
    function playSound(soundFile) {
        const audio = new Audio(soundFile);
        audio.play();
    }
    
    
    
    
    function Manshor(){
        window.location ="https://kunaiu.com/post/4494939"
    }
    
    function QnumbDataSive(Data){
        localStorage.setItem('questionData', JSON.stringify(Data));
    }
    
    // دالة لحذف البيانات من localStorage
function clearQuestionsData() {
    localStorage.removeItem('questionsData'); // حذف البيانات بشكل نهائي
} 

    // تخزين البيانات المعدلة في localStorage
function QdataSive(data) {
    localStorage.setItem('questionsData', JSON.stringify(data));
}


Webcam.set(
    {
        width:350 ,
        height:350,
        image_format: 'png' ,
        png_quality: 90
    } 
    ) ;
    
    Webcam.attach('#camera') ;
    
    function capture_img()
    {
        Webcam.snap(function(data_uri) {
            document.getElementById("result").innerHTML = '<img src='+data_uri+'>'
        } ) ;
    }
    console.log("ml5 version is:" + ml5.version) ;
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/PCUK6fyJB/model.json' , modelLoaded) ;
    
    function modelLoaded()
    {
        console.log("Model is loaded now.")
    }
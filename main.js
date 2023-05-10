Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

webcam.attach('#camera');
 function take_snapshot()
 {
     webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
     });
 }
 function take_snapshot()
 {
     webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
     });
 }
 console.log('ml5 version:',ml5.version);
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GDTyPGTN5/',modelLoaded);
 function modelLoaded() {
     console.log('model Loaded!');
 }


< script src=" https://unpkg.com/ml5@0.4.3/dist/ml5.min.js "></script>
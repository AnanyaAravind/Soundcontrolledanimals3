function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifer= ml5.soundClassifer('https://teachablemachine.withgoogle.com/models/i8abqjew6/model.json',modelReady);

}
function modelReady(){
    classifer.classify(gotResults);
}
dog= 0;
cat=0;
goat=0;
pig=0;
function gotResults(){
    if(error){
        console.error(error);}
        else{
    random_number_r= Math.floor(math.random*255)+1;
    random_number_g= Math.floor(math.random*255)+1;
    random_number_b= Math.floor(math.random*255)+1;

    document.getElementById("result_label").innerHTML= 'I can hear -'+results[0].label;
    document.getElementById("confidence_label").innerHTML= 'Accuracy -'+(results[0].confidence*100).toFixed(2) + "%" ;

    document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("confidence_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    img= doucment.getElementById('img_tag');
    if(results[0].label=="dog"){
img_tag.src="dog-tounge.gif"
dog = dog+1
    }
    else if(results[0].label=="cat"){
        img_tag.src="cat-cute.gif";
        cat= cat+1
    }
    else if(results[0].label=="lion"){
        img_tag.src="lion-king-lion.gif";
        lion= lion+1
    }
    else if(results[0].label=="goat"){
        img_tag.src="goat.gif";
        goat=goat+1
    }
    else{
        img_tag.src="47ebeaed-bb91-4958-aa25-69bc4c86a816.webp";
    }

}

}
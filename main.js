function preload() {
    img1 = loadImage("https://i.postimg.cc/FKP5mzf3/Seek-Png-com-mustache-png-15187.png")
    img2 = loadImage("https://i.postimg.cc/CKD0CSdq/images-removebg-preview-1.png")

}

nosex = "";
nosey = "";
specsx = "";
specsy = "";


function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(img1, nosex, nosey, 30, 30);
    image(img2, specsx, specsy, 100, 80);
}

function modelLoaded() {
    console.log('PoseNet is initialized')
}

function take_snapshot() {
    save('Swastik.png');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x)
        console.log("nose y = " + results[0].pose.nose.y)
        nosex = results[0].pose.nose.x - 15;
        nosey = results[0].pose.nose.y + 10;
        specsx = results[0].pose.rightEye.x - 29;
        specsy = results[0].pose.rightEye.y - 43;
    }
}
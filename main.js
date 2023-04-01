noseX=0;
noseY=0;

function preload()
{
    mustache = loadImage(('https://i.postimg.cc/KYLx3s89/mustache.png'));
}





function setup()
{
    canvas = createCanvas(340,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(340, 300);
    video.hide();
 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function modelLoaded()
{
    console.log('PoseNet Is Initinalized');
}





function gotPoses(results)
{
   if(results.length > 0)
   {
    console.log(results);
    noseX = results[0].pose.nose.x-37;
    noseY = results[0].pose.nose.y-12.5;
    console.log("nose x = " + noseX);
    console.log("nose y = " + noseY);
   }
}



function draw()
{
       image(video, 0, 0, 340, 300);
       image(mustache, noseX, noseY, 80, 80);
}






function take_snapshot()
{
    save('My_Filter_Image.png');
}
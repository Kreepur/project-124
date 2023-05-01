function setup()
{
    canvas = createCanvas(550 , 480);
    canvas.position(560 , 150);

    video = createCapture(VIDEO);
    video.size(500 , 500);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses)
}


function modelLoaded()
{
    console.log('PoseNet is initialized');
}


function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
    }
}


function draw()
{
    background('#6fc8e8')
}
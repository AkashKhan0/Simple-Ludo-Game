gameludo = () => {
    const play1 = Math.floor(Math.random() * 6) + 1;
    const playdice1 = `img/d${play1}.png`;
    document.getElementById("pic1").setAttribute('src' , playdice1);

    const play2 = Math.floor(Math.random() * 6) + 1;
    const playdice2 = `img/d${play2}.png`;
    document.getElementById("pic2").setAttribute('src' , playdice2);

    if(play1 > play2){
        document.getElementById('result').innerHTML = "Player 1 is Winner!";
    }
    else if(play1 < play2){
        document.getElementById('result').innerHTML = "Player 2 is Winner!";
    }
    else{
        document.getElementById('result').innerHTML = "The Match is Draw!";
    }
}
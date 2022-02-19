let slides = document.querySelector('.slider-items').children;
let nextSlide = document.querySelector('.right-slide');
let prevSlide = document.querySelector('.left-slide');
let totalSlide = slides.length;
let index = 0;

nextSlide.onclick=function ()
{
    next("next");
}

prevSlide.onclick=function ()
{
    next("prev");
}

function next(direction)
{
    if (direction=="next")
    {
        index++
        if(index==totalSlide)
        {
            index=0
        }
    }
    else
    {
        if(index==0)
        {
            index=totalSlide -1
        }
        else{
            index--
        }
    }
    for (i = 0; i< totalSlide; i++)
     {
       
       slides[i].classList.remove("active"); 
    }
    slides[index].classList.add("active");
}
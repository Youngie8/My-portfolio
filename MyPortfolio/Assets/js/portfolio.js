const col = document.querySelectorAll('.collumn');
const contact = document.querySelector('.contact');
const theme = document.querySelector(".theme");
var slide = document.querySelector(".section-1");



for(var i = 0; i < col.length; i++){
    col[i].addEventListener('mouseover',function(){
        this.classList.add("success");
    });
};
for(var i = 0; i < col.length; i++){
    col[i].addEventListener('mouseout',function(){
        this.classList.remove("success");
    })
}
contact.addEventListener('click', function(){
    document.querySelector('.side-bar').classList.toggle('none');
    
})
theme.addEventListener('click', function(){
    document.querySelector(".section-1").classList.toggle("changeTheme");
    document.querySelector(".section-3").classList.toggle("changeTheme");
    document.querySelector(".section-2").classList.toggle("changeTheme");
    document.querySelector(".side-bar").classList.toggle("changeTheme");
});
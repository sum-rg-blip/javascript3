let menubtn = document.querySelector("#iconbtn")
let ul = document.querySelector("#links")
let buttons = document.querySelector("#buttons")
let xbtn = document.querySelector("#closebtn")
menubtn.addEventListener("click",function(){
  ul.style.display = "flex"
  buttons.style.display = "block"
  menubtn.style.display = "none"
  xbtn.style.display="block"

})
xbtn.addEventListener("click",function(){
  ul.style.display = "none"
  buttons.style.display = "none"
  menubtn.style.display = "block"
  xbtn.style.display="none"
})

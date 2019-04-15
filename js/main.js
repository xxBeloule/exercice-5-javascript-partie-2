document.addEventListener('mouseover',function()
{
  // prends la source de la target
 var focuspointer = event.target.src;
 // si les 6 derniers caractères ne sont pas _2.jpg
if (focuspointer.slice(-6) != '_2.jpg')
{
  // alors on remplace l'image principal par l'alt
event.target.src = focuspointer.replace('.jpg', '_2.jpg');
}
});
document.addEventListener('mouseout', function()

})

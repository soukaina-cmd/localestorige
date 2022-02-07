document.getElementById("ajouter").addEventListener("click",ajouter)
afficher();

function ajouter() {
    var voiture = document.getElementById("voiture").value
    localStorage.setItem(last_item_id(),voiture) 
    window.location.href=""   
}

function afficher(){
var j =1;
while (localStorage.getItem(j)!=null){
document.getElementById("tab").innerHTML+='<tr><td>'+j+'</td><td>'+localStorage.getItem(j)+'</td><td><i onclick="supprimer(this)" class="fas fa-trash"></i></td></tr>';
j++;
} 
} 

function last_item_id(){
    var i=1; 
    while (localStorage.getItem(i)!=null)
    {i++;} 
    return i;
}
function supprimer(x) {
   var id =x.parentElement.parentElement.children[0].textContent
    if (confirm("voulez vous supprimer")){
        localStorage.removeItem(id)
        window.location.href="" 
    }
 }


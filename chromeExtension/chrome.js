let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn =document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveTabBtn = document.getElementById("save-tab");

//this function is for converting the string into array and storing in the array
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if(leadsFromLocalStorage){
   myLeads = leadsFromLocalStorage;
   render(myLeads);
}


saveTabBtn.addEventListener("click",function(){
      chrome.tabs.query({active : true , currentWindow : true},function(tabs){
         myLeads.push(tabs[0].url);
         localStorage.setItem("myLeads",JSON.stringify(myLeads));
         render(myLeads);
      })
})







//this function helps us to print the entered links in the inputbox
function render(leads){
   let listItems=""
   for(let i = 0; i<leads.length;i++){
      // ulEl.innerHTML += "<li><a href='"+ myLeads[i]+"'>" + myLeads[i] +"</a></li>";
      //const li= document.createElement("li");
      //li.textContent  = myLeads[i];
      //ulEl.append(li);
     // listItems += "<li><a target='_blank' rel='noopener' href='"+myLeads[i]+"'>"+myLeads[i] +"</li>";
     listItems += `<li>
         <a target='_blank' rel='noopener' href='${leads[i]}'>
         ${leads[i]}
         </a>
         </li>`;
   } 

   ulEl.innerHTML= listItems;
}

//this function is for deleteing all elements button
deleteBtn.addEventListener("dblclick",function(){
   localStorage.clear();
   myLeads=[];
   render(myLeads);
}

)
//this function is for save-button
inputBtn.addEventListener("click",function(){
   if(inputEl.value ===""){
      return 0;
   }
 myLeads.push(inputEl.value);
 inputEl.value="";
 localStorage.setItem("myLeads",JSON.stringify(myLeads));
render(myLeads);
})




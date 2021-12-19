function valid(){
   var a= document.form.uname.value;
   if(a.indexOf("@","!","#","$","%","^","&","*","(",")","0","1","2","3","4","5","6","7","8","9" )>=0){
       window.alert("Your username can only start with Alphabets")
   }
   var b=document.form.email.value;
   if(b.indexOf("@")<=1){
       window.alert("You can only enter 1 '@' ")
   }
   if(b.charAt(b.length-4)!='.'){
       window.alert("Add a '.'after your email domain")
   }

   var x=document.form.pswd.value;
   var y=document.form.cpswd.value;

   if(x!=y){
       window.alert("Passwords do not match");
   }

}
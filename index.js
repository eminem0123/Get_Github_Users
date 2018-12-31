function getUser(){
	//e.preventDefault();
	//e.stopPropagation();
	var username=document.getElementById("txt").value ;
	if(!username || username==""){
		var username= "colt";
	};
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
	if(xmlhttp.readyState==4 && xmlhttp.status==200){
		var user = JSON.parse(xmlhttp.responseText);
		document.getElementById("test").innerHTML=
		`<div class="panel panel-default">
		  <div class="panel-heading"><h3>${user.name}</h3></div>
		  <div class="panel-body">
			<div class="row">
				  <div class="col-md-3">
				   <img src='${user.avatar_url}'>
				  </div>
				  <div class="col-md-9">
				  <span class="btn btn-primary">Public repos ${user.public_repos}</span>
				   <span class="btn btn-danger">Public Gists ${user.public_gists}</span>
				  <ul class="list-group">
				  <li> Website:${user.blog}</li>
				  <li> Email:${user.email}</li>
				  </ul>
				  <a class="btn btn-success" target="_blank" href="${user.html_url}">Visit github</a>
				  </div>
			</div>
		 </div>
		</div>`
			}
}
	xmlhttp.open("GET","https://api.github.com/users/"+username,true);
	xmlhttp.send();
	 //document.getElementById("txt").value="" ;
	};
//document.getElementById("my").addEventListener("click",getUser,false);

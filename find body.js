function FindBody(){
let a = document.getElementsByTagName('body');
if(a.length===1){
	return a.item(0)
}	
}
function FindBodyOther(){
let b = $('html').children;
for (let index = 0; index < b.length; index++) {
    	if(String(b.item(index).tagName).toLowerCase() === "body"){
		return b.item(index)
	}
}	
}
function body(){
	return (FindBody() === FindBodyOther()?
	FindBody():
	(FindBody().length>0?
		FindBody():
		(FindBodyOther().length>0?
			FindBodyOther():
			null
		)
	));
}
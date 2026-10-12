export function body() {
    if (typeof document === "undefined") {
        return null;
    }
    let nativeElement = null , 
	jqueryElement = null,
    nativeBody = document.getElementsByTagName("body"),
	jqueryBody = $("html").children;
	if (nativeBody.length === 1) {
        nativeElement = nativeBody.item(0);
    }
    for (let index = 0; index < jqueryBody.length; index++) {
        let element = jqueryBody.item(index);
        if (String(element.tagName).toLowerCase() === "body") {
            jqueryElement = element;
            break;
        }
    }
    if (nativeElement === jqueryElement) {
        return nativeElement;
    }
    return nativeElement ?? jqueryElement;
}

// function FindBody(){
// 	let a = document.getElementsByTagName('body');
// 	if(a.length===1){
// 		return a.item(0)
// 	}	
// }
// function FindBodyOther(){
// 	let b = $('html').children;
// 	for (let index = 0; index < b.length; index++) {
//     	if(String(b.item(index).tagName).toLowerCase() === "body"){
// 			return b.item(index)
// 		}
// 	}	
// }
// export function body() {
//     if (typeof document === "undefined") {
//         return null;
//     }
// 	return (FindBody() === FindBodyOther()?
// 	FindBody():
// 	(FindBody().length>0?
// 		FindBody():
// 		(FindBodyOther().length>0?
// 			FindBodyOther():
// 			null
// 		)
// 	));
// }


// export function FindBody() {
//     if (typeof document === "undefined") {
//         return null;
//     }

//     return document.getElementsByTagName("body").item(0);
// }

// export function FindBodyOther() {
//     if (typeof document === "undefined") {
//         return null;
//     }
//     const children = document.documentElement?.children;
//     if (!children) {
//         return null;
//     }
//     for (const element of children) {
//         if (element.tagName.toLowerCase() === "body") {
//             return element;
//         }
//     }
//     return null;
// }

// export function body() {
//     const first = FindBody();
//     const second = FindBodyOther();

//     if (first === second) {
//         return first;
//     }

//     return first ?? second;
// }

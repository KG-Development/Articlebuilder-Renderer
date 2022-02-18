import hostname from "../Module/host.js";

// export default class Settings {
//     constructor ({readOnly = false} = {}) {
//         this.sessionId = this.getCookie("session-id") || undefined;
//         if(readOnly === false && this.sessionId === undefined) {
//             //window.location.href = "/";
//         }
//     }
//     getCookie (pName) {
//         let name = pName + "=";
//         let decodedCookie = decodeURIComponent(document.cookie);
//         let ca = decodedCookie.split(';');                      

//         for(let i = 0; i < ca.length; i++) {    
//             let c = ca[i];
//             while (c.charAt(0) == ' ') {
//                 c = c.substring(1);
//             }
//             if (c.indexOf(name) == 0) {
//                 return c.substring(name.length, c.length);
//             }
//         }
//         return "";
//     }
//     async getId () {
//         let response = await fetch(hostname + "/blog//newId");
//         return (await response.json()).id;
//     }

//     static async getSelectArticle () {
//         let response = await fetch(hostname + "/article/select");
//         if(response.ok)
//             return await response.json();
//     }
// } 

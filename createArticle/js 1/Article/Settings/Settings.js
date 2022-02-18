import hostname from "../Module/host.js";

export default class Settings {
   constructor ({readOnly = false} = {}) {
       
    }

    static async getSelectArticle () {
        if (!localStorage.length) return undefined;
        let articles = [];
        for (let i = 0; i < localStorage.length; i++) {
            articles.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
        console.log(articles);
        return articles;
    }
} 

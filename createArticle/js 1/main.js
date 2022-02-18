import { Header } from "./Article/Module/Header.js";
import { Paragraph } from "./Article/Module/Paragraph.js";
import  List  from './Article/Module/List.js';
import  Divider from "./Article/Module/Divider.js";
import { ImageArticle } from './Article/Module/image.js';
import { PDFExtract } from "./Article/Module/extractPdf.js";
import { Spacing } from "./Article/Module/Spacing.js";
import ArticleBuilder from "./ArticleBuilder/ArticleBuilder.js";
import CheckList from "./Article/Module/CheckList.js";
import Downloadable from './Article/Module/Downloadable.js';

const App = () => {
    let ab = new ArticleBuilder(
        {
            holder: document.querySelector("#app"),
            tools: {
                paragraph: {
                    class: Paragraph,
                    allowToolbox: true
                },
                header: {
                    class: Header,
                    allowToolbox: true
                },
                list: {
                    class: List,
                    allowToolbox: true
                },
                divider: {
                    class: Divider,
                    allowToolbox: true
                },
                image: {
                    class: ImageArticle,
                    allowToolbox: true
                },
                pdf: {
                    class: PDFExtract,
                    allowToolbox: true
                },
                checklist: {
                    class: CheckList,
                    allowToolbox: true
                },
                spacing : {
                    class: Spacing,
                    allowToolbox: true
                },
                downloadable: {
                    class: Downloadable,
                    allowToolbox: true
                }
            }
        }
    );
    document.querySelector("#app").appendChild(ab.render());

    ab.onArticleChange = (id) => {
        loadNewArticle(ab, id);
    }
}

async function loadNewArticle(ab, id) {
        if(id === undefined) {
            window.location.reload();
        }
        ab.remove();
        ab = undefined;
        let response = await fetch("http://localhost:80/article/" + id);
        if(!response.ok) return;
        let article = await response.json();
        ab = new ArticleBuilder(
            {
                holder: document.querySelector("#app"),
                tools: {
                    paragraph: {
                        class: Paragraph,
                        allowToolbox: true
                    },
                    header: {
                        class: Header,
                        allowToolbox: true
                    },
                    list: {
                        class: List,
                        allowToolbox: true
                    },
                    divider: {
                        class: Divider,
                        allowToolbox: true
                    },
                    image: {
                        class: ImageArticle,
                        allowToolbox: true
                    },
                    pdf: {
                        class: PDFExtract,
                        allowToolbox: true
                    },
                    checklist: {
                        class: CheckList,
                        allowToolbox: true
                    },
                    spacing : {
                        class: Spacing,
                        allowToolbox: true
                    },
                    downloadable : {
                        class: Downloadable,
                        allowToolbox: true
                    }
                },
                data: article
            },
        );
        ab.onArticleChange = (id) => {
            ab = loadNewArticle(ab, id);
        }
        document.querySelector("#app").appendChild(ab.render());
        return ab;
}

App();
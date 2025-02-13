import LISS, * as d from "LISS";

console.warn(Object.keys(d))

const rows = document.body.querySelectorAll("tr[is='user-line']");

// affichage de donnees
for (let row of rows) {

    const i = row.getAttribute("user-id");

    const response = await fetch(`http://localhost:8080/user/${i}`);
    const res =  await response.json();

    // queerselector a l'interieur ou dehors???

    //row.setAttribute("user-id", id_server);
    row.setAttribute("user-name", res.nom);
    row.setAttribute("user-age", res.age);
    row.setAttribute("user-profession", res.profession);
}

const html = LISS.require("./index.html");

//console.warn(html);

export default class UserLine extends LISS({
    html,
    host: HTMLTableRowElement,
    content_generator: d.LISSAuto_ContentGenerator

}) {
    constructor() {
        super();
        console.warn(this.host.outerHTML)
        const ID = this.host.getAttribute("user-id");
        const btn_delete = this.content.querySelector(".btn_delete")
        btn_delete.addEventListener("click", async () => {
            console.log("click");
            //... requete fetch pour supprimer l'utilisateur
            const res = await fetch(`http://localhost:8080/user/${ID}`, {method : 'DELETE'});
            console.log(res.ok, res.status, res.statusText);
        })

    }

    /*static observedAttributes = ["user-age"]

    attributeChangedCallback(...args) {
        console.warn(...args);
    }*/
}


/*

        const ID = this.host.getAttribute("user-id");
/*
        console.warn(this.content.innerHTML);

        const btn_delete = this.content.querySelector(".btn_delete")
        btn_delete.addEventListener("click", async () => {
            console.log("click");
            //... requete fetch pour supprimer l'utilisateur
            const res = await fetch(`http://localhost:8080/user/${ID-1}`, {method : 'POST'});
            console.log(res.ok, res.status, res.statusText);
        });*//*
    }

    init() {
        super.init();
        console.warn("!")
    }
}
*/
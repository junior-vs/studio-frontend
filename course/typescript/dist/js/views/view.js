export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletor);
        if (this.elemento) {
            this.elemento = elemento;
        }
        else {
            throw new Error(`Selector ${seletor} não existe no DOM`);
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}

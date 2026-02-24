// 2. Classe para experiência profissional
class ExperienciaProfissional {
    constructor(titulo, empresa, periodo) {
        this.titulo = titulo;
        this.empresa = empresa;
        this.periodo = periodo;
    }
    renderizar() {
        const div = document.createElement('div');
        div.className = 'item-curriculo experiencia';
        div.innerHTML = `
            <h3> ${this.titulo}</h3>
            <p><strong>Empresa:</strong> ${this.empresa}</p>
            <p><strong>Período:</strong> ${this.periodo}</p>
        `;
        return div;
    }
}
// 3. Classe para formação acadêmica
class FormacaoAcademica {
    constructor(titulo, instituicao, anoConclusao) {
        this.titulo = titulo;
        this.instituicao = instituicao;
        this.anoConclusao = anoConclusao;
    }
    renderizar() {
        const div = document.createElement('div');
        div.className = 'item-curriculo formacao';
        div.innerHTML = `
            <h3> ${this.titulo}</h3>
            <p><strong>Instituição:</strong> ${this.instituicao}</p>
            <p><strong>Concluído em:</strong> ${this.anoConclusao}</p>
        `;
        return div;
    }
}
// 4. Manipulação do Dom (adicionando dinâmica)
const container = document.getElementById("conteudo-curriculo");
// Criar um array que aceite qualquer coisa que assine o contrato do curriculo
const meuCurriculo = [
    new ExperienciaProfissional("Desenvolvedor Front-end", "Tech Solutions", "2023 - Presente"),
    new FormacaoAcademica("Análise e Desenvolvimento de Sistemas", "Universidade de São Paulo", 2022),
    new ExperienciaProfissional("Estagiário de TI", "Ada Tech", "2021 - 2023"),
    new FormacaoAcademica("Curso de JavaScript", "Udemy", 2021)
];
// Iterando sobre os itens e jogando no HTML
if (container) {
    meuCurriculo.forEach(item => {
        container.appendChild(item.renderizar());
    });
}
export {};
//# sourceMappingURL=app.js.map
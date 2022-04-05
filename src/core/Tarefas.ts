interface IConteudoTarefa {
    nome: string,
    estado: 'concluido' | 'nao concluido'
}

export default class Tarefa {
    public id: string
    public lista: string
    private conteudo: IConteudoTarefa[]

    constructor(id: string, list: string, conteudo: IConteudoTarefa[]) {
        this.id = id;
        this.lista = list;
        this.conteudo = conteudo
    }

    static vazio() {
        return new Tarefa("", "", []);
    }

    get getId() {
        return this.id
    }

    get getNome() {
        return this.lista
    }

    get getConteudo() {
        return this.conteudo
    }
}
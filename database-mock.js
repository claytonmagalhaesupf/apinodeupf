//database-mock.js

import { randomUUID } from "node:crypto"

export class DatabaseMock {

    #alunos = new Map()

    //simula um select na tabela
    list() { 
        return Array.from(this.#alunos.entries())
    }

    //simular um insert into tabela
    create(aluno) {
        const alunoId = randomUUID()
        this.#alunos.set(alunoId, aluno)
    }

    update(id, aluno) {
        this.#alunos.set(id, aluno)
    }

    delete(id) {
        this.#alunos.delete(id)
    }

}
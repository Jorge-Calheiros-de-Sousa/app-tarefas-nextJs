import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import Lista from '../components/Lista';
import Tarefa from '../core/Tarefas'
import style from "../styles/Home.module.css";

function Home() {
  const [tarefa, setTarefa] = useState<Tarefa>(Tarefa.vazio());


  const tarefas = [
    new Tarefa("1", "Lista1", [{ nome: "tarefa1", estado: "nao concluido" }, { nome: "tarefa1", estado: "concluido" }, { nome: "tarefa1", estado: "nao concluido" }, { nome: "tarefa1", estado: "nao concluido" }]),
    new Tarefa("2", "Lista1", [{ nome: "tarefa1", estado: "nao concluido" }, { nome: "tarefa1", estado: "concluido" }]),
    new Tarefa("3", "Lista1", [{ nome: "tarefa1", estado: "nao concluido" }, { nome: "tarefa1", estado: "concluido" }, { nome: "tarefa1", estado: "concluido" }]),
    new Tarefa("4", "Lista1", [{ nome: "tarefa1", estado: "nao concluido" }]),
    new Tarefa("5", "Lista1", [{ nome: "tarefa1", estado: "nao concluido" }])
  ]

  function checkConcluido(event: Event) {
    console.log(event.target);
  }

  function returnConcluido(event: Event) {

  }

  useEffect(() => {
    const primeiroElemento = tarefas[0];
    setTarefa(primeiroElemento);
  }, []);

  function getOne(id: number) {
    const tarefa = tarefas.filter(tarefa => tarefa.getId === id.toString());
    return tarefa[0];
  }

  function pegarConteudo(event: any) {
    const id = event.target.getAttribute("tarefa-id");
    const tarefa = getOne(id);
    setTarefa(tarefa);
  }

  const configs = {
    tarefas: tarefas,
    tarefaAtual: tarefa,
    click: pegarConteudo
  }

  return (
    <Layout configs={configs}>
      <div className={style.content}>
        <Lista tarefa={tarefa} mostrar="nao concluidos" checkConcluido={checkConcluido} />
        <Lista tarefa={tarefa} mostrar="concluidos" titulo='Concluidos' returnConcluido={returnConcluido} />
      </div>
    </Layout>
  )
}

export default Home

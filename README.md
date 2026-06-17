# desafio-dois-pontos-programacao
Este projeto foi desenvolvido para demonstrar a criação de uma pipeline de Integração Contínua (CI) utilizando GitHub Actions.

A pipeline foi configurada para executar automaticamente os testes do projeto sempre que houver alterações no código, além de permitir execução manual e execução agendada.

Também foram utilizadas ferramentas para análise de código (ESLint), execução de testes automatizados (Mocha) e geração de relatórios de testes (Mochawesome), que ficam disponíveis para consulta após a execução da pipeline.

Estrutura da Pipeline

A pipeline foi configurada no GitHub Actions e possui três etapas principais:

1. Inspeção de Código (Lint)

Nesta etapa é executada uma análise estática do código utilizando ESLint.

Objetivos:

Identificar possíveis erros de sintaxe.
Garantir padronização do código.
Evitar que códigos com problemas avancem para a etapa de testes.

Comando executado: npm run lint

2. Testes Unitários

Após a aprovação da etapa de lint, são executados os testes automatizados utilizando Mocha.

Os testes validam os seguintes cenários:

Login realizado com sucesso.
Credencial expirada.
Usuário não encontrado.
Senha incorreta.

Comando executado: npm test

3. Geração e Armazenamento de Relatórios

Após a execução dos testes, o Mochawesome gera relatórios detalhados contendo:

Quantidade de testes executados.
Quantidade de testes aprovados.
Quantidade de testes falhos.
Tempo de execução.
Evidências da execução.

Arquivos gerados:

   reports/
       ├── mochawesome.html
       └── mochawesome.json

O relatório é publicado na pipeline através da action:

actions/upload-artifact@v4

permitindo o download diretamente pelo GitHub Actions.

4. Simulação de Deploy

Após a execução bem-sucedida dos testes, é executada uma etapa de deploy simulado.


Formas de Execução

A pipeline pode ser executada de três maneiras:

Push

Executa automaticamente quando alterações são enviadas para a branch main.

push:
  branches:
    - main
	
Execução Manual

Permite executar a pipeline manualmente pela interface do GitHub.

workflow_dispatch:

Execução Agendada

Executa automaticamente em horário pré-configurado.

schedule:
  - cron: '0 11 * * *' 
  
Controle de Concorrência

Foi utilizado o recurso de concorrência do GitHub Actions para evitar múltiplas execuções simultâneas da mesma branch.

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

Benefícios:

Evita desperdício de recursos.
Cancela execuções antigas quando um novo commit é enviado.
Mantém apenas a execução mais recente ativa.

Fluxo da Pipeline
Push / Manual / Schedule
            ↓
 Inspeção de Código (ESLint)
            ↓
 Testes Unitários (Mocha)
            ↓
 Geração de Relatório (Mochawesome)
            ↓
 Upload do Artefato
            ↓
 Simulação de Deploy
 
Evidências da Execução

A execução da pipeline pode ser visualizada na aba Actions do GitHub.

O relatório de testes fica disponível para download através do artefato:

relatorio-validacao-login

Conclusão

A pipeline implementada aplica conceitos fundamentais de Integração Contínua, incluindo inspeção de código, execução automatizada de testes unitários, geração de relatórios, armazenamento de artefatos e simulação de deploy utilizando GitHub Actions.

Como o projeto utilizado na atividade consiste em uma aplicação simples de validação de login executada por meio de testes unitários, não foi implementada uma esteira de testes End-to-End (E2E), uma vez que o projeto não possui interface gráfica ou fluxo completo de navegação que justifique esse tipo de teste.
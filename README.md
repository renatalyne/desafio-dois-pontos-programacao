# Pipeline CI para Validação de Login

## Objetivo

Este projeto foi desenvolvido para demonstrar a criação de uma pipeline de Integração Contínua (CI) utilizando GitHub Actions.

A pipeline foi configurada para executar automaticamente os testes do projeto sempre que houver alterações no código, além de permitir execução manual e execução agendada.

Também foram utilizadas ferramentas para análise de código (ESLint), execução de testes automatizados (Mocha) e geração de relatórios de testes (Mochawesome), que ficam disponíveis para consulta após a execução da pipeline.

## Tecnologias Utilizadas

- Node.js
- GitHub Actions
- Mocha
- Mochawesome
- ESLint

## Funcionalidades da Pipeline

A pipeline possui os seguintes gatilhos:

- Execução por push na branch `main`
- Execução manual através do GitHub Actions
- Execução agendada por meio de cron

## Etapas da Pipeline

### 1. Inspeção de Código

Nesta etapa é executada uma análise estática utilizando o ESLint para identificar possíveis problemas no código.

### 2. Execução dos Testes

Após a validação do código, são executados os testes automatizados utilizando o framework Mocha.

Os cenários testados são:

- Validar login com sucesso
- Validar login expirado
- Validar login com senha incorreta
- Validar usuário não encontrado

### 3. Geração do Relatório

Após a execução dos testes, o Mochawesome gera um relatório contendo os resultados da execução.

Os arquivos são armazenados na pasta:

```text
reports/
```

### 4. Armazenamento do Relatório

O relatório é publicado como artefato da pipeline através do GitHub Actions, permitindo seu download após cada execução.

Artefato gerado:

```text
relatorio-validacao-login
```

### 5. Simulação de Deploy

Após a execução bem-sucedida dos testes, a pipeline executa uma etapa de deploy simulado.

## Fluxo da Pipeline

```text
Push / Manual / Schedule
          ↓
     ESLint
          ↓
   Testes Mocha
          ↓
 Relatório Mochawesome
          ↓
 Upload do Artefato
          ↓
 Deploy Simulado
```

## Conclusão

A pipeline implementada aplica conceitos fundamentais de Integração Contínua, incluindo inspeção de código, execução automatizada de testes unitários, geração de relatórios e armazenamento de artefatos.

Como o projeto utilizado é uma aplicação simples de validação de login, não foi implementada uma esteira de testes End-to-End (E2E), pois o projeto não possui interface gráfica ou fluxo completo de navegação.

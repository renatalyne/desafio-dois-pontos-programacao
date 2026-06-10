# desafio-dois-pontos-programacao
Trabalho de Integração Contínua com GitHub Actions
  O objetivo deste trabalho foi configurar uma pipeline de Integração Contínua (CI) utilizando GitHub Actions para executar testes automatizados de forma automática.

   Passo a Passo Realizado
1. Configuração dos testes

	Foi utilizado o framework Mocha para execução dos testes automatizados do projeto.

	Os testes implementados validam os seguintes cenários:

		Login realizado com sucesso.
		Credencial expirada.
		Senha incorreta.
		Usuário não encontrado.
2. Configuração da Pipeline

	Foi criado o arquivo:.github/workflows/ci.yml

	Neste arquivo foi configurada uma pipeline para:

			Executar quando ocorrer um push na branch principal.
            Permitir execução manual através do GitHub Actions.
            Executar automaticamente em horário programado (schedule). 
			  schedule:
                 - cron: '0 11 * * *' - 11:00

3. Execução dos Testes

    Após a instalação das dependências, a pipeline executa os testes automatizados utilizando:

    npm test
4. Geração do Relatório

    O resultado da execução dos testes é salvo em um arquivo de relatório.

5. Armazenamento do Relatório

     O relatório gerado é armazenado como Artifact no GitHub Actions, permitindo sua consulta após a execução da pipeline.

Ao realizar alterações no projeto e enviar para o GitHub, a pipeline é executada automaticamente, garantindo que os testes sejam executados e que o relatório fique disponível para download em ACtions.
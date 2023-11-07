
# Jornadas de Acessibilidade e Usabilidade na AP 2023

<hr>

## Dia 09 novembro - '15h45/16h45 \| Exercício prático (parte 1) – Avaliação de acessibilidade e usabilidade do meu sítio web' e '16h45/17h45 \| Exercício prático (parte 2) – Avaliação de acessibilidade e usabilidade do meu sítio web' (120 minutos)

### Materiais
-  [Website Jornada Acessibilidade 2023 - Fora de Mão](https://amagovpt.github.io/a11yfm/exercicio/original/index.html)
-  [Website Jornadas Acessibilidade 2023 - Na direção certa](https://amagovpt.github.io/a11yfm/exercicio/corrigido/index.html)
-  [Checklist dos 10 aspetos críticos de acessibilidade funcional](checklist-10aspetos.html)
-  [Template Plano de correção word](ficheiros/template-plano-de-correcao.docx)


### Ferramentas necessárias
- [ANDI](https://www.ssa.gov/accessibility/andi/help/install.html)
- [Web developer tools](https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm)
- [Access Monitor (análise automática)](https://accessmonitor.acessibilidade.gov.pt/)

### Auditoria de páginas Web com leitores de ecrã

Aprenda o básico para navegar e auditar páginas web

- [Teclas de atalho Narrator](narrador.md) \| leitor de ecrã incluído no sistema operativo Windows 10 e 11
- [Teclas de atalho NVDA](nvda.md) \| leitor de ecrã grátis para Windows
- [Teclas de atalho VO](vo.md) \| leitor de ecrã incluído no sistema operativo macOS

<hr>

## Dia 10 novembro - '15h15/16h15 \| Exercício prático - A Declaração de Acessibilidade no meu sítio web' (50 minutos)

### A. Antes de começar a preencher a Declaração

Antes de começar a preencher a Declaração de Acessibilidade com o Gerador é importante recolher e colocar no sítio Web toda a informação que vai ser anexada à Declaração:

- De acordo com o DL n.º 83/2018, a Declaração de Acessibilidade deve ficar em https://dominio-do-site.pt/acessibilidade (pode ser a pasta /acessibilidade ou o ficheiro acessibilidade.html, .js, .aspx, .php, ou outro qualquer.
- Coloquemos os ficheiros anexos, por exemplo, em /acessibilidade:
  1. Avaliação Automática: 20231110_aa.xlsx
  2. Avaliação Manual - checklist '10 aspetos críticos': 20231110_am_10aspetos.xlsx
  3. Avaliação Manual - checklist 'Conteúdo': 20231110_am_conteudo.xlsx
  4. Avaliação Manual - checklist 'Transação': 20231110_am_transacao.xlsx
  5. Relatório com os Testes de Usabilidade: 20231110_tu.html

### B. Preencher a Declaração de Acessibilidade com o Gerador

O modelo da Declaração de Acessibilidade é importante! Para o ajudar, a AMA desenvolveu um Gerador. Introduza a informação e o Gerador fornece-lhe uma Declaração de acordo com o modelo. Depois é só fazer copy/paste do HTML para a página template que vai usar para publicar a Declaração no sítio web.

- Preencher a Declaração com o Gerador: [https://www.acessibilidade.gov.pt/gerador/](https://www.acessibilidade.gov.pt/gerador/)

No preenchimento use os seguintes dados.

&#xF114; Para o Passo 1. Informação da entidade:

- A \| AMA, I.P \| o seu sítio Web \| O Meu Blog \| https://jorgeponto.github.io/bootstrap-blog-jekyll/

&#xF114; Para o Passo 2. Estado de conformidade:

- Plenamente conforme

&#xF114; Para o Passo 3. Elaboração da Declaração

- 10/11/2023
- Sim
- 10/11/2023 \| Avaliação Automática (xlsx, 21kb) \| 20231110_aa.xlsx \| AccessMonitor \| 5 \| 5 páginas com classificação média de 9,2 na escala do AccessMonitor (escala de 1 a 10)
- Sim
- 10/11/2023 \| Checklist 10 aspetos críticos de acessibilidade funcional (xlsx, 125kb) \| 20231110_am_10aspetos.xlsx \| 5 \| 20 \| 24
- 10/11/2023 \| Checklist Conteúdo (xlsx, 103kb) \| 20231110_am_conteudo.xlsx \| 5 \| 15 \| 17
- 10/11/2023 \| Checklist Transação (xlsx, 87kb) \| 20231110_am_transacao.xlsx \| 5 \| 10 \| 13
- Sim
- 10/11/2023 \| Testes de Usabilidade com Utilizadores de Leitores de Ecrã \| 20231110_tu.html \| 2 utilizadores de leitor de ecrã e 4 utilizadores sem deficiência \| 4 Tarefas \| Em média os utilizadores de leitores de ecrã foram 10x mais rápidos que os utilizadores sem deficiência a terminar as tarefas. Foram localizados em média 10 issues por tarefa por cada utilizador, os quais foram retificados.

&#xF114; Para o Passo 4. Contacto e solicitação de informação relativa ao sítio Web

- Email: \| `<a href="mailto:info@meublog.pt">info@meublog.pt</a>`
- Telefone/WhatsApp: \| 999 999 999 (pode ligar-nos ou enviar-nos uma mensagem de texto via WhatsApp)

&#xF114; Para o Passo 5. Outras evidências

- Não

### C. Integrar e Publicar a Declaração de Acessibilidade no sítio web

Agora que já tem um ficheiro com a Declaração de Acessibilidade preenchida, vamos publicá-la no sítio Web. Para isso, precisa da página onde vai integrar a Declaração. No presente exercício, nós damos-lhe a página template: 

1. Descarregue a página [XX.zip](https://jorgeponto.github.io/bootstrap-blog-jekyll/acessibilidade/XX.zip), descompacte o zip e ficará com o ficheiro XX.html .
2. Abra a página XX.html e a página que resultou do Gerador com o seu Notepad.
3. Copie todo o conteúdo do ficheiro que obteve do Gerador para a página XX.html. Deixe uma linha em branco a seguir aos últimos '---' (3 hífens) e cole o conteúdo.
4. Renomei a página 'XX.html' com o número do grupo (XX corresponde ao número do grupo; 01.html, 02.html, ... 10.html) e envie para [jorge.fernandes@ama.pt](mailto:jorge.fernandes@ama.pt).
5. O formador da sessão fará o upload para o GitHub para analisarmos o aspeto final.

Lembre-se, o Gerador fornece a estrutura da página (HTML). o Estilo é o do sítio Web!

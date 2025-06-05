# DSIN - Sistema de Gestão de Multas e Avisos

Projeto acadêmico desenvolvido para a disciplina de Fábrica de Projetos Ágeis, na Universidade de Marília (UNIMAR).

## Descrição

O DSIN é um sistema web para cadastro, visualização e gerenciamento de multas e avisos relacionados a veículos e condutores. O sistema foi desenvolvido como parte de um projeto acadêmico, com o objetivo de simular um ambiente de controle de infrações de trânsito, permitindo o registro, consulta e análise de dados.

## Funcionalidades

- **Login de Usuário:** Tela inicial para autenticação.
- **Cadastro de Multas:** Permite registrar multas com dados do veículo, condutor e detalhes da infração.
- **Cadastro de Avisos:** Permite registrar avisos preventivos para condutores e veículos.
- **Visualização de Multas e Avisos:** Exibe detalhes completos de cada registro, incluindo anexos e observações.
- **Dashboard:** Visualização gráfica de estatísticas das infrações e avisos cadastrados.
- **Pesquisa:** Busca de multas por nome, CPF ou placa do veículo.
- **Gestão de Conta:** Área para visualização e edição de dados do usuário.

## Estrutura do Projeto

```
.
├── index.html                # Tela de login
├── pages/
│   ├── cadastrarMulta.html   # Cadastro de multas
│   ├── cadastrarAviso.html   # Cadastro de avisos
│   ├── verificarMultas.html  # Consulta de multas
│   ├── verificarAvisos.html  # Consulta de avisos
│   ├── dashboard.html        # Painel de estatísticas
│   ├── conta.html            # Dados do usuário
│   └── visualizar/           # Visualização detalhada de multas e avisos
├── assets/
│   ├── style.css             # Estilos principais
│   ├── script.js             # Scripts gerais
│   └── scriptApi.js          # Integração e gráficos
├── assetsLogin/
│   ├── script.js                     # Script de login
│   ├── scriptCadastrarMulta.js       # Script de cadastro de multas
│   ├── scriptConta.js                # Script da conta do usuário
│   └── scriptVerificarMultas.js      # Script de consulta de multas
├── images/                   # Imagens e logotipos
└── .gitattributes
```

## Tecnologias Utilizadas

- **HTML5, CSS3, JavaScript**
- **Bootstrap 5** (CDN)
- **APIs REST** (para integração de dados)
- **Gráficos dinâmicos** (para o dashboard)

## Como Executar

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Abra o arquivo `index.html` em seu navegador.
3. Certifique-se de que a API backend (caso exista) esteja rodando localmente para o correto funcionamento das funcionalidades de cadastro e consulta.

## Instruções para o Backend

O sistema depende de uma API backend para autenticação, cadastro e consulta de multas e avisos.

### Tecnologias sugeridas

- **.NET 6+** (C#) — API RESTful
- **Banco de Dados**: SQL Server ou outro compatível

### Como executar o backend

1. Clone o repositório do backend (caso esteja separado).
2. Instale o SDK do .NET 6 ou superior.
3. No diretório do backend, execute:
   ```bash
   dotnet restore
   dotnet build
   dotnet run
   ```
4. A API será iniciada, por padrão, em `http://localhost:5163`.

### Endpoints utilizados no frontend

- `POST http://localhost:5163/Usuarios/login` — Login de usuário
- `GET/POST http://localhost:5163/multas` — Consulta e cadastro de multas
- `GET http://localhost:5163/Usuarios/{id}` — Dados do usuário

> Certifique-se de que a API esteja rodando antes de acessar o frontend.

## Autores

- Nome do(s) autor(es) do projeto: Gabriele Martinez, Julia Capellini, Guilherme da Silva, Leonardo Santos, Ryan Rodrigues.
- Universidade de Marília - UNIMAR

---

> **Universidade de Marília - UNIMAR**  
> Projeto acadêmico - DSIN  
> 2024 
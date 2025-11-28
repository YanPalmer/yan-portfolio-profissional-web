# 👨‍💻 Portfólio Web de Yan

Um portfólio web profissional, moderno e responsivo construído com **React 19**, **TailwindCSS 4** e **Vite**.

## 🎯 Características

- **Design Minimalista** - Tema escuro elegante com destaques em azul e roxo
- **100% Responsivo** - Funciona perfeitamente em desktop, tablet e mobile
- **Modo Claro/Escuro** - Toggle de tema com preferência do usuário
- **Animações Suaves** - Efeito de digitação, scroll reveal e transições fluidas
- **Rápido** - Otimizado para performance com Vite
- **Acessível** - Segue padrões WCAG de acessibilidade
- **Pronto para Deploy** - Deploy em um clique no Vercel

## 📱 Seções

1. **Home** - Apresentação com efeito de digitação e links sociais
2. **Sobre Mim** - Biografia e trilha de conhecimento interativa
3. **Projetos** - Grid de projetos com tecnologias e links
4. **Habilidades** - Categorias de tecnologias com ícones
5. **Contato** - Formulário de contato e informações de contato

## 🚀 Quick Start

### Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>
cd yan-portfolio

# Instale as dependências
pnpm install
```

### Desenvolvimento

```bash
# Inicie o servidor local
pnpm dev

# Acesse http://localhost:5173
```

### Build

```bash
# Crie a build de produção
pnpm build

# Visualize a build
pnpm preview
```

## 🌐 Deploy no Vercel

### Método 1: GitHub Integration (Recomendado)

1. Faça push do código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "Add New Project"
4. Selecione seu repositório
5. Clique em "Deploy"

### Método 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## 📝 Personalização

### Editar Informações

Edite `client/src/lib/constants.ts`:

```typescript
export const PORTFOLIO_INFO = {
  name: "Seu Nome",
  title: "Seu Título",
  email: "seu@email.com",
  phone: "+55 (11) 99999-9999",
  location: "Sua Cidade",
  socialLinks: {
    github: "https://github.com/seu-usuario",
    linkedin: "https://linkedin.com/in/seu-usuario",
    email: "mailto:seu@email.com",
  },
};
```

### Adicionar Projetos

Edite `client/src/components/sections/Projects.tsx` e adicione ao array `projects`.

### Personalizar Cores

Edite `client/src/index.css` e modifique as variáveis CSS de tema.

## 🎨 Tecnologias

- **Frontend**: React 19, TypeScript, TailwindCSS 4
- **Build Tool**: Vite
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📊 Performance

- ⚡ Lighthouse Score: 95+
- 📦 Bundle Size: ~50KB (gzipped)
- 🚀 Load Time: <1s em 4G

## 🔧 Estrutura

```
client/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── sections/
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       └── Contact.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── lib/
│   │   └── constants.ts
│   ├── App.tsx
│   └── index.css
└── public/
```

## 📚 Documentação

- [Guia de Deploy](./DEPLOYMENT.md) - Instruções detalhadas de deploy
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [TailwindCSS Docs](https://tailwindcss.com)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para:
- Reportar bugs
- Sugerir novas funcionalidades
- Fazer pull requests

## 📄 Licença

MIT - Veja [LICENSE](./LICENSE) para detalhes

## 👤 Autor

**Yan** - [GitHub](https://github.com) | [LinkedIn](https://linkedin.com)

---

Desenvolvido com ❤️ usando React e TailwindCSS


# 🎨 Guia de Personalização - Portfólio de Yan

Este guia mostra como personalizar cada aspecto do seu portfólio de forma rápida e fácil.

## 📝 1. Informações Pessoais

**Arquivo**: `client/src/lib/constants.ts`

```typescript
export const PORTFOLIO_INFO = {
  name: "Seu Nome",                    // Seu nome completo
  title: "Seu Título",                 // Ex: Desenvolvedor Full Stack
  description: "Sua descrição",        // Descrição curta (usado no Hero)
  shortBio: "Sua bio...",              // Bio mais longa
  email: "seu@email.com",              // Email de contato
  phone: "+55 (11) 99999-9999",        // Telefone
  location: "Sua Cidade, País",        // Localização
  socialLinks: {
    github: "https://github.com/seu-usuario",
    linkedin: "https://linkedin.com/in/seu-usuario",
    email: "mailto:seu@email.com",
  },
};
```

## 🎯 2. Seção Hero (Apresentação)

**Arquivo**: `client/src/components/sections/Hero.tsx`

### Alterar Emoji/Ícone

```typescript
<div className="text-6xl mb-4">👨‍💻</div>  // Mude para outro emoji
```

### Alterar Botões

```typescript
<Button>Entrar em Contato</Button>      // Texto do botão
<Button>Baixar Currículo</Button>       // Texto do botão
```

## 📚 3. Seção Sobre (Trilha de Conhecimento)

**Arquivo**: `client/src/components/sections/About.tsx`

### Adicionar Tecnologia

```typescript
const timeline: TimelineItem[] = [
  {
    id: 1,
    tech: "Node.js",           // Nome da tecnologia
    year: "2021",              // Ano
    description: "Descrição",  // O que aprendeu
  },
  // ... adicione mais
];
```

### Alterar Biografia

```typescript
<p className="text-lg text-muted-foreground max-w-2xl">
  Sua biografia aqui...
</p>
```

## 🚀 4. Seção Projetos

**Arquivo**: `client/src/components/sections/Projects.tsx`

### Adicionar Novo Projeto

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Nome do Projeto",
    description: "Descrição breve",
    image: "🎨",                        // Emoji do projeto
    technologies: ["React", "Node.js"], // Tecnologias usadas
    githubUrl: "https://github.com/...",
    liveUrl: "https://seu-projeto.com", // Opcional
  },
  // ... adicione mais
];
```

### Emojis Sugeridos

- 🎨 Design/Frontend
- ⚙️ Backend/API
- 📊 Dashboard/Analytics
- ✅ Tarefas/Todo
- 💬 Chat/Comunicação
- 🛒 E-commerce
- 🎮 Jogo
- 📱 App Mobile
- 🔐 Segurança
- 🌐 Web

## 💡 5. Seção Habilidades

**Arquivo**: `client/src/components/sections/Skills.tsx`

### Adicionar Categoria

```typescript
const skillCategories: SkillCategory[] = [
  {
    id: 1,
    category: "Frontend",
    icon: <Palette className="h-6 w-6" />,
    skills: ["React", "TypeScript", "TailwindCSS"],
  },
  // ... adicione mais
];
```

### Alterar Ícones

Use ícones do [Lucide React](https://lucide.dev):

```typescript
import { Code2, Database, Zap, Palette } from "lucide-react";

icon: <Code2 className="h-6 w-6" />  // Mude para outro ícone
```

## 📧 6. Seção Contato

**Arquivo**: `client/src/components/sections/Contact.tsx`

### Alterar Informações

As informações vêm de `constants.ts`, então edite lá:

```typescript
email: "seu@email.com"
phone: "+55 (11) 99999-9999"
location: "São Paulo, Brasil"
```

### Personalizar Formulário

```typescript
<Input placeholder="Seu nome" />        // Placeholder
<Textarea placeholder="Sua mensagem" /> // Placeholder
```

## 🎨 7. Cores e Tema

**Arquivo**: `client/src/index.css`

### Alterar Cores Principais

```css
:root {
  --accent: oklch(0.55 0.15 250);  /* Azul - mude o valor 250 */
  /* ... outras cores */
}

.dark {
  --accent: oklch(0.55 0.15 250);  /* Azul no tema escuro */
}
```

### Cores Recomendadas (Hue)

- 🔵 Azul: `250`
- 🟣 Roxo: `290`
- 🔴 Vermelho: `30`
- 🟠 Laranja: `50`
- 🟢 Verde: `150`
- 🟦 Ciano: `200`

### Tema Padrão

**Arquivo**: `client/src/App.tsx`

```typescript
<ThemeProvider
  defaultTheme="dark"  // Mude para "light"
  switchable
>
```

## 🖼️ 8. Adicionar Currículo (PDF)

1. Coloque seu `resume.pdf` em `client/public/`
2. O link já está configurado em `Hero.tsx` e `Contact.tsx`
3. Atualize o nome do arquivo se necessário:

```typescript
link.href = "/resume.pdf";  // Mude o nome
link.download = "Yan_Resume.pdf";  // Mude o nome
```

## 🔗 9. Links Sociais

**Arquivo**: `client/src/lib/constants.ts`

```typescript
socialLinks: {
  github: "https://github.com/seu-usuario",
  linkedin: "https://linkedin.com/in/seu-usuario",
  email: "mailto:seu@email.com",
}
```

## 📱 10. Menu Mobile

O menu mobile é automático! Funciona em telas menores que 768px.

Para alterar o breakpoint, edite `client/src/components/Header.tsx`:

```typescript
<div className="hidden md:flex">  // md = 768px, mude para lg, sm, etc
```

## 🎬 11. Animações

### Desabilitar Efeito de Digitação

**Arquivo**: `client/src/components/sections/Hero.tsx`

```typescript
// Comente a lógica de typing
// const [displayText, setDisplayText] = useState("");
// Mostre o texto completo direto:
const displayText = PORTFOLIO_INFO.description;
```

### Alterar Velocidade de Animação

**Arquivo**: `client/src/index.css`

```css
.typing {
  animation: typing 3.5s steps(40, end), blink 0.75s step-end infinite;
  /* Mude 3.5s para mais rápido (2s) ou mais lento (5s) */
}
```

### Desabilitar Animações de Scroll

**Arquivo**: `client/src/components/sections/About.tsx`

```typescript
className={`${
  visibleItems.includes(item.id)
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10"  // Remova translate-y-10 para desabilitar
}`}
```

## 🔤 12. Tipografia

**Arquivo**: `client/src/index.css`

As fontes vêm do TailwindCSS. Para alterar:

```css
@layer base {
  body {
    @apply font-sans;  /* Mude para font-serif, font-mono */
  }
}
```

## 🎯 13. Checklist de Personalização

- [ ] Atualizou nome e título em `constants.ts`
- [ ] Adicionou seus links sociais
- [ ] Atualizou email e telefone
- [ ] Adicionou seus projetos
- [ ] Adicionou suas habilidades
- [ ] Atualizou trilha de conhecimento
- [ ] Alterou cores do tema (opcional)
- [ ] Adicionou currículo em PDF
- [ ] Testou em mobile
- [ ] Fez deploy no Vercel

## 🚀 Próximos Passos

1. **Personalize tudo** usando este guia
2. **Teste localmente**: `pnpm dev`
3. **Faça commit**: `git add . && git commit -m "Personalize portfolio"`
4. **Faça push**: `git push origin main`
5. **Deploy**: Vercel fará deploy automaticamente!

## 💡 Dicas

- Use emojis para tornar o portfólio mais visual
- Mantenha descrições curtas e diretas
- Atualize projetos regularmente
- Adicione links reais (GitHub, LinkedIn, etc)
- Teste o tema claro também
- Verifique em mobile antes de publicar

## 🆘 Problemas Comuns

### Cores não mudam
- Limpe o cache: `Ctrl+Shift+R` (Chrome)
- Reinicie o servidor: `pnpm dev`

### Texto não aparece
- Verifique se está dentro de `<p>` ou `<span>`
- Confirme que não há conflito de classes CSS

### Links não funcionam
- Verifique se a URL está correta
- Use `https://` completo

---

**Dúvidas?** Consulte o [README.md](./README.md) ou [DEPLOYMENT.md](./DEPLOYMENT.md)


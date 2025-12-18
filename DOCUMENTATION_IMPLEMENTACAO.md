# Plano de Implementação — Site Institucional (WinClick)

Data: 17 de dezembro de 2025

Visão geral
- Transformar a landing page atual em um site institucional com pelo menos 4 páginas separadas: Home (Index), Sobre (About), Serviços (Services), Cases/Portfólio (CaseStudies) e Contato (Contact).
- Passar credibilidade e profissionalismo com conteúdo valioso, layout limpo, tipografia consistente, e animações sutis.
- Preservar a stack atual: React + Vite + TypeScript + Tailwind + shadcn/ui; adicionar `framer-motion` para animações.

Objetivos principais
- Navegação entre páginas com rotas reais (React Router) para SEO e compartilhamento de links.
- Layout global (`Layout` ou `MainLayout`) com `Header` fixo, `Footer` e área de conteúdo animada.
- Componentização: componentes reutilizáveis de apresentação e UI (cards de serviço, hero, CTA, depoimentos).
- Animações: transição de página com `framer-motion`, entradas suaves de componentes e microinterações (botões, hover, imagens).
- Conteúdo: cada página deve conter textos profissionais, títulos claros, chamadas para ação e prova social.

Páginas e conteúdo (sugestão)
1) Home (`/`)
  - Hero com headline forte, subtítulo, CTA primário e secundário.
  - Seções de destaque: Serviços resumidos, Cases importantes (miniaturas), Depoimentos, Rodapé.
2) Sobre (`/sobre`)
  - História da agência, missão, visão, equipe (cards), certificações ou resultados.
  - Timeline/valores e fotos profissionais.
3) Serviços (`/servicos`)
  - Lista de serviços com descrições detalhadas (Site Institucional, E-commerce, SEO, Marketing, etc.).
  - CTA para orçamento e exemplos de entregáveis.
4) Cases / Portfólio (`/cases`)
  - Galeria de projetos com filtros, imagens e descrições de resultados (métricas quando possível).
  - Link para páginas de case detalhadas (possível evolução).
5) Contato (`/contato`)
  - Formulário de contato (nome, email, telefone, mensagem), informações de contato, mapa opcional, CTA para WhatsApp.

Animações e UX
- Transição de rota: contêiner `AnimatePresence` + `motion` para fade/slide.
- Hero: pequena animação de entrada (slide + fade) em carga de página.
- Cards e imagens: hover com leve escala e sombra; entradas em cascade (stagger).
- Botões: micro-interação (scale/whileTap) com `framer-motion`.
- Performance: evitar animações pesadas; preferir transform/opacity; usar `will-change` via Tailwind se necessário.

Dependências necessárias
- `framer-motion` — animações declarativas.

Estrutura de arquivos proposta (src)
- src/
  - components/
    - Layout.tsx (Header + Footer + animações de rota)
    - Hero.tsx (versão estendida)
    - ServiceCard.tsx
    - CaseCard.tsx
  - pages/
    - Index.tsx (Home)
    - About.tsx
    - Services.tsx
    - CaseStudies.tsx
    - Contact.tsx
    - NotFound.tsx (já existe)
  - hooks/
    - usePrefersReducedMotion.ts (opcional para acessibilidade)

Etapas de implementação (curto prazo)
1. Adicionar `framer-motion` em `package.json` e instalar.
2. Criar `Layout.tsx` e mover `Header`/`Footer` para serem usados globalmente.
3. Criar as novas páginas em `src/pages` com conteúdo placeholder profissional.
4. Atualizar `App.tsx` para registrar rotas novas.
5. Ajustar `Header.tsx` para usar `react-router-dom` (`NavLink`) em vez de âncoras locais.
6. Implementar animações de transição de rota com `AnimatePresence`.
7. Refinar estilos (Tailwind), responsividade e testes locais.

Critérios de aceitação
- Ao clicar nos links do `Header`, o app navega para novas rotas sem recarregar a página.
- Cada página tem conteúdo legível, headings, parágrafos e CTA.
- Transição entre páginas com animação suave e sem flicker.
- Sem erros de TypeScript/compilação após alterações.

Acessibilidade e performance
- Usar marcação semântica (`header`, `main`, `footer`, `nav`, `section`).
- Respeitar `prefers-reduced-motion` para reduzir animações quando o usuário solicitou.
- Otimizar imagens (usar `loading="lazy"` quando aplicável).

Plano de trabalho — iterações
- Iteração 1 (Rápida): rotas + layout + páginas com conteúdo placeholder + animação básica de rota.
- Iteração 2 (Visual): refinar layouts, tipografia, CTA, imagens, e microinterações.
- Iteração 3 (Conteúdo): escrever conteúdos finais e provas sociais, otimizar SEO e accessibility.

Próximos passos imediatos (hoje)
1. Confirmar o plano (você aprova?).
2. Checar erros atuais no projeto e corrigi-los antes de instalar dependências (vou rodar análise de erros).
3. Se tudo ok, adicionar `framer-motion` e implementar layout + rotas.

Observações
- Vou verificar erros de compilação/lint agora e devolver uma lista simples com a prioridade de correção.
- Se concordar com o plano, começo a aplicar as mudanças em seguida.

---
Arquivo criado automaticamente para registro do plano de implementação.
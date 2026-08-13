# Plan: Redesign Completo da Seção de Orçamento - Chalés IA

Redesign do formulário de orçamento em uma experiência interativa de configuração de projeto em etapas, mantendo a identidade visual premium e arquitetônica.

## User Review Required

> [!IMPORTANT]
> A implementação incluirá uma área visual "Visão do Projeto" que reagirá às escolhas do usuário (ex: mostrando volumes para 1 vs 3 chalés, ou adicionando elementos como deck/piscina). Esta composição será 2D baseada em camadas e máscaras para garantir performance.

## Proposed Changes

### Configuration & State
- Centralizar o estado do formulário em um objeto único contendo todas as chaves solicitadas (tipo de projeto, terreno, ambientes, etc.).
- Implementar navegação baseada em etapas (0-N) com suporte a "Voltar" e "Recomeçar".

### UI/UX Components
- **Container Principal**: Layout de duas colunas no desktop (Lado esquerdo: Perguntas, Lado direito: Visão do Projeto). Layout de coluna única no mobile.
- **Progress Bar**: Barra de progresso discreta e arquitetônica no topo.
- **Interactive Cards**: Substituir selects e campos simples por cards clicáveis com ícones, imagens (especialmente para estilos arquitetônicos) e micro-interações.
- **Step Transitions**: Animações cinematográficas usando Framer Motion (fade, scale, x-offset, profundidade).
- **Conditional Logic**: Mostrar perguntas específicas sobre o terreno apenas se o usuário possuir ou estiver negociando um.
- **Revision Step**: Resumo final com capacidade de edição direta de cada campo antes do envio.

### Visual "Project View"
- Criar uma composição visual dinâmica que sobrepõe elementos (shapes arquitetônicos, ícones estilizados, imagens) baseada nas escolhas do usuário em tempo real.

### WhatsApp Integration
- Formatar a mensagem de saída com separadores visuais elegantes (━━━━━━━━━━━━━━━━━━) e dados organizados por blocos (Projeto, Cliente).

### Accessibility & Responsiveness
- Suporte total a teclado e leitores de tela.
- Design totalmente responsivo seguindo as diretrizes para mobile (botões grandes, toque confortável).

## Technical Details

- **Animation**: `framer-motion` (já integrado) para transições de etapas e feedbacks de seleção.
- **Assets**: Uso de `chale_1` a `chale_6` e `interiorChaleAsset` para ilustrar os estilos arquitetônicos.
- **Validation**: Validação em tempo real para e-mail e máscara para o WhatsApp brasileiro.
- **Component**: Refatoração completa do componente `BookingForm` em `src/components/landing.tsx`.

## Final Review Criteria
- [ ] Fluxo condicional de terreno funcionando.
- [ ] Múltipla seleção em diferenciais não avança automaticamente.
- [ ] Seleção única avança automaticamente quando apropriado.
- [ ] Resumo final permite editar campos voltando para a etapa correta.
- [ ] Mensagem de WhatsApp gerada com todos os dados novos.

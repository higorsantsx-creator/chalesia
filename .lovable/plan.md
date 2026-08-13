# Plano de Implementação: Lógica Condicional do Configurador de Orçamento

Este plano descreve a implementação da lógica de navegação condicional para o configurador de orçamento da Chalés IA, garantindo que as etapas exibidas, o progresso e a navegação (Continuar/Voltar) se adaptem dinamicamente à escolha inicial do usuário.

## Alterações Propostas

### 1. Reestruturação do Fluxo de Etapas
- Modificar o componente `BookingForm` para definir o array de etapas (`steps`) dinamicamente com base no `formData.projectType`.
- Criar um mapeamento centralizado de todas as etapas possíveis para facilitar a gestão do fluxo.

### 2. Lógica de Navegação Condicional
- **Caso 1: "Um chalé"**
  - Pula Etapa 3 (Quantidade) e Etapa 4 (Objetivo).
- **Caso 2: "Vários chalés"**
  - Pula apenas a Etapa 4 (Objetivo).
- **Caso 3: "Projeto personalizado"**
  - Mantém todas as etapas originais.

### 3. Dinamismo no Progresso e Contador
- O contador (ex: `01 / 07`) e a barra de progresso serão recalculados em tempo real com base no número de etapas ativas no fluxo selecionado.
- As etapas puladas não serão contabilizadas no total, evitando saltos numéricos estranhos.

### 4. Gestão de Dados e Retrocompatibilidade
- Implementar limpeza automática de dados quando o usuário altera o tipo de projeto após já ter preenchido etapas.
- Exemplo: Se mudar de "Vários" para "Um", o campo `numberOfChalets` será resetado para "1" e o `objective` será limpo.

### 5. Navegação Segura (Voltar/Continuar)
- As funções `nextStep` e `prevStep` serão ajustadas para operar sobre o índice do array dinâmico de etapas, garantindo que o botão "Voltar" sempre leve à etapa anterior logicamente visível.

## Detalhes Técnicos

- **Arquivo:** `src/components/landing.tsx`
- **Hook `useMemo`:** Utilizado para recalcular o array `activeSteps` sempre que `formData.projectType` mudar.
- **Sincronização de Estado:** O índice `step` será validado para garantir que, se o fluxo encurtar, o usuário não fique em um índice inexistente.
- **WhatsApp Integration:** O resumo final e a mensagem enviada considerarão apenas os campos presentes no fluxo ativo.

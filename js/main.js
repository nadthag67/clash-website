// Descrições oficiais das cartas (adaptadas do Clash Royale)
const cardDescriptions = {
  'Gigante': {
    title: 'Gigante',
    desc: 'Lento, mas resistente! O Gigante ignora tropas e vai direto para as construções, causando grande dano nelas.'
  },
  'Arqueiras': {
    title: 'Arqueiras',
    desc: 'Um par de combatentes de longo alcance. Elas causam pouco dano, mas são ótimas para eliminar tropas aéreas e terrestres.'
  },
  'Mago': {
    title: 'Mago',
    desc: 'Ataca com bolas de fogo que causam dano em área. Ótimo para eliminar grupos de inimigos.'
  },
  'Balão': {
    title: 'Balão',
    desc: 'Voa direto para as construções e solta uma bomba devastadora. Ao ser destruído, deixa uma bomba de despedida.'
  }
};

// Evento para atualizar o modal ao abrir
const cardModal = document.getElementById('cardModal');
if (cardModal) {
  cardModal.addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const cardName = button ? button.getAttribute('data-card') : '';
    const data = cardDescriptions[cardName];
    document.getElementById('modalCardTitle').textContent = data ? data.title : cardName;
    document.getElementById('modalCardDesc').textContent = data ? data.desc : 'Descrição não encontrada.';
  });
}
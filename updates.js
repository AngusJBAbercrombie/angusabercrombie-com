// Category filter
const filterBtns = document.querySelectorAll('.filter-btn');
const postCards = document.querySelectorAll('.post-card');
const emptyState = document.getElementById('emptyState');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    let visibleCount = 0;

    postCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('hidden', !match);
      if (match) visibleCount++;
    });

    // Show empty state if no posts match
    emptyState.classList.toggle('hidden', visibleCount > 0);
  });
});

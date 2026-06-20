// Tag filter — checking one or more tags shows only items that have at
// least one of the checked tags. Unchecking all tags shows everything.
(function () {
  document.querySelectorAll('.tag-filter').forEach((filterEl) => {
    const scope = filterEl.dataset.filterScope;
    const list = document.getElementById(
      scope === 'thoughts-list' ? 'thoughts-list' : 'projects-list'
    );
    const emptyMsg = document.getElementById(
      scope === 'thoughts-list' ? 'thoughts-empty' : 'projects-empty'
    );
    if (!list) return;

    const inputs = [...filterEl.querySelectorAll('.tag-filter-input')];
    const clearBtn = filterEl.querySelector('.tag-filter-clear');
    const items = [...list.querySelectorAll('[data-tags]')];
    const groups = [...list.querySelectorAll('.project-group')];

    function apply() {
      const checked = inputs.filter((i) => i.checked).map((i) => i.value);
      let anyVisible = false;

      items.forEach((item) => {
        const itemTags = (item.dataset.tags || '').split(',').filter(Boolean);
        const show = checked.length === 0 || itemTags.some((t) => checked.includes(t));
        item.style.display = show ? '' : 'none';
        if (show) anyVisible = true;
      });

      // Hide whole project groups (and their label) if nothing in them matches.
      groups.forEach((group) => {
        const visibleInGroup = [...group.querySelectorAll('[data-tags]')]
          .some((item) => item.style.display !== 'none');
        group.style.display = visibleInGroup ? '' : 'none';
      });

      if (emptyMsg) emptyMsg.hidden = anyVisible;
      if (clearBtn) clearBtn.hidden = checked.length === 0;
    }

    inputs.forEach((input) => input.addEventListener('change', apply));
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        inputs.forEach((i) => (i.checked = false));
        apply();
      });
    }

    apply();
  });
})();

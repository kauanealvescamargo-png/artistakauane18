document.addEventListener('DOMContentLoaded', function() {
  const tagInput = document.getElementById('tagInput');
  const addTagBtn = document.getElementById('addTagBtn');
  const tagsContainer = document.querySelector('.tags-container');

  function createTag(tagText) {
    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.innerHTML = `
      ${tagText}
      <button class="remove-btn" title="Remover etiqueta">×</button>
    `;

    const removeBtn = tag.querySelector('.remove-btn');
    removeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      tag.remove();
    });

    return tag;
  }

  addTagBtn.addEventListener('click', function() {
    const tagText = tagInput.value.trim();
    
    if (tagText === '') {
      alert('Por favor, digite o nome da etiqueta!');
      return;
    }

    const newTag = createTag(tagText);
    tagsContainer.appendChild(newTag);
    
    tagInput.value = '';
    tagInput.focus();
  });

  tagInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      addTagBtn.click();
    }
  });

  const existingTags = document.querySelectorAll('.tag');
  existingTags.forEach(tag => {
    const tagText = tag.textContent;
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.title = 'Remover etiqueta';
    removeBtn.textContent = '×';
    
    removeBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      tag.remove();
    });
    
    tag.appendChild(removeBtn);
  });
});

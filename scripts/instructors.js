const instructors = [
  {
    name: 'Alex John',
    title: 'Programming instructor and Software Enigeer at Google',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, officia!',
    avatar: {
      src: './media/teacher.webp',
      alt: 'Alex John',
    },
  },
  {
    name: 'Alex John',
    title: 'Programming instructor and Software Enigeer at Google',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, officia!',
    avatar: {
      src: './media/teacher.webp',
      alt: 'Alex John',
    },
  },
  {
    name: 'Alex John',
    title: 'Programming instructor and Software Enigeer at Google',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, officia!',
    avatar: {
      src: './media/teacher.webp',
      alt: 'Alex John',
    },
  },
  {
    name: 'Alex John',
    title: 'Programming instructor and Software Enigeer at Google',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, officia!',
    avatar: {
      src: './media/teacher.webp',
      alt: 'Alex John',
    },
  },
  {
    name: 'Alex John',
    title: 'Programming instructor and Software Enigeer at Google',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, officia!',
    avatar: {
      src: './media/teacher.webp',
      alt: 'Alex John',
    },
  },
  {
    name: 'Alex John',
    title: 'Programming instructor and Software Enigeer at Google',
    overview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, officia!',
    avatar: {
      src: './media/teacher.webp',
      alt: 'Alex John',
    },
  },
];

function generateInstructurItem(instructor) {
  return `
  <div class="instructor-item">
  <div class="instructor-image">
      <img src=${instructor.avatar.src} alt=${instructor.avatar.alt} />
  </div>

  <div class="instructor-desc">
      <h3 class="instructor-name">${instructor.name}</h3>
      <i class="instructor-title">
        ${instructor.name}
      </i>
      <div class="item-line"></div>
      <p>
       ${instructor.overview}
      </p>
  </div>
</div>
  `;
}

window.onload = () => {
  const instructorsContainer = document.querySelector('.instructurs-container');
  instructors.forEach((instru) => {
    const item = generateInstructurItem(instru);
    instructorsContainer.insertAdjacentHTML('beforeend', item);
  });
};

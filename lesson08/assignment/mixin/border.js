// Allows for a border to appear when image is clicked.

export const showBorder = {
  data() {
    return {
      showPlease: false
    }
  },
  methods: {
    toggleClass(e) {
      e.target.classList.toggle('active');
    }
  }

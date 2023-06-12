class DescBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    render() {
      this.innerHTML = `
      <div class="px-4 py-5 my-5 text-center">
      <img
        class="d-block mx-auto mb-4"
        src="./static/img/faviconfourhealth.png"
        alt=""
        width="100"
      />
      <h1 class="display-5 fw-bold text-body-emphasis">Fourhealth</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4 text-center">
          Fourhealth merupakan sebuah project tugas ahkir pada SIB x Dicoding
          batch 4 dengan tujuan untuk mensejaterahkan masyarakat dalam hal
          kesehatan. Project ini dikerjakan oleh Team C23-M4035 yang terdiri
          dari 4 orang mahasiswa
        </p>
      </div>
    </div>
      `;
    }
  }
  customElements.define("desc-bar", DescBar);
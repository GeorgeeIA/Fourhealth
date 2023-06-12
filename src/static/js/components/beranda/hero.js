class Hero extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    render() {
      this.innerHTML = `
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img src="/static/img/Doctors-amico.png" class="d-block mx-lg-auto img-fluid" alt="Doctors Pict" width="700" height="500" loading="lazy">
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Website Fourhealth</h1>
            <p class="lead">Lorem dolor, sit amet consectetur adipisicing elit. Quaerat libero dicta accusamus doloribus magni architecto, voluptas in saepe iste iure dolorem eveniet reiciendis dolores, ipsa, laudantium veniam consectetur dolore molestiae.</p>
          </div>
        </div>
      </div>`;
    }
}
customElements.define("hero-landing", Hero);
class SectionBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
    render() {
      this.innerHTML = `
      <section class="py-5" style="background-color: #146C94;">
        <div class="container px-5">
            <div class="row gx-5 align-items-center">
                <div class="col-lg-6">
                    <div class="p-5"><img class="img-fluid rounded" src="../../static/img/orang-mengetik.png" alt="orang-mengetik"></div>
                </div>
                <div class="col-lg-6">
                    <div class="p-5 ">
                      <div class="p-5 text-white text_section_dua">
                        <h2 class="display-5">Mencari Solusi Anda</h2>
                        <p>Fourhealth hadir untuk menyelesaikan solusi anda yang ingin menemukan penyakit berdasarkan gejala yang anda alami sekarang</p>
                    </div>
                </div>
            </div>
        </div>
      </section>`;
    }
}

customElements.define('section-bar', SectionBar);
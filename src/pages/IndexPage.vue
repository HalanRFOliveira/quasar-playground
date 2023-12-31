<template>
  <q-page>
    <div class="q-pa-xl row flex-center justify-around">
      <div class="q-ma-sm col-2 flex justify-center">
        <h1 class="q-my-sm text-white text-weight-regular text-center">
          Halan <br />
          Oliveira
        </h1>
        <span class="text-white">Full-Stack Developer</span>
        <div class="flex flex-center q-pa-md">
          <q-btn
            class="q-pa-sm"
            target="_blank"
            href="https://wa.me/+5551990193912"
            size="md"
            flat
            color="white"
            icon="fa-brands fa-whatsapp"
          />
          <q-btn
            class="q-pa-sm"
            color="white"
            target="_blank"
            href="https://instagram.com/halan_oliveira"
            size="md"
            flat
            icon="fa-brands fa-instagram"
          />
          <q-btn
            class="q-pa-sm"
            color="white"
            target="_blank"
            href="https://github.com/HalanRFOliveira"
            size="md"
            flat
            icon="fa-brands fa-github"
          />
          <q-btn
            class="q-pa-sm"
            color="white"
            target="_blank"
            href="https://linkedin.com/in/oliveirahalan"
            size="md"
            flat
            icon="fa-brands fa-linkedin"
          />
        </div>
      </div>
      <div class="q-pa-md col-md-6 row justify-center">
        <q-avatar color="secondary" size="300px">
          <img
            src="../../public/images/halan-img.png"
            alt="Foto de Halan Oliveira"
          />
        </q-avatar>
      </div>
      <div class="q-pa-md col-md-2 row">
        <q-btn
          class="col-12"
          no-caps
          flat
          color="grey-1"
          label="Baixar PDF"
          icon-right="download"
          size="sm"
        />
        <q-btn
          target="_blank"
          href="https://wa.me/+5551990193912"
          class="col-12"
          outline
          rounded
          no-caps
          color="green-13"
          label="Vamos conversar"
          icon="fa-brands fa-whatsapp"
        />
      </div>
    </div>
    <q-separator dark inset class="q-ma-xl" />
    <div class="row justify-center">
      <q-card bordered flat dark class="q-ma-lg text-center">
        <q-card-section>
          <q-avatar icon="fa-solid fa-code" />
        </q-card-section>
        <q-card-section>
          <span class="text-h6 text-weight-regular"
            >2 anos como <br />
            <span class="text-weight-bold">Programador</span></span
          >
        </q-card-section>
      </q-card>
      <q-card bordered flat dark class="q-ma-lg text-center">
        <q-card-section>
          <q-avatar icon="fa-solid fa-code-branch" />
        </q-card-section>
        <q-card-section>
          <span class="text-h6 text-weight-regular"
            >3 anos como <br />
            <span class="text-weight-bold">Designer</span></span
          >
        </q-card-section>
      </q-card>
    </div>
    <div class="row justify-center">
      <q-card flat dark class="col-8 q-ma-lg flex justify-around bg-secondary">
        <q-card-section>
          <h1 class="text-caption text-center text-weight-regular">
            Desenvolvedor <br />
            <span class="text-weight-bold text-h5">Full-Stack</span>
          </h1>
        </q-card-section>
        <q-card-section>
          <h1 class="text-caption text-center text-weight-regular">
            Dezenas de projetos e <br />
            <span class="text-weight-bold text-h5">Experiências</span>
          </h1>
        </q-card-section>
        <q-card-section>
          <h1 class="text-caption text-center text-weight-regular">
            Free lancer com <br />
            <span class="text-weight-bold text-h5">WordPress</span>
          </h1>
        </q-card-section>
      </q-card>
    </div>
    <q-separator dark inset class="q-ma-xl" />
    <div class="flex flex-center">
      <h2 class="text-h3 text-white">Trabalhos e projetos</h2>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  setup() {},
});
</script>

<style scoped></style>

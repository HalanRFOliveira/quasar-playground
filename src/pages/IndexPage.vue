<template>
  <q-page>
    <div class="q-pa-xl row flex-center justify-center">
      <div class="q-ma-sm col-2 flex justify-center">
        <div class="q-my-sm text-h2 text-white text-weight-regular text-center">
          Halan <br />
          Oliveira
        </div>
        <span class="text-grey">Fullstack Developer</span>
        <div class="row no-wrap flex-center q-pa-md">
          <q-btn
            class="q-pa-sm"
            target="_blank"
            href="https://wa.me/+5551990193912"
            size="md"
            flat
            color="grey"
            icon="fa-brands fa-whatsapp"
          />
          <q-btn
            class="q-pa-sm"
            color="grey"
            target="_blank"
            href="https://vsco.co/halannalah"
            size="md"
            flat
          >
            <img
              src="/icons/vsco-icon.png"
              alt="VSCO"
              style="width: 5dvh; height: 5dvh;"
            />
          </q-btn>
          <q-btn
            class="q-pa-sm"
            color="grey"
            target="_blank"
            href="https://github.com/HalanRFOliveira"
            size="md"
            flat
            icon="fa-brands fa-github"
          />
          <q-btn
            class="q-pa-sm"
            color="grey"
            target="_blank"
            href="https://linkedin.com/in/oliveirahalan"
            size="md"
            flat
            icon="fa-brands fa-linkedin"
          />
        </div>
      </div>
      <div class="q-pa-md col-md-6 row justify-center">
        <q-avatar
          color="secondary"
          size="300px"
          class="avatar-image"
        >
          <img
            src="images/halan-img.jpg"
            alt="Foto de Halan Oliveira"
          />
        </q-avatar>
      </div>
      <div class="q-pa-md col-md-2 row">
        <q-btn
          class="col-12 q-ma-sm"
          no-caps
          flat
          rounded
          color="grey-1"
          label="Baixar PDF"
          icon-right="download"
          size="sm"
          href="/pdf/resume.pdf"
          target="_blank"
          download
        />

        <q-btn
          target="_blank"
          href="https://wa.me/+5551990193912"
          class="col-12 q-ma-sm"
          outline
          rounded
          no-caps
          color="green-13"
          label="Vamos conversar"
          icon="fa-brands fa-whatsapp"
        />
      </div>
    </div>
    <q-separator
      dark
      inset
      class="q-ma-xl"
    />
    <div class="row justify-center">
      <q-card
        bordered
        flat
        dark
        class="q-ma-lg text-center"
      >
        <q-card-section>
          <q-avatar icon="fa-solid fa-code" />
        </q-card-section>
        <q-card-section>
          <span class="text-h6 text-weight-regular">3 anos de <br />
            <span class="text-weight-bold">Atuação Profissional</span></span>
        </q-card-section>
      </q-card>
      <q-card
        bordered
        flat
        dark
        class="q-ma-lg text-center"
      >
        <q-card-section>
          <q-avatar icon="fa-solid fa-code-branch" />
        </q-card-section>
        <q-card-section>
          <span class="text-h6 text-weight-regular">6 anos de <br />
            <span class="text-weight-bold">Aprendizado Contínuo</span></span>
        </q-card-section>
      </q-card>
    </div>
    <div class="row justify-center">
      <q-card
        flat
        dark
        class="col-8 q-ma-lg flex justify-around bg-secondary"
      >
        <q-card-section>
          <h1 class="text-caption text-center text-weight-regular">
            Entregas pontuais e <br />
            <span class="text-weight-bold text-h5">Planejamento</span>
          </h1>
        </q-card-section>
        <q-card-section>
          <h1 class="text-caption text-center text-weight-regular">
            Projetos e sistemas <br />
            <span class="text-weight-bold text-h5">Robustos</span>
          </h1>
        </q-card-section>
        <q-card-section>
          <h1 class="text-caption text-center text-weight-regular">
            Código limpo e<br />
            <span class="text-weight-bold text-h5">Eficiente</span>
          </h1>
        </q-card-section>
      </q-card>
    </div>
    <q-separator
      dark
      inset
      class="q-ma-xl"
    />
    <div class="row wrap flex-center">
      <h2 class="col-12 text-center text-h3 text-white">
        Trabalhos e projetos
      </h2>
      <div class="row col-12 justify-center">
        <q-card
          @click="toURL('https://precificador.carflip.com.br/')"
          class="q-ma-sm cursor-pointer col-md-3 col-sm-12 row"
          flat
          dark
          bordered
        >
          <q-img
            class="rounded-borders"
            src="images/carflip-home.png"
          />
          <q-card-section>
            <div class="text-h6">Precificador Carflip</div>
            <span class="text-caption text-grey text-left">
              Aplicação frontend consumindo uma API autoral, que faz
              precificação de veículos considerando a fipe atualizada
              mensalmente.
            </span>
            <span class="row q-my-md col-12 text-caption text-grey text-center">
              Usuários * Orçamentos * Atividades * Dashboard
            </span>
          </q-card-section>
        </q-card>
        <!-- <q-card
          @click="toURL('https://api-precificador.carflip.com.br/api/index.html')"
          class="q-ma-sm cursor-pointer col-md-3 col-sm-12 row"
          flat
          dark
          bordered
        >
          <q-img
            class="rounded-borders"
            src="images/swagger.png"
          />
          <q-card-section>
            <div class="text-h6">API Precificador</div>
            <span class="text-caption text-grey text-left">
              Web API criada em .NET e documentada com swagger. Utilizada em
              diversas aplicações em mais de três empresas diferentes
            </span>
            <span class="row text-center q-my-md col-12 text-caption text-grey">
              Login * Regras * Emails * Cálculos
            </span>
          </q-card-section>
        </q-card> -->
        <q-card
          @click="toURL('https://gap.deserv.com.br')"
          class="q-ma-sm cursor-pointer col-md-3 col-sm-12 row"
          flat
          dark
          bordered
        >
          <q-img
            class="rounded-borders"
            src="images/gap-login.png"
          />
          <q-card-section>
            <div class="text-h6">GAP Analysis</div>
            <span class="text-caption text-grey text-left">
              Aplicação frontend consumindo API autoral que faz o procedimento de consultoria para certificações ISO
              27001, ISO 27701, LGPD, NIST, dentre outros.
            </span>
            <span class="row text-center q-my-md col-12 text-caption text-grey">
              Formulários * Multi tenant * Relatórios * Evidências
            </span>
          </q-card-section>
        </q-card>
        <q-card
          @click="toURL('https://sistemaskrause.azurewebsites.net')"
          class="q-ma-sm cursor-pointer col-md-3 col-sm-12 row"
          flat
          dark
          bordered
        >
          <q-img
            class="rounded-borders"
            src="images/krause-login.png"
          />
          <q-card-section>
            <div class="text-h6">Sistemas Krause</div>
            <span class="text-caption text-grey text-left">
              Aplicação frontend consumindo duas APIs, sendo uma autoral, que monta um boleto com os dados enviados e
              devolve um PDF do
              arquivo.
            </span>
            <span class="row text-center q-my-md col-12 text-caption text-grey">
              Login * Tabela * Emissão de documento
            </span>
          </q-card-section>
        </q-card>

      </div>
    </div>
    <q-separator
      dark
      inset
      class="q-ma-xl"
    />
    <div class="text-center">
      <h2 class="q-pa-md col-12 text-h3 text-white">
        Tecnologias e Habilidades
      </h2>
      <span class="col-12 text-white">
        Tecnologias que utilizo no dia a dia
      </span>
      <div class="row justify-center">
        <q-icon
          class="q-ma-md"
          size="xl"
          name="fa-brands fa-vuejs"
          color="grey"
        />
        <q-icon
          class="q-ma-md"
          size="xl"
          name="fa-brands fa-square-js"
          color="grey"
        />
        <q-icon
          class="q-ma-md"
          size="xl"
          name="fa-solid fa-database"
          color="grey"
        />
        <q-icon
          class="q-ma-md"
          size="xl"
          name="fa-brands fa-square-git"
          color="grey"
        />
        <q-icon
          class="q-ma-md"
          size="xl"
          name="fa-brands fa-aws"
          color="grey"
        />
      </div>
    </div>
    <q-separator
      dark
      inset
      class="q-ma-xl"
    />
    <div class="row q-pb-md text-center justify-center">
      <h2 class="col-12 text-h3 text-white">Vamos Conversar!</h2>
      <div class="q-pb-xl">
        <q-btn
          target="_blank"
          href="https://wa.me/+5551990193912"
          class="col-3 q-ma-sm"
          outline
          rounded
          no-caps
          color="green-13"
          label="Vamos conversar"
          icon="fa-brands fa-whatsapp"
        />
        <q-btn
          target="_blank"
          href="mailto:halannalah@gmail.com"
          class="col-3 q-ma-sm"
          flat
          no-caps
          color="grey"
          label="Email: halannalah@gmail.com"
          icon="fa-regular fa-paper-plane"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { openURL } from 'quasar'


export default defineComponent({
  name: "IndexPage",
  setup() {
    const toURL = (url) => {
      openURL(url);

    };

    return {
      toURL
    }
  },
});
</script>

<style scoped>
.avatar-image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}
</style>


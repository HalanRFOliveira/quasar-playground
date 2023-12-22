<template>
  <q-page>
    <q-parallax
      :speed="0.8"
      src="https://i0.wp.com/judao.com.br/wp-content/uploads/2019/07/LOTR_Yeah.jpg?fit=1920%2C1080&ssl=1"
    >
    </q-parallax>
    <div class="row justify-center bg-grey-3">
      <div class="col-md-6">
        <q-timeline layout="loose" side="right" color="secondary">
          <q-timeline-entry class="q-pa-md" heading
            >Quem é Halan?</q-timeline-entry
          >

          <q-timeline-entry
            title="Nascimento"
            subtitle="05 de maio de 1997"
            side="left"
          >
            <div>
              Em uma segunda de neve, em Progresso, interior do estado do Rio
              Grande do Sul, nascia Halan Oliveira.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Me tornei alfabetizado"
            subtitle="Setembro de 2022"
            side="right"
          >
            <div>
              Alguns poucos meses após completar cinco anos, aprendi a ler pois
              fui orador da turma e brincando de decorar o texto, acabei
              aprendendo a ler.
            </div>
          </q-timeline-entry>

          <q-timeline-entry heading>Abril, 2022</q-timeline-entry>

          <q-timeline-entry
            title="Primeira experiência com T.I."
            subtitle="19 de Abril de 2022 "
            side="left"
          >
            <div>
              Em 19 de abril de 2022 iniciei na DeServ, onde tive minha primeira
              oportunidade de estar em contato com minha área de estudos. Foi
              tranquilo? Quem dera (risos)! Estava apavorado com a quantidade de
              informações simultâneas e atônito com a minha nova realidade. Não
              vou mentir: achei que não era pra mim. Entretanto, persistente,
              segui minha jornada com muita esperança e empenho.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Efetivação"
            subtitle="17 de Novembro de 2022"
            side="right"
          >
            <div>
              Após cerca de seis meses de como estagiário, consegui minha chance
              de efetivação e finalmente me tornei um desenvolvedor Fullstack.
            </div>
          </q-timeline-entry>

          <q-timeline-entry
            title="Agora"
            :subtitle="dateNow"
            side="left"
            color="green"
            icon="done_all"
          >
          </q-timeline-entry>
        </q-timeline>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { date } from "quasar";

export default defineComponent({
  name: "IndexPage",
  setup() {
    const dateNow = ref();

    onMounted(() => {
      setInterval(() => {
        dateNow.value = date.formatDate(Date.now(), "DD/MM/YYYY HH:mm:ss");
      }, 1000);
    });

    return {
      dateNow,
    };
  },
});
</script>

<style lang="sass" scoped></style>

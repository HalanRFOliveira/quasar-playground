<template>
  <q-layout view="hHh Lpr fff">
    <q-header
      reveal
      elevated
      class="q-ma-md bg-secondary rounded-borders"
    >
      <q-toolbar>
        <div class="q-pa-xm fit row justify-between items-center">
          <q-avatar size="50px">
            <img
              src="images/h-logo.png"
              alt="Halan Logo"
            />
          </q-avatar>
          <div class="text-caption"> {{ formatDate(date, "DD/MM/YYYY - HH:mm:ss") }}</div>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="q-pa-md bg-secondary">
      <div class="flex flex-center q-pa-md">
        <q-btn
          class="q-pa-sm"
          target="_blank"
          href="https://wa.me/+5551990193912"
          size="md"
          flat
          icon="fa-brands fa-whatsapp"
        />
        <q-btn
          class="q-pa-sm"
          target="_blank"
          href="https://instagram.com/halan_oliveira"
          size="md"
          flat
          icon="fa-brands fa-instagram"
        />
        <q-btn
          class="q-pa-sm"
          target="_blank"
          href="https://github.com/HalanRFOliveira"
          size="md"
          flat
          icon="fa-brands fa-github"
        />
        <q-btn
          class="q-pa-sm"
          target="_blank"
          href="https://linkedin.com/in/oliveirahalan"
          size="md"
          flat
          icon="fa-brands fa-linkedin"
        />
      </div>
      <p class="flex flex-center">
        Oliveira Software © 2023 | Todos os direitos reservados.
      </p>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { useUtils } from 'src/composables/UseUtils';

export default defineComponent({
  name: "MainLayout",

  setup() {
    const { formatDate } = useUtils();
    const leftDrawerOpen = ref(false);
    const date = ref(new Date());

    onMounted(() => {
      setInterval(() => {
        date.value = Date.now();
      }, 1000);
    });

    return {
      leftDrawerOpen,
      date,
      formatDate,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

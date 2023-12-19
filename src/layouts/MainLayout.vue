<template>
  <q-layout view="hHh Lpr fff">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          :icon="leftDrawerOpen ? 'menu_open' : 'menu'"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Halan's Projects </q-toolbar-title>

        <q-tabs>
          <q-tab name="Produtos" label="Produtos" />
          <q-tab name="Treinamentos" label="Treinamentos" />
          <q-tab name="Sobre" label="Sobre" />
          <q-tab name="Contatos" label="Contatos" />
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer
      ><q-tabs>
        <q-tab name="whatsapp" icon="fa-brands fa-whatsapp" label="WhatsApp" />
        <q-tab
          name="instagram"
          icon="fa-brands fa-instagram"
          label="Instagram"
        />
        <q-tab
          name="youTube"
          icon="fa-brands fa-youtube"
          label="YouTube"
        /> </q-tabs
    ></q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Github",
    caption: "github.com/HalanRFOliveira",
    icon: "fa-brands fa-github",
    link: "https://github.com/HalanRFOliveira",
  },
  {
    title: "LinkedIn",
    caption: "in/oliveirahalan",
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/oliveirahalan",
  },
  {
    title: "Instagram",
    caption: "instagram/halan_oliveira",
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/halan_oliveira",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

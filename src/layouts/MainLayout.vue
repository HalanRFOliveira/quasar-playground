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

          <q-tabs
            dense
            no-caps
            class="desktop-only"
          >
            <q-route-tab
              :to="{ name: 'home' }"
              name="home"
              label="Home"
            />
            <!-- <q-route-tab :to="{ name: 'about' }" name="about" label="Sobre" /> -->
            <q-route-tab
              :to="{ name: 'table' }"
              name="table"
              label="Tabela"
            />
            <q-route-tab
              @click="store.logout()"
              :to="{ name: 'login' }"
              name="logout"
              label="Logout"
              class="text-red"
            />
          </q-tabs>

          <q-btn-dropdown
            dropdown-icon="menu_open"
            flat
            class="mobile-only"
          >
            <q-list class="bg-grey-2">
              <q-item
                clickable
                :to="{ name: 'home' }"
              >
                <q-item-section>
                  <q-item-label>Home</q-item-label>
                </q-item-section>
              </q-item>

              <!-- <q-item clickable to="/about">
                <q-item-section>
                  <q-item-label>Sobre</q-item-label>
                </q-item-section>
              </q-item> -->

              <q-item
                clickable
                to="/table"
              >
                <q-item-section>
                  <q-item-label>Tabela</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                @click="store.logout()"
                :to="{ name: 'login' }"
              >
                <q-item-section>
                  <q-item-label class="text-red">Logout</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
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
        href="https://vsco.co/halannalah"
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
      Oliveira Software © {{ formatDate(dateNow, "YYYY") }} | Todos os direitos reservados.
    </p>
  </q-footer>
</q-layout></template>

<script setup>
import { useAuthStore } from "src/stores/store.js";
import { useUtils } from "src/composables/UseUtils";

const store = useAuthStore();
const { formatDate } = useUtils();
const dateNow = new Date();

</script>

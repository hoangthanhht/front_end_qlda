<template>
  <div>
    <!--begin::Notice-->

    <Approvematerialcost></Approvematerialcost>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { SET_BREADCRUMB } from "@/core/services/store/store_metronic/breadcrumbs.module";
import Approvematerialcost from "@/view/content/widgets/advance-table/Guest_material_cost_view.vue";

export default {
  name: "viewgiavattu",
  components: {
    Approvematerialcost,

  },
  data() {
    return {
      tabIndex: 0,
      
    };
  },
  computed: {
    ...mapGetters(["layoutConfig"]),

    config() {
      return this.layoutConfig();
    }
  },
  mounted() {
    // set the tab from previous
    //this.setActivePreviousTab();

    this.$store.dispatch(SET_BREADCRUMB, [{ title: "Bảng giá vật tư" }]);

    // this.$nextTick(() => {
    //   const hljs = this.$el.querySelectorAll(".hljs");
    //   hljs.forEach(hl => {
    //     hl.classList.remove("hljs");
    //     hl.classList.add(`language-${hl.classList[1]}`);
    //   });
    // });
  },
  destroyed() {
    localStorage.removeItem("builderTab");
  },
  methods: {
    /**
     * Reset config
     */
    reset(event) {
      event.preventDefault();
      // remove existing saved config
      localStorage.removeItem("config");
      window.location.reload();
    },

    /**
     * Set previous tab active
     */
    // setActivePreviousTab() {
    //   this.tabIndex = parseInt(localStorage.getItem("builderTab")) || 0;
    //   const links = this.$refs["builder-tab"].querySelectorAll(".nav-link");
    //   // remove active tab links
    //   for (let i = 0; i < links.length; i++) {
    //     links[i].classList.remove("active");
    //   }
    //   this.$refs["builder-tab"]
    //     .querySelector(`[data-tab="${this.tabIndex}"]`)
    //     .classList.add("active");
    // },
    /**
     * Set current active on click
     * @param event
     */
    // setActiveTab(event) {
    //   const tab = event.target.closest('[role="tablist"]');
    //   const links = tab.querySelectorAll(".nav-link");
    //   // remove active tab links
    //   for (let i = 0; i < links.length; i++) {
    //     links[i].classList.remove("active");
    //   }

    //   // set clicked tab index to bootstrap tab
    //   this.tabIndex = parseInt(event.target.getAttribute("data-tab"));

    //   // set current active tab
    //   event.target.classList.add("active");

    //   // keep active tab
    //   localStorage.setItem("builderTab", this.tabIndex);
    // },

    /**
     * Submit form
     * @param event
     */
    submit(event) {
      event.preventDefault();
      // save new config to localStorage
      localStorage.setItem("config", JSON.stringify(this.config));
      window.location.reload();
    }
  }
};
</script>
<style lang="scss" scoped>
.breadcrumb-item {
  display: flex;
}
</style>
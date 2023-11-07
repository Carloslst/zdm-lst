<script lang="ts">
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();

    router.replace({
      path: "/" + route.params.path,
      query: route.query,
    });

    return () => null;
  },
});
</script>

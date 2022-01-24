<script>
import { IntersectionViewportObserver } from "../helpers/intersectionObserverHelper";

export default {
  name: 'data-fetcher',
  props: {
    serverPath: {
      type: String,
      required: true
    },
    lazyLoading: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      onViewport: false,
      requestData: []
    }
  },
  methods: {
    fetchData() {
      setTimeout(() => {
        fetch(this.serverPath)
        .then(response => response.json())
        .then((data) => {
          this.loading = false;
          this.requestData = data;
        });
      }, 3000);
      
    },
  },
  mounted() {
    if (this.lazyLoading) {
      IntersectionViewportObserver({ element: this.$el }, this.fetchData);
    } else {
      this.fetchData();
    }
  },
  render() {
    return this.$scopedSlots.default({
      loading: this.loading,
      data: this.requestData
    });
  },
}
</script>
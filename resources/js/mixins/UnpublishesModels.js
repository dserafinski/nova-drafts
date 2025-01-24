export default {
  methods: {
    async unpublish() {
      // console.log('Unpublishing model');
      // console.log(this)
      // console.log(Nova)

      try {
        await Nova.request().post(`/nova-vendor/nova-drafts/draft-unpublish/${this.resourceId}`, {
          class: this.field.class,
        });

        // Reload page
        // Nova.$router.go(null);
        // Nova.visit(Nova.urlFor('resources.index', { resource: this.resourceName }));
        Nova.visit(`/resources/${this.resourceName}/${this.resourceId}`);
        Nova.$toasted.show(this.__('novaDrafts.unpublishSuccessToast'), { type: 'success' });
      } catch (e) {
        console.error(e);
        Nova.$toasted.show(this.__('novaDrafts.unpublishFailedToast'), { type: 'error' });
        return;
      }
    },
  },
};

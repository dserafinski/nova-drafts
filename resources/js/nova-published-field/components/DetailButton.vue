<template>
  <panel-item :field="field">
    <template slot="value">
      <publish-indicator :draft="isDraft" :published="field.value" />
      <publish-button :draftId="draftId" :resourceClass="field.class" v-if="!field.value" />
    </template>
  </panel-item>
  <!-- <span>nova-published-field/DetailButton.vue</span> -->
</template>

<script>
import PublishButton from './PublishButton';
import PublishIndicator from './PublishIndicator';

export default {
  components: { PublishButton, PublishIndicator },
  props: ['resource', 'field'],

  data() {
    return {
      draftId: this.resource.id.value,
    };
  },

  computed: {
    isDraft() {
      return !this.field.value || (this.field.value && (this.field.childDraft || this.field.draftParent));
    },
  },

  mounted() {

    console.log('mounted', this.field.value, this.field.childDraft, this.field.draftParent);

    if (!this.field.value) {
      const editButtonEl = document.querySelector('[dusk=content]').querySelector('[dusk=edit-resource-button]');
      editButtonEl.parentNode.append(this.$refs.publishButton.$el);
    }
  },
};
</script>

<template>
  <CRow>
    <CCol sm="8">
      <CCard class="healthmap-form">
        <CRow>
          <CCol sm="12">

          <div role="group" class="form-group form-row">
              <label class="col-form-label col-sm-3"> Показания </label>
              <div class="col-sm-9">
                <vue-tags-input
                  v-model="competition"
                  :tags="competitions"
                  @tags-changed="newTags => competitions = newTags"
                />
              </div>
            </div>

            <div role="group" class="form-group form-row">
              <label class="col-form-label col-sm-3"> Ограничения </label>
              <div class="col-sm-9">
                <vue-tags-input
                  v-model="tag"
                  :tags="tags"
                  @tags-changed="newTags => tags = newTags"
                />
              </div>
            </div>

            <CTextarea
                label="Рекомендации"
                horizontal
                rows="9"
              />
          </CCol>
        </CRow>
      </CCard>
    </CCol>
    <CCol sm="4">
      <img src="https://raw.githubusercontent.com/DeevMaks/medsputnik/gh-pages/img/avatar.png">
    </CCol>
  </CRow>
</template>

<script>
import VueTagsInput from '@johmun/vue-tags-input';

export default {
  name: 'Healthmap',
  components: {
    VueTagsInput,
  },
  data () {
    return {
      competition: '',
      competitions: [],
      tag: '',
      tags: []
    }
  },
  methods: {

  }
}
</script>


<style>
  .healthmap-form {
    padding: 20px;
  }
</style>

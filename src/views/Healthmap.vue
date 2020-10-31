<template>
  <CRow>
    <CCol sm="8">
      <CCard class="healthmap-form">
        <CRow>
          <CCol sm="12">
            <CInput
              label="Пол"
              value="Мужской"
              horizontal
            />
            <CInput
              label="Возраст"
              value="34"
              horizontal
            />
            <CInput
              label="Группа крови"
              value="II"
              horizontal
            />

          <div role="group" class="form-group form-row">
              <label class="col-form-label col-sm-3"> Паталогии </label>
              <div class="col-sm-9">
                <vue-tags-input
                  v-model="tag"
                  :tags="tags"
                  @tags-changed="newTags => tags = newTags"
                />
              </div>
            </div>

            <CTextarea
                label="Противопоказания"
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
      tag: '',
      tags: [],
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

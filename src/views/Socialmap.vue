<template>
  <CRow>
    <CCol sm="8">
      <CCard class="healthmap-form">
        <CRow>
          <CCol sm="12">

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

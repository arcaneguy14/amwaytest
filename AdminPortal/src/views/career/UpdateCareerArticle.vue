<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show" id="modalInfo">
    <b-row class="mb-3">
      <b-col md="4">
        <image-upload :id="JSON.parse(careerInfo.content).id" @image="addImage"></image-upload>
      </b-col>
      <b-col md="8">
        <b-form-group inline label="">
          <b-row>
            <b-col sm="12">
              <b-form-group label="Title:">
                <b-form-input
                  type="text"
                  :value="text"
                  required
                  placeholder="Add Title" />
              </b-form-group>

              <b-form-group label="Subtitle:">
                <b-form-input
                  type="text"
                  :value="text"
                  required
                  placeholder="Add Subtitle" />
              </b-form-group>
            </b-col>
          </b-row>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group label="Content:">
          <text-editor :value="text"></text-editor>
        </b-form-group>
        <b-button type="submit" variant="primary" class="mr-1">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
  import TextEditor from '../components/TextEditor'
  import ImageUpload from '../components/ImageUpload'

  export default {
    name: "UpdateCareerArticle",
    components: {
      'text-editor': TextEditor,
      'image-upload': ImageUpload
    },
    props: ['careerInfo'],
    data() {
      return {
        form: {
          image: 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png',
          title: '',
          content: '',
          subtitle: ''
        },
        show: true,
        model: '',
        text: 'sad'
      }
    },

    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
        this.handleSavingContent()
      },
      onReset(evt) {
        evt.preventDefault()
        /* Reset our form values */
        this.form.mainText = ''
        this.form.title = ''
        this.form.subtitle = ''
        this.form.content = ''
        this.model = ''
        this.form.image = 'https://increasify.com.au/wp-content/uploads/2016/08/default-image.png'
        /* Trick to reset/clear native browser form validation state */
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },

      handleSavingContent: function() {
        // You have the content to save
        const html = this.model
        console.log(html)
      },

      addImage(image){
        this.form.image = image
      }
    }
  }
</script>

<style lang="scss">

</style>

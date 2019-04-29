<template>
  <b-form action="#" @reset="onReset" @submit.prevent="validateBeforeSubmit">
    <b-card>
      <h5 class="mb-3 text-uppercase text-grey">Profile</h5>
      <b-row>
        <b-col md="3">
          <image-upload :id="id" @image="addImage"></image-upload>
        </b-col>
        <b-col md="9">
          <b-row>
            <b-col>
              <b-form-group>
                <b-input-group size="md">
                  <b-input-group-prepend><b-input-group-text style="width: 35px;"><i class="fa fa-user"></i></b-input-group-text></b-input-group-prepend>
                  <b-form-input
                    type="text"
                    v-model="form.name"
                    required
                    placeholder="Name" />
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group>
                <b-input-group size="md">
                  <b-input-group-prepend><b-input-group-text style="width: 35px;"><i class="fa fa-envelope"></i></b-input-group-text></b-input-group-prepend>
                  <b-form-input
                    type="text"
                    v-model="form.email"
                    required
                    placeholder="Email" />
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group>
                <b-input-group size="md">
                  <b-input-group-prepend><b-input-group-text style="width: 35px;"><i class="fa fa-lock"></i></b-input-group-text></b-input-group-prepend>
                  <b-form-input
                    type="text"
                    v-model="form.password"
                    required
                    placeholder="Password" />
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group>
                <b-input-group size="md">
                  <b-input-group-prepend><b-input-group-text style="width: 35px;"><i class="fa fa-phone"></i></b-input-group-text></b-input-group-prepend>
                  <b-form-input
                    type="number"
                    v-model="form.contact"
                    required
                    placeholder="Contact Number" />
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col md="12">
            <b-form-group
            id="fieldset-horizontal"
            label-cols-sm="10"
            label-cols-lg="2"
            label="Last Logged In:"
            label-for="input-horizontal"
          >
            <b-form-input v-model="lastLogged" id="input-horizontal" style="border: none;"></b-form-input>
          </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group>
                <b-button type="submit" variant="primary" class="mr-1">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form-group>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card>
  </b-form>
</template>

<script>
  import imageUpload from '../components/ImageUpload'

    export default {
      name: "Profile",

      components:{
        'image-upload': imageUpload
      },

      data(){
        return{
          form:{
            image: '',
            name: '',
            email: '',
            password: '',
            contact: '',
          },
          lastLogged: '25/4/2019',
          id: 'main'
        }
      },

      methods: {
        addImage(image){
          this.form.image = image
        },

        onReset(evt) {
          evt.preventDefault()
          /* Reset our form values */
          this.form.image = ''
          this.form.name = ''
          this.form.email = ''
          this.form.password = ''
          this.form.contact = ''
          /* Trick to reset/clear native browser form validation state */
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        },
      }
    }
</script>

<style scoped>

</style>

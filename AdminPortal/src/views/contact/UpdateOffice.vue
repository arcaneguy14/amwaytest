<template>
  <b-form @submit="onSubmit" @reset="onReset" v-if="show" id="officeInfo">
    <b-row>
      <b-col sm="12">
        <b-form-group id="exampleInputGroup3" label="Title:" label-for="exampleInput3">
          <b-form-input
            id="exampleInput2"
            type="text"
            :value="JSON.parse(officeInfo.content).title"
            required
            placeholder="Title" />
        </b-form-group>
      </b-col>
    </b-row>
    <b-form-group inline id="exampleInputGroup" label="" label-for="exampleInput">
      <b-row>
        <b-col sm="6">
          <b-form-group id="exampleInputGroup2" label="Latitude:" label-for="exampleInput2">
            <b-form-input
              id="exampleInput2"
              type="text"
              :value="JSON.parse(officeInfo.content).lat"
              required
              placeholder="Latitude" />
          </b-form-group>
        </b-col>

        <b-col sm="6">
          <b-form-group
            id="exampleInputGroup1"
            label="Longitude:"
            label-for="exampleInput1"
          >
            <b-form-input
              id="exampleInput1"
              type="text"
              :value="JSON.parse(officeInfo.content).long"
              required
              placeholder="Longitude" />
          </b-form-group>
        </b-col>
      </b-row>
    </b-form-group>

    <b-row>
      <b-col sm="6">
        <b-form-group label="Telephone Number:">
          <b-form-input
            type="text"
            :value="JSON.parse(officeInfo.content).tel"
            required
            placeholder="Tel" />
        </b-form-group>
      </b-col>

      <b-col sm="6">
        <b-form-group
          label="Fax Number:"
        >
          <b-form-input
            type="text"
            :value="JSON.parse(officeInfo.content).fax"
            required
            placeholder="Fax" />
        </b-form-group>
      </b-col>
    </b-row>


    <b-row>
      <b-col>
        <b-form-group
          id="exampleInputGroup1"
          label="Address:"
          label-for="exampleInput1"
        >
          <b-form-textarea
            id="textarea"
            :value="JSON.parse(officeInfo.content).address"
            required
            placeholder="Enter Address..."
            rows="3"
            max-rows="6"
          />
        </b-form-group>
      </b-col>
    </b-row>

    <b-button type="submit" variant="primary" class="mr-1">Submit</b-button>
    <b-button type="reset" variant="danger">Reset</b-button>
  </b-form>
</template>

<script>
  //import BRow from "bootstrap-vue/src/components/layout/row";
  //import BCol from "bootstrap-vue/src/components/layout/col";
  export default {
    name: "UpdateOffice",

    props: ['officeInfo'],

    data() {
      return {
        form: {
          title: '',
          lat: '',
          long: '',
          address: '',
          tel: '',
          fax: ''
        },
        show: true,
      }
    },

    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        /* Reset our form values */
        this.form.title = ''
        this.form.lat = ''
        this.form.long = ''
        this.form.address = ''
        this.form.tel = ''
        this.form.fax = ''
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

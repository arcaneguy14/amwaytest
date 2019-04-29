<template>
  <b-form action="#">
    <b-card>
      <h5 class="mb-3 text-uppercase text-grey">Announcement</h5>
      <b-row>
        <b-col md="12">
          <b-row>
            <b-col>
              <b-form-group>
                <b-input-group>
                  <b-dropdown slot="prepend" text="Select Topic">
                    <b-dropdown-item>Guest</b-dropdown-item>
                    <b-dropdown-item>User</b-dropdown-item>
                    <b-dropdown-item>Staff</b-dropdown-item>
                    <b-dropdown-item>Admin</b-dropdown-item>
                  </b-dropdown>
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h6 class="mb-3 text-uppercase text-grey">Notification</h6>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group>
                <b-input-group size="md">
                  <b-input-group-prepend><b-input-group-text style="width: 35px;"><i class="fa fa-user"></i></b-input-group-text></b-input-group-prepend>
                  <b-form-input
                    type="text"
                    v-model="form.title"
                    required
                    placeholder="Title" />
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group>
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Enter Description..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group>
                <b-input-group size="md">
                  <b-input-group-prepend><b-input-group-text style="width: 35px;"><i class="fa fa-sticky-note"></i></b-input-group-text></b-input-group-prepend>
                  <b-form-input
                    type="text"
                    v-model="form.topic"
                    required
                    placeholder="Topic" />
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
          <hr/>
          <b-row>
            <b-col>
              <b-form-group>
                <b-button variant="outline-primary">With Payload +</b-button>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h6 class="mb-3 text-uppercase text-grey">Payload</h6>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-table hover :items="items" :fields="fields">
                <template slot="key" slot-scope="row">
                  <b-form-input></b-form-input>
                </template>
                <template slot="value" slot-scope="row">
                  <b-form-input></b-form-input>
                </template>
              </b-table>
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
    export default {
      name: "Announcement",

      data(){
        return{
          form:{
            title: '',
            description: '',
            topic: '',
          },
          lastLogged: '25/4/2019',
          id: 'main',

          fields: [
            {key: 'key', label: 'Key',},
            {key: 'value', label: 'Value'},
            {key: 'add', label: '+'}
          ],

          items:[{id: 1},{id: 2},{id: 3}]
        }
      },
    }
</script>

<style scoped>

</style>

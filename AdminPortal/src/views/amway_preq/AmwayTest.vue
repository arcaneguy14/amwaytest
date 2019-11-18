<template>
  <b-form action="#">
    <b-card>
      <h5 class="mb-3 text-uppercase text-grey">Test</h5>
      <b-row>
        <b-col md="12">
          <b-row>
            <b-col>
              <b-form-group>
                <b-form-select v-model="selected" :options="options"></b-form-select>

              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="3" v-for="item in products" :key="item.id">
              <b-card
                :title="item.name"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  RM {{item.price}}
                </b-card-text>

                <b-button variant="primary" @click="add(item.id, item.name, item.price)" :key="item.id">Add to Cart</b-button>
              </b-card>
            </b-col>
          </b-row>
          <b-row class="mt-2">
            <b-col>
              <b-table striped hover :items="items" :fields="fields"></b-table>
            </b-col>
          </b-row>
          <b-row class="mt-2">
            <b-col offset="6" class="text-right">
              <span><h5><b>Total: RM {{sum}}</b></h5></span>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card>
  </b-form>
</template>

<script>
  import rules from './rules'

  export default {
    name: "AmwayTest",

    data(){
      return{
        selected: '0',

        options: [
          { value: '0', text: 'Please select User Type' },
          { value: '1', text: 'Diamond' },
          { value: '2', text: 'Platinum' },
          { value: '3', text: 'Associate' }
        ],

        products: [
          {id: 1, name: 'Kone', price: 3488.99},
          {id: 2, name: 'Ironhide', price: 3299.99},
          {id: 3, name: 'Ironhide Cartridge', price: 529.99},
          {id: 4, name: 'Fox + Float', price: 66.00},
          {id: 5, name: 'Shimano+ Derailuer', price: 67.60},
          {id: 6, name: 'SANTA CRUZ', price: 185.50}
        ],

        fields: ['name', 'price'],
        items: [],

        total: ''
      }
    },

    methods: {
      add(id, name, price){
        if (this.selected == rules[this.selected-1].value)
        {
          this.items.push({id: id, name: name, price: price});

          var dupe = this.items.filter(function (item) {
            return item.id === id;
          });

          //no special offer, default discount
          if (rules[this.selected-1].special[id-1].offer == ''){
            var userprice = this.products.find(item2 => item2.id == id);

            this.items.forEach(item1 => {
              var itemFromArr2 = dupe.find(item2 => item2.id == item1.id);

              if (itemFromArr2) {
                const p = userprice.price - (userprice.price * rules[this.selected-1].discount / 100);
                item1.price = p;
              }
            }
            )
          }


          //if there is special offer, otherwise use standard discount based on user type
          if (rules[this.selected-1].special[id-1].offer != ''){
            //rule 1 checker
            if (rules[this.selected-1].special[id-1].offer.indexOf(',') > -1) {
              let countdupe = rules[this.selected-1].special[id-1].offer.split(',')[0];
              let discprice = rules[this.selected-1].special[id-1].offer.split(',')[1];

              if (dupe.length >= countdupe){
                this.items.forEach(item1 => {
                    var itemFromArr2 = dupe.find(item2 => item2.id == item1.id);

                    if (itemFromArr2) {
                      item1.price = discprice;
                    }
                  }
                )
              }

              //revert to default discount
              else{
                this.items.forEach(item1 => {
                    var itemFromArr2 = dupe.find(item2 => item2.id == item1.id);

                    if (itemFromArr2) {
                      item1.price = price - (price * rules[this.selected-1].discount / 100);
                    }
                  }
                )
              }
            }

            //rule 3 checker
            if (rules[this.selected-1].special[id-1].offer.indexOf(' for ') > -1) {
              let countdupe = rules[this.selected-1].special[id-1].offer.split(' for ')[0];
              let discitem = rules[this.selected-1].special[id-1].offer.split(' for ')[1];

              if (dupe.length % countdupe == 0){
                this.items.forEach(item1 => {
                    var itemFromArr2 = dupe.find(item2 => item2.id == item1.id);

                    if (itemFromArr2) {
                      item1.price = price * discitem / countdupe;
                    }
                  }
                )
              }

              //revert to default discount
              else{
                this.items.forEach(item1 => {
                    var itemFromArr2 = dupe.find(item2 => item2.id == item1.id);

                    if (itemFromArr2) {
                      item1.price = price - (price * rules[this.selected-1].discount / 100);
                    }
                  }
                )
              }
            }

            //rule 2 checker
            if (rules[this.selected-1].special[id-1].offer.indexOf(' ') == -1) {
              let newprice = rules[this.selected-1].special[id-1].offer;

                this.items.forEach(item1 => {
                    var itemFromArr2 = dupe.find(item2 => item2.id == item1.id);
                    if (itemFromArr2) {
                      item1.price = newprice;
                    }
                  }
                )
            }
          }
        }
      }
    },

    computed: {
      sum(){
        var s = this.items.reduce(function (sum, item) {
          return Number(sum) + Number(item.price);
        }, 0);

        return s.toFixed(2);
      }
    }
  }
</script>

<style scoped>

</style>

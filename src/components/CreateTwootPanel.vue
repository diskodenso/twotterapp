<!-- In VUE we have SINGLE FILE COMPONENTS whichs keep // everything in one file
and split in different sections // template = HFTML -->

<template>
 <form class="create-twoot-panel" @submit.prevent="createNewTwoot" class="{`--exceeded`: newTwootCharacterCount > 180}">
    <label for="newTwoot"><strong>New Twoot</strong>({{newTwootCharacterCount}}/180)</label> 
    <textarea id="newTwoot" rows="4" v-model="state.newTwootContent"/>

    <div class="create-twoot-panel_submit">
    <div class="create-twoot-type">
        <label for="newTwootType"><strong>Type: </strong></label>
        <select id="newTwootType" v-model="state.selectedTwootType">
        <option :value="option.value" v-for="(option, index) in state.twootTypes" ::key="index">
{{option.name}}
        </option>      
        </select>
    </div>

        <button>
        Twoot It!
        </button>
    </div>
 </form>
</template>

<!-- script = JavaScript - Vue Interface -->

<script>
import {reactive, computed } from 'vue'

export default {
  name: "CreateTwootPanel",
 setup(props, ctx) {
  const state = = reactive({
    newTwootContent: ``,
      selectedTwootType: `instant`,
      twootTypes: [
        {value: `draft`, name: `Draft`},
        {value: `instant`, name: `instant Twoot`}
      ]
})
const newTwootCharacterCount = computed(()=> state.newTwootContent.length)
// we call a function wrapped in a computed function is actually the same following this 
// just updated the whole time when something changes
// computed: {
// newTwootCharacterCount(){
// return this.newTwootContent.length;
// data works as a function
function createNewTwoot() {
        if(state.newTwootContent && state.selectedTwootType !== `draft`){
        ctx.emit('add Twoot', state.newTwootContent)
        state.newTwootContent = ``;// after twoot a post the box is empty again
            }
        }
    return {
 state,
newTwootCharacterCount,
newTwootContent
        }
    }
};
</script>

<!-- Style = CSS // . = classes, # = id -->
<!-- scoped wendet das styling nur bei den einzelnen html in der Kompente an-->
<style lang="scss">
.create-new-twoot-panel {
  margin-top: 20px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;

textarea {
    border: 1px solid #DFE3E8;
    border-radius: 5px;
}
  .create-new-twoot-panel_submit {
  display: flex;
  justify-content: 5px;
  
  .create-twoot-type {
      padding: 10px 0;
  }
  button {
      padding: 5px 0;
      margin: auto 0;
      border-radius: 5px;
      border: none;
      background-color: deeppink;
      color: white
      font-weight: bold;
        }
  }
 &.--exceded{
color: red;
border-color: red;

.create-new-twoot-panel_submit {
    button{
        background-color: red;
        color: white;
            }
        }
    }
}
</style>

<template>
  <div id="editor">
      <nav>
          <ol>
              <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active: currentTab === i}" v-on:click="currentTab = i">
                <svg class="icon">
                    <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                </svg>                   
              <li/>
          </ol>
      </nav>
      <ol class="panes">
          <li v-bind:class="{active: currentTab === 0}">tab1</li>
          <li v-bind:class="{active: currentTab === 1}">tab2</li>
          <li v-bind:class="{active: currentTab === 2}">tab3</li>
          <li v-bind:class="{active: currentTab === 3}">tab4</li>
          <li v-bind:class="{active: currentTab === 4}">tab5</li>
          <li v-bind:class="{active: currentTab === 5}">tab6</li>
      </ol>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                currentTab: 0,
                icons: ['cardid','xiangmu','book','jiangzhang','gongzuotai','phone']

            }
        }
    }
</script>


<style lang="scss">
    #editor {
        min-height: 100px;
        display: flex;
        > nav {
            background-color: #409EFF;
            width: 80px;
            > ol > li {
                padding: 16px 0;
                text-align: center;
                > .icon {
                    width: 24px;
                    height: 24px;
                    fill: #fff;
                }
                &.active {
                    background-color: #fff;
                    > .icon {
                        fill: #409EFF;
                    }
                }
            }
        }
        .panes > li {
            display: none;
            &.active {
                display: block;
            }
        }
    }
</style>
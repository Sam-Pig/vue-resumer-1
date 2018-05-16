<template>
  <div id="app" v-bind:class="{previewMode: previewMode}">
    <Topbar v-on:preview="preview" class="topbar"/>
    <main>
      <Editor v-bind:resume="resume" class="editor"/>
      <Preview v-bind:resume="resume" class="preview"/>   
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
  data() {
    return{
      previewMode: false,
      resume:{
        profile: {name: '', city: '', birth: ''},
        workHistory: [{company:'', operatingPost:'', content:'', duration:''}],
        studyHistory: [{university:'', degree:'', duration:''}],
        projects: [{name:'', content:''}],
        awards: [{name:'', content:''}],
        contacts: {phone:'', qq:'', wechat:'', email:''}       
      }
    }
  },
  methods: {
    preview(){
      this.previewMode = true
    },
    exitPreview(){
      this.previewMode = false
    }
  },
  components: {
    Topbar,
    Editor,
    Preview
  }
}
</script>

<style lang="scss">
  .icon {
      width: 1em; height: 1em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .topbar {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 3px hsla(0,0,0,0.5);
  }
  main {
    display: flex;
    flex: 1;
    background-color: #DDD;
    > .editor {
      width: 40em;
      margin: 16px 8px 16px 16px;
      background-color: #fff;
      box-shadow: 0 0 3px hsla(0,0,0,0.5);
      border-radius: 5px;
      overflow: hidden;
    }
    > .preview {
      flex: 1;
      margin: 16px 16px 16px 8px;
      background-color: #fff;
      box-shadow: 0 0 3px hsla(0,0,0,0.5);
      border-radius: 5px;
      overflow: hidden;
    }
  }
  #exitPreview {
    display: none;
  }
  .previewMode > #topbar {
    display: none;
  }
  .previewMode #editor {
    display: none;
  }
  .previewMode #preview {
    max-width: 800px;
    margin: 32px auto 0;
    border-radius: 0;
  }
  .previewMode > #exitPreview {
    display: inline-block;
    position: fixed;
    right: 32px;
    bottom: 32px;
  }

</style>

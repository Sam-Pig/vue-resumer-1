<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>   
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'

export default {
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
</style>

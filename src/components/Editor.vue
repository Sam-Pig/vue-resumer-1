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
          <li v-bind:class="{active: currentTab === 0}">
              <ProfileEditor v-bind:profile="resume.profile"/>
          </li>
          <li v-bind:class="{active: currentTab === 1}">
              <ArrayEditor v-bind:items="resume.workHistory" v-bind:labels="{company:'单位名称',operatingPost:'工作岗位',content:'工作内容',duration:'在职时间段'}" v-bind:title="'工作经历'"/>
          </li>
          <li v-bind:class="{active: currentTab === 2}">
              <ArrayEditor v-bind:items="resume.studyHistory" v-bind:labels="{university:'毕业院校', degree:'学位', duration:'在校时间段'}" v-bind:title="'学习经历'"/>
          </li>
          <li v-bind:class="{active: currentTab === 3}">
              <ArrayEditor v-bind:items="resume.projects" v-bind:labels="{name:'项目名称', content:'项目简介'}" v-bind:title="'项目经历'"/>
          </li>
          <li v-bind:class="{active: currentTab === 4}">
              <ArrayEditor v-bind:items="resume.awards" v-bind:labels="{name:'奖项名称', content:'奖项简介'}" v-bind:title="'获奖情况'"/>
          </li>
          <li v-bind:class="{active: currentTab === 5}">
              <ContactEditor v-bind:contacts="resume.contacts"/>
          </li>                                        
      </ol>
  </div>
</template>

<script>
    import ProfileEditor from './ProfileEditor'
    import ArrayEditor from './ArrayEditor'
    import ContactEditor from './ContactEditor'
    export default {
        props: ['resume'],
        components: {
            ProfileEditor,
            ArrayEditor,
            ContactEditor
        },
        data(){
            return {
                currentTab: 0,
                icons: ['cardid','gongzuotai','book','xiangmu','jiangzhang','phone'],

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
                cursor: pointer;
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
        .panes {
            padding: 16px;
            flex: 1;
            .container {
                padding: 16px;
                box-shadow: 0 0 5px rgba(64,158,255,0.5);
                border-radius: 4px;
                position: relative;
                margin: 8px 0;
                .el-icon-error {
                    position: absolute;
                    right: 8px;
                    top: 8px;
                    cursor: pointer;
                }
            }
            > li {
                display: none;
                padding: 16px;
                height: 100%;
                overflow: auto;
                &.active {
                    display: block;
                }
                > h2 {
                    margin-bottom: 8px;
                }
            }
        }
    }
</style>
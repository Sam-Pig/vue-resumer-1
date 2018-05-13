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
              <information v-bind:profile="profile"/>
          </li>
          <li v-bind:class="{active: currentTab === 1}">
              <h2>工作经历</h2>
              <el-form>
                <div class="container" v-for="(work, index) in workHistory">
                    <i class="el-icon-error" v-on:click="removeWorkHistory(index)"></i>
                    <el-form-item label="公司">
                        <el-input v-model="work.company"></el-input>
                    </el-form-item>
                    <el-form-item label="工作内容">
                        <el-input v-model="work.content"></el-input>
                    </el-form-item>
                </div>
                <el-button type="primary" v-on:click="addWorkHistory">添加</el-button>       
              </el-form>                           
          </li>
          <li v-bind:class="{active: currentTab === 2}">
              <h2>学习经历</h2>
          </li>
          <li v-bind:class="{active: currentTab === 3}">
              <h2>项目经历</h2>
          </li>
          <li v-bind:class="{active: currentTab === 4}">
              <h2>获奖情况</h2>
          </li>
          <li v-bind:class="{active: currentTab === 5}">
              <h2>联系方式</h2>
          </li>                                        
      </ol>
  </div>
</template>

<script>
    import information from './information'
    export default {
        data(){
            return {
                currentTab: 0,
                icons: ['cardid','gongzuotai','book','xiangmu','jiangzhang','phone'],
                profile: {
                    name: '',
                    city: '',
                    birth: ''
                },
                workHistory: [
                    {company:'',content:''}
                ]
            }
        },
        methods:{
            addWorkHistory(){
                this.workHistory.push({
                    company:'', content:''
                })
            },
            removeWorkHistory(index){
                this.workHistory.splice(index,1)
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
                position: relative;
                margin: 8px 0;
                .el-icon-error {
                    position: absolute;
                    right: 8px;
                    top: 8px;
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
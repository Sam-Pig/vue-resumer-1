<template>
  <div id="preview">
      <h1>{{resume.profile.name || '请填写姓名'}}</h1>
      <p>{{resume.profile.city || '请填写户籍'}} | {{resume.profile.birth || '请填写出生年月'}}</p>
      <hr>
      <section v-if="resume.projects.length >  0">
          <h2>项目经历</h2>
          <ul>
              <li v-for="project in filter(resume.projects)">
                  {{project.name}}
                  {{project.content}}
              </li>
          </ul>
      </section>
      <hr>
      <section v-if="resume.workHistory.length >  0">
          <h2>工作经历</h2>
          <ul>
              <li v-for="work in filter(resume.workHistory)">
                  {{work.company}}
                  {{work.operatingPost}}
                  {{work.content}}
                  {{work.duration}}
              </li>
          </ul>
      </section>
  </div>
</template>

<script>
    export default {
        props: ['resume'],
        methods: {
            filter(array){ //找出非空对象
                return array.filter(item=> !this.isEmpty(item))
            },
            isEmpty(object){ //只有一个value不是falsy,就返回false
                let empty = true
                for(let key in object){
                    if(object[key]){
                        empty = false
                        break
                    }
                }
                return empty
            }
        }
    }
</script>


<style>
    #preview {
        min-height: 100px;
    }
</style>
<template>
  <div>
    <h2>{{title}}</h2>
    <el-form>
    <div class="container" v-for="(item, index) in items" v-bind:key="index">
        <i class="el-icon-error" v-on:click="removeItems(index)"></i>
        <el-form-item v-for="key in keys" v-bind:label="labels[key]" v-bind:key="key">
            <el-input v-model="item[key]"></el-input>
        </el-form-item>
    </div>
    <el-button type="primary" v-on:click="addItems">添加一项</el-button>  
    </el-form>   
  </div>
</template>

<script>
    export default {
        props: ['items','labels','title'],
        computed: {
            keys(){
                return Object.keys(this.items[0])
            }
        },
        methods: {
            addItems(){
                const empty = {}
                this.keys.map((key)=>{
                    empty[key] = ''
                })
                this.items.push(empty)
            },
            removeItems(index){
                this.items.splice(index,1)
            }           
        }
    }
</script>
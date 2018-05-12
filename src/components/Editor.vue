<template>
  <div id="editor">
      <nav>
          <ol>
              <li>
                <svg class="icon">
                    <use xlink:href="#icon-cardid"></use>
                </svg>
              </li>
              <li>
                <svg class="icon">
                    <use xlink:href="#icon-xiangmu"></use>
                </svg>                 
              </li>
              <li>
                <svg class="icon">
                    <use xlink:href="#icon-book"></use>
                </svg>                 
              </li>
              <li>
                <svg class="icon">
                    <use xlink:href="#icon-jiangzhang"></use>
                </svg>                 
              </li>
              <li>
                <svg class="icon">
                    <use xlink:href="#icon-gongzuotai"></use>
                </svg>                  
              </li>
              <li>
                <svg class="icon">
                    <use xlink:href="#icon-phone"></use>
                </svg>                 
              </li>
              <li>
                <svg class="icon">
                    <use xlink:href="#icon-phone"></use>
                </svg>                 
              </li>
          </ol>
      </nav>
      <ol class="panes"></ol>
  </div>
</template>

<style lang="scss">
    #editor {
        min-height: 100px;
        display: flex;
        > nav {
            background-color: #409EFF;
            width: 80px;
            > ol > li {
                border: 1px solid #fff;
                padding: 8px 0;
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
    }
</style>
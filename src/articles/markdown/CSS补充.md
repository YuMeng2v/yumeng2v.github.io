# 伪类
    伪类用于当已有元素处于某个状态时，为其添加对应的样式

### 示例
    .block:hover{
        .in_block{
            width:100px
        }
    }
    .input_tag:focus{
        border: 2px #fff
    }
    tr:nth-of-type(2n) {
        background: #faa;
    }

# 伪元素
    伪元素创建一些不在文档树中的元素，为其添加样式，可以看到，但是并不在文档树中
    MDN：伪元素开头为双冒号
    //常见
    ::before  ::after
    //伪元素内容设置：使用content
    //获取原本element的属性
    p::before{
        content: attr(data-content)
    }
    //添加到标签的伪元素，也会触发：hover等伪类

## 汇总
### 常见
https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements

# 布局：三列布局与两列布局
## 两列布局
*   左列定宽，右列自适应
*   左列不定宽，右列自适应

## 三列布局
*   左两列定宽，最右一列自适应
*   左右定宽，中间自适应
*   双飞翼
## 两列布局
### 左列定宽，右列自适应
*   float + margin
*   float + overflow
    *   转化为BFC
    *   BFC不与float重叠
*   绝对定位
*   flex布局
*   table布局
*   grid 布局
    * 父元素display为grid，并设置两个子grid 宽度 auto
### 左列不定宽，右列自适应
*   float + overflow
*   flex布局
*   grid 布局

## 三列布局
### 左边两列定宽，右边自适应
*   float + float + margin
*   float + float + BFC
*   table布局
    *   父元素display为table
    *   子元素display为table-cell
    *   左边两个子元素指定width
*   flex布局
*   grid布局
### 左右定宽，中间自适应
*   双飞翼布局
    *   
*   flex实现
    *   left order: -1
    *   right flex: 0 0 200px(width)
    *   center: flex: 1
*   flex后面的三个参数
    *   flex-grow: 项目的放大比例
    *   flex-shrink: 项目的缩小比例
    *   flex-basis: 项目占据主轴空间（main - size）


 
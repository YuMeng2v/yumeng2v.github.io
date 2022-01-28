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
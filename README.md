spliter-html
==============

### BADDASS library to split html elements in contentEditable

## Result

from:

```
<div>
<img src="https://picsum.photos/200/300">
</div>

```

to:

```
<div></div>
<img src="https://picsum.photos/200/300">
<div></div>
```

### How to use

```
spliterHtml(fromElement,toElement);
```

fromElement must be child of toElement

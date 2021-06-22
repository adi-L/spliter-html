spliter-html
==============

### BADDASS library to split html elements in contentEditable

#### [with] is the selected and will change from font-size from 14px to 20px

## Result

from:

```
<p>
<span style="font-size:14px;">
some text [with] font size
</span>
</p>
```

to:

```
<p>
<span style="font-size:14px;">some text</span>
<span style="font-size:20px;"> with</span>
<span style="font-size:14px;">font size</span>
</p>
```

### How to use

```
spliterHtml(fromElement,toElement);
```

fromElement must be child of toElement
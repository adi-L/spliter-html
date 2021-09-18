spliter-html
==============

### library to split html elements in contentEditable

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

Works for rich text editors

from:

```
<p>
<span style="font-size:14px">Feel free to open [issues on] Github.</span>
</p>

```

to:

```
<p>
<span style="font-size:14px">Feel free to open </span>
<span style="font-size:20px">issues on</span>
<span style="font-size:14px"> Github.</span>
</p>
```

### How to use

```
spliterHtml(fromElement,toElement);
```

* fromElement must be child of toElement.

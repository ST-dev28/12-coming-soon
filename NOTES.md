```html
<ul>
  <li>labas</li>
  <li>labas</li>
  <li>labas</li>
  <li>labas</li>
</ul>
```

```css
ul {
  list-style: none;
  float: left;
  font-size: 20px;
  line-height: 1.7em;
  margin-top: 10px;
}
ul > li::before {
  display: inline-block;
  background-image: url(../img/check.png);
  content: '';
  object-fit: contain;
  height: 20px;
  width: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  margin-right: 10px;
  vertical-align: middle;
}
```

```html
<h1 class="main-title labas">Maryte</h1>
```

```css
.labas::before {
  display: inline-block;
  content: 'Labas,';
  margin-right: 10px;
}

.labas::after {
  display: inline-block;
  content: '!';
}
```

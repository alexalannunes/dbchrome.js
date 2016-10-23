# dbchrome.js
mini-db using localStorage and sessionStorage of Google Chrome

********************************************

# Versão
### 1.3.2

# Primeiro de Tudo
### A função <code>isChrome()</code> é iniciada automaticamente para verificar se o browser atual é o Google Chrome
```javascript
if($.isChrome()) {
	/* Limpa localStorage e o sessionStorage */
	$.ls.cls();
	$.ss.cls();
}
else {
	/* redireciona para a pagina de download do Google Chrome */
	top.location.href = "https://www.google.com.br/chrome/browser/desktop/";
	throw "Voce deve usar o Google Chrome";
}
```

# Uso
<code>db.ls</code> - <span>LocalStorage</span> | <code>db.ss</code> - <span>SessionStorage</span>

###LocalStorage <code>db.ls</code>
#### set
```javascript
  db.ls.set(key, val);      key: string, val: string
```

#### get
```javascript
  db.ls.get(key);      key: string
```

#### remove
```javascript
  db.ls.remove(key);      key: string
```

#### update
```javascript
  db.ls.update(key, newv);      key: string, newv: string
```

**********************************************

###SessionStorage <code>db.ss</code>
#### set
```javascript
  db.ss.set(key, val);      key: string, val: string
```

#### get
```javascript
  db.ss.get(key);      key: string
```

#### remove
```javascript
  db.ss.remove(key);      key: string
```

#### update
```javascript
  db.ss.update(key, newv);      key: string, newv: string
```

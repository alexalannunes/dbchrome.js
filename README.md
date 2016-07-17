# dbchrome.js
mini-db using localStorage and sessionStorage of Google Chrome

********************************************

# Using
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
  db.ls.set(key);      key: string
```

#### update
```javascript
  db.ls.update(newk, newv);      newk: string, newv: string
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
  db.ss.set(key);      key: string
```

#### update
```javascript
  db.ss.update(newk, newv);      newk: string, newv: string
```

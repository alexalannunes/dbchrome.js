const { localStorage: l, sessionStorage: s } = window;
const ls = {};
const ss = {};


ls.set = ls_get;
ls.get = ls_get;
ls.update = ls_update;
ls.remove = ls_remove;

ss.set = ss_get;
ss.get = ss_get;
ss.update = ss_update;
ss.remove = ss_remove;


function ls_set(key, value) {

  value = (typeof value === 'object') ? JSON.parse(value) : value;
  l.setItem(key, value);

}

function ls_get(key) {

  if (l[key]) {

    return (typeof key === 'string') ? l[key] : console.error('{key} isn\'t string');
  }
  else {

    throw "{key} was not found"
  }

}

function ls_update(key, value) {
  if (l[key]) {

    set(key, value);

  }
  else {

    throw "{key} was not found"

  }
}


function ls_remove(key) {
  if (l[key]) {

    l.removeItem(key);

  }
  else {

    throw "{key} was not found"

  }
}



function ss_set(key, value) {

  value = (typeof value === 'object') ? JSON.parse(value) : value;
  s.setItem(key, value);

}

function ss_get(key) {

  if (s[key]) {

    return (typeof key === 'string') ? s[key] : console.error('{key} isn\'t string');
  }
  else {

    throw "{key} was not found"
  }

}

function ss_update(key, value) {
  if (s[key]) {

    set(key, value);

  }
  else {

    throw "{key} was not found"

  }
}


function ss_remove(key) {
  if (s[key]) {

    s.removeItem(key);

  }
  else {

    throw "{key} was not found"

  }
}
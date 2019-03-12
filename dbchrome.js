const { localStorage: l, sessionStorage: s } = window;
const ls = {};
const ss = {};


ls.set = ls_set;
ls.get = ls_get;
ls.update = ls_update;
ls.remove = ls_remove;

ss.set = ss_set;
ss.get = ss_get;
ss.update = ss_update;
ss.remove = ss_remove;


function ls_set(key, value) {

  value = (typeof value === 'object') ? JSON.stringify(value) : value;
  l.setItem(key, value);

}

function ls_get(key) {

  if (l[key]) {

    return (typeof key === 'string') ? ((l[key].indexOf('{') !== -1) ? JSON.parse(l[key]) : l[key]) : console.error('{key} isn\'t string');

  }
  else {

    throw "{key} was not found"
  }

}

function ls_update(key, value) {
  if (l[key]) {

    ls_set(key, value);

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

  value = (typeof value === 'object') ? JSON.stringify(value) : value;
  s.setItem(key, value);

}

function ss_get(key) {

  if (s[key]) {

    return (typeof key === 'string') ? ((s[key].indexOf('{') !== -1) ? JSON.parse(s[key]) : s[key]) : console.error('{key} isn\'t string');

  }
  else {

    throw "{key} was not found"
  }

}

function ss_update(key, value) {
  if (s[key]) {

    ss_set(key, value);

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
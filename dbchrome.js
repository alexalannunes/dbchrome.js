/* ******************************************************************************
 * Alex Alan Nunes
 * 17/07/2016 - 17:07
 * v1.2.1
 * ******************************************************************************
 * LICENSE
 * ==============================================================================
 * This is free and unencumbered software released into the public domain.

  Anyone is free to copy, modify, publish, use, compile, sell, or
  distribute this software, either in source code form or as a compiled
  binary, for any purpose, commercial or non-commercial, and by any
  means.

  In jurisdictions that recognize copyright laws, the author or authors
  of this software dedicate any and all copyright interest in the
  software to the public domain. We make this dedication for the benefit
  of the public at large and to the detriment of our heirs and
  successors. We intend this dedication to be an overt act of
  relinquishment in perpetuity of all present and future rights to this
  software under copyright law.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
  OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
  ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  OTHER DEALINGS IN THE SOFTWARE.

  For more information, please refer to <http://unlicense.org>
 * ******************************************************************************/


/**
 * ini object
 */
var db = db || {};
db = {
	/**
	 * verifica se o browser é o Google Chrome */
	 isChrome: function() {
	 	if(navigator.userAgent.indexOf("Chrome") === -1) {
	 		return false;
	 	}
	 	else {
	 		return true;
	 	}
	 }
}
/*************************
 * LocalStorage		 |
 ************************/
db.ls = {
	/**
	 * Limpa o localStorage caso tenha itens */
	cls: function() {
		localStorage.clear();
	},
	/**
	 * @param key {string} nome da chave
	 * @param val {string} valor da chave */
	set: function(key, val) {
		window.localStorage.setItem(key, val);
	},
	/**
	 * @param key {string} nome da chave
	 * @return {string} retorna item buscado */
	get: function(key) {
		return window.localStorage.getItem(key);
	},
	/**
	 * @param key {string} nome da chave */
	remove: function(key) {
		window.localStorage.removeItem(key);
	},
	/**
	 * @param key {string} nome da chave
	 * @param newv {string} novo valor da chave */
	update: function(key, newv) {
		window.localStorage.setItem(key, newv);
	}
};
/*************************
 * SessionStorage	 |
 ************************/
db.ss = {

	/**
	 * Limpa o localStorage caso tenha itens */
	cls: function() {
		sessionStorage.clear();
	},
	/**
	 * @param key {string} nome da chave
	 * @param val {string} valor da chave */
	set: function(key, val) {
		window.sessionStorage.setItem(key, val);
	},
	/**
	 * @param key {string} bome da chave
	 * @return {string} retorna item buscado */
	get: function(key) {
		return window.sessionStorage.getItem(key);
	},
	/**
	 * @param key {string} nome da chave */
	remove: function(key) {
		window.sessionStorage.removeItem(key);
	},
	/**
	 * @param key {string} nome da chave
	 * @param newv {string} novo valor da chave */
	update: function(key, newv) {
		window.sessionStorage.setItem(key, newv);
	}
};
/*
 * definindo db no objeto criado $
 * caso esteja usando jQuery
 * comente esta linha
 */
window.$ = db;

if($.isChrome()) {
	/* Limpa localStorage e o sessionStorage */
	$.ls.cls();
	$.ss.cls();
}
else {
	throw "Voce deve usar o Google Chrome";
	top.location.href="https://www.google.com.br/chrome/browser/desktop/";
}

/* retorna undefined */
undefined;

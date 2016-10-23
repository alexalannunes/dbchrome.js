/* ******************************************************************************
 * Alex Alan Nunes
 * 17/07/2016 - 17:07
 * v1.5.1

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
		if(window.localStorage.getItem(key) === null) {
			throw "'" + key + "' não existe";
		}
		else {
			return window.localStorage.getItem(key);
		}
	},
	/**
	 * @param key {string} nome da chave */
	remove: function(key) {
		if(window.localStorage.removeItem(key) === undefined) {
			window.localStorage.removeItem(key);
			return 1;
		}
		else {
			throw "'" + key + "' não existe";
		}
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
		if(window.sessionStorage.getItem(key) === null) {
			throw "'" + key + "' não existe";
		} 
		else {
			return window.sessionStorage.getItem(key);
		}
	},
	/**
	 * @param key {string} nome da chave */
	remove: function(key) {
		if(window.sessionStorage.removeItem(key) === undefined) {
			window.sessionStorage.removeItem(key);
			return 1;
		}
		else {
			throw "'" + key + "' não existe";
		}
	},
	/**
	 * @param key {string} nome da chave
	 * @param newv {string} novo valor da chave */
	update: function(key, newv) {
		window.sessionStorage.setItem(key, newv);
	}
};
/*
 * definindo db no objeto $ */
window.$ = db;

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

/* retorna undefined */
undefined;

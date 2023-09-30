// app.js

// Import module geometry.js
const geometry = require('./geometry');

// Menggunakan fungsi-fungsi dari module
const sisiPersegi = 5;
const panjangPersegiPanjang = 6;
const lebarPersegiPanjang = 4;

const luasPersegi = geometry.hitungLuasPersegi(sisiPersegi);
const kelilingPersegi = geometry.hitungKelilingPersegi(sisiPersegi);
const luasPersegiPanjang = geometry.hitungLuasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);
const kelilingPersegiPanjang = geometry.hitungKelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang);

console.log(`Luas Persegi: ${luasPersegi}`);
console.log(`Keliling Persegi: ${kelilingPersegi}`);
console.log(`Luas Persegi Panjang: ${luasPersegiPanjang}`);
console.log(`Keliling Persegi Panjang: ${kelilingPersegiPanjang}`);

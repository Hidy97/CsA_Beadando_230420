import { tablazatbanMegjelenit } from "./public.js";
import { OBJEKTUMLISTA } from "./adatok.js";

$(function () {
    const tablazat = $("#publictablazat");
    tablazatbanMegjelenit(OBJEKTUMLISTA, tablazat);
});
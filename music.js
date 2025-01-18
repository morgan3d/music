document.write(`
<style class="fallback">body{visibility:hidden}</style>
<style>
.chart p { display: inline-block; padding-left: 10px; padding-right: 10px }
/* Remove leading paragraph */
.chart p:first-child { display: none }

body { max-width: none }
.md code { white-space: pre-wrap}
body, .md a { font-family: Arial; color: #000 }
.md div.title { font-family: Palatino}

.md .tocHeader, .md h1, .md h2, .md h3, .md nonumberh1, .md nonumberh2 { font-family: Palatino; color: #000; text-align: left}
.md pre.tilde {font-size: 110%; background: #F8F8F0}
.md h1:before, .md h2:before, .md h3:before, .md h4:before { content: none; }
.md h1 {font-size: 140%; border-bottom: 2px solid #000}
.md h2 {font-size: 115%; border-bottom: none}

.md a, .md a:link, .md a:visited {color: #0A7}

.header, .footer {
 text-align: left;
 margin-left: -20px;
 padding-top: 6px;
 padding-bottom: 6px;
 padding-left: 20px;
 width: 100%;
 background: #0A7;
 cursor: pointer;
 user-select: none;
 color: #FFF; font-weight: bold; font-size: 20px;
 font-family: Palatino;
 border-bottom: 1px solid #000;
 position: absolute;
 top: 0px;
}

/* reserve space for header and footer */
body::before, body::after {
content: ' ';
height: 20px;
display: block;
}

</style>
<div class="header" onclick="location='index.html'"><span style="font-size: 200%; font-weight: normal; vertical-align: middle">𝄞</span> Morgan's Music Notes</div>
<script>markdeepOptions={tocStyle:'short'}</script>`);

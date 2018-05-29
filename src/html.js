export default `
    <!DOCTYPE html>
    <html lang="<script>//inject_lang</script>">
    <head>
        <base target="_self">

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
        <meta name="format-detection" content="email=no">
        <meta name="format-detection" content="address=no">
        <meta name="format-detection" content="telephone=no">
        <meta name="mobile-web-app-capable" content="yes">

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

        <meta name="renderer" content="webkit">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
        <meta name="copyright" content="Copyright (c) 2018 Super.js">

        <title><script>//inject_title</script></title>
        <script>//inject_metas</script>
        <style>
        body, html {
            margin: 0;
            padding: 0;
            font-family: Gotham-Book, HelveticaRegular, Helvetica, Verdana, Arial, Microsoft YaHei;
            font-size: 14px;
        }
        h1, h2, h3, h4, h5, h6 {
            margin: 0;
            font-weight: normal;
        }
        a {
            text-decoration: none;
        }
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }
        th, td {
            padding: 0;
        }
        p, ul {
            margin: 0;
            padding: 0;
        }
        .clear:after {
            content: '';
            display: block;
            clear: both;
            height: 0;
            overflow: hidden;
            visibility: hidden;
        }
        .clear {
            zoom: 1;
        }
        li {
            list-style: none;
        }
        a {
            list-style: none;
            text-decoration: none;
        }
        .tc {
            text-align: center;
        }
        button {
            outline: none;
        }
        a:hover,
        input:focus,
        button:focus,
        select:focus,
        textarea:focus {
            transition: all linear 0.4s;
        }
        </style>
        <script>//inject_css</script>
        <script>//inject_style</script>
    </head>
    <body>

        <div id="root"><script>//inject_react</script></div>

        <script>//inject_redux</script>
        <script>//inject_js</script>
        <script>//inject_js_locales</script>

    </body>
    </html>
`
